
const { errResponse, successResponse } = require("../../utils/response");
const crypto = require("crypto");
const sendEmail = require("../../utils/sendEmail");
const { resetPassTemp } = require("../../htmlTemplates/webResetTemplate");
const StaffUser = require("../../models/staffUsers");



const userStaffLogin = async (req, res) => {
    console.log("check this  working");
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
        user.login_count = user.login_count + 1;

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
        const user = await StaffUser.findOne({ email: req.body.email });

        if (!user) {
            return errResponse(res, 500, "StaffUser not found");
        }

        // Get ResetPassword Token
        const resetToken = user.getResetPasswordToken();
        console.log(resetToken, "resetToken");
        await user.save({ validateBeforeSave: false });

        const resetPasswordUrl = `${process.env.STAFF_URL}passwordReset/${resetToken}`;

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
                    `${user.fullname}`,
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
    console.log("1478956230",)
    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.body.token)
        .digest("hex");

    const user = await StaffUser.findOne({
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



module.exports = {
    userStaffLogin,
    forgotPassword,
    resetPassword,
};


