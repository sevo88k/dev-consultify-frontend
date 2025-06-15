require("dotenv").config();
const mongoose = require("mongoose");

const landingPageSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, maxLength: 30 },
    surname: { type: String, required: true, maxLength: 30 },
    salon_name: { type: String, required: true },
    email: {
      type: String,
     // unique: true,
      required: true,
      maxLength: 50,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    
    //0 -> superadmin 1 -> admin
    role: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const LandingPage = mongoose.model("LandingPage", landingPageSchema, "landingPage");

module.exports = LandingPage;
