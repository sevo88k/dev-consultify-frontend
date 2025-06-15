const mongoose = require("mongoose");

const HelpSupportSchema = new mongoose.Schema(
    {
        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SaloonUser",
        },
        
        customerid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customers",
        },

   
        title: String,

        description: String,
    },
    { timestamps: true }
);

const HelpSupport = mongoose.model("HelpSupport", HelpSupportSchema);

module.exports = HelpSupport
