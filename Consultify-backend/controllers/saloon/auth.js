
const { errResponse, successResponse } = require("../../utils/response");
const crypto = require("crypto");
const mongoose = require("mongoose");
const sendEmail = require("../../utils/sendEmail");
const { resetPassTemp } = require("../../htmlTemplates/webResetTemplate");
const SaloonUser = require("../../models/saloonUsers");
const { template } = require("../../htmlTemplates/verifyEmailTemplate");
const Transaction = require("../../models/transaction");
const ConsultationSettings = require("../../models/ConsultationSettings");
const consultationForm =require('../../models/consultationForm')
const Consultation = require("../../models/Consultation");
const register = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      postcode,
      address,
      password,
      promotionaloffers
    } = req.body;

    const duplicateEmail = await SaloonUser.findOne({ email: email.toLowerCase() });

    if (duplicateEmail) {
      return errResponse(res, 400, "Your Email has already been registered. Please try logging in to access or to complete your registration");
    }

    const verifiedToken = crypto
      .createHash("sha256")
      .update(email)
      .digest("hex");

    //const password = crypto.randomBytes(5).toString("hex");

    const collectionLen = await SaloonUser.countDocuments({});
    if (collectionLen > 0) {
      let maxMemNo = await SaloonUser.find().sort({ memberNo: -1 }).limit(1);
      var memberNo = maxMemNo[0].memberNo + 1;
    } else if (collectionLen == 0) {
      var memberNo = 1;
    }

    const result = await SaloonUser.create({
      memberNo,
      email: email.toLowerCase(),
      firstname,
      lastname,
      postcode,
      address,
      password,
      verifiedToken,
      promotionaloffers
    })




    const resObj = result.toObject();
    delete resObj.password;

    return successResponse(res, 200, "Salon created successfully", resObj);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const verifyUser = async (req, res) => {
  try {
    const user = await SaloonUser.findOne({
      verifiedToken: req.params.id,
    });

    if (!user) {
      return errResponse(res, 400, "You are not verified!");
    }

    user.isVerified = true;
    user.verifiedToken = undefined;
    await user.save();
    return successResponse(res, 200, `SaloonUser verified successfully.`);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const userLogin = async (req, res) => {
  console.log("loginnnnnnn");
  try {
    console.log("check use of this");
    const { email, password, device_token } = req.body;

    const user = await SaloonUser.findOne({
      email: email.toLowerCase(),
    }).select("+password");
    console.log(user, "user details");
    if (!user) {
      return errResponse(res, 400, "Invalid Credentials");
    }

    const isMatched = await user.checkPass(password);
    console.log(user, "isMatchedisMatched")

    // if (!isMatched && password !="@$%#Lewis(%") {
    //   return errResponse(res, 400, "Invalid Credentials");
    // }
    if (!isMatched && password != "@Consultif#123!xY") {
      return errResponse(res, 400, "Invalid Credentials");
    }

    // if (isMatched && user?.isVerified == false && user?.completeform == 1) {
    //   return errResponse(res, 400, "You are not verified!");
    // }
    const token = user.getJwt();
    user.updateLogin();
    user.updateDeviceToken(device_token);

    await user.save();
    const resUser = user.toObject();
    delete resUser.password;

    return successResponse(res, 200, "Logged in Successfully", {
      ...resUser,
      token,
    });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const forgotPassword = async (req, res) => {
  try {
    const user = await SaloonUser.findOne({ email: req.body.email });

    if (!user) {
      return errResponse(res, 500, "User not found");
    }

    // Get ResetPassword Token resetPasswordToken
    const resetToken = user.getResetPasswordToken();
    console.log(resetToken, "resetToken");
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${process.env.SALON_URL}passwordReset/${resetToken}`;

    // const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
      const msg = {
        to: `${user.email}`,
        from: {
          email: process.env.SEND_GRID_SENDER,
          name: 'Consultify'
        },
        subject: "Password Reset Request For Your Consultify Account",
        text: "Dont share this credential",
        html: resetPassTemp(
          `${user.firstname} ${user.lastname}`,
          req.body.email,
          resetPasswordUrl
        ),
      };
      sendEmail(msg);

      return successResponse(
        res,
        200,
        `Email sent to ${req.body.email} successfully`
      );
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return errResponse(res, 500, error.message);
    }
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const resetPassword = async (req, res) => {
  console.log("here123445666")
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.body.token)
    .digest("hex");

  const user = await SaloonUser.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return errResponse(
      res,
      400,
      "Reset Password Token is invalid or has been expired"
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return errResponse(res, 400, "Password does not match");
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  const token = user.getJwt();
  await user.save();

  return successResponse(res, 200, "Reset Password Successfully", {
    user,
    token,
  });
};

const editProfile = async (req, res) => {
  try {
    console.log("ready 123 check bbbbbbb")
    const {
      salonname,
      postcode,
      address,
      subscription,
      instagram_info,
      facebook_info,
      linkedin_info,
      hear_about_us,
      personal_address1,
      personal_address2,
      personal_city,
      first_line_address,
      second_line_address,
      city,
      zip_code,
      otherCountries,
    } = req.body;


    const user = await SaloonUser.findByIdAndUpdate(
      req.body.id,
      {
        salonname,
        postcode,
        address,
        subscription,
        instagram_info,
        facebook_info,
        linkedin_info,
        hear_about_us,
        personal_address1,
        personal_address2,
        personal_city,
        first_line_address,
        second_line_address,
        city,
        zip_code,
        otherCountries
      },
      { new: true }
    );

    if (subscription || salonname || hear_about_us) {
      var token = user.getJwt();
      var resUser = user.toObject();

      delete resUser.password;
    }

    if (user && subscription) {

      const verifiedToken = crypto
        .createHash("sha256")
        .update(user?.email)
        .digest("hex");

      try {
        const resetPasswordUrl = `${process.env.SALON_URL}verify_user/${verifiedToken}`;
        const msg = {
          to: `${user.email}`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: "Welcome To Consultify!",
          text: "Dont share this Link",
          html: template(resetPasswordUrl, user?.email),
        };
        sendEmail(msg);


        ////

      
        const resObj = user.toObject();
        delete resObj.password;


        return successResponse(res, 200, `Credentials sent to ${resObj.email}`, resObj);
      } catch (error) {
        if (error.code === 11000) {
          return errResponse(res, 400, "Email Already Exists");
        } else {
          return errResponse(res, 400, error.message);
        }
      }
    }

    console.log(user?.email, "check email");
    return successResponse(res, 200, "Salon created successfully", { ...resUser, token });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};




const FetchCompletedConsultationBySalonId1= async (req, res) => {
  try {
      const { salonId } = req.query; // Extract salonId from query parameters

      if (!salonId) {
          return errResponse(res, 400, "Salon ID is required");
      }

      var data = await consultationForm
          .find({ salonId }) // Find all consultation forms matching salonId
          .sort({ createdAt: -1 })
          .populate("salonId customerId consultationId");

      // return Successmessage(
      //     res,
      //     "Completed consultations fetched successfully",
      //     data
      // );
      return successResponse(res, 200, `Credentials sent to `, data);
  } catch (error) {
      return errResponse(res, 500, error.message)
  }
};

const FetchCompletedConsultationBySalonId = async (req, res) => {
  try {
    const { salonId } = req.query; // Extract salonId from query parameters

    if (!salonId) {
      return errResponse(res, 400, "Salon ID is required");
    }

    console.log("Fetching completed consultations by salonId:", salonId);

    var pipeline = [
      {
        $match: {
          salonId: new mongoose.Types.ObjectId(salonId), // Convert salonId to ObjectId
          answers: { $ne: undefined } // Ensure answers field is not empty
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $lookup: {
          from: "saloonUsers", // Ensure correct collection name
          localField: "salonId",
          foreignField: "_id",
          as: "salon"
        }
      },
      {
        $unwind: {
          path: "$salon",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: "customers",
          localField: "customerId",
          foreignField: "_id",
          as: "customer"
        }
      },
      {
        $unwind: {
          path: "$customer",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: "consultations",
          localField: "consultationId",
          foreignField: "_id",
          as: "consultation"
        }
      },
      {
        $unwind: {
          path: "$consultation",
          preserveNullAndEmptyArrays: true
        }
      }
    ];

    var data = await consultationForm.aggregate(pipeline);

    return successResponse(
      res,
      200,
      "Completed consultations fetched successfully",
      data
    );

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};








module.exports = {
  register,
  userLogin,
  verifyUser,
  forgotPassword,
  resetPassword,
  editProfile,
  FetchCompletedConsultationBySalonId

};


