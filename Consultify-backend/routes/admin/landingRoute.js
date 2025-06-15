const router = require("express").Router();
const {  registerLandingPage, createSuperAdmin, getNewlyRegisterUser, adminLogin } = require("../../controllers/admin/landingPage/auth");

router.route("/registerLandingPage").post(registerLandingPage);
router.route("/createSuperAdmin").get(createSuperAdmin);
router.route("/adminLogin").post(adminLogin);


router.route("/getNewlyRegisterUser").get(getNewlyRegisterUser);


module.exports = router;
