const jwt = require("jsonwebtoken");
const { errResponse } = require("../utils/response");
const Admin = require("../models/admin");


const validateAdmin = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization;
    }
    if (!token) {
      return errResponse(
        res,
        401,
        "Unauthorized to make the following request"
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded._id });

    if (!admin) {
      return errResponse(res, 401, "User Unidentified");
    }
    req.user = admin;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return errResponse(res, 401, "Token Expired");
    }
    return errResponse(res, 500, error.message);
  }
};

module.exports = { validateAdmin };
