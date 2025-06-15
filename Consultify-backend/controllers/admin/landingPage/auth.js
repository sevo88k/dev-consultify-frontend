const LandingPage = require("../../../models/landingPage");

const { errResponse, successResponse } = require("../../../utils/response");

const { registerTemplate, } = require("../../../htmlTemplates/registerTemplate");

const sendEmail = require("../../../utils/sendEmail");

const Admin = require("../../../models/admins");

const registerLandingPage1 = async (req, res) => {
  try {
    const {
      firstName,
      surname,
      salon_name,
      email,
    } = req.body;

    // const duplicateEmail = await LandingPage.findOne({ email: email.toLowerCase() });

    // if (duplicateEmail) {
    //     return errResponse(res, 400, "Email Already Exists");
    // }

    await LandingPage.create({
      firstName,
      surname,
      salon_name,
      email: email.toLowerCase(),
    })
      .then((result) => {
        const responseObj = result.toObject();
        const msg = {
          to: `${email.toLowerCase()}`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: `Consultify - You’re a VIP!`,
          text: "Dont share this Link",
          html: registerTemplate(responseObj),
        };

        const msgtoconsultifyapp = {
          to: `hello@consultifyapp.com`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: `New Interest Submitted`,
          text: "Dont share this Link",
          html:
            `<strong>Name: ${responseObj?.firstName + " " + responseObj?.surname} <br> 
                    Salon Name: ${responseObj?.salon_name} <br>
                    Email: ${responseObj?.email}</strong> <br>
                    `,
        };

        // const msgtolewis = {
        //     to: `lewis@foxbegin.com`,
        //     from: process.env.SEND_GRID_SENDER,
        //     subject: `New Interest Submitted`,
        //     text: "Dont share this Link",
        //     html:
        //     `<strong>Name: ${responseObj?.firstName + " " + responseObj?.surname} <br> 
        //     Salon Name: ${responseObj?.salon_name} <br>
        //     Email: ${responseObj?.email}</strong> <br>
        //     `,
        // };

        sendEmail(msg)
        sendEmail(msgtoconsultifyapp)
        // sendEmail(msgtolewis)

        delete responseObj.password;
        successResponse(res, 200, "Registered Successfully", responseObj);
      })
    // .catch((error) => {
    //     if (error.code === 11000) {
    //       //  return errResponse(res, 400, "Email Already Exists");
    //     } else {
    //         return errResponse(res, 400, error.message);
    //     }
    // });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const registerLandingPage = async (req, res) => {
  try {
    const {
      firstName,
      surname,
      salon_name,
      email,
    } = req.body;

    await LandingPage.create({
      firstName,
      surname,
      salon_name,
      email: email.toLowerCase(),
    })
      .then((result) => {
        const responseObj = result.toObject();
        const msg = {
          to: `${email.toLowerCase()}`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: `Consultify - You’re a VIP!`,
          text: "Dont share this Link",
          html: registerTemplate(responseObj),
        };

        const msgtoconsultifyapp = {
          to: `hello@consultifyapp.com`,
          from: {
            email: process.env.SEND_GRID_SENDER,
            name: 'Consultify'
          },
          subject: `New Interest Submitted`,
          text: "Dont share this Link",
          html:
            `<strong>Name: ${responseObj?.firstName + " " + responseObj?.surname} <br> 
                    Salon Name: ${responseObj?.salon_name} <br>
                    Email: ${responseObj?.email}</strong> <br>
                    `,
        };


        sendEmail(msg)
        sendEmail(msgtoconsultifyapp)

        delete responseObj.password;
        successResponse(res, 200, "Registered Successfully", responseObj);
      })

  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const createSuperAdmin = async (req, res) => {
  try {

    const isAdmin = await Admin.findOne({ email: "admin@riggigs.com" });

    if (isAdmin) {
      return successResponse(res, 200, "Admin already created");
    }

    const admin = await Admin.create({
      firstName: "super",
      lastName: "admin",
      email: "admin@consultify.com",
      password: "password",
    });

    const responseObj = admin.toObject();
    delete responseObj.password;
    return successResponse(res, 200, "Admin created successfully", responseObj);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body, "aaaaa")
    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!admin) {
      return errResponse(res, 400, "Invalid Credentials");
    }

    const isMatched = await admin.checkPass(password);
    if (!isMatched) {
      return errResponse(res, 400, "Invalid Credentials");
    }
    const token = admin.getJwt();
    const resAdmin = admin.toObject();
    delete resAdmin.password;
    delete resAdmin.role;

    return successResponse(res, 200, "Logged in Successfully", {
      ...resAdmin,
      token,
    });
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

const getNewlyRegisterUser = async (req, res) => {
  try {
    const data = await LandingPage.find({});

    return successResponse(res, 200, "List users", data);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};




module.exports = { registerLandingPage, createSuperAdmin, getNewlyRegisterUser, adminLogin };
