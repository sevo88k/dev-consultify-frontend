const models = require("../../../models");
const { Resetpasswordmail, ResetpasswordmailAdmin } = require("../../../utils/Adminsendgrid");
const { internalservereror, Successmessage, Failuremessage } = require("../../../utils/Customerresponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const EnteryType = require("../../../models/EnteryType");
const Source = require("../../../models/SourceLink");
const Selectarea = require("../../../models/SelectArea");
const crypto = require("crypto");
const sendEmail = require("../../../utils/sendEmail");
const { welcomeEmailTemplate } = require("../../../htmlTemplates/welcomeEmailTemplate");
const Sideeffect = require("../../../models/SideEffect");
const Customerlog = require("../../../models/CustomerAccountupdateLogs");
module.exports = {

    AdminRegistation: async (req, res) => {
        try {

            if (req.body.email == "") {
                var saveinformation = await models.AdminPanle();
                saveinformation.email = "admin@consultify.com";
                saveinformation.password = "adminconsultify";
                saveinformation.position = "1";
                saveinformation.accesslevel = "1";
                saveinformation.name = "Admin";
                await saveinformation.save();

            } else {


                if (req.body.id != "" && req.body.id != undefined) {
                    var saveinformation = await models.AdminPanle.findByIdAndUpdate({
                        _id: req.body.id
                    }, {
                        $set: {
                            email: req.body.email,

                            name: req.body.name,
                            position: req.body.position,
                            accesslevel: req.body.accesslevel

                        }
                    }, {
                        new: true
                    });

                } else {

                    const password = crypto.randomBytes(5).toString("hex");


                    var saveinformation = await models.AdminPanle();
                    saveinformation.email = req.body.email;
                    saveinformation.password = password;
                    saveinformation.name = req.body.name;
                    saveinformation.position = req.body.position;
                    saveinformation.accesslevel = req.body.accesslevel;
                    await saveinformation.save();
                    const resetPasswordUrl = `${process.env.ADMIN_URL}`;
                    const msg = {
                        to: `${saveinformation.email}`,
                        from: {
                            email: process.env.SEND_GRID_SENDER,
                            name: 'Consultify'
                        },
                        subject: "Welcome To Consultify!",
                        text: "Dont share this Link",
                        html: welcomeEmailTemplate(resetPasswordUrl, req.body.name, req.body.email, password),
                    };
                    sendEmail(msg);




                }


            }
            if (saveinformation) {
                return Successmessage(res, 'Registration completed successfully', saveinformation)

            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)

        }
    },

    Administrators: async (req, res) => {
        try {
            var list = await models.AdminPanle.find({});

            return Successmessage(res, 'Admin list', list)
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    AdminLogin: async (req, res) => {
        try {
            console.log("here it AdminLogin")
            var existcheck = await models.AdminPanle.findOne(
                {
                    email: { $regex: new RegExp(req.body.email, 'i') }
                }
            )

            if (existcheck != null) {
                const isMatched = await existcheck.checkPass(req.body.password);

                if (isMatched) {
                    const token = await jwt.sign({ data: existcheck }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES,
                    });

                    existcheck.set('accesstoken', token, { strict: false })

                    return Successmessage(res, 'Login Successfully', existcheck)


                } else {
                    return Failuremessage(res, 'Password incorrect. Please try again or reset your password.')
                }


            } else {

                return Failuremessage(res, "Your email isn't recognised. Please check the spelling")
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    Resetpassword: async (req, res) => {
        try {
            var existcheck = await models.AdminPanle.findOne(
                {
                    email: { $regex: new RegExp(req.body.email, 'i') }
                }
            )
            var url = "http://localhost:3000/"
            if (existcheck != null) {

                return ResetpasswordmailAdmin(res, url, existcheck)
            } else {
                return Failuremessage(res, "Your email isn't recognised. Please check the spelling")
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    UpdatePassword: async (req, res) => {
        try {
            var existcheck = await models.AdminPanle.findById(
                {
                    _id: req.body.id
                }

            )
            console.log(req.body.time)
            console.log(Date.now())

            if (existcheck != null) {
                if (req.body.time <= Date.now()) {
                    return Failuremessage(res, "Link Has been expired")
                } else {


                    var updatepassword = await models.AdminPanle.findByIdAndUpdate(
                        {
                            _id: req.body.id
                        }, {
                        $set: {
                            password: await bcrypt.hash(req.body.password, 10)
                        }
                    }, {
                        new: true
                    }

                    )
                    if (updatepassword) {
                        return Successmessage(res, 'Your password has been reset successfully')
                    } else {
                        return Failuremessage(res, 'Old Password incorrect.')
                    }



                }


            } else {
                return Failuremessage(res, "Oops! something went worng.")
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    SaveEnteryType: async (req, res) => {
        try {
            var arr = ['Treatments', 'Medical Conditions', 'Medication', 'Skincare Ingredient']
            for (var i = 0; i < arr.length; i++) {
                var saveinformation = await EnteryType();
                saveinformation.title = arr[i];
                saveinformation.save();
            }


            return Successmessage(res, 'Information save')
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    GetEnterytype: async (req, res) => {
        try {
            var getenterytype = await EnteryType.find({});
            if (getenterytype) {
                return Successmessage(res, 'Get entery type lists', getenterytype)

            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    Administratordetails: async (req, res) => {
        try {
            var details = await models.AdminPanle.findById({ _id: req.body.id });

            return Successmessage(res, 'Admin details', details)
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    Administratordelete: async (req, res) => {
        try {

            await models.AdminPanle.findByIdAndDelete({ _id: req.body.id });

            return Successmessage(res, 'Admin delete')

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },


    SaveSource: async (req, res) => {
        try {
            var arr = ['WebMD', 'Wikipedia', 'NHS England']
            for (var i = 0; i < arr.length; i++) {
                var saveinformation = await Source();
                saveinformation.title = arr[i];
                saveinformation.save();
            }

            return Successmessage(res, 'Information save')
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    Getsourcelist: async (req, res) => {
        try {
            var getsource = await Source.find({});
            if (getsource) {
                return Successmessage(res, 'Get source lists', getsource)

            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    } ,


    SaveSelectArea: async (req, res) => {
        try {
            var arr = ['Eye Lashes', ' Eye Browz', 'Skin', 'Face']
            for (var i = 0; i < arr.length; i++) {
                var saveinformation = await Selectarea();
                saveinformation.title = arr[i];
                saveinformation.save();
            }


            return Successmessage(res, 'Information save')
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    GetStaticApi: async (req, res) => {
        try {
            var getselectarea = await Selectarea.find({});
            var getsource = await Source.find({});
            var getenterytype = await EnteryType.find({});
            var staticapi = {
                getselectarea: getselectarea,
                getsource: getsource,
                getenterytype: getenterytype
            }

            if (staticapi) {
                return Successmessage(res, 'Get select area lists', staticapi)

            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    Updatesideeffect: async (req, res) => {
        try {

            var listsideeft = await Sideeffect.find({});
            for (var i = 0; i < listsideeft.length; i++) {
                await Sideeffect.findByIdAndUpdate({
                    _id: listsideeft[i]._id
                }, {
                    $set: {
                        s_id: i + 1
                    }
                }, {
                    new: true
                })
            }


            return Successmessage(res, 'Get select area lists', listsideeft)

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    AddmedicalQuestion: async (req, res) => {
        try {
            var Question = [
                'Are you currently taking any medications?',
                'Do you have any pre existing medical conditions?',
                'Do you have any allergies?',
                'Have you ever suffered an allergic reaction to a beauty treatment or product?',
                'Have you ever suffered an adverse reaction to a beauty treatment or product? Eg skin lifting, skin sensitivity, hives',
                'Do you suffer from any facial or bodily skin conditions or diseases?',

                'Are you currently under GP / Hospital care or supervision for anything?',
                'Are you or could you be pregnant?',
                'Are you breastfeeding?',
                'Have you had any recent surgery?',
                'Is there anything else we should know?'

            ]
            Question.forEach(async (element) => {
                await models.Medicalquestion.create({ title: element })

            });
            return Successmessage(res, 'Medical question')



        } catch (error) {
            return internalservereror(res, error)
        }
    },

    medicalhistoryquestion: async (req, res) => {
        try {
            var lists = await models.Medicalquestion.find({})
            return Successmessage(res, 'Medical question', lists)
        } catch (error) {
            return internalservereror(res, error)
        }

    },

    customerlogs: async (req, res) => {
        try {
            var lists = await Customerlog.find({}).populate(['salon_id', 'customer_id'])
            return Successmessage(res, 'Customer update details logs', lists)
        } catch (error) {
            return internalservereror(res, error)
        }

    }

}