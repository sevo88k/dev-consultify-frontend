const Router = require("express").Router();
const multer = require("multer");

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



//Customer registration controller
const AdminPanleController = require('../../controllers/AdminPanle/V1/AdminPanleController')

Router.post('/adminRegistation', AdminPanleController.AdminRegistation)
Router.post('/AdminLogin', AdminPanleController.AdminLogin)
Router.post('/resetpassword', AdminPanleController.Resetpassword)
Router.post('/updatePassword', AdminPanleController.UpdatePassword)

//middleware
const Authentication = require('../../middleware/AdminPanleMiddleware')

//Salon

const SalonController = require('../../controllers/AdminPanle/V1/SalonsController')
Router.post('/getSalonList', SalonController.GetSalonList)
Router.get('/get_dashboard_saloon', SalonController.get_dashboard_saloon)
Router.get('/salonDetails', SalonController.SalonDetails)
Router.post('/deleteSalon', SalonController.DeleteSalon)
Router.post('/salonResetpassword', SalonController.SalonResetpassword)
Router.post('/salonUpdatePassword', SalonController.SalonUpdatePassword)
Router.post('/updateSalondetails', SalonController.UpdateSalondetails)

Router.post('/stafflist', SalonController.Stafflist)
Router.post('/Updateaccountstatussalon', SalonController.Updateaccountstatussalon)
Router.post('/salonClients', SalonController.salonClients)
Router.post('/getCompletedconsultaitonformSalon', SalonController.GetCompletedconsultaitonformSalon)
Router.post('/update_consulatation', SalonController.update_consulatation)
Router.post('/update_preset_consulatation', SalonController.update_preset_postcare)
Router.post('/update_preset', SalonController.update_preset)
Router.post('/update_postcare_presets', SalonController.update_postcare_presets)
//user 
const UsersController = require('../../controllers/AdminPanle/V1/UsersController')
Router.post('/getCustomer', UsersController.GetCustomer)

Router.get('/customerDetails', UsersController.CustomerDetails)
Router.post('/deleteUser', UsersController.DeleteUser)
Router.post('/UpdateUserdetails', UsersController.UpdateUserdetails)
Router.post('/updateaccountstatus', UsersController.Updateaccountstatus)
Router.post('/customerResetpassword', UsersController.CustomerResetpassword)
Router.post('/customerUpdatePassword', UsersController.CustomerUpdatePassword)
Router.post('/getCompletedconsultaitonformUser', UsersController.GetCompletedconsultaitonformUser)

//Manageconsultaiton
const ManageconsultaitonController = require('../../controllers/AdminPanle/V1/ManageConsultationsController')

Router.post('/getlistConsultation', Authentication, ManageconsultaitonController.GetlistConsultation)

Router.post('/updateConsultationstatus', Authentication, ManageconsultaitonController.UpdateConsultationStatus)
Router.post('/AddConsultation', Authentication, ManageconsultaitonController.AddConsultation)
Router.get('/ListpresetConsultation', Authentication, ManageconsultaitonController.list_Consultation)
Router.post('/imagesave', Authentication, upload_imagesquestion, ManageconsultaitonController.imagesave)
Router.get('/presetlistConsultation', Authentication, ManageconsultaitonController.presetcarelistConsultation)
Router.get('/deleteConsultation', Authentication, ManageconsultaitonController.DeleteConsultation)
Router.get('/getdetailsConsultation', Authentication, ManageconsultaitonController.GetdetailsConsultation)

// Contraindication
Router.get('/saveEnteryType', AdminPanleController.SaveEnteryType)
Router.get('/getEnterytype', AdminPanleController.GetEnterytype)
Router.get('/saveSource', AdminPanleController.SaveSource)
Router.get('/getsourcelist', AdminPanleController.Getsourcelist)
Router.get('/saveSelectArea', AdminPanleController.SaveSelectArea)
Router.get('/getStaticApi', AdminPanleController.GetStaticApi)


//AddContradictionsDatabase
const TreatmentsController = require('../../controllers/AdminPanle/V1/TreatmentsController');
const CompletedConsultationsController = require("../../controllers/AdminPanle/V1/CompletedConsultationsController");
const { getAllSaonSearchHistory } = require("../../controllers/saloon/myAccount");
const { getForum, updateForum, createForum, getForumById, deleteForum, getCategory, updateCategory, createCategory, deleteCategory, getCategoryById } = require("../../controllers/AdminPanle/V1/ForumController");
const { SavepostcareAdmin, getpostcarelistAdmin, getpoastcaredetailsAdmin, poastcaredeleteByAdmin } = require("../../controllers/V2/PostCareController");
const { GetlistHelpSupport, deletehelpsupport } = require("../../controllers/V2/HelpSupportController");
const { Informationsave, SaveFaq_category,update_consultation_data,update_consultation_data222, EditFaqCategory, ListFaqCategories, DeleteFaqCategory, Informationdelete, Informationlist, Informationoffaq, faqsprority_set } = require("../../controllers/V2/FaqController");
Router.post('/addContradictionsDatabase', Authentication, TreatmentsController.AddContradictionsDatabase)
Router.post('/getlistContradictionsDatabase', Authentication, TreatmentsController.GetlistContradictionsDatabase)
Router.get('/getdetailscontaindication', Authentication, TreatmentsController.Getdetailscontaindication)
Router.get('/deleteContraindication', Authentication, TreatmentsController.DeleteContraindication)
Router.post('/addSideeffect', TreatmentsController.AddSideeffect)
Router.get('/getSideEffect', Authentication, TreatmentsController.GetSideEffect)

Router.get('/deletesideeffect', Authentication, TreatmentsController.Deletesideeffect);
Router.get('/exportContradictionDB', TreatmentsController.exportContradictionDB);
Router.post('/uploadContradictionDB', TreatmentsController.uploadContradictionDB);
Router.post('/convertCsvToExcel', upload_imagesquestion, TreatmentsController.convertCsvToExcel);


// Completed consultation
Router.get('/adminCompletedConsultation', Authentication, CompletedConsultationsController.adminCompletedConsultation)
Router.get('/adminFetchCompletedConsultationById/:id', Authentication, CompletedConsultationsController.adminFetchCompletedConsultationById)


//Administrators
Router.post('/administrators', Authentication, AdminPanleController.Administrators)
Router.post('/administratordetails', Authentication, AdminPanleController.Administratordetails)
Router.post('/administratordelete', Authentication, AdminPanleController.Administratordelete)

Router.get('/updatesideeffect', AdminPanleController.Updatesideeffect);

Router.post('/customerlogs', AdminPanleController.customerlogs);
Router.get('/getAllSaonSearchHistory', Authentication, getAllSaonSearchHistory);

//Forum Api's
Router.get("/getForum", Authentication, getForum);
Router.put("/updateForum", Authentication, updateForum);
Router.post("/createForum", Authentication, createForum);
Router.get("/getForumById", Authentication, getForumById);
Router.delete("/deleteForum", Authentication, deleteForum)


//Category Api's
Router.get("/getCategory", Authentication, getCategory);
Router.put("/updateCategory", Authentication, updateCategory);
Router.post("/createCategory", Authentication, createCategory);
Router.get("/getCategoryById", Authentication, getCategoryById);
Router.delete("/deleteCategory", Authentication, deleteCategory)


//Pre-care-set
Router.post("/savepostcareAdmin", Authentication, SavepostcareAdmin);
Router.post("/getpostcarelistAdmin", Authentication, getpostcarelistAdmin);
Router.post("/getpoastcaredetailsAdmin", Authentication, getpoastcaredetailsAdmin);
Router.post("/poastcaredeleteByAdmin", Authentication, poastcaredeleteByAdmin);
Router.get("/AddmedicalQuestion", AdminPanleController.AddmedicalQuestion);
Router.get("/medicalhistoryquestion", AdminPanleController.medicalhistoryquestion);


//Help and support
Router.post("/getlistHelpSupport", Authentication, GetlistHelpSupport);
Router.post("/deletehelpsupport", Authentication, deletehelpsupport);


//Faq
Router.post("/informationsave", Authentication, Informationsave);
Router.post("/informationdelete", Authentication, Informationdelete);
Router.post("/faqpriority_set", faqsprority_set);
Router.post("/informationlist", Authentication, Informationlist);
Router.post("/informationoffaq", Authentication, Informationoffaq);

// faq_category

Router.post("/update_data", update_consultation_data);
Router.post("/delete_data", update_consultation_data222);
Router.post("/savefaq_category", Authentication, SaveFaq_category);
Router.post("/Editfaq_category", Authentication, EditFaqCategory);
Router.get("/faq_category_list", Authentication, ListFaqCategories);
Router.delete('/deletefaq_category/:id', Authentication, DeleteFaqCategory); 

module.exports = Router