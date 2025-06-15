require("dotenv").config();
const mongoose = require("mongoose");

const clientUserSchema = new mongoose.Schema(
    {
        memberNo: Number,
        firstname: { type: String,  maxLength: 120 },
        lastname: { type: String,  maxLength: 120 },

        email: {
            type: String,
            maxLength: 50,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },

        staffId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StaffUser'
        },

        salonId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SaloonUser'
        },

        address1: String,
        address2: String,
        city: String,
        postcode: String,
        dob:Date,
        no_of_consultation:{
            type: Number,
            default: 0
        },
        //
          zip_code: {
            type: String
          },
          otherCountries: {
            type: String
          },
        //

        phone_number: { type: String },
        password: { type: String, maxLength: 100 },

        status: { type: Number, default: 1 },
        //role -> customer-0
        role: { type: Number, default: 0 },

    },
    { timestamps: true }
);




const ClientUser = mongoose.model("ClientUser", clientUserSchema, "clientUsers");

module.exports = ClientUser;
