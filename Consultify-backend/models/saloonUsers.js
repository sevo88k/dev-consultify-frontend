require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const saloonUserSchema = new mongoose.Schema(
  {
    memberNo: Number,
    firstname: { type: String, maxLength: 60 },
    lastname: { type: String, maxLength: 60 },
    email: {
      type: String,
      maxLength: 50,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: { type: String, maxLength: 100 },
    //SALOON INFO
    salonname: String,
    postcode: String,
    address: String,
    //subscription 1->standared  2->pro
    subscription: Number,
    description: String,
    website_url: String,
    contact_no: String,
    parking: String,
    child_availability: String,
    amenities: String,
    salon_profile: String,
    leaveformstep: String,
    completeform: {
      type: Number,
      default: 0
    },
    contact_pref_notify: {
      type: Boolean,
    },
    pronouns: {
      type: String,

    },

    promotionaloffers: {
      type: Boolean,
    },

    //Male 0
    //Female 1
    //Non Binary 2
    //Others 3
    //Prefer not to say (with text box) 4

    gender: {
      type: Number
    },
    self_describe: {
      type: String
    },
    //PERSONAL INFO
    personal_email: {
      type: String,
      maxLength: 50,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    personal_phone: String,
    personal_address1: String,
    personal_address2: String,
    personal_city: String,
    personal_postcode: String,
    openingHoursId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OpeningHours'
    },
    instagram_info: String,
    facebook_info: String,
    linkedin_info: String,
    hear_about_us: String,
    lastLogin: { type: Date },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    status: { type: Number, default: 1 },
    //role -> customer-0
    role: { type: Number, default: 0 },

    isVerified: {
      type: Boolean,
      default: false
    },

    verifiedToken: {
      type: String,
    },

    subscriptionId: {
      type: String
    },
    ///
    park_availability_notes: {
      type: String
    },

    first_line_address: {
      type: String
    },

    second_line_address: {
      type: String
    },

    city: {
      type: String
    },

    zip_code: {
      type: String
    },

    otherCountries: {
      type: String
    },
    
    ///
    canceldate: {
      type: Date
    },

    status_account: { type: Number, default: 1 },
    
    device_token: String,
  },
  { timestamps: true }
);
saloonUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

saloonUserSchema.methods.updateLogin = function () {
  this.lastLogin = Date.now();
};

saloonUserSchema.methods.updateDeviceToken = function (data) {
  this.device_token = data
};

saloonUserSchema.methods.checkPass = async function (givenPassword) {
  console.log(givenPassword, this.password, "this.password")
  return await bcrypt.compare(givenPassword, this.password);
};

saloonUserSchema.methods.getJwt = function () {
  return jwt.sign({ _id: this._id, data: this }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};


saloonUserSchema.methods.getResetPasswordToken = function () {

  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const SaloonUser = mongoose.model("SaloonUser", saloonUserSchema, "slaoonUsers");

module.exports = SaloonUser;
