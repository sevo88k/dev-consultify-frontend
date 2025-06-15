const mongoose = require("mongoose");

const SalonEmailSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxLength: 30 },
    //1 for welcome email content 
    emailtype: {   
       type:Number,
       default:1
     },



    salon_id: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SaloonUser'
     },
   
    description: { type: String },
    
  },
  { timestamps: true }
);

const SalonEmail = mongoose.model("SalonEmail", SalonEmailSchema, "salonemail");

module.exports = SalonEmail;