const SalonEmail = require("../models/SalonEmailContent")

module.exports = {
    SaveCustomemailcontent: async (EmailBody) => {
        try {




            var saveinformations = await SalonEmail.findOneAndUpdate(
                {
                    $and: [{ salon_id: EmailBody.salon_id },
                    { emailtype: EmailBody.emailtype },]
                },
                {
                    title: EmailBody.title,
                    salon_id: EmailBody.salon_id,
                    description: EmailBody.description,
                    emailtype: EmailBody.emailtype
                },
                {
                    upsert: true,
                    new: true // Return the updated document after upsert
                }
            );
            return saveinformations;
        } catch (error) {
            throw "Please try again"
        }
    },

    Emailcontentlist: async (EmailBody) => {
        return await SalonEmail.find(
            {
                salon_id: EmailBody.salon_id,
                title: {
                    $regex: '.*' + EmailBody?.search + '.*',
                    $options: 'i'
                }
            },
        );

    }
}