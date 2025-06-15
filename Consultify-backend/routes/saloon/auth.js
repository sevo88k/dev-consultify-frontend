const { register, verifyUser, userLogin, forgotPassword, resetPassword, editProfile,FetchCompletedConsultationBySalonId } = require("../../controllers/saloon/auth");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/verifyUser/:id").get(verifyUser);

router.route("/login").post(userLogin);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPass/:id").put(resetPassword);
router.route("/editProfile").post(editProfile);
router.route("/FetchCompletedConsultationBySalonId").get(FetchCompletedConsultationBySalonId)


module.exports = router;
