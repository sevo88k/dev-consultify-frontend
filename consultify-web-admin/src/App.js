import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import Treatments from "./pages/Treatements";
import Medical from "./pages/Medical-conditions";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import Ingredients from "./pages/Ingredients";
import Manageadmin from "./pages/Manageadmin";
import Createadmin from "./pages/Createadmin";
import Allusers from "./pages/AllUsers";
import Allsalons from "./pages/AllSalons";
import Manageconsultation from "./pages/Manage-consultations";
import Completedconsultation from "./pages/Completed-consultations";
import Createtreatement from "./pages/Create-treatement";
import Customeroverview from "./pages/CustomerOverview";
import Salonoverview from "./pages/SalonOverview";
import Salonsearch from "./pages/Salon-search-history";
import Saloncustomers from "./pages/SalonCustomers";
import Createconsultation from "./pages/CreateConsultation";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/Changepassword";
import SalonStaff from "./pages/SalonStaff";
import Adminresetpassword from "./pages/Adminresetpassword";
import CreateConsultationNew from "./pages/CreateConsulltationNew";
import CreateConsultationNewOne from "./pages/CreateConsulltationNewOne";
import CreateConsultationNewTwo from "./pages/CreateConsulltationNewTwo";
import ContradictionDatabase from "./pages/ContradictionsDatabase";
import CreateContradiction from "./pages/CreateContradiction";
import CreateConsultationNewForm from "./pages/CreateConsulltationNewform";
import CreateConsultationmaster from "./pages/CreateConsultationmaster";
import EditContraindicationDatabase from "./pages/EditContraindicationDatabase";
import EditConsultationmaster from "./pages/EditConsultationmaster";
import SideEffectlist from "./pages/SideEffectlist";
import ViewConsultationForm from "./pages/ViewConsultationForm";
import Customerviewdetails from "./pages/Customerviewdetails";
import Editadmin from "./pages/Editadmin";
import SalonConsultions from "./pages/SalonConsultions";
import ViewConsultationFormSalon from "./pages/ViewConsultationFormSalon";
import UserCompletedConsultationForms from "./pages/UserCompletedConsultationForms";
import ViewUserConsultationForm from "./pages/ViewUserConsultationForm";
import SalonCustomerCompletedConsultationForms from "./pages/SalonCustomerCompletedConsultationForms";
import Forum from "./pages/Forum";
import Category from "./pages/Category";
import HelpSupport from "./pages/HelpSupport";
import TicketDetail from "./pages/TicketDetail";
import Faqs from "./pages/Faqs";
import AddFaq from "./pages/AddFaq";
import EditFaq from "./pages/EditFaq";
import Precare from "./pages/PreCare";
import CreatePrecare from "./pages/CreatePreCare";
import EditPrecare from "./pages/EditPrecare";
import CustomerAccountUpdates from "./pages/CustomerAccountUpdates";
import PrivateRoute from "./Redux/PrivateRoute";
import CreateConsultationOptions from "./pages/CreateConsulltationOptions";
import EditConsultationOptions from "./pages/EditConsulltationOptions";
import CreateFaqCategory from "./pages/CreateFaqCategory";
import AddNewFaqCategory from "./pages/AddNewFaqCategory";
import SalonConsultationsPresets from "./pages/SalonConsultationsPresets";
import PresetSettingTab from "./pages/PresetSettingTab";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:time/:usertype"
            element={<ResetPassword />}
          />
          <Route
            path="/reset-password/:id/:time"
            element={<Adminresetpassword />}
          />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Treatements" element={<Treatments />} />
            <Route path="/Medical-conditions" element={<Medical />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Ingredients" element={<Ingredients />} />
            <Route path="/Manage-admin" element={<Manageadmin />} />
            <Route path="/Create-admin" element={<Createadmin />} />
            <Route path="/All-users" element={<Allusers />} />
            <Route path="/All-salons" element={<Allsalons />} />
            <Route
              path="/Manage-consultations"
              element={<Manageconsultation />}
            />
            <Route
              path="/Completed-consultations"
              element={<Completedconsultation />}
            />

            <Route
              path="/Completed-consultations-user/:id"
              element={<UserCompletedConsultationForms />}
            />

            <Route path="/Create-treatement" element={<Createtreatement />} />
            <Route
              path="/Customer-overview/:id"
              element={<Customeroverview />}
            />
            <Route
              path="/View-User-ConsultationForm/:id"
              element={<ViewUserConsultationForm />}
            />
            <Route
              path="/Salon-Customer-Completed-Consultation-Forms/:id"
              element={<SalonCustomerCompletedConsultationForms />}
            />

            <Route
              path="/Customerviewdetails/:id"
              element={<Customerviewdetails />}
            />
            <Route path="/Salon-staff/:id" element={<SalonStaff />} />
            <Route path="/Salon-consultation/:id" element={<SalonConsultions />}/>
            <Route path="/Salon-overview/:id" element={<Salonoverview />} />
            <Route path="/Salon-search-history/:id" element={<Salonsearch />} />
            <Route path="/Salon-customers/:id" element={<Saloncustomers />} />
            <Route path="/consultation_preset/:id" element={<SalonConsultationsPresets />} />
            <Route path="/preset_setting/:id" element={<PresetSettingTab />} />
            <Route
              path="/Create-consultation"
              element={<Createconsultation />}
            />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route
              path="/CreateConsultationNew"
              element={<CreateConsultationmaster />}
            />
            <Route
              path="/CreateConsultationNewOne"
              element={<CreateConsultationNewOne />}
            />
            <Route
              path="/CreateConsultationOptions"
              element={<CreateConsultationOptions />}
            />
            <Route
              path="/CreateConsultationNewTwo"
              element={<CreateConsultationNewTwo />}
            />
            <Route
              path="/ContradictionsDatabase"
              element={<ContradictionDatabase />}
            />
            <Route
              path="/CreateContradiction"
              element={<CreateContradiction />}
            />
            <Route
              path="/CreateConsulltationNewform"
              element={<CreateConsultationNewForm />}
            />
            <Route
              path="/Edit-contraidication-dtatabase/:id"
              element={<EditContraindicationDatabase />}
            />
            <Route
              path="/Edit-consultation/:id"
              element={<EditConsultationmaster />}
            />
            <Route path="/side-effect-list" element={<SideEffectlist />} />
            <Route
              path="/view_consultation_form/:id"
              element={<ViewConsultationForm />}
            />
            <Route
              path="/view_consultation_form-salon/:id"
              element={<ViewConsultationFormSalon />}
            />
            <Route path="/edit-admin/:id" element={<Editadmin />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/category" element={<Category />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route path="/ticket-detail" element={<TicketDetail />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/add-faq" element={<AddFaq />} />
            <Route path="/edit-faq/:id" element={<EditFaq />} />
            <Route path="/pre-care" element={<Precare />} />
            <Route path="/create-pre-care" element={<CreatePrecare />} />
            <Route path="/edit-pre-care/:id" element={<EditPrecare />} />
            <Route path="/customer-account-updates" element={<CustomerAccountUpdates />}/>
            <Route path="/edit-consultations-options" element={<EditConsultationOptions />} />
            <Route path="/add-consultations-options" element={<EditConsultationOptions />} />

            <Route path="/faq-category" element={<CreateFaqCategory />} />
            <Route path="/faq-category/:type" element={<AddNewFaqCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
