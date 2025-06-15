const Faq = require("../models/Faq");

module.exports = {

    SaveUpdateFaq: async (FAqBody) => {
        try {

            if (FAqBody.id != "" && FAqBody.id != undefined) {


                var information = await Faq.findByIdAndUpdate(
                    { _id: FAqBody.id },
                    {
                        $set: {
                            question: FAqBody.question,
                            usertype: FAqBody.usertype,
                            answer: FAqBody.answer,
                            Faq_category_id:FAqBody.Faq_category_id



                        }
                    },
                    {

                        new: true
                    }
                );
                return information
            } else {

                return await Faq.create(FAqBody);

            }



        } catch (error) {
            throw "Please try again"
        }
    },
    updateFaqPriority : async (id, priority) => {
        return await Faq.findByIdAndUpdate(
            id, 
            { priority: priority }, 
            { new: true } // Return updated document
        );
    },
    
     getFaqsByIds: async (ids) => {
        return await Faq.find({ _id: { $in: ids } }).sort({ priority: 1 }); // Sort by priority
    },

    faqdelete: async (FAqBody) => {
        return await Faq.findByIdAndDelete({ _id: FAqBody.id });
    },

    faqdetails: async (FAqBody) => {
        return await Faq.findById({ _id: FAqBody.id });
    },


    // faqlist: async (FAqBody) => {
    //     return await Faq.find({});
    // }

     faqlist: async (FaqBody) => {
        try {
            const filter = {}; 
    
            if (FaqBody.Faq_category_id) {
                filter.Faq_category_id = FaqBody.Faq_category_id;
            }
            return await Faq.find(filter).populate("Faq_category_id");
        } catch (error) {
            throw new Error(error.message);
        }
    },

}