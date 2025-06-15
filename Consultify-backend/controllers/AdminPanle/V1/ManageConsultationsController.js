const models = require("../../../models");
const PostcareAdvice = require("../../../models/PostcareAdvice");
const {
  internalservereror,
  Successmessage,
  Failuremessage,
} = require("../../../utils/Customerresponse");

module.exports = {
  GetlistConsultation1: async (req, res) => {
    try {
      var consultationlist = await models.Consultation.aggregate([
        {
          $match: {
            formcreatedbyadminPanel: req.identity._id,
          },
        },
        {
          $lookup: {
            from: "categories",
            foreignField: "_id",
            localField: "category",
            as: "category_details",
          },
        },
        {
          $unwind: {
            path: "$category_details",
            preserveNullAndEmptyArrays: true, // This ensures documents with no matching category still appear
          },
        },

        {
          $sort: { _id: -1 },
        },
      ]);

      if (consultationlist) {
        return Successmessage(res, "Consultation list", consultationlist);
      } else {
        return Failuremessage(res, "Oops! Something went wrong.");
      }
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },
  GetlistConsultation22222: async (req, res) => {
    console.log("GetlistConsultationGetlistConsultation")
    try {
      var consultationlist = await models.Consultation.aggregate([
        {
          $match: {
            formcreatedbyadminPanel: req.identity._id,
          },
        },
        {
          $lookup: {
            from: "categories",
            foreignField: "_id",
            localField: "category",
            as: "category_details",
          },
        },
        {
          $unwind: {
            path: "$category_details",
            preserveNullAndEmptyArrays: true, // This ensures documents with no matching category still appear
          },
        },
        {
          $sort: { form_title: 1 }, // Sort by form_title in ascending order
        },
      ]);
console.log(consultationlist,"consultationlist")
      if (consultationlist) {
        return Successmessage(res, "Consultation list", consultationlist);
      } else {
        return Failuremessage(res, "Oops! Something went wrong.");
      }
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },
  GetlistConsultation: async (req, res) => {
    console.log("GetlistConsultationGetlistConsultation");
    try {
        var consultationlist = await models.Consultation.aggregate([
            {
                $match: {
                    formcreatedbyadminPanel: req.identity._id,
                },
            },
            {
                $lookup: {
                    from: "categories",
                    foreignField: "_id",
                    localField: "category",
                    as: "category_details",
                },
            },
            {
                $unwind: {
                    path: "$category_details",
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $lookup: {
                    from: "consultationforms", // Ensure this matches your actual collection name
                    let: { consultationId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$consultationId", "$$consultationId"] },
                            },
                        },
                        {
                            $project: {
                                is_completed: 1, // Only fetch is_completed field
                            },
                        },
                    ],
                    as: "consultation_form_data",
                },
            },
            {
                $addFields: {
                    is_completed: {
                        $cond: {
                            if: { $gt: [{ $size: "$consultation_form_data" }, 0] },
                            then: { $arrayElemAt: ["$consultation_form_data.is_completed", 0] },
                            else: 0, // Default value if no matching consultation form
                        },
                    },
                },
            },
            {
                $project: {
                    consultation_form_data: 0, // Remove lookup array to keep response clean
                },
            },
            {
                $sort: { form_title: 1 },
            },
        ]);

        console.log(consultationlist, "consultationlist");
        if (consultationlist) {
            return Successmessage(res, "Consultation list", consultationlist);
        } else {
            return Failuremessage(res, "Oops! Something went wrong.");
        }
    } catch (error) {
        console.log(error.message);
        return internalservereror(res, error);
    }
},

  UpdateConsultationStatus: async (req, res) => {
    try {
      const { consultation_id, status } = req.body;

      // Validate input
      if (!consultation_id || status === undefined) {
        return Failuremessage(res, "consultation_id and status are required.");
      }

      // Update the status of the consultation
      var dataupdatedConsultation = await models.Consultation.findByIdAndUpdate(
        consultation_id,
        { status: status },
        { new: true }
      );
      console.log(dataupdatedConsultation, "check data");
      // Check if the consultation was found and updated
      if (!dataupdatedConsultation) {
        return Failuremessage(res, "Consultation not found.");
      }

      return Successmessage(
        res,
        "Consultation status updated successfully.",
        dataupdatedConsultation
      );
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },

  //admin side
  AddConsultation1111: async (req, res) => {
    try {
      if (req.body.idconsultaion != "" && req.body.idconsultaion != undefined) {
        var saveinformation = await models.Consultation.findByIdAndUpdate(
          { _id: req.body.idconsultaion },
          {
            $set: {
              form_title: req.body.form_title,
              category: req.body.category,
              see_consultation: 0,
              formcreatedbyadminPanel: req.identity._id,
              form_description: req.body.form_description,
              question: req.body.formData,
              pre_care_setarray: req.body.pre_care_setarray,
              see_consultation: 0,
              see_preset_tab: 0,
            },
          },
          { new: true } // to return the modified document
        );
      } else {
        var saveinformation = await models.Consultation();
        saveinformation.form_title = req.body.form_title;
        saveinformation.formcreatedbyadminPanel = req.identity._id;
        saveinformation.form_description = req.body.form_description;
        saveinformation.category = req.body.category;
        saveinformation.pre_care_setarray = req.body.pre_care_setarray;
        saveinformation.question = req.body.formData;
        saveinformation.consulationformstatus = 1;
        saveinformation.see_consultation = 1

        saveinformation.save();
      }

      if (saveinformation) {
        return Successmessage(res, "Information Saved", saveinformation);
      } else {
        return Failuremessage(res, "Oops! Something went wrong.");
      }
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },
  AddConsultation: async (req, res) => {
    try {
        let saveinformation;

        // Check if it's an update or a new consultation
        if (req.body.idconsultaion) {
            saveinformation = await models.Consultation.findByIdAndUpdate(
                { _id: req.body.idconsultaion },
                {
                    $set: {
                        form_title: req.body.form_title,
                        category: req.body.category,
                        formcreatedbyadminPanel: req.identity._id,
                        form_description: req.body.form_description,
                        question: req.body.formData,
                        pre_care_setarray: req.body.pre_care_setarray,
                        see_consultation: 0,
                        see_preset_tab: 0,
                    },
                },
                { new: true }
            );
        } else {
            // Create a new consultation
            saveinformation = new models.Consultation({
                form_title: req.body.form_title,
                formcreatedbyadminPanel: req.identity._id,
                form_description: req.body.form_description,
                category: req.body.category,
                pre_care_setarray: req.body.pre_care_setarray,
                question: req.body.formData,
                consulationformstatus: 1,
                see_consultation: 1,
            });

            await saveinformation.save();
        }

        if (saveinformation) {
            console.log(`Consultation ${saveinformation._id} saved successfully.`);

            // Fetch all salons
            const allSalons = await models.SalonUsers.find({}, "_id");

            for (let salon of allSalons) {
                // Check if the consultation already exists for this salon in ConsultationSettings
                const existingSetting = await models.ConsultationSettings.findOne({
                    salon_id: salon._id,
                    consultation_id: saveinformation._id,
                });

                if (!existingSetting) {
                    // Create ConsultationSettings entry for this salon
                    await models.ConsultationSettings.create({
                        consultation_id: saveinformation._id,
                        salon_id: salon._id,
                        created_by_admin:true,
                        created_by_salon:false,
                        see_consultation: 0,
                        see_preset_tab: 0,
                    });

                    console.log(`Assigned consultation ${saveinformation._id} to salon ${salon._id}`);
                }
            }

            return Successmessage(res, "Information Saved and Assigned to Salons", saveinformation);
        } else {
            return Failuremessage(res, "Oops! Something went wrong.");
        }
    } catch (error) {
        console.log("Error:", error.message);
        return internalservereror(res, error);
    }
},

  
  list_Consultation111: async (req, res) => {
    try {
      console.log(req.identity._id, "kri check 123 check");
        console.log(req.query.salonid, "req.query.salonid"); 

        var saveinformationlist = await models.Consultation.find({
            $or: [
                { formcreatedbyadminPanel: req.identity._id },
                { formcreatedby: req.query.salonid } 
            ]
        });

        var saveinformationlistdata = await models.Consultation.countDocuments({
            $or: [
                { formcreatedbyadminPanel: req.identity._id },
                { formcreatedby: req.query.salonid } 
            ]
        });

        console.log(saveinformationlistdata, "count=====>");

        return Successmessage(res, "Successfully fetched data", saveinformationlist);



    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },
  list_Consultation: async (req, res) => {
    try {
        console.log(req.identity._id, "User ID Check (Admin or Salon)");
        console.log(req.query.salonid, "Salon ID Check");

        const salonId = req.query.salonid;

        // Fetch consultations created by this salon
        const salonConsultations = await models.Consultation.find({
            formcreatedby: salonId
        });

        console.log(salonConsultations.length, "Salon-created consultations found");

        // Fetch admin-created consultations assigned to this salon from ConsultationSettings
        const adminConsultationSettings = await models.ConsultationSettings.find({
            salon_id: salonId
        }).select("consultation_id see_consultation see_preset_tab");

        console.log(adminConsultationSettings, "Admin-created consultation settings found");

        // Extract consultation IDs
        const adminConsultationIds = adminConsultationSettings.map(item => item.consultation_id);

        // Fetch actual consultation data
        const adminConsultations = await models.Consultation.find({
            _id: { $in: adminConsultationIds }
        });

        // Combine consultation data with `see_consultation` and `see_preset_tab`
        const adminConsultationsWithSettings = adminConsultations.map(consultation => {
            const settings = adminConsultationSettings.find(setting => 
                String(setting.consultation_id) === String(consultation._id)
            );
            return {
                ...consultation.toObject(),
                see_consultation: settings ? settings.see_consultation : 1, // Default 1 (hidden) if not found
                see_preset_tab: settings ? settings.see_preset_tab : 1 // Default 1 (hidden) if not found
            };
        });

        console.log(adminConsultationsWithSettings.length, "Admin consultations with visibility settings");

        // Combine all consultations
        const allConsultations = [...salonConsultations, ...adminConsultationsWithSettings];

        return Successmessage(res, "Successfully fetched data", allConsultations);

    } catch (error) {
        console.error("Error fetching consultations:", error.message);
        return internalservereror(res, error);
    }
},

  presetcarelistConsultation: async (req, res) => {
    try {
      console.log(req.identity._id, "kri check 123 check");
        console.log(req.query.salonid, "req.query.salonid"); 
     
        var saveinformationlist = await PostcareAdvice.find(
            {
                $or: [
                    {
                        salon_id: req.query.salonid,
                    },

                    {
                        admin_id: { $ne: undefined },
                    }
                ],

                // treatmentname: {
                //     $regex: '.*' + PostcareBody?.search + '.*',
                //     $options: 'i'
                // }
            }
        ).sort({ treatmentname: 1 }).populate('admin_id', 'salon_id'); // Sort by treatmentname in ascending order





      

        console.log(saveinformationlist.length, "count=====>");

        return Successmessage(res, "Successfully fetched data", saveinformationlist);



    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },

  DeleteConsultation: async (req, res) => {
    try {
      var saveinformation = await models.Consultation.findByIdAndDelete({
        _id: req.query.id,
      });
      if (saveinformation) {
        return Successmessage(res, "Deleted", saveinformation);
      } else {
        return Failuremessage(res, "Oops! Something went wrong.");
      }
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },
  GetdetailsConsultation: async (req, res) => {
    try {
      if (req.query.questionId) {
        var getinformation = await models.Consultation.findByIdAndUpdate(
          req.query.id, // First argument: the ID to find the document
          { $pull: { question: { _id: req.query.questionId } } }, // Second argument: $pull to remove the question with the specific _id
          { new: true } // Optional: to return the updated document after pulling
        );

        if (getinformation) {
          return Successmessage(res, "Question deleted", getinformation);
        } else {
          return Failuremessage(res, "Oops! Something went wrong.");
        }
      } else {
        var getinformation = await models.Consultation.findById({
          _id: req.query.id,
        }).populate("pre_care_setarray.pre_care_id");

        if (getinformation) {
          return Successmessage(
            res,
            "Inforamtion Consultation",
            getinformation
          );
        } else {
          return Failuremessage(res, "Oops! Something went wrong.");
        }
      }
    } catch (error) {
      return internalservereror(res, error);
    }
  },
  
  // deleteQustion: async (req, res) => {
  //   try {

  //     const {id} = req.params

  //     let data = await Ques

  //   } catch (error) {
  //     return internalservereror(res, error)
  //   }
  // },

  imagesave: async (req, res) => {
    try {
      return Successmessage(
        res,
        "Image name",
        req.files.imagename1[0].filename
      );
    } catch (error) {
      return internalservereror(res, error);
    }
  },
};
