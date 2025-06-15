const Router = require("express").Router();

const multer = require("multer");
//Customer registration controller
const CustomerRegistrationControler = require('../../controllers/Customer/V1/CustomerRegistrationController');
const MyAccountController = require("../../controllers/Customer/V1/MyAccountController");
const { fetchCompletedConsultationById, imagesave, consultationformdetails, updatemedicalhistory, clientupdateinformation } = require("../../controllers/saloon/myAccount");

const user_storagequestion = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/Adminquestionimage");
  },
  filename: (req, file, cb) => {
    cb(null, "/" + Date.now() + "--" + file.originalname);
  },
});

const uploadImagesquestion = multer({
  storage: user_storagequestion,
});


const upload_imagesquestion = uploadImagesquestion.fields([
  { name: "imagename1", maxCount: 1 },
]);


const user_storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, "/" + Date.now() + "--" + file.originalname);
  },
});

const uploadImages = multer({
  storage: user_storage,
});



// Router.route('/update_acknowledge/:email_id').get(acknowledgeEmail);

Router.post('/customerregistration', CustomerRegistrationControler.CustomerRegistration)
Router.post('/customerLogin', CustomerRegistrationControler.CustomerLogin)
Router.post('/resetpassword', CustomerRegistrationControler.Resetpassword)
Router.post('/updatePassword', CustomerRegistrationControler.UpdatePassword)

//middleware
const Authentication = require('../../middleware/CustomerMiddleware');
const AdminPanleController = require("../../controllers/AdminPanle/V1/AdminPanleController");
const { AddHelpAndSupport } = require("../../controllers/V2/HelpSupportController");
const { Informationlist } = require("../../controllers/V2/FaqController");
Router.post('/updateProfileDetail', Authentication, CustomerRegistrationControler.UpdateProfileDetail)
Router.post('/changePassword', Authentication, CustomerRegistrationControler.ChangePassword)
Router.post('/setnewPassword', Authentication, CustomerRegistrationControler.SetnewPassword)
Router.post('/FindCustomerConsultationForm', MyAccountController.FindCustomerConsultationForm)

Router.get('/customerdetails', Authentication, CustomerRegistrationControler.Customerdetails)
Router.get('/pre_care_details/:id', CustomerRegistrationControler.pre_care_details)
Router.get('/customer_pre_care',Authentication, CustomerRegistrationControler.customer_pre_care)


Router.get('/update_acknowledge/:email_id', CustomerRegistrationControler.acknowledgeEmail)
//MY-ACOOUNT CONTROLLER ROUTES 
Router.get('/customerDashboardDetails', Authentication, MyAccountController.customerDashboardDetails)
Router.get("/fetchCompletedConsultationById/:id", fetchCompletedConsultationById);
// Router.get("/fetchCompletedConsultationdataById/:id", fetchCompletedConsultationdataById);
Router.route("/imagesave").post(upload_imagesquestion, imagesave);
Router.route("/consultationformdetails").get(consultationformdetails);
Router.put('/updateCustomerConsultationForm', MyAccountController.updateCustomerConsultationForm)
Router.route("/clientupdateinformation").post(uploadImages.single("profileimage"), Authentication, CustomerRegistrationControler.UpdateProfileDetail);


Router.get('/fetchAllAppointments', Authentication, MyAccountController.fetchAllAppointments)

Router.get('/fetchAppointmentById/:id', Authentication, MyAccountController.fetchAppointmentById)

Router.get("/medicalhistoryquestion", AdminPanleController.medicalhistoryquestion);
Router.route("/updatemedicalhistory").post(Authentication, MyAccountController.updatemedicalhistorysave);
Router.route("/AddHelpAndSupport").post(Authentication, AddHelpAndSupport);

//FAQ

Router.route("/informationlist").post(Authentication, Informationlist);
module.exports = Router





