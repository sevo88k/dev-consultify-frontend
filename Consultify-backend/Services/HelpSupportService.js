const HelpSupport = require("../models/HelpandSupport");

module.exports = {

    Informationsavehelpandsupportforcustomer: async (ReqBody, salonid) => {

        try {
            ReqBody.salonId = salonid;

            return await HelpSupport.create(ReqBody);

        } catch (error) {

        }
    },

    Informationsavehelpandsupport: async (ReqBody, salonid) => {

        try {
            ReqBody.customerid = salonid;

            return await HelpSupport.create(ReqBody);

        } catch (error) {

        }
    },

    ListHelpsupport: async (ReqBody) => {
        try {
            return await HelpSupport.find({}).populate(['salonId', 'customerid']);
        } catch (error) {
            console.log(error.message)

        }
    },

    delete: async (ReqBody) => {
        try {
            return await HelpSupport.findByIdAndDelete({
                _id: ReqBody?.id
            });
        } catch (error) {
            console.log(error.message)
        }
    }



}

