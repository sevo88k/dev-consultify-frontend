const jwt = require("jsonwebtoken");
const SaloonUser = require("../models/saloonUsers");
const { errResponse } = require("../utils/response");

const salonMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization;
    }

    if (!token) {
      return errResponse(res, 401, "Unauthorized to make the following request");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await SaloonUser.findById(decoded._id);

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

module.exports = salonMiddleware;
