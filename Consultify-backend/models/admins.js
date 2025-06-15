require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, maxLength: 30 },
    lastName: { type: String, required: true, maxLength: 30 },
    email: {
      type: String,
      unique: true,
      required: true,
      maxLength: 50,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: { type: String, required: true, maxLength: 100, select: false },
    //2 -> superadmin 3 -> admin
    role: { type: Number, default: 2 },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

adminSchema.methods.checkPass = async function (givenPassword) {
  return await bcrypt.compare(givenPassword, this.password);
};

adminSchema.methods.getJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const Admin = mongoose.model("Admin", adminSchema, "admins");

module.exports = Admin;
