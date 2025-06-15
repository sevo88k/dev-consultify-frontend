var jwt = require("jsonwebtoken");

const models = require("../models");

module.exports = async function (req, res, next) {
  try {
    if (req.headers && req.headers.authorization) {
      var credentials = req.headers.authorization;

      var token = jwt.verify(credentials, process.env.JWT_SECRET);

      if (token) {
       
          var customer = await models.Customer.findById({
            _id: token.data._id,
          });
        
       
        if (customer) {
            req.identity = customer;
            next();
        } else {
          res.json({
            status: 401,
            message: "Token is Invalid",
          });
        }
      } else {
        res.json({
          status: 401,
          message: "Token is Required",
        });
      }
    } else {
      res.json({
        status: 401,
        message: "Token is Invalid",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ statusCode: 401, message: "Unauthorized User" });
  }
};
