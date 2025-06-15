
const path = require("path");
const Contraindication = require("../../../models/Contraindication");
const Sideeffect = require("../../../models/SideEffect");
const { internalservereror, Successmessage } = require("../../../utils/Customerresponse");
const excelJS = require("exceljs");
const EnteryType = require("../../../models/EnteryType");
const Source = require("../../../models/SourceLink");
const Selectarea = require("../../../models/SelectArea");
const csvtoexcelconverter = require('csvtoxlsxconverter');

module.exports = {
  GetlistContradictionsDatabase: async (req, res) => {
    try {
      const { filter } = req.body;

      var ContradictionsDatabase = await Contraindication.aggregate([

        {
          $lookup: {
            from: "enterytype",
            localField: "entery_id",
            foreignField: "_id",
            as: "enterytype",
          }
        },

        { "$unwind": "$enterytype" }

        ,
        {
          "$sort": { "_id": -1 }
        },
        {
          $match: {

            $and: [
              filter?.title ? {
                title: { $regex: filter.title, $options: 'i' }
              } : {},
              filter?.enterytype ? {
                "enterytype.title": { $eq: filter.enterytype }
              } : {},
            ]
          },
        },])



      if (ContradictionsDatabase) {
        return Successmessage(res, 'Treatement list', ContradictionsDatabase)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }


    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
  AddContradictionsDatabase: async (req, res) => {
    try {



      if (req.body.formData[0].id != "" && req.body.formData[0].id != undefined) {

        var saveinformation = await Contraindication.findOneAndUpdate(
          { _id: req.body.formData[0].id },
          {
            $set: {
              title: req.body.formData['0'].title,
              description: req.body.formData[0].description,
              side_effect: req.body.formData[0].side_effect,
              entery_id: req.body.formData[0].entryType,
              link: req.body.formData[0].links,
              contraindication_advice: req.body.formData[0].contraindicationAdvice,
            },
          },
          { new: true } // to return the modified document
        );

      } else {




        var saveinformation = await Contraindication();
        saveinformation.title = req.body.formData['0'].title;
        saveinformation.description = req.body.formData[0].description;
        saveinformation.side_effect = req.body.formData[0].side_effect;
        saveinformation.entery_id = req.body.formData[0].entryType;
        saveinformation.link = req.body.formData[0].links;

        saveinformation.contraindication_advice = req.body.formData[0].contraindicationAdvice;
        await saveinformation.save();
      }
      if (saveinformation) {
        return Successmessage(res, 'Information Saved', saveinformation)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }

    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
  Getdetailscontaindication: async (req, res) => {
    try {
      var getinformation = await Contraindication.findById({
        _id: req.query.id
      }).populate(['contraindication_advice.area', 'link.source', 'entery_id']);

      if (getinformation) {
        return Successmessage(res, 'Inforamtion Containdication', getinformation)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }


    } catch (error) {
      return internalservereror(res, error)
    }
  },
  DeleteContraindication: async (req, res) => {
    try {

      var deleteinformation = await Contraindication.findByIdAndDelete({
        _id: req.query.id
      })

      if (deleteinformation) {
        return Successmessage(res, 'Inforamtion Deleted')
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }


    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
  AddSideeffect: async (req, res) => {
    try {
      var saveinformation
      if (req.body.id != undefined && req.body.id != "") {
        saveinformation = await Sideeffect.findByIdAndUpdate({
          _id: req.body.id
        }, {
          $set: {
            title: req.body.title
          }
        }, {
          new: true
        });
        if (saveinformation) {
          return Successmessage(res, 'Updated Successfully', saveinformation)
        } else {
          return Failuremessage(res, 'Oops! Something went wrong.')
        }
      } else {

        var getinform = await Sideeffect.findOne({}).sort({ s_id: -1 });

        saveinformation = await Sideeffect();
        saveinformation.title = req.body.title;
        saveinformation.s_id = getinform == null ? 1 : getinform.s_id + 1;
        saveinformation.save();

        if (saveinformation) {
          return Successmessage(res, 'Inforamtion Save', saveinformation)
        } else {
          return Failuremessage(res, 'Oops! Something went wrong.')
        }
      }




    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
  GetSideEffect: async (req, res) => {
    try {

      var listsideeffect = await Sideeffect.find({});

      if (listsideeffect) {
        return Successmessage(res, 'Sideeeffect list', listsideeffect)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }

    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
  Deletesideeffect: async (req, res) => {
    try {

      var deleteinformation = await Sideeffect.findByIdAndDelete({
        _id: req.query.id
      })

      if (deleteinformation) {
        return Successmessage(res, 'Inforamtion Deleted')
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }


    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
  exportContradictionDB: async (req, res) => {
    try {
      var data = await Contraindication.find({}).populate(['contraindication_advice.area', 'link.source', 'entery_id']);

      //EXCEL EXPORT CODE START
      const workbook = new excelJS.Workbook();
      const worksheet = workbook.addWorksheet("My Users");
      const path = "./files";

      worksheet.columns = [
        { header: "Title", key: "title", width: 24 },
        { header: "Type", key: "type", width: 24 },
        { header: "Used For", key: "userFor", width: 24 },
        { header: "Side Effects", key: "sideEffect", width: 24 },
        { header: "NHS Link", key: "nhs_links", width: 24 },
        { header: "Wiki Link", key: "wikipedia", width: 24 },
        { header: "Web MD Link", key: "web_md", width: 24 },
        { header: "Eye Brows", key: "eyeBrows", width: 24 },
        { header: "Eye Brows Desc", key: "eyeBrowsDesc", width: 24 },
        { header: "Eye Lash", key: "eyeLash", width: 24 },
        { header: "Eye Lash Desc", key: "eyeLashDesc", width: 24 },
        { header: "Face", key: "face", width: 24 },
        { header: "Face Desc", key: "faceDesc", width: 24 },
        { header: "Skin", key: "skin", width: 24 },
        { header: "Skin Desc", key: "skinDesc", width: 24 },
      ];

      let counter = 1;

      data?.forEach((user) => {

        user.title = user?.title;
        user.type = user?.entery_id?.title;
        user.userFor = user?.description;
        user.sideEffect = user?.side_effect?.map(obj => obj?.sid).join(',');
        user.nhs_links = user?.link?.filter((item) => item?.source?.title == 'NHS England')?.map(obj => obj.url).join(', ');
        user.wikipedia = user?.link?.filter((item) => item?.source?.title == 'Wikipedia')?.map(obj => obj.url).join(', ');
        user.web_md = user?.link?.filter((item) => item?.source?.title == 'WebMD')?.map(obj => obj.url).join(', ');
        user.eyeLash = user?.contraindication_advice?.filter((item) => item?.area?.title == 'Eye Lashes')?.map(obj => obj.answer).join(', ');
        user.eyeLashDesc = user?.contraindication_advice?.filter((item) => item?.area?.title == 'Eye Lashes')?.map(obj => obj.source).join(', ');
        user.skin = user?.contraindication_advice?.filter((item) => item?.area?.title == 'Skin')?.map(obj => obj.answer).join(', ');
        user.skinDesc = user?.contraindication_advice?.filter((item) => item?.area?.title == 'Skin')?.map(obj => obj.source).join(', ');
        user.face = user?.contraindication_advice?.filter((item) => item?.area?.title == 'Face')?.map(obj => obj.answer).join(', ');
        user.faceDesc = user?.contraindication_advice?.filter((item) => item?.area?.title == 'Face')?.map(obj => obj.source).join(', ');
        user.eyeBrows = user?.contraindication_advice?.filter((item) => item?.area?.title == ' Eye Browz')?.map(obj => obj.answer).join(', ');
        user.eyeBrowsDesc = user?.contraindication_advice?.filter((item) => item?.area?.title == ' Eye Browz')?.map(obj => obj.source).join(', ');

        worksheet.addRow(user);
        counter++;
      });

      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
      });

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader("Content-Disposition", `attachment; filename=Contraindication Database.xlsx`);

      return workbook.xlsx.write(res).then(() => {
        res.status(200);
      });
      // if (data) {
      //   return Successmessage(res, 'Sideeeffect list', data)
      // } else {
      //   return Failuremessage(res, 'Oops! Something went wrong.')
      // }

    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },

  convertCsvToExcel: async (req, res) => {
    try {
      const checkCsvExist = req.files.imagename1[0]?.path;
      var filePath = path.join(__dirname, `../../../${checkCsvExist}`);

      if (checkCsvExist?.includes('.csv')) {
        const csvtoexcelPath = req.files.imagename1[0]?.filename.replace(/\.csv$/, '.xlsx');
        csvtoexcelconverter(filePath, `./public/Adminquestionimage/${csvtoexcelPath}`, function () {
          console.log("converted");
        });
        filePath = path.join(__dirname, `../../../${checkCsvExist.replace(/\.csv$/, '.xlsx')}`);

      }
      console.log(filePath, "filePath");
      if (filePath) {
        return Successmessage(res, 'Converted successfully', filePath)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }

    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },

  uploadContradictionDB: async (req, res) => {
    try {
      var filePath = req.body.filePath;

      const workbook = new excelJS.Workbook();
      await workbook.xlsx.readFile(filePath);

      const worksheet = workbook.getWorksheet(1);; // Assuming the data is in the first worksheet

      const records = [];

      worksheet.eachRow((row, rowNumber) => {

        const record = {
          title: row.getCell(1).value,
          type: row.getCell(2).value,
          userFor: row.getCell(3).value,
          sideEffect: row.getCell(4).value,
          nhs_links: row.getCell(5).value,
          wikipedia: row.getCell(6).value,
          web_md: row.getCell(7).value,
          eyeBrows: row.getCell(8).value,
          eyeBrowsDesc: row.getCell(9).value,
          eyeLash: row.getCell(10).value,
          eyeLashDesc: row.getCell(11).value,
          face: row.getCell(12).value,
          faceDesc: row.getCell(13).value,
          skin: row.getCell(14).value,
          skinDesc: row.getCell(15).value,
        };

        records.push(record);
      });

      let insertRecordsArr = [];

      for (let i = 0; i < records?.length; i++) {
        let obj = {};
        let linkArr = [], contradictionArr = [];
        if (i != 0) {
          obj.title = records[i]?.title;
          obj.description = records[i]?.userFor;
          if (records[0]?.type == "Type") {
            let existEntryType = await EnteryType.findOne({ title: records[i]?.type });
            if (existEntryType) {
              obj.entery_id = existEntryType?._id;
            }
          }
          if (records[0]?.nhs_links == "NHS Link") {
            let exist = await Source.findOne({ title: "NHS England" });

            if (exist) {
              let arr;
              if (records[i]?.nhs_links?.text) {
                arr = records[i]?.nhs_links?.text?.richText?.map(obj => obj['text'])
              } else {
                arr = records[i]?.nhs_links?.split(",");
              }

              arr?.forEach((data) => {
                linkArr?.push({ source: exist?._id, url: data });
              })
            }
          }

          if (records[0]?.wikipedia == "Wiki Link") {

            let exist = await Source.findOne({ title: "Wikipedia" });

            if (exist) {
              let arr;
              if (records[i]?.wikipedia?.text) {
                arr = records[i]?.wikipedia?.text?.richText?.map(obj => obj['text'])
              } else {
                arr = records[i]?.wikipedia?.split(",");
              }

              arr?.forEach((data) => {
                linkArr?.push({ source: exist?._id, url: data });
              })
            }
          }

          if (records[0]?.web_md == "Web MD Link") {

            let exist = await Source.findOne({ title: "WebMD" });

            if (exist) {
              let arr;
              if (records[i]?.web_md?.text) {
                arr = records[i]?.web_md?.text?.richText?.map(obj => obj['text'])
              } else {
                arr = records[i]?.web_md?.split(",");
              }

              arr?.forEach((data) => {
                linkArr?.push({ source: exist?._id, url: data });
              })
            }
          }
          if (linkArr?.length > 0) {
            obj.link = linkArr
          }

          if (records[0]?.eyeLash == "Eye Lash") {

            let exist = await Selectarea.findOne({ title: "Eye Lashes" });

            if (exist) {
              let arr = records[i]?.eyeLash?.split(",");
              let arrDesc = records[i]?.eyeLashDesc?.split(",");

              arr?.forEach((data, i) => {
                contradictionArr?.push({ area: exist?._id, source: arrDesc[i], answer: data });
              })
            }
          }

          if (records[0]?.eyeBrows == "Eye Brows") {

            let exist = await Selectarea.findOne({ title: " Eye Browz" });

            if (exist) {
              let arr = records[i]?.eyeBrows?.split(",");
              let arrDesc = records[i]?.eyeBrowsDesc?.split(",");

              arr?.forEach((data, i) => {
                contradictionArr?.push({ area: exist?._id, source: arrDesc[i], answer: data });
              })
            }
          }

          if (records[0]?.skin == "Skin") {

            let exist = await Selectarea.findOne({ title: "Skin" });

            if (exist) {
              let arr = records[i]?.skin?.split(",");
              let arrDesc = records[i]?.skinDesc?.split(",");

              arr?.forEach((data, i) => {
                contradictionArr?.push({ area: exist?._id, source: arrDesc[i], answer: data });
              })
            }
          }

          if (records[0]?.face == "Face") {

            let exist = await Selectarea.findOne({ title: "Face" });

            if (exist) {
              let arr = records[i]?.face?.split(",");
              let arrDesc = records[i]?.faceDesc?.split(",");

              arr?.forEach((data, i) => {
                contradictionArr?.push({ area: exist?._id, source: arrDesc[i], answer: data });
              })
            }
          }

          if (contradictionArr?.length > 0) {
            obj.contraindication_advice = contradictionArr
          }

          if (records[0]?.sideEffect == "Side Effects") {
            let arr = records[i]?.sideEffect?.split(",");

            let sideArr = [];
            for (let j = 0; j < arr?.length; j++) {
              let exist = await Sideeffect.findOne({ s_id: arr[j] });

              if (exist) {
                sideArr?.push({ value: exist?._id, sid: arr[j], label: exist?.title });
              }
            }

            if (sideArr?.length > 0) {
              obj.side_effect = sideArr
            }

          }

          insertRecordsArr.push(obj);
        }

      }

      if (insertRecordsArr?.length > 0) {

        let dropContraindication = await Contraindication.collection.drop();

        if (dropContraindication) {
          await Contraindication.insertMany(insertRecordsArr).then((result) => {
            console.log('Documents inserted:', result);
            if (result) {
              return Successmessage(res, 'Documents inserted successfully.', result)
            } else {
              return Failuremessage(res, 'Oops! Something went wrong.')
            }
          })
            .catch((error) => {
              console.error('Error inserting documents:', error);
            })
        }

      }


    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error)
    }
  },
}

