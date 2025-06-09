import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactpreferences from "./Pages/ContactPreferences";
import Contactsecurity from "./Pages/ContactSupport";
import Invoices from "./Pages/Invoice";
import Mydetails from "./Pages/Mydetails";
import Passsecurity from "./Pages/PasswordSecurity";
import Salonview from "./Pages/Salon-profile";
import Salonsearch from "./Pages/SalonSearch";
import SignUp from "./Pages/SignUp";
import Startconsultation from "./Pages/start-consultation ";
import Clientview from "./Pages/Client_view";
import Completedconsultation from "./Pages/Completed_consultation";
import Connectpatch from "./Pages/Connect-Patchport";
import Invoicesalon from "./Pages/Invoice-Salon";
import Schedule from "./Pages/Schedule";
import Salonmodal from "./Pages/Salon-modal";
import Signin from "./Pages/Signin";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./Pages/ResetPassword";
import Passwordreset from "./Pages/Passwordreset";
import EmailVerification from "./Pages/EmailVerification";
import ViewConsultationForm from "./Pages/ViewConsultationForm";
import ConsultationForm from "./Pages/ConsultationForm";
import VideoConsultation from "./Pages/VideoConsultation";
import UpdatePassword from "./Pages/UpdatePassword";
import CustomerPrivateRoute from "./Redux/Action/CustomerPrivateRoute";
import HelpAndContact from "./Pages/HelpAndContact";
import PrePostCare from "./Pages/PrePostCare";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import PrePostCared from "./Pages/PrePostCared";
import CompleteConsultationCheck from "./Pages/CompleteConsultationCheck";
import ConsultationModal from "./Pages/ConsultationModal";

function App() {

  // useEffect(() => {
  //   const path = localStorage.getItem('redirectPath');

  //   const currentPath = window.location.pathname;
    
  //  let x =  Cookies.get('redirectPath')
  //   if (path) {
  //     localStorage.removeItem('redirectPath');
  //     // window.location.href = x;
  //   }
  // }, []);

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/:id/:time" element={<Passwordreset />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/SalonSearch" element={<Salonsearch />} />

          <Route path="/Contact-preferences" element={<Contactpreferences />} />
          <Route path="/Contact-support" element={<Contactsecurity />} />

          <Route
            path="/Completed_consultation"
            element={<Completedconsultation />}
          />
          <Route path="/Connect-Patchport" element={<Connectpatch />} />
          <Route path="/Invoice-Salon" element={<Invoicesalon />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Salon-modal" element={<Salonmodal />} />
          <Route path="/My-subscription/:id" element={<EmailVerification />} />

          <Route
            path="/view_consultation_form/:id"
            element={<ViewConsultationForm />}
          />


        
          {/* <Route element={<CustomerPrivateRoute />}> */}
          <Route
            path="/consultation_form/:id/:formId"
            element={<ConsultationForm />}
          />
            <Route path="/view-consultation/:id" element={<CompleteConsultationCheck />} />
            
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/Invoice" element={<Invoices />} />
            <Route path="/Mydetails" element={<Mydetails />} />
            <Route path="/Password-security" element={<Passsecurity />} />
            <Route path="/Salon-profile" element={<Salonview />} />
            <Route path="/start-consultation" element={<Startconsultation />} />
            <Route
              path="/video_consultation/:id"
              element={<VideoConsultation />}
            />
            <Route path="/Client_view" element={<Clientview />} />
            <Route path="/Client_view:id" element={<Clientview />} />

            <Route path="/faqs" element={<HelpAndContact />} />

            <Route path="/pre-care" element={<PrePostCared />} />
            <Route path="/pre-care/:id" element={<PrePostCare />} />
            <Route path="/completed" element={<ConsultationModal />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
