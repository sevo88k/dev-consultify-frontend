require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const staffUserSchema = new mongoose.Schema(
  {
    memberNo: Number,
    //STAFF NAME
    fullname: { type: String,  maxLength: 120 },
   
    
    email: {
      type: String,
      maxLength: 50,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: { type: String, maxLength: 100 },
    salonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SaloonUser'
    },
    amenities: String,
    bio: String,
    staff_profile: String,

    //PERSONAL INFO
    firstname: { type: String,  maxLength: 60 },
    lastname: { type: String,  maxLength: 60 },
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
    //END

    contact_pref_notify:{
      type: Boolean
    },

    //NO. OF TIMES LOGIN
    login_count: {
      type: Number,
      default: 0
    },
    openingHoursId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StaffOpeningHours'
    },

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

    device_token: String,

  },
  { timestamps: true }
);




staffUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

staffUserSchema.methods.updateLogin = function () {
  this.lastLogin = Date.now();
};

staffUserSchema.methods.updateDeviceToken = function (data) {
  this.device_token = data
};

staffUserSchema.methods.checkPass = async function (givenPassword) {
  console.log(givenPassword, this.password, "this.password")
  return await bcrypt.compare(givenPassword, this.password);
};

staffUserSchema.methods.getJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// Generating Password Reset Token
staffUserSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const StaffUser = mongoose.model("StaffUser", staffUserSchema, "staffUsers");

module.exports = StaffUser;
