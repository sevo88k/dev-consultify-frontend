const multer = require("multer");
const { editSalonProfile, getProfileById, changePass, createOpeningHours, updateOpeningHours,  getprecarelistby_consultation_id,fetchOpeningHours, registerStaff, userStaffLogin, fetchStaffMembers, fetchStaffById, editStaffProfile, consultationformlist, consultationformdetails, createConsultationForm, getcontraindicationlists, getcontraindicationdetails, SaveConsultation, editGetdetailsConsultation, saloncreateClient, salonfetchClients, fetchAllCustomers, fetchCompletedConsultation,dup_fetchCompletedConsultation,fetchCompletedConsultationdataById, fetchCompletedConsultationById, imagesave, consultationFormDelete, fetchClientById, fetchAllAppointments, createAppointment, fetchAppointmentById, staffCreateOpeningHours, staffUpdateOpeningHours, staffFetchOpeningHours, createSalonSearchHistory, getAllForumCategory, createForumTopic, getForumCatTopic, createForumTopicReply, getForumReply, getForumTopicById, updateConsultationForm, presetconsultationformlist, updatepreConsultationForm,FAq_categorylist_saloon, salonupdateClient, addnotesforclient, filedelete, salonupdatenotes, updatemedicalhistory, clientupdateinformation, salondeletenotes, AddimagesandNotes, Adddocument, deleteConsultation, DeleteimagesandNotes, updatepreConsultationFormhide, unhidepreConsultationForm, hide_presets,complete_consultation_saloon } = require("../../controllers/saloon/myAccount");
const salonMiddleware = require("../../middleware/salonMiddleware");
const { AddConsultation, DeleteConsultation } = require("../../controllers/AdminPanle/V1/ManageConsultationsController");
const { getSalonTabsStatics } = require("../../controllers/statics");
const { createSubscription, getSubscriptionById, cancelSubscription } = require("../../controllers/webStripePayments");
const { getCategory } = require("../../controllers/AdminPanle/V1/ForumController");
const { SaveCustomemail, Customemaillist, Emaildetailscustomconetent } = require("../../controllers/V2/EmailSettingController");
const { Savepostcare, getpostcarelist,precarelistby_customer_id, getpoastcaredetails, sendtocustomer, emailsentdetails, } = require("../../controllers/V2/PostCareController");
const AdminPanleController = require("../../controllers/AdminPanle/V1/AdminPanleController");
const { AddHelpAndSupport } = require("../../controllers/V2/HelpSupportController");
const { Informationlist } = require("../../controllers/V2/FaqController");

const router = require("express").Router();

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

const upload_images = uploadImages.fields([
  { name: "salon_profile", maxCount: 1 },
  { name: "staff_profile", maxCount: 1 },
]);






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




const completedconsultationstorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/completedconsultationimages");
  },
  filename: (req, file, cb) => {
    cb(null,  file.originalname);
  },
});

const uploadimagesconsultaion = multer({
  storage: completedconsultationstorage,
});

const upload_imagesconsultation = uploadimagesconsultaion.fields([
  { 
    name: "images" ,maxCount: 20,




},
]);

const upload_imagesconsultation2 = uploadimagesconsultaion.fields([
  { 
  
    name: "fileupload" ,maxCount: 20



},
]);

//new route



//******************SUBSCRIPTION ROUTES****************************** *//
router.route("/createSubscription").post(createSubscription);

router.route("/getSubscriptionById").get(getSubscriptionById);
//******************END****************************** *//

router.use(salonMiddleware);

//******************PROFILE ROUTES****************************** *//
router.route("/cancelSubscription").post(cancelSubscription);
router.route("/editSalonProfile").post(upload_images, editSalonProfile);
router.route("/getProfileById").get(getProfileById);
router.route("/changePass").put(changePass);

//********************************END********************************* *//


//******************OPENING HOURS ROUTES****************************** *//

router.route("/createOpeningHours").post(createOpeningHours);
router.route("/updateOpeningHours").put(updateOpeningHours);
router.route("/fetchOpeningHours").get(fetchOpeningHours);

//********************************END********************************* *//

//******************STAFF MEMBERS ROUTES****************************** *//

router.route("/registerStaff").post(registerStaff);
router.route("/userStaffLogin").post(userStaffLogin);
router.route("/fetchStaffMembers").get(fetchStaffMembers);
router.route("/fetchStaffById/:id").get(fetchStaffById);
router.route("/editStaffProfile").post(upload_images, editStaffProfile);
router.route("/staffCreateOpeningHours").post(staffCreateOpeningHours);
router.route("/staffUpdateOpeningHours").put(staffUpdateOpeningHours);
router.route("/staffFetchOpeningHours").get(staffFetchOpeningHours);

//********************************END********************************* *//


//***********************Consultation form**************************** */
router.route("/consultationformlist").get(consultationformlist);
router.route("/getprecarelistby_consultation_id").post(getprecarelistby_consultation_id);
router.route("/presetconsultationformlist").post(presetconsultationformlist);

router.route("/consultationformdetails").get(consultationformdetails);
router.route("/createConsultationForm").post(createConsultationForm);
router.route("/fetchCompletedConsultation").get(fetchCompletedConsultation);
router.route("/dup_fetchCompletedConsultation").post(dup_fetchCompletedConsultation);
router.route("/complete_consultation_saloon").get(complete_consultation_saloon);
router.route("/consultationFormDelete/:id").delete(consultationFormDelete);
router.route("/updateConsultationForm").put(updateConsultationForm);


//***********************Consultation End**************************** */


//******************search**************************** */

router.route("/getcontraindicationlists").post(getcontraindicationlists);

router.route("/getcontraindicationdetails").get(getcontraindicationdetails);

router.route("/addConsultation").post(SaveConsultation);

router.route("/imagesave").post(upload_imagesquestion, imagesave);
router.route("/editGetdetailsConsultation").get(editGetdetailsConsultation);


//******************search**************************** */
//client create
router.route("/createClient").post(uploadImages.single("client_document"),saloncreateClient);
router.route("/clientupdateinformation").post(uploadImages.single("profileimage"),clientupdateinformation);





router.route("/salonupdateClient").post(uploadImages.single("client_document"),salonupdateClient);
router.route("/addnotesforclient").post(addnotesforclient);
router.route("/salonupdatenotes").post(salonupdatenotes);
router.route("/salondeletenotes").post(salondeletenotes);

router.route("/updatemedicalhistory").post(updatemedicalhistory);

router.route("/Emaildetailscustomconetent").post(Emaildetailscustomconetent);
router.route("/filedelete").post(filedelete);
router.route("/salonfetchClients").post(salonfetchClients);
router.route("/fetchClientById/:id").get(fetchClientById);


//end client create

//******************customer**************************** */
router.route("/fetchAllCustomers").get(fetchAllCustomers);
router.route("/fetchCompletedConsultationById/:id").get(fetchCompletedConsultationById);
router.route("/fetchCompletedConsultationdataById/:id").get(fetchCompletedConsultationdataById);

router.route("/addimagesandNotes").post(upload_imagesconsultation,AddimagesandNotes);
router.route("/adddocument").post(upload_imagesconsultation2,Adddocument);

router.route("/DeleteimagesandNotes").post(DeleteimagesandNotes);
//***********************APPOINTMENT ROUTES**************************** */
router.route("/createAppointment").post(createAppointment);
router.route("/fetchAllAppointments/:id").get(fetchAllAppointments);
router.route("/fetchAppointmentById/:id").get(fetchAppointmentById);

//**************************************END*****************************//

//***********************STATICS ROUTES**************************** */
router.route("/getSalonTabsStatics").get(getSalonTabsStatics);
//**************************************END*****************************//


//***********************STATICS ROUTES**************************** */
router.route("/createSalonSearchHistory").post(createSalonSearchHistory);
//**************************************END*****************************//


//***********************FORUM ROUTES**************************** */
router.route("/getAllForumCategory").get(getAllForumCategory);
router.route("/createForumTopic").post(createForumTopic);
router.route("/getForumCatTopic").get(getForumCatTopic);
router.route("/createForumTopicReply").post(createForumTopicReply);
router.route("/getForumReply").get(getForumReply);
router.route("/getForumTopicById").get(getForumTopicById);

//**************************************END*****************************//

router.get("/getCategory", getCategory);


//Email content

router.route("/SaveCustomemail").post(SaveCustomemail);

router.route("/Customemaillist").post(Customemaillist);
//end email content 

//Post care

router.route("/Savepostcare").post(Savepostcare);
router.route("/getpostcarelist").post(getpostcarelist);

router.route("/sendtocustomer").post(sendtocustomer);
////

router.route('/emailsentdetails').post(emailsentdetails);


router.route("/getpoastcaredetails").post(getpoastcaredetails);
router.route("/FAq_categorylist_saloon").post(FAq_categorylist_saloon);
router.route("/updatepreConsultationForm").post(updatepreConsultationForm);
router.route("/unhidepreConsultationForm").post(unhidepreConsultationForm);
router.route("/updatepreConsultationFormhide").post(updatepreConsultationFormhide);
router.route("/hide_preset").post(hide_presets);

router.get("/medicalhistoryquestion", AdminPanleController.medicalhistoryquestion);
//post care

//Help and support      other

router.route("/AddHelpAndSupport").post(AddHelpAndSupport);
router.route("/deleteConsultation").post(deleteConsultation);
router.route("/informationlist").post(Informationlist);

module.exports = router;
