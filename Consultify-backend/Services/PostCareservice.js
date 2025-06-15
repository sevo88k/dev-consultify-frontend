
const Customer = require("../models/Customer");
const PostcareAdvice = require("../models/PostcareAdvice");
const SalonEmail = require("../models/SalonEmailContent");
const SaloonUser = require("../models/saloonUsers");
const { Sendtoclient } = require("../utils/Adminsendgrid");
const SentEmail = require('../models/SentEmail');
const ClickEvent = require('../models/ClickEvent');
const { default: mongoose } = require("mongoose");
module.exports = {

    Savepostcare111: async (PostcareBody) => {
        try {

            if (PostcareBody.id != "" && PostcareBody.id != undefined) {


                var informationcheckexists = await PostcareAdvice.findOne(

                    {
                        $and: [{
                            _id: PostcareBody.id
                        }, {
                            salon_id: PostcareBody.salon_id
                        }]
                    },
                )


                var details = await PostcareAdvice.findById(

                    {
                        _id: PostcareBody.id
                    },


                )

                if (informationcheckexists != null || PostcareBody.status != undefined) {


                    if (details.admin_id != undefined) {
                        var salonid = details?.salonActiveArr || [];

                        var index = salonid.findIndex(obj => obj.salon_id.toString() == PostcareBody.salon_id.toString());
                        console.log(index, "indexindex")

                        if (index !== -1) {
                            salonid.splice(index, 1);

                        } else {
                            salonid.push({ salon_id: PostcareBody.salon_id, status: PostcareBody.status });
                        }


                        var information = await PostcareAdvice.findByIdAndUpdate(

                            {
                                _id: PostcareBody.id
                            },
                            {
                                $set: {

                                    salonActiveArr: salonid



                                }
                            },
                            {

                                new: true
                            }
                        );
                        return information

                    } else {
                        var information = await PostcareAdvice.findByIdAndUpdate(

                            {
                                _id: PostcareBody.id
                            },
                            {
                                $set: {
                                    status: PostcareBody.status,
                                    treatmentname: PostcareBody.treatmentname,
                                    category: PostcareBody.category,
                                    description: PostcareBody.description,
                                    pre_care_advice: PostcareBody.pre_care_advice,
                                    notes: PostcareBody.notes,
                                    after_care_advice: PostcareBody.after_care_advice,


                                }
                            },
                            {

                                new: true
                            }
                        );
                        return information
                    }



                } else {


                    PostcareBody.postcare_id = PostcareBody.id;

                    return await PostcareAdvice.create(PostcareBody);
                }







            } else {

                return await PostcareAdvice.create(PostcareBody);

            }



        } catch (error) {
            throw "Please try again"
        }
    },

    Savepostcare22: async (PostcareBody) => {
        try {
            if (PostcareBody.id && PostcareBody.id !== "") {
                var informationcheckexists = await PostcareAdvice.findOne({
                    $and: [
                        { _id: PostcareBody.id },
                        { salon_id: PostcareBody.salon_id }
                    ]
                });

                var details = await PostcareAdvice.findById(PostcareBody.id);

                if (informationcheckexists || PostcareBody.status !== undefined) {
                    let seePrecarePresetsValue = PostcareBody.status == 1 ? 0 : 1;

                    if (details?.admin_id !== undefined) {
                        var salonid = details?.salonActiveArr || [];
                        var index = salonid.findIndex(obj => obj.salon_id.toString() === PostcareBody.salon_id.toString());

                        if (index !== -1) {
                            salonid.splice(index, 1);
                        } else {
                            salonid.push({ salon_id: PostcareBody.salon_id, status: PostcareBody.status });
                        }

                        var information = await PostcareAdvice.findByIdAndUpdate(
                            PostcareBody.id,
                            {
                                $set: { salonActiveArr: salonid, see_precare_presets: seePrecarePresetsValue }
                            },
                            { new: true }
                        );
                        return information;
                    } else {
                        var information = await PostcareAdvice.findByIdAndUpdate(
                            PostcareBody.id,
                            {
                                $set: {
                                    status: PostcareBody.status,
                                    treatmentname: PostcareBody.treatmentname,
                                    category: PostcareBody.category,
                                    description: PostcareBody.description,
                                    pre_care_advice: PostcareBody.pre_care_advice,
                                    notes: PostcareBody.notes,
                                    after_care_advice: PostcareBody.after_care_advice,
                                    see_precare_presets: seePrecarePresetsValue
                                }
                            },
                            { new: true }
                        );
                        return information;
                    }
                } else {
                    PostcareBody.postcare_id = PostcareBody.id;
                    PostcareBody.see_precare_presets = PostcareBody.status == 1 ? 0 : 1;

                    return await PostcareAdvice.create(PostcareBody);
                }
            } else {
                PostcareBody.see_precare_presets = PostcareBody.status == 1 ? 0 : 1;
                return await PostcareAdvice.create(PostcareBody);
            }
        } catch (error) {
            throw "Please try again";
        }
    },

    Savepostcare: async (PostcareBody) => {
        try {
            if (PostcareBody.id && PostcareBody.id !== "") {
                var informationcheckexists = await PostcareAdvice.findOne({
                    $and: [
                        { _id: PostcareBody.id },
                        { salon_id: PostcareBody.salon_id }
                    ]
                });

                var details = await PostcareAdvice.findById(PostcareBody.id);

                if (informationcheckexists || PostcareBody.status !== undefined) {
                    let seePrecarePresetsValue = PostcareBody.status == 1 ? 0 : 1;
                    let updateQuery = { $set: { see_precare_presets: seePrecarePresetsValue } };

                    if (details?.admin_id !== undefined) {
                        var salonid = details?.salonActiveArr || [];

                        if (PostcareBody.status == 0) {
                            // If unticked (status == 0), remove salon_id from salonActiveArr
                            salonid = salonid.filter(obj => obj.salon_id.toString() !== PostcareBody.salon_id.toString());
                        } else {
                            // If ticked (status == 1), add salon_id if not already present
                            let index = salonid.findIndex(obj => obj.salon_id.toString() === PostcareBody.salon_id.toString());
                            if (index === -1) {
                                salonid.push({ salon_id: PostcareBody.salon_id, status: PostcareBody.status });
                            }
                        }

                        updateQuery.$set.salonActiveArr = salonid;
                    } else {
                        // If not an admin-created preset, update other fields
                        updateQuery.$set = {
                            ...updateQuery.$set,
                            status: PostcareBody.status,
                            treatmentname: PostcareBody.treatmentname,
                            category: PostcareBody.category,
                            description: PostcareBody.description,
                            pre_care_advice: PostcareBody.pre_care_advice,
                            notes: PostcareBody.notes,
                            after_care_advice: PostcareBody.after_care_advice
                        };
                    }

                    var information = await PostcareAdvice.findByIdAndUpdate(
                        PostcareBody.id,
                        updateQuery,
                        { new: true }
                    );
                    return information;
                } else {
                    // Create new preset
                    PostcareBody.postcare_id = PostcareBody.id;
                    PostcareBody.see_precare_presets = PostcareBody.status == 1 ? 0 : 1;
                    return await PostcareAdvice.create(PostcareBody);
                }
            } else {
                // Create new preset
                PostcareBody.see_precare_presets = PostcareBody.status == 1 ? 0 : 1;
                return await PostcareAdvice.create(PostcareBody);
            }
        } catch (error) {
            throw "Please try again";
        }
    },


    poastcarelist: async (PostcareBody) => {


        let list_data = await PostcareAdvice.find(
            {
                $and: [
                    {
                        $or: [
                            { salon_id: PostcareBody.salon_id },
                            { admin_id: { $ne: undefined } }
                        ]
                    },
                    { is_deleted: { $ne: 1 } }, // Exclude records where is_deleted is 1
                    { see_postcare: 0 }
                ],
                treatmentname: {
                    $regex: '.*' + PostcareBody?.search + '.*',
                    $options: 'i'
                }
            }
        )
            .sort({ treatmentname: 1 }) // Sort by treatmentname in ascending order
            .populate('admin_id', 'salon_id');

        return list_data;

    },

    poastcaredetails: async (PostcareBody) => {

        return await PostcareAdvice.findById(

            {
                _id: PostcareBody.id,

            },


        );

    },

    // sendemailtocustomer: async (postcareBody, salonemail) => {
    //     // let prepostcaredetails = await PostcareAdvice.findById({
    //         //     _id: postcareBody.precarid
    //         // })
            
    //     let prepostcaredetails = await PostcareAdvice.findById(postcareBody.precarid) 
    //     console.log(prepostcaredetails, "checkkkk");

    //     let customerdetails = await Customer.findById({
    //         _id: postcareBody.id
    //     })
        
    //     let emailcontent = await SalonEmail.findOne({

    //         $and: [{ salon_id: salonemail._id },
    //         { emailtype: 3 }]
    //     })

    //     console.log(salonemail._id, "prepostcaredetails")
    //     const sentEmail = new SentEmail({
    //         salon_id: salonemail._id,
    //         customer_id: customerdetails._id,
    //         precare_id: prepostcaredetails._id,
    //     });
    //     await sentEmail.save();

    //     console.log(sentEmail, "sentEmail dta here")
    //     await Sendtoclient(prepostcaredetails, customerdetails, salonemail, emailcontent, sentEmail, precare_id)


    //     return customerdetails

    // },
    // this one is for  while send multiple pre cares to customer
   
    sendemailtocustomer: async (postcareBody, salonemail) => {
        try {
            console.log(postcareBody.id, "checkkkk");
    
            // Ensure IDs are valid ObjectIds
            if (!mongoose.Types.ObjectId.isValid(postcareBody.precarid)) {
                throw new Error("Invalid precare ID");
            }
            if (!mongoose.Types.ObjectId.isValid(postcareBody.id)) {
                throw new Error("Invalid customer ID");
            }
    
            let prepostcaredetails = await PostcareAdvice.findById(postcareBody.precarid);
            let customerdetails = await Customer.findById(postcareBody.id);
    
            if (!prepostcaredetails) {
                throw new Error("Pre-care details not found");
            }
            if (!customerdetails) {
                throw new Error("Customer details not found");
            }
    
            let emailcontent = await SalonEmail.findOne({
                $and: [
                    { salon_id: salonemail._id },
                    { emailtype: 3 }
                ]
            });
    
            console.log(salonemail._id, "prepostcaredetails");
    
            const sentEmail = new SentEmail({
                salon_id: salonemail._id,
                customer_id: customerdetails._id,
                precare_id: prepostcaredetails._id,
            });
    
            await sentEmail.save();
            console.log(sentEmail, "sentEmail data here");
    
            await Sendtoclient(prepostcaredetails, customerdetails, salonemail, emailcontent, sentEmail);
    
            return customerdetails;
    
        } catch (error) {
            console.error("Error in sendemailtocustomer:", error.message);
            throw error;
        }
    },
    
   
    sendemailtocustomer1: async (postcareBody, salonemail) => {
        console.log(postcareBody.id, "check customer ID");

        let customerdetails = await Customer.findById({ _id: postcareBody.id });
        let emailcontent = await SalonEmail.findOne({
            $and: [{ salon_id: salonemail._id }, { emailtype: 3 }]
        });

        const sentEmails = [];

        for (const precarid of postcareBody.precarid) {
            let prepostcaredetails = await PostcareAdvice.findById({ _id: precarid });

            console.log(salonemail._id, "prepostcaredetails");

            const sentEmail = new SentEmail({
                salon_id: salonemail._id,
                customer_id: customerdetails._id,
                precare_id: prepostcaredetails._id,
            });
            await sentEmail.save();

            await Sendtoclient(prepostcaredetails, customerdetails, salonemail, emailcontent, sentEmail);

            sentEmails.push(sentEmail);
        }

        return { customerdetails, };
    },


    //for admin precaresetes

    Savepostcareadmin: async (PostcareBody) => {
        try {

            if (PostcareBody.id != "" && PostcareBody.id != undefined) {

                var information = await PostcareAdvice.findByIdAndUpdate(
                    { _id: PostcareBody.id },
                    {
                        $set: {
                            status: PostcareBody.status,
                            treatmentname: PostcareBody.treatmentname,
                            description: PostcareBody.description,
                            category: PostcareBody.category,
                            pre_care_advice: PostcareBody.pre_care_advice,
                            after_care_advice: PostcareBody.after_care_advice,
                            notes: PostcareBody.notes,
                            see_precare_presets: 1,
                            see_postcare: 0



                        }
                    },
                    {

                        new: true
                    }
                );




                return information
            } else {


                PostcareBody.see_precare_presets = 1;
                PostcareBody.see_postcare = 0;


                return await PostcareAdvice.create(PostcareBody);

            }



        } catch (error) {
            throw "Please try again"
        }
    },

    poastcarelistAdmin: async (PostcareBody) => {

        return await PostcareAdvice.find(


            {
                admin_id: PostcareBody?.admin_id,
                treatmentname: {
                    $regex: '.*' + PostcareBody?.search + '.*',
                    $options: 'i'
                }
            },


        ).sort({ treatmentname: 1 }).populate('admin_id', 'salon_id');

    },


    poastcaredetailsAdmin: async (PostcareBody) => {

        return await PostcareAdvice.findById(

            {
                _id: PostcareBody.id,

            },


        );

    },

    poastcaredeleteAdmin: async (PostcareBody) => {

        return await PostcareAdvice.findByIdAndDelete(

            {
                _id: PostcareBody.id,

            },


        );

    }




}