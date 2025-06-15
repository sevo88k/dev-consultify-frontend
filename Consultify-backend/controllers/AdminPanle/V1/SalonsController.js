const SaloonUser = require("../../../models/saloonUsers")
const StaffUser = require("../../../models/staffUsers")
const { Resetpasswordmail } = require("../../../utils/Adminsendgrid")
const { internalservereror, Successmessage, Failuremessage, Successmessagepagination } = require("../../../utils/Customerresponse")
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const Customer = require("../../../models/Customer")
const Consultations = require("../../../models/Consultation")
const consultationForm = require("../../../models/consultationForm")
const PostcareAdvice = require("../../../models/PostcareAdvice");

module.exports = {

  get_dashboard_saloon: async (req, res) => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      const totalSalons = await SaloonUser.countDocuments({ role: 0 });

      // Total salons from the previous month
      const previousMonthDate = new Date(currentYear, currentMonth - 1);
      const totalSalonsPreviousMonth = await SaloonUser.countDocuments({ createdAt: { $lte: previousMonthDate } });
      const increaseFromPreviousMonth = totalSalons - totalSalonsPreviousMonth;

      // Active salons
      const activeSalons = await SaloonUser.countDocuments({ status: 1 });

      // New sign-up salons for the current month
      const newSignUpSalons = await SaloonUser.countDocuments({
        createdAt: {
          $gte: new Date(currentYear, currentMonth, 1),
          $lte: currentDate,
        },
      });

      const totalActiveSubscriptions = await SaloonUser.countDocuments({ subscription: { $gt: 0 } });

      const topActiveSalons = await SaloonUser.find({ status: 1 })
        .sort({ lastLogin: -1 })
        .limit(10)
        .select("salonname lastLogin personal_address1 address");
      return Successmessage(res, 'Salon List', {
        totalSalons,
        increaseFromPreviousMonth,
        activeSalons,
        newSignUpSalons,
        totalActiveSubscriptions,
        topActiveSalons,
      });

    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  },

  GetSalonList: async (req, res) => {
    try {
      const pageNo = req.body.pageno || 1;
      const pageSize = 20;
      const searchTerm = req.body.search || '';

      const aggregationPipeline = [
        { "$sort": { "_id": -1 } }
      ];

      if (searchTerm) {
        aggregationPipeline.push({
          $match: {
            salonname: { $regex: searchTerm, $options: 'i' }
          }
        });
      }

      aggregationPipeline.push(
        { $skip: pageSize * (pageNo - 1) },
        { $limit: pageSize }
      );

      const saloon = await SaloonUser.aggregate(aggregationPipeline);

      const totalDocuments = await SaloonUser.countDocuments(searchTerm ? { salonname: { $regex: searchTerm, $options: 'i' } } : {});
      const totalpagecount = Math.ceil(totalDocuments / pageSize);

      if (saloon && saloon.length > 0) {
        return Successmessagepagination(res, 'Salon List', saloon, totalpagecount, totalDocuments);
      } else {
        return Failuremessage(res, 'No salons found.');
      }
    } catch (error) {
      console.log(error.message);
      return internalservereror(res, error);
    }
  },

  SalonDetails: async (req, res) => {
    try {

      var salondetails = await SaloonUser.findById({
        _id: req.query.id
      })
      if (salondetails) {
        return Successmessage(res, 'Salon List', salondetails)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }

    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },

  DeleteSalon: async (req, res) => {
    try {
      var deletesalon = await SaloonUser.findByIdAndDelete({
        _id: req.body.id
      });

      if (deletesalon) {
        return Successmessage(res, 'Salon deleted Successfully')
      } else {
        return Failuremessage(res, 'Oops! Something went wrong')
      }



    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },

  SalonResetpassword: async (req, res) => {
    try {


      var existcheck = await SaloonUser.findOne(
        {
          email: { $regex: new RegExp(req.body.email, 'i') }
        }
      )
      var url = process.env.ADMIN_URL;
      if (existcheck != null) {


        return Resetpasswordmail(res, url, existcheck, 'UpdateaccountstatussalonAction')
      } else {
        return Failuremessage(res, "Your email isn't recognised. Please check the spelling")
      }

    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },

  SalonUpdatePassword: async (req, res) => {
    try {
      var existcheck = await SaloonUser.findById(
        {
          _id: req.body.id
        }

      )
      console.log(req.body.time)
      console.log(Date.now())

      if (existcheck != null) {
        if (req.body.time <= Date.now()) {
          return Failuremessage(res, "Link Has been expired")
        } else {


          var updatepassword = await SaloonUser.findByIdAndUpdate(
            {
              _id: req.body.id
            }, {
            $set: {
              password: await bcrypt.hash(req.body.password, 10)
            }
          }, {
            new: true
          }

          )
          if (updatepassword) {
            return Successmessage(res, 'Your password has been reset successfully')
          } else {
            return Failuremessage(res, 'Old Password incorrect.')
          }



        }


      } else {
        return Failuremessage(res, "Oops! something went worng.")
      }

    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },

  UpdateSalondetails: async (req, res) => {
    try {


      var savinformation = await SaloonUser.findByIdAndUpdate({
        _id: req.body.id
      }, {
        $set: {
          salonname: req.body.salonname,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          personal_phone: req.body.personal_phone,
          website_url: req.body.website_url,
          personal_address1: req.body.personal_address1,
          personal_address2: req.body.personal_address2,
          personal_city: req.body.personal_city,
          personal_postcode: req.body.personal_postcode,

        }
      }, {
        new: true
      })


      if (savinformation) {
        return Successmessage(res, 'Information Saved', savinformation)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }




    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },

  Updateaccountstatussalon: async (req, res) => {
    try {


      var accountstatus = await SaloonUser.findByIdAndUpdate({
        _id: req.body.id
      }, {
        $set: {
          status_account: req.body.status_account
        }
      }, {
        new: true
      });

      if (accountstatus) {
        return Successmessage(res, 'status updated')
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }


    } catch (error) {

    }
  },

  Stafflist: async (req, res) => {
    try {

      var stafflist = await StaffUser.aggregate([{
        $match: {
          salonId: new mongoose.Types.ObjectId(req.body.id)
        }
      }, {

        "$sort": { "memberNo": -1 }
      }])
      if (stafflist) {
        return Successmessage(res, 'staff List', stafflist)
      } else {
        return Failuremessage(res, 'Oops! Something went wrong.')
      }
    } catch (error) {
      console.log(error.message)
      return internalservereror(res, error)
    }
  },

  salonClients: async (req, res) => {
    try {

      var data = await Customer.aggregate([{
        $match: {
          salonId: new mongoose.Types.ObjectId(req.body.id)
        }
      }, {
        "$sort": { "memberNo": -1 }
      }])
      return Successmessage(res, "Clients fetched Successfully", data)

    } catch (error) {
      return internalservereror(res, error)
    }
  },

  GetCompletedconsultaitonformSalon1111: async (req, res) => {
    try {

      var pipeline = [
        {
          $match: {
            salonId: new mongoose.Types.ObjectId(req.body.id)
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $lookup: {
            from: "slaoonUsers", // Assuming the collection name is "salons"
            localField: "salonId",
            foreignField: "_id",
            as: "salonId"
          }
        },
        {
          $unwind: {
            path: "$salonId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "customers", // Assuming the collection name is "customers"
            localField: "customerId",
            foreignField: "_id",
            as: "customerId"
          }
        },
        {
          $unwind: {
            path: "$customerId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "consultations", // Assuming the collection name is "consultations"
            localField: "consultationId",
            foreignField: "_id",
            as: "consultationId"
          }
        },
        {
          $unwind: {
            path: "$consultationId",
            preserveNullAndEmptyArrays: true
          }
        },
      ];

      var data = await consultationForm.aggregate(pipeline);
      if (data) {
        return Successmessage(res, "Completed Consultation fetched Successfully", data)
      } else {
        return Failuremessage(res, 'Oops! Something went Wrong')
      }

    } catch (error) {
      return internalservereror(res, error)
    }
  },

  update_consulatation1111: async (req, res) => {
    try {
      let { consultation_id, see_consultation, salon_id } = req.body; // Use 'let' for modification

      console.log("Request body:", req.body);

      if (!consultation_id || see_consultation === undefined) {
        return Failuremessage(res, "consultation_id and see_consultation are required.");
      }

      let foundInForm = false;


      const consultationFormData = await consultationForm.findById(consultation_id);
      if (consultationFormData) {
        consultation_id = consultationFormData.consultationId; // Get linked consultation ID
        foundInForm = true;
      }

      const consultationData = await Consultations.findById(consultation_id);
      if (!consultationData) {
        return Failuremessage(res, "Consultation ID not found in Consultations table.");
      }

      console.log(`Consultation ID found in ${foundInForm ? "ConsultationForm and mapped to Consultations" : "Consultations"} table. Proceeding to update...`);

      if (see_consultation === 0 && consultationData.is_deleted === 1) {
        await Consultations.findByIdAndUpdate(consultation_id, { $set: { is_deleted: 0 } });
        console.log("is_deleted was 1, changed to 0.");
      }

      let updatedConsultation

      // Update `see_consultation` in Consultations table
      if (see_consultation === 0) {
        updatedConsultation = await Consultations.findOneAndUpdate(
          { _id: consultation_id },
          {
            $set: {
              see_consultation: see_consultation,
              salonActiveArr: { salon_id: salon_id }
            },

          },
          { new: true }
        );
      }
      else if (see_consultation === 1) {
        updatedConsultation = await Consultations.findOneAndUpdate(
          { _id: consultation_id },
          {
            see_consultation: see_consultation,
            $pull: { salonActiveArr: { salon_id: salon_id } }
          },
          { new: true }
        );
      }



      if (!updatedConsultation) {
        return Failuremessage(res, "No update made in Consultations table.");
      }

      console.log("Consultation updated successfully.");
      return Successmessage(res, "Consultation updated successfully.", updatedConsultation);

    } catch (error) {
      console.error("Error occurred:", error);
      return internalservereror(res, "Oops! Something went wrong.");
    }
  },

  update_consulatation: async (req, res) => {
    try {
      let { consultation_id, see_consultation, salon_id } = req.body;

      console.log("Request body:", req.body);

      if (!consultation_id || see_consultation === undefined) {
        return Failuremessage(res, "consultation_id and see_consultation are required.");
      }

      let foundInForm = false;

      const consultationFormData = await consultationForm.findById(consultation_id);
      if (consultationFormData) {
        consultation_id = consultationFormData.consultationId;
        foundInForm = true;
      }

      const consultationData = await Consultations.findById(consultation_id);
      if (!consultationData) {
        return Failuremessage(res, "Consultation ID not found in Consultations table.");
      }

      console.log(
        `Consultation ID found in ${foundInForm ? "ConsultationForm and mapped to Consultations" : "Consultations"
        } table. Proceeding to update...`
      );

      if (see_consultation === 0 && consultationData.is_deleted === 1) {
        await Consultations.findByIdAndUpdate(consultation_id, { $set: { is_deleted: 0 } });
        console.log("is_deleted was 1, changed to 0.");
      }

      let updateQuery = { $set: { see_consultation: see_consultation } };

      // Only modify salonActiveArr if the consultation was created by adminPanel
      if (consultationData.formcreatedbyadminPanel) {
        if (see_consultation === 0) {
          updateQuery.$push = { salonActiveArr: { salon_id: salon_id } };
        } else if (see_consultation === 1) {
          updateQuery.$pull = { salonActiveArr: { salon_id: salon_id } };
        }
      }

      const updatedConsultation = await Consultations.findOneAndUpdate(
        { _id: consultation_id },
        updateQuery,
        { new: true }
      );

      if (!updatedConsultation) {
        return Failuremessage(res, "No update made in Consultations table.");
      }

      console.log("Consultation updated successfully.");
      return Successmessage(res, "Consultation updated successfully.", updatedConsultation);

    } catch (error) {
      console.error("Error occurred:", error);
      return internalservereror(res, "Oops! Something went wrong.");
    }
  },
  update_preset: async (req, res) => {
    try {
      let { consultation_id, see_preset_tab } = req.body; // Use 'let' for modification

      console.log("Request body:", req.body);

      if (!consultation_id || see_preset_tab === undefined) {
        return Failuremessage(res, "consultation_id and see_consultation are required.");
      }

      let foundInForm = false;


      const consultationFormData = await consultationForm.findById(consultation_id);
      if (consultationFormData) {
        consultation_id = consultationFormData.consultationId; // Get linked consultation ID
        foundInForm = true;
      }

      const consultationData = await Consultations.findById(consultation_id);
      if (!consultationData) {
        return Failuremessage(res, "Consultation ID not found in Consultations table.");
      }

      console.log(`Consultation ID found in ${foundInForm ? "ConsultationForm and mapped to Consultations" : "Consultations"} table. Proceeding to update...`);

      if (see_preset_tab === 0 && consultationData.is_deleted === 1) {
        await Consultations.findByIdAndUpdate(consultation_id, { $set: { is_deleted: 0 } });
        console.log("is_deleted was 1, changed to 0.");
      }
      if (see_preset_tab === 0) {
        await Consultations.findByIdAndUpdate(consultation_id, { $set: { salonActiveArrforhide: [] } });
        console.log("salon active arr [[[[]]]]]]]");
      }
      // Update `see_consultation` in Consultations table   salonActiveArrforhide
      const updatedConsultation = await Consultations.findByIdAndUpdate(
        consultation_id,
        { $set: { see_preset_tab: see_preset_tab } },
        { new: true }
      );

      if (!updatedConsultation) {
        return Failuremessage(res, "No update made in Consultations table.");
      }

      console.log("Consultation updated successfully.");
      return Successmessage(res, "Consultation updated successfully.", updatedConsultation);

    } catch (error) {
      console.error("Error occurred:", error);
      return internalservereror(res, "Oops! Something went wrong.");
    }
  },

  /////preset work start here

  update_preset_postcare: async (req, res) => {
    try {
      let { preset_id, see_postcare } = req.body;
  
      console.log("Request body:", req.body);
  
      if (!preset_id || see_postcare === undefined) {
        return Failuremessage(res, "preset_id and see_postcare are required.");
      }
  
      // Fetch Preset Data
      const PresetData = await PostcareAdvice.findById(preset_id);
      if (!PresetData) {
        return Failuremessage(res, "Preset not found in table.");
      }
  
      let updateData = { see_postcare };
  
      // If see_postcare is 0, check is_deleted and update it if necessary
      if (see_postcare === 0 && PresetData.is_deleted === 1) {
        updateData.is_deleted = 0;
      }
  
      // Update Preset with merged updateData
      const presetConsultation = await PostcareAdvice.findByIdAndUpdate(
        preset_id,
        { $set: updateData },
        { new: true }
      );
  
      if (!presetConsultation) {
        return Failuremessage(res, "No update made in preset table.");
      }
  
      console.log("Presets updated successfully.");
      return Successmessage(
        res,
        "Preset Consultation updated successfully.",
        presetConsultation
      );
    } catch (error) {
      console.error("Error occurred:", error);
      return internalservereror(res, "Oops! Something went wrong.");
    }
  },

  


  update_postcare_presets11: async (req, res) => {
    try {
        let { preset_id, see_precare_presets,salon_id } = req.body;
        
        console.log("Request body:", req.body);

        if (!preset_id || see_precare_presets === undefined) {
            return Failuremessage(res, "preset_id and see_precare_presets are required.");
        }

        const postcareData = await PostcareAdvice.findById(preset_id);
        if (!postcareData) {
            return Failuremessage(res, "Preset not found in Table");
        }

        let newStatus = see_precare_presets == 0 ? 1 : 0;

        // Initialize updateQuery object
        let updateQuery = {
            $set: {
                see_precare_presets: see_precare_presets,
                status: newStatus
            }
        };

        // If admin_id exists, update salonActiveArr accordingly
        if (postcareData.admin_id) {
            if (see_precare_presets === 0) {
              updateQuery.$push = { salonActiveArr: { salon_id: salon_id } };
              updateQuery.$set = { status: 0 };
            } else if (see_precare_presets === 1) {
                updateQuery.$pull = { salonActiveArr: { salon_id: salon_id } };
            }
        }

        // Perform the update
        const updatedConsultation = await PostcareAdvice.findByIdAndUpdate(
            preset_id,
            updateQuery,
            { new: true }
        );

        if (!updatedConsultation) {
            return Failuremessage(res, "No update made in Postcare table.");
        }

        console.log("Consultation updated successfully.");
        return Successmessage(res, "Presets updated successfully.", updatedConsultation);

    } catch (error) {
        console.error("Error occurred:", error);
        return internalservereror(res, "Oops! Something went wrong.");
    }
},

update_postcare_presets: async (req, res) => {
  try {
      let { preset_id, see_precare_presets, salon_id } = req.body;
      
      console.log("Request body:", req.body);

      if (!preset_id || see_precare_presets === undefined) {
          return Failuremessage(res, "preset_id and see_precare_presets are required.");
      }

      // Fetch Postcare Data
      const postcareData = await PostcareAdvice.findById(preset_id);
      if (!postcareData) {
          return Failuremessage(res, "Preset not found in Table");
      }

      // Initialize updateQuery object
      let updateQuery = {
          $set: {
              see_precare_presets: see_precare_presets
          }
      };

      // Handle status setting based on conditions
      if (postcareData.admin_id) {
          if (see_precare_presets === 0) {
              updateQuery.$set.status = 1; // If admin exists and see_precare_presets == 0, set status to 1
              updateQuery.$push = { salonActiveArr: { salon_id: salon_id, status: 1 } };
          } else if (see_precare_presets === 1) {
              updateQuery.$set.status = 0; // If admin exists and see_precare_presets == 1, set status to 0
              updateQuery.$pull = { salonActiveArr: { salon_id: salon_id } };
          }
      } else {
          if (see_precare_presets === 1) {
              updateQuery.$set.status = 0; // If admin does NOT exist and see_precare_presets == 1, set status to 0
          } else {
              updateQuery.$set.status = 1; // If see_precare_presets == 0, set status to 1
          }
      }

      // Perform the update
      const updatedConsultation = await PostcareAdvice.findByIdAndUpdate(
          preset_id,
          updateQuery,
          { new: true }
      );

      if (!updatedConsultation) {
          return Failuremessage(res, "No update made in Postcare table.");
      }

      console.log("Consultation updated successfully.");
      return Successmessage(res, "Presets updated successfully.", updatedConsultation);

  } catch (error) {
      console.error("Error occurred:", error);
      return internalservereror(res, "Oops! Something went wrong.");
  }
},




  GetCompletedconsultaitonformSalon: async (req, res) => {
    try {
      const { id } = req.body;

      console.log("Request body:", req.body);

      if (!id) {
        return Failuremessage(res, "Salon ID is required.");
      }

      var pipeline = [
        {
          $match: {
            salonId: new mongoose.Types.ObjectId(id)
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $lookup: {
            from: "slaoonUsers", // Assuming the collection name is "salons"
            localField: "salonId",
            foreignField: "_id",
            as: "salonId"
          }
        },
        {
          $unwind: {
            path: "$salonId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "customers", // Assuming the collection name is "customers"
            localField: "customerId",
            foreignField: "_id",
            as: "customerId"
          }
        },
        {
          $unwind: {
            path: "$customerId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "consultations", // Assuming the collection name is "consultations"
            localField: "consultationId",
            foreignField: "_id",
            as: "consultationId"
          }
        },
        {
          $unwind: {
            path: "$consultationId",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "consultationForms", // Assuming the collection name is "consultationForms"
            localField: "consultationId", // This links consultationId from consultationForm
            foreignField: "_id", // This links to _id from the consultationForms collection
            as: "consultationForm"
          }
        },
        {
          $unwind: {
            path: "$consultationForm",
            preserveNullAndEmptyArrays: true
          }
        }
      ];

      console.log("Running aggregation pipeline...");
      var data = await consultationForm.aggregate(pipeline);
      console.log("Aggregation result:", data);

      console.log("Total consultations count:", data.length);


      return Successmessage(res, "Completed consultation fetched successfully", data);


    } catch (error) {
      console.error("Error occurred:", error);
      return internalservereror(res, error);
    }
  }











}