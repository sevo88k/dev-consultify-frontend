const { userStaffLogin, forgotPassword, resetPassword } = require("../../controllers/staff/auth");

const router = require("express").Router();


router.route("/login").post(userStaffLogin);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPass/:id").put(resetPassword);



module.exports = router;
