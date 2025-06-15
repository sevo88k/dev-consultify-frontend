
const { errResponse, successResponse } = require("../../utils/response");
const SaloonUser = require("../../models/saloonUsers");
const OpeningHours = require("../../models/openingHours");
const StaffUser = require("../../models/staffUsers");
const { welcomeEmailTemplate } = require("../../htmlTemplates/welcomeEmailTemplate");
const crypto = require("crypto");
const sendEmail = require("../../utils/sendEmail");
const ClientUser = require("../../models/clientUsers");


const editStaffProfile = async (req, res) => {
    try {

        const {
            fullname,
            email,
            amenities,
            bio,
            contact_pref_notify,

            lastname,
            firstname,
            personal_email,
            personal_phone,
            personal_address1,
            personal_address2,
            personal_city,
            personal_postcode
        } = req.body;

        const images = {};
        for (let key in req.files) {
            images[key] = req.files[key][0].filename;
        }

        const user = await StaffUser.findByIdAndUpdate(
            req.user._id,
            {
                fullname,
                email,
                amenities,
                bio,
                contact_pref_notify,

                lastname,
                firstname,
                personal_email,
                personal_phone,
                personal_address1,
                personal_address2,
                personal_city,
                personal_postcode,
                ...images
            },
            { new: true }
        );


        return successResponse(res, 200, "Updated successfully!", user);
    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

const getProfileById = async (req, res) => {
    try {
        const user = await StaffUser.findById(req.user._id);

        return successResponse(res, 200, "Staff profile fetched successfully", user);
    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

const changePass = async (req, res) => {
    try {
        const { password, old_password } = req.body;

        const user = await StaffUser.findById(req.user._id);

        const isMatched = await user.checkPass(old_password);
        if (!isMatched) {
            return errResponse(res, 400, "Invalid Credentials");
        }

        user.password = password;
        await user.save();
        const responseObj = user.toObject();
        delete responseObj.password;
        return successResponse(res, 200, "Password updated successfully", responseObj);
    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};


//STAFF FUNCTIONALITY START

const registerStaff = async (req, res) => {
    try {
        const {
            fullname,
            email
        } = req.body;

        const duplicateEmail = await StaffUser.findOne({ email: email.toLowerCase() });

        if (duplicateEmail) {
            return errResponse(res, 400, "Email Already Exists");
        }

        const password = crypto.randomBytes(5).toString("hex");

        const collectionLen = await StaffUser.countDocuments({});
        if (collectionLen > 0) {
            let maxMemNo = await StaffUser.find().sort({ memberNo: -1 }).limit(1);
            var memberNo = maxMemNo[0].memberNo + 1;
        } else if (collectionLen == 0) {
            var memberNo = 1;
        }

        await StaffUser.create({
            memberNo,
            email: email.toLowerCase(),
            fullname,
            password,
            salonId: req.user._id
        })
            .then((result) => {
                console.log(email, password, " email, password")
                const resetPasswordUrl = `${process.env.STAFF_URL}`;
                const msg = {
                    to: `${result.email}`,
                    from: {
                        email: process.env.SEND_GRID_SENDER,
                        name: 'Consultify'
                    },
                    subject: "Credentials for your Consultify account",
                    text: "Dont share this Link",
                    html: welcomeEmailTemplate(resetPasswordUrl, fullname, email, password),
                };
                sendEmail(msg);
                const resObj = result.toObject();
                delete resObj.password;

                return successResponse(res, 200, `Credentials sent to ${resObj.email}`, resObj);
            })
            .catch((error) => {
                if (error.code === 11000) {
                    return errResponse(res, 400, "Email Already Exists");
                } else {
                    return errResponse(res, 400, error.message);
                }
            });
    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

const userStaffLogin = async (req, res) => {
    try {
        const { email, password, device_token } = req.body;

        const user = await StaffUser.findOne({
            email: email.toLowerCase(),
        }).select("+password");

        if (!user) {
            return errResponse(res, 400, "Invalid Credentials");
        }

        const isMatched = await user.checkPass(password);
        if (!isMatched) {
            return errResponse(res, 400, "Invalid Credentials");
        }

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

const fetchStaffMembers = async (req, res) => {
    try {

        const data = await StaffUser.find({
            salonId: req.user._id
        });

        return successResponse(
            res,
            200,
            "Staff members fetched Successfully",
            data
        );

    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

const fetchStaffById = async (req, res) => {
    try {

        const data = await StaffUser.findOne({
            _id: req.params.id
        });

        return successResponse(
            res,
            200,
            "Staff members fetched Successfully",
            data
        );

    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};


//END

//CLIENT FUNCTIONALITY START
const createClient = async (req, res) => {
console.log("check another-----------------------");
    try {
        const {
            email,
            firstname,
            lastname,
            address1,
            address2,
            city,
            postcode,
            dob,
            no_of_consultation
        } = req.body;

        const duplicateEmail = await ClientUser.findOne({ email: email.toLowerCase() });

        if (duplicateEmail) {
            return errResponse(res, 400, "Email Already Exists");
        }

        const collectionLen = await ClientUser.countDocuments({});
        if (collectionLen > 0) {
            let maxMemNo = await ClientUser.find().sort({ memberNo: -1 }).limit(1);
            var memberNo = maxMemNo[0].memberNo + 1;
        } else if (collectionLen == 0) {
            var memberNo = 1;
        }
        await ClientUser.create({
            memberNo,
            email: email.toLowerCase(),
            firstname,
            lastname,
            address1,
            address2,
            city,
            postcode,
            staffId: req.user._id,
            dob,
            no_of_consultation
        })
            .then((result) => {
                return successResponse(res, 200, `Client created successfully!`, result);
            })
            .catch((error) => {
                return errResponse(res, 400, error.message);
            });
    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

const fetchClients = async (req, res) => {
    try {

        const data = await ClientUser.find({
            staffId: req.user._id
        });

        return successResponse(
            res,
            200,
            "Clients fetched Successfully",
            data
        );

    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

const fetchClientById = async (req, res) => {
    try {

        const data = await ClientUser.findOne({
            _id: req.params.id
        });

        return successResponse(
            res,
            200,
            "Client fetched Successfully",
            data
        );

    } catch (error) {
        return errResponse(res, 500, error.message);
    }
};

//END



module.exports = {
    editStaffProfile,
    getProfileById,
    changePass,
    registerStaff,
    userStaffLogin,
    fetchStaffMembers,
    fetchStaffById,
    createClient,
    fetchClients,
    fetchClientById
};


