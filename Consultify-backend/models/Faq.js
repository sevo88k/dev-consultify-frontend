const mongoose = require('mongoose');
const schema = mongoose.Schema;
const FaqSchema = new schema({
    question: {
        type: String,
        require: true
    },

    usertype: {
        type: String,
        require: true
    },

    answer: {
        type: String,
        require: true
    },

    Faq_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "faq_category",
    },


    priority: {
        type: Number,
    }

}, {
    timestamps: true
})

const Faq = mongoose.model("Faq", FaqSchema, "faq");

module.exports = Faq;
