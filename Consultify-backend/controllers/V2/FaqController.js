const FaqService = require("../../Services/FaqService");
const { Successmessage } = require("../../utils/Customerresponse");
const { errResponse } = require("../../utils/response");
const Faq_category = require("../../models/faq_category");
const consultation = require("../../models/Consultation");
const consultationform = require("../../models/consultationForm");
const completedConsultation = require("../../models/Completed_consultation");
const SaloonUser = require("../../models/saloonUsers");
const ConsultationSettings = require("../../models/ConsultationSettings");
module.exports = {

    Informationsave: async (req, res) => {
        try {
            var information = await FaqService.SaveUpdateFaq(req.body);


            return Successmessage(res, 'Faq information has been save', information)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    Informationdelete: async (req, res) => {
        try {
            var information = await FaqService.faqdelete(req.body);


            return Successmessage(res, 'Faq information has been deleted', information)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    Informationlist: async (req, res) => {
        try {

            const information = await FaqService.faqlist(req.body);

            information.sort((a, b) => a.priority - b.priority);

            return Successmessage(res, 'Faq List', information);

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    faqsprority_set: async (req, res) => {
        try {
            const ids = req.body.ids; // Extract ordered IDs from request body

            if (!ids || !Array.isArray(ids) || ids.length === 0) {
                return errResponse(res, 400, "Invalid or missing 'ids' array.");
            }

            // Create an array of objects with priority based on input order
            const priorityData = ids.map((id, index) => ({
                id: id,
                priority: index + 1, // Assign priority (1-based index)
            }));

            // Save/update priority in the database
            await Promise.all(priorityData.map(async (item) => {
                await FaqService.updateFaqPriority(item.id, item.priority);
            }));

            // Fetch FAQs in priority order
            let information = await FaqService.getFaqsByIds(ids);

            // Ensure the fetched FAQs maintain the correct order
            information.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));

            return Successmessage(res, 'Faq List Sorted by Priority', information);
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    Informationoffaq: async (req, res) => {
        try {
            var information = await FaqService.faqdetails(req.body);


            return Successmessage(res, 'Faq List', information)

        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    SaveFaq_category: async (req, res) => {
        try {
            const { title } = req.body;
            if (!title) {
                return errResponse(res, 400, 'Title is required');
            }

            const information = await Faq_category.create({ title });

            return Successmessage(res, 'FAQ information has been saved', information);
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    EditFaqCategory: async (req, res) => {
        try {
            const { id, title } = req.body;

            const faqCategory = await Faq_category.findByIdAndUpdate(
                id,
                { title },
                { new: true, }
            );

            if (!faqCategory) {
                return errResponse(res, 200, 'FAQ category not found');
            }

            return Successmessage(res, 'FAQ category title has been updated', faqCategory);
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    ListFaqCategories: async (req, res) => {
        try {
            const faqCategories = await Faq_category.find(); // Fetch all FAQ categories

            if (!faqCategories.length) {
                return errResponse(res, 404, 'No FAQ categories found');
            }

            return Successmessage(res, 'FAQ categories retrieved successfully', faqCategories);
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    DeleteFaqCategory: async (req, res) => {
        try {
            const { id } = req.params;

            const faqCategory = await Faq_category.findByIdAndDelete(id);

            if (!faqCategory) {
                return errResponse(res, 404, 'FAQ category not found');
            }

            return Successmessage(res, 'FAQ category deleted successfully',);
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    update_consultation_data1111: async (req, res) => {
        try {
            const data = await consultation.updateMany(

                { $set: { is_completed: 0, } }

            );

            if (data.modifiedCount === 0) {
                return errResponse(res, 404, 'No records found to update');
            }

            return Successmessage(res, 'Consultations successfully updated');
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },

    update_consultation_data222: async (req, res) => {
        try {
            // const { id, consulationformstatus } = req.body;

            // // Fetch the consultation details
            // const details = await consultation.findById(id);
            // if (!details) {
            //     return errResponse(res, 404, "Consultation not found");
            // }

            // let salonidArray = details.salonActiveArr || [];

            // let index = salonidArray.findIndex(
            //     (obj) => obj?.salon_id?.toString() === req?.user?._id?.toString()
            // );

            // if (index !== -1) {
            //     // Salon ID is present, update the status
            //     salonidArray[index].consulationformstatus = consulationformstatus;
            // } else {
            //     // Salon ID not present, add new entry
            //     salonidArray.push({ salon_id: req.user._id, consulationformstatus });
            // }

            // // Determine the see_consultation value based on conditions
            // let seeConsultation = 0;
            // if (index === -1 && consulationformstatus === 0) {
            //     seeConsultation = 1;
            // } else if (index !== -1 && consulationformstatus === 1) {
            //     seeConsultation = 1;
            // } else if (index !== -1 && consulationformstatus === 0) {
            //     seeConsultation = 0;
            // }

            // const updateData = {
            //     salonActiveArr: salonidArray,
            //     see_consultation: seeConsultation,
            // };

            // const updatedConsultation = await consultation.findByIdAndUpdate(
            //     id,
            //     { $set: updateData },
            //     { new: true }
            // );
            const existingConsultation = await completedConsultation.deleteMany({ });

            return res.status(200).json({
                success: true,
                message: "DEleted successfully",
                totalCreated: existingConsultation.length,
      
            });
        } catch (error) {
            return errResponse(res, 500, error.message);
        }
    },
    update_consultation_data333333: async (req, res) => {
        try {


            const salons = await SaloonUser.find();
            console.log(salons.length, "(()))")

            for (let salon of salons) {
                // Fetch data from the old schema for each salon
                var pipeline = [
                    {
                        $match: {
                            salonId: salon._id,
                            answers: { $ne: undefined }
                        }
                    },
                    {
                        $sort: {
                            createdAt: -1
                        }
                    },
                    {
                        $lookup: {
                            from: "customers",
                            localField: "customerId",
                            foreignField: "_id",
                            as: "customer"
                        }
                    },
                    {
                        $unwind: {
                            path: "$customer",
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $lookup: {
                            from: "consultations",
                            localField: "consultationId",
                            foreignField: "_id",
                            as: "consultation"
                        }
                    },
                    {
                        $unwind: {
                            path: "$consultation",
                            preserveNullAndEmptyArrays: true
                        }
                    }
                ];

                //     var oldData = await consultationform.aggregate(pipeline);

                //     // Insert data into the new schema
                //     let newData = oldData.map(item => ({
                //         salonid: item.salonId,
                //         customerId: item.customer._id,
                //         consultationid: item.consultation._id,
                //         answers: item.answers,
                //         question: item.question,
                //         createdAt: item.createdAt
                //     }));

                //     await completedConsultation.insertMany(newData);
                // }

                var oldData = await consultationform.aggregate(pipeline);

                // Insert data into the new schema with null checks
                let newData = oldData.map(item => ({
                    salonid: item.salonId,
                    customerId: item.customer?._id || null,
                    consultationid: item.consultation._id, // Handle missing customer
                    //   consultationDetails: item.consultation || {}, // Ensure consultation exists
                    answers: item.answers,
                    question: item.consultation.question,
                    createdAt: item.createdAt
                })).filter(item => item.customerId !== null); // Exclude invalid records

                if (newData.length > 0) {
                    await completedConsultation.insertMany(newData);
                }
            }
            return successResponse(
                res,
                200,
                "Data migrated successfully for all salons",
                []
            );

        } catch (error) {
            console.error("Error updating consultations:", error.message);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: error.message,
            });
        }
    },
    update_consultation_data444: async (req, res) => {
        try {
            console.log("Starting consultation assignment...");

            // Step 1: Fetch all salons
            const allSalons = await SaloonUser.find({}, "_id"); // Get only salon IDs
            console.log(`Total salons found: ${allSalons.length}`);

            if (allSalons.length === 0) {
                return res.status(400).json({ success: false, message: "No salons found" });
            }

            let createdSettingsCount = 0;

            // Step 2: Loop through each salon and find related consultations
            for (let salon of allSalons) {
                console.log(`Processing salon: ${salon._id}`);

                // Fetch consultations created by this salon OR created by admin
                const consultations = await consultation.find({
                    $or: [
                        // { formcreatedbyadminPanel: { $exists: true } }, // Admin-created
                        { formcreatedby: salon._id }, // Created by this salon
                    ],
                });


                console.log(`Total consultations found for salon ${salon._id}: ${consultations.length}`);
                const consultations_data = await consultationform.find({
                    $or: [
                        // { consultationId: { consultations._id} }, 
                        { salonId: salon._id }, // Created by this salon
                    ],
                });



                // Step 3: Assign missing consultations to ConsultationSettings
                for (let consultation of consultations) {
                    const existingSetting = await completedConsultation.findOne({
                        salon_id: salon._id,
                        consultationid: consultation._id,
                    });

                    if (!existingSetting) {
                        const newSetting = await completedConsultation.create({

                            ///
                            salonid: salon._id,
                            customerId: consultations_data.customer?._id ,
                            consultationid: consultation._id,
                            answers: consultations_data.answers,
                            question: consultation.question,


                            // consultation_id: consultation._id,
                            // salon_id: salon._id,
                            // created_by_admin: consultation.formcreatedbyadminPanel ? true : false,
                            // created_by_salon: consultation.formcreatedby ? true : false,
                            // see_consultation: consultation.see_consultation, // Default: visible
                            // see_preset_tab: consultation.see_preset_tab, // Default: visible
                        });

                        createdSettingsCount++;
                        console.log(`Created ConsultationSettings for salon ${salon._id} → Consultation: ${consultation._id}`);
                    }
                }
            }

            return res.status(200).json({
                success: true,
                message: "Consultations assigned to salons successfully",
                totalCreated: createdSettingsCount,
            });

        } catch (error) {
            console.error("Error in assigning consultations:", error);
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    update_consultation_data :async (req, res) => {
        try {
            // console.log("Starting consultation assignment...");
    
            // // Step 1: Fetch all salons
            // const allSalons = await SaloonUser.find({}, "_id"); // Get only salon IDs
            // console.log(`Total salons found: ${allSalons.length}`);
    
            // if (allSalons.length === 0) {
            //     return res.status(400).json({ success: false, message: "No salons found" });
            // }
    
            // let createdSettingsCount = 0;
    
            // // Step 2: Loop through each salon and find related consultations
            // for (let salon of allSalons) {
            //     console.log(`Processing salon: ${salon._id}`);
    
            //     // Fetch consultations created by this salon OR created by admin
            //     const consultations = await consultation.find({
            //         $or: [{ formcreatedby: salon._id }], // Created by this salon
            //     });
    
            //     console.log(`Total consultations found for salon ${salon._id}: ${consultations.length}`);
    
            //     const consultations_data = await consultationform.find({
            //         $or: [
            //             { consultationId: { $in: consultations.map(c => c._id) } },
            //             { salonId: salon._id },
            //         ],
            //     });
    
            //     // Step 3: Assign missing consultations to CompletedConsultation
            //     for (let consultation of consultations) {
            //         const existingSetting = await completedConsultation.findOne({
            //             salonid: salon._id,
            //             consultationid: consultation._id,
            //         });
    
            //         if (!existingSetting) {
            //             // Fetch consultation data to get answers
            //             const consultationData = consultations_data.find(data => data.consultationId.toString() === consultation._id.toString());
    
            //             console.log(`Consultation Data for ${consultation._id}:`, consultationData); // Debugging line
    
            //             if (!consultationData) {
            //                 console.log(`No consultation data found for Consultation ID: ${consultation._id}`);
            //                 continue; // Skip if no data found
            //             }
    
            //             // Ensure customerId is properly extracted
            //             const customerId = consultationData.customerId ? consultationData.customerId : null;
    
            //             // Log to verify if customerId is null
            //             if (!customerId) {
            //                 console.log(`CustomerId is null for Consultation ID: ${consultation._id}`);
            //             } else {
            //                 console.log(`CustomerId found: ${customerId} for Consultation ID: ${consultation._id}`);
            //             }
    
            //             const newSetting = await completedConsultation.create({
            //                 salonid: salon._id,
            //                 customerId: customerId,  // Now always assigned properly
            //                 consultationid: consultation._id,
            //                 answers: consultationData.answers || {}, // Ensure answers is an object
            //                 question: consultation.question,
            //             });
    
            //             createdSettingsCount++;
            //             console.log(`Created ConsultationSettings for salon ${salon._id} → Consultation: ${consultation._id}`);
            //         }
            //     }
            // }
    
            // return res.status(200).json({
            //     success: true,
            //     message: "Consultations assigned to salons successfully",
            //     totalCreated: createdSettingsCount,
            // });



    
    // Step 1: Fetch all salons
    const allSalons = await SaloonUser.find({}, "_id");
    console.log(`Total salons found: ${allSalons.length}`);

    if (allSalons.length === 0) {
      return successResponse(res, 400, "No salons found");
    }

    let createdCount = 0;

    // Step 2: Loop through each salon and process consultations for that salon
    for (let salon of allSalons) {
      console.log(`Processing salon: ${salon._id}`);

      const pipeline = [
        { $match: { salonId: salon._id, answers: { $ne: undefined } } },
        { $sort: { createdAt: -1 } },
        { $lookup: { from: "saloonUsers", localField: "salonId", foreignField: "_id", as: "salonId" } },
        { $unwind: { path: "$salonId", preserveNullAndEmptyArrays: true } },
        { $lookup: { from: "customers", localField: "customerId", foreignField: "_id", as: "customerId" } },
        { $unwind: { path: "$customerId", preserveNullAndEmptyArrays: true } },
        { $lookup: { from: "consultations", localField: "consultationId", foreignField: "_id", as: "consultationId" } },
        { $unwind: { path: "$consultationId", preserveNullAndEmptyArrays: true } },
      ];

      // Fetch consultations for the current salon
      const consultations = await consultationform.aggregate(pipeline);

      if (consultations.length === 0) {
        console.log(`No consultations found for salon ${salon._id}`);
        continue;
      }

      // Step 3: Loop through consultations and create records in completed_consultation
      for (let consultationData of consultations) {
        // Log each consultation data and customerId to debug missing fields
        console.log(`ConsultationData for salon ${salon._id}:`, consultationData);
        console.log(`ConsultationData.customerId:`, consultationData.customerId);

        // Check if consultationData.customerId is not null or undefined
        if (!consultationData.customerId || !consultationData.customerId._id) {
          console.log(`Missing customerId for Consultation ID: ${consultationData.consultationId._id}`);
          continue; // Skip if customerId is missing
        }

        const existingConsultation = await completedConsultation.findOne({
        //   consultationid: consultationData.consultationId._id,
          salonid: salon._id,
          customerId: consultationData.customerId._id,
        });

        if (existingConsultation) {
        //   console.log(`Consultation record already exists for Consultation ID: ${consultationData.consultationId._id}`);
          continue; // Skip if the record already exists
        }

        const newConsultationRecord = await completedConsultation.create({
          form_title: consultationData.consultationId.title, // Assuming title field in consultation
          form_description: consultationData.consultationId.description, // Assuming description field in consultation
          is_completed: 1,
          customerId: consultationData.customerId._id,
          formCompletedBy: 'salon', // Or 'customer', depending on your business logic
          consultationid: consultationData.consultationId._id,
          consultation_form_id: consultationData._id,
          category: consultationData.consultationId.category,
          salonid: salon._id,
          answers: consultationData.answers || {}, // Ensure answers is an object
          pre_care_setarray: [],
          question: consultationData.consultationId.questions, // Assuming question field in consultation
        });

        createdCount++;
        console.log(`Created ConsultationSettings for Consultation ID: ${consultationData.consultationId._id}`);
      }
    }
     return res.status(200).json({
                success: true,
                message: "Consultations assigned to salons successfully",
                totalCreated: `${createdCount} completed consultations created successfully`,
      
            });

    // return successResponse(
    //   res,
    //   200,
    //   `${createdCount} completed consultations created successfully`,
    //   {}
    // );
        } catch (error) {
            console.error("Error in assigning consultations:", error);
            return res.status(500).json({ success: false, message: error.message });
        }
    },
    
    
  
    



}