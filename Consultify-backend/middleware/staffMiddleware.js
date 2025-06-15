const jwt = require("jsonwebtoken");
const StaffUser = require("../models/staffUsers");
const { errResponse } = require("../utils/response");

const staffMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization;
    }

    if (!token) {
      return errResponse(res, 401, "Unauthorized to make the following request");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded,"decoded")
    const user = await StaffUser.findById(decoded._id);

    if (!user) {
      return errResponse(res, 501, "Session expired");
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return errResponse(res, 401, "Token Expired");
    }
    return errResponse(res, 500, error.message);
  }
};

module.exports = staffMiddleware;
