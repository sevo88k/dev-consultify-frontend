const models = require("../../../models");
const { Internalserver } = require("../../../utils/Statuscode");
const { Successmessage, Failuremessage, internalservereror } = require('../../../utils/Customerresponse')
const jwt = require("jsonwebtoken");
const { Resetpasswordmail } = require("../../../utils/CustomerSendgrid");
const bcrypt = require("bcrypt");
const { CustomerVerifyemail } = require("../../../htmlTemplates/CustomerWelcome");
const SentEmail = require("../../../models/SentEmail");

module.exports = {
    CustomerRegistration: async (req, res) => {
        try {
            var saveinformation = await models.Customer();
            saveinformation.first_name = req.body.first_name;
            saveinformation.last_name = req.body.last_name;
            saveinformation.email = req.body.email;
            saveinformation.password = req.body.password;
            await saveinformation.save();

            if (saveinformation) {
                const token = await jwt.sign({ data: saveinformation }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES,
                });
                saveinformation.set('accesstoken', token, { strict: false })
                //email send for verification
                await CustomerVerifyemail(process.env.CUSTOMER_URL + "My-subscription/" + saveinformation._id, saveinformation)
                //end verification
                return Successmessage(res, 'Registration completed successfully', saveinformation)

            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }
        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)

        }
    },
    CustomerRegistration1: async (req, res) => {
        try {
            // Check if email already exists
            const existingCustomer = await models.Customer.findOne({ email: req.body.email });
            if (existingCustomer) {
                return Failuremessage(res, 'Email already exists.');
            }

            // Create new customer instance
            const saveinformation = new models.Customer();
            saveinformation.first_name = req.body.first_name;
            saveinformation.last_name = req.body.last_name;
            saveinformation.email = req.body.email;

            // Hash password
            const salt = await bcrypt.genSalt(10);
            saveinformation.password = await bcrypt.hash(req.body.password, salt);

            // Save customer to database
            await saveinformation.save();

            // Generate JWT token
            const token = jwt.sign({ data: saveinformation }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES,
            });

            saveinformation.set('accesstoken', token, { strict: false });

            // Send email verification
            await CustomerVerifyemail(`${process.env.CUSTOMER_URL}My-subscription/${saveinformation._id}`, saveinformation);

            // Return success response
            return Successmessage(res, 'Registration completed successfully', saveinformation);
        } catch (error) {
            console.error(error.message);

        }
    },

    CustomerLogin: async (req, res) => {
        try {
            var existcheck = await models.Customer.findOne(
                {
                    email: { $regex: new RegExp(req.body.email, 'i') }
                }
            )




            if (existcheck != null) {
                const isMatched = await existcheck.checkPass(req.body.password);

                if (isMatched) {
                    if (existcheck.status_account == 1) {


                        const token = await jwt.sign({ data: existcheck }, process.env.JWT_SECRET, {
                            expiresIn: process.env.JWT_EXPIRES,
                        });

                        existcheck.set('accesstoken', token, { strict: false })

                        return Successmessage(res, 'Login Successfully', existcheck)
                    } else {
                        return Failuremessage(res, 'Your account has been suspended by admin.')
                    }


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
            var existcheck = await models.Customer.findOne(
                {
                    email: { $regex: new RegExp(req.body.email, 'i') }
                }
            )
            var url = "https://customer.consultifyapp.com/"
            if (existcheck != null) {

                return Resetpasswordmail(res, url, existcheck)
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
            var existcheck = await models.Customer.findById(
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


                    var updatepassword = await models.Customer.findByIdAndUpdate(
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

    UpdateProfileDetail: async (req, res) => {
        try {

            if (req.file != undefined) {
                var profileimage = req.file.filename
            }



            var updateinformation = await models.Customer.findByIdAndUpdate({
                _id: req.identity._id
            }, {
                $set: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    gender: req.body.gender,
                    self_describe: req.body.self_describe,
                    profileimage: profileimage,
                    pronouns: req.body.pronouns,
                    email: req.body.email,
                    phone_number: req.body.phone_number,
                    first_line_address: req.body.first_line_address,
                    second_line_address: req.body.second_line_address,
                    city: req.body.city,
                    pin_code: req.body.pin_code,
                    contact_pref_notify: req.body.contact_pref_notify,
                    promotionaloffers: req.body.promotionaloffers

                }
            }, {
                new: true
            })

            if (updateinformation) {

                return Successmessage(res, 'Information updated successfully.')
            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }


        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },

    ChangePassword: async (req, res) => {
        try {


            var exists = await models.Customer.findById({
                _id: req.identity._id,
            });


            if (exists) {
                var password = await exists.checkPass(req.body.old_password);
                console.log(password)
                if (password) {
                    var exists = await models.Customer.findByIdAndUpdate(
                        {
                            _id: req.identity._id,
                        },
                        {
                            $set: {
                                password: await bcrypt.hash(req.body.password, 10),
                                passowrd_new_set: 1
                            },
                        },
                        {
                            new: true,
                        }
                    );

                    return Successmessage(res, "Password Change Successfully")
                } else {
                    return Failuremessage(res, "Passwords don't match")
                }
            } else {
                return Failuremessage(res, "Passwords don't match")

            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },
    SetnewPassword: async (req, res) => {
        try {


            var exists = await models.Customer.findById({
                _id: req.identity._id,
            });


            if (exists) {

                var exists = await models.Customer.findByIdAndUpdate(
                    {
                        _id: req.identity._id,
                    },
                    {
                        $set: {
                            password: await bcrypt.hash(req.body.password, 10),
                            passowrd_new_set: 1,
                            checked: true
                        },
                    },
                    {
                        new: true,
                    }
                );

                return Successmessage(res, "Password Change Successfully")


            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },
    Customerdetails: async (req, res) => {
        try {
            var customerdetails = await models.Customer.findById({
                _id: req.identity._id
            })
            if (customerdetails) {

                return Successmessage(res, 'Customer details', customerdetails)
            } else {
                return Failuremessage(res, 'Oops! Something went wrong.')
            }

        } catch (error) {
            console.log(error.message)
            return internalservereror(res, error)
        }
    },
    pre_care_details: async (req, res) => {
        console.log(req.params.id, "5555555555");
        try {
            const userId = req.params.id; // Ensure this is correctly set
            if (!userId) {
                return Failuremessage(res, 'User ID not found in request.');
            }

            const data = await SentEmail.find({ customer_id: userId })
                .populate('customer_id')
                .populate('salon_id')
                .populate('precare_id')
                .exec();


            if (data && data.length > 0) {
                return Successmessage(res, 'Details', data);
            } else {
                return Failuremessage(res, 'No emails found for the given user.');
            }
        } catch (error) {
            console.log(error.message);
            return internalservereror(res, error);
        }
    },
    customer_pre_care: async (req, res) => {
       
        try {
            const userId = req.identity._id; // Ensure this is correctly set
            if (!userId) {
                return Failuremessage(res, 'User ID not found in request.');
            }

            const data = await SentEmail.find({ customer_id: userId })
                .populate('customer_id')
                .populate('salon_id')
                .populate('precare_id')
                .exec();

       
            if (data && data.length > 0) {
                return Successmessage(res, 'Details', data);
            } else {
                return Failuremessage(res, 'No emails found for the given user.');
            }
        } catch (error) {
            console.log(error.message);
            return internalservereror(res, error);
        }
    },
    emailsentdetails: async (req, res) => {
        console.log(req.user._id, "auth check");
        try {
            const userId = req.user._id; // Assuming the token contains the user ID
            const emails = await SentEmail.find({ salon_id: userId })
                .populate('customer_id')
                .populate('salon_id')
                .populate('precare_id')
                .exec();

            return Successmessage(res, 'Email sent details', emails)
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

    },
    acknowledgeEmail: async (req, res) => {
        console.log("check hit api or not");
        try {
            const emailId = req.params.email_id; // Assuming the email ID is passed as a URL parameter

            const sentEmail = await SentEmail.findById(emailId);
            if (!sentEmail) {
                return res.status(404).send('Email not found');
            }

            // Get current date in YYYY-MM-DD format
            const currentDate = new Date().toISOString().split('T')[0];
            const updatedrecent = new Date().toISOString().split('T')[0];
            // Set acknowledgedAt to the current date as a string
            sentEmail.acknowledgedAt = currentDate;
            sentEmail.recently_updated = updatedrecent;
            sentEmail.status = 1;
            await sentEmail.save();

            return Successmessage(res, 'Successfully',);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },


}



