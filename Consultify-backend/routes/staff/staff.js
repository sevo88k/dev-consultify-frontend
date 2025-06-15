const multer = require("multer");
const {  } = require("../../controllers/saloon/myAccount");
const salonMiddleware = require("../../middleware/salonMiddleware");
const { changePass, createClient, fetchClients, editStaffProfile, getProfileById, fetchClientById } = require("../../controllers/staff/myAccount");
const staffMiddleware = require("../../middleware/staffMiddleware");

const router = require("express").Router();

const user_storage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "public/");
    },
    filename: (req, file, cb) => {
      cb(null,"/" + Date.now() + "--" + file.originalname);
    },
  });
  
  const uploadImages = multer({
    storage: user_storage,
  });

const upload_images = uploadImages.fields([
    { name: "staff_profile", maxCount: 1 },
  ]);

router.use(staffMiddleware);

//******************PROFILE ROUTES****************************** *//

router.route("/changePass").put(changePass);

//********************************END********************************* *//

router.route("/createClient").post(createClient);
router.route("/fetchClients").get(fetchClients);
router.route("/editStaffProfile").post(upload_images,editStaffProfile);
router.route("/getProfileById").get(getProfileById);
router.route("/fetchClientById/:id").get(fetchClientById);




module.exports = router;
