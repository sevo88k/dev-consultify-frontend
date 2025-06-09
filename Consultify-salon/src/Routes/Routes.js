import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SaloonPrivateRoute from "./SaloonPrivateRoute";
import SignUp from "../pages/Signup";
import SignUp2 from "../pages/SignUp2";
import Signin from "../pages/Signin";
import Consultation from "../pages/Consultation";
import SignUp_subscription from "../pages/SignUp_subscription";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import MyClient from "../pages/MyClient";
import MyAccount from "../pages/MyAccount";
import CreateConsultationForm from "../pages/CreateConsultationForm";
import SendConsulation from "../pages/SendConsulation";
import ConsultationForm from "../pages/ConsultationForm";
import CompletedConsultation from "../pages/CompletedConsultation";
import ConsultationForm2 from "../pages/ConsultationForm2";
import ConsultationForm3 from "../pages/ConsultationForm3";
import CreateClient from "../pages/CreateClient";
import BookingSettings from "../pages/BookingSettings";
import ContactPreferences from "../pages/ContactPreferences";
import MySubscription from "../pages/MySubscription";
import Invoices from "../pages/Invoices";
import PasswordSecurity from "../pages/PasswordSecurity";
import OpeningHours from "../pages/OpeningHours";
import ManageTreatments from "../pages/ManageTreatments";
import StaffOverview from "../pages/StaffOverview";
import TreatementAvailability from "../pages/TreatementAvailability";
import AddeditStaff from "../pages/AddeditStaff";
import Search from "../pages/Search";
import SearchResults from "../pages/SearchResults";
import ResultView from "../pages/ResultView";
import DetailScreen from "../pages/DetailScreen";
import ClientView from "../pages/ClientView";
import VideoConsultation from "../pages/VideoConsultation";
import Treatementstation from "../pages/Treatement-stations";
import VerifySalonUser from "../pages/VerifySalonUser";
import MyDetails from "../pages/MyDetails";
import SignUp3 from "../pages/SignUp3";
import MasterConsultationForm from "../pages/MasterConsultationForm";
import EditMasterConsultationForm from "../pages/EditMasterConsultationForm";
import ViewConsultationForm from "../pages/ViewConsultationForm";
import Schedule from "../pages/Schedule";
import DashboardOption from "../pages/DashboardOption";
import DashboardSecondOption from "../pages/DashboardSecondOption";
import ForumHome from "../pages/ForumHome";
import TopicList from "../pages/TopicList";
import TopicListView from "../pages/TopicListView";
import Payment from "../components/Payments/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";
import PreCare from "../pages/PreCare";
import ConsultationPresents from "../pages/ConsultationPresents";
import Settings from "../pages/Settings";
import CustomEmail from "../pages/CustomEmail";
import EditEmail from "../pages/EditEmail";
import PreCarePresents from "../pages/PrecarePresents";
import EditPrecare from "../pages/EditPrecare";
import CreateConsultationFormVoltwo from "../pages/CreateConsultationFormvoltwo";
import ConsultationPresetsVoltwo from "../pages/ConsultationPresetsVoltwo";
import CreateConsultationOptions from "../pages/CreateConsultationOptions";
import ViewConsultationFormvoltwo from "../pages/ViewConsultationFormVoltwo";
import AddPrecare from "../pages/AddPrecare";
import ConsultationformPresetmaster from "../pages/ConsultationformPresetmaster";
import ConsultationPresetView from "../pages/V2/Consultationpreset/ConsultationPresetView";
import EditConsultationFormPreset from "../pages/V2/Consultationpreset/EditConsultationFormPreset";
import EditConsultationForm2Preset from "../pages/V2/Consultationpreset/EditConsultationForm2Preset";
import EditConsultationForm3Preset from "../pages/V2/Consultationpreset/EditConsultationForm3Preset";

import EditNewConsultationEmail from "../pages/EditNewConsultationEmail";
import EditPrecareAdviceEmail from "../pages/EditPrecareAdviceEmail";
import EditAppointmentCreatedEmail from "../pages/EditAppointmentCreatedEmail";
import EditVideoAppointmentEmail from "../pages/EditVideoAppointmentEmail";
import EditMasterpresetConsultation from "../pages/V2/Editpreconsultationpreset/EditMasterpresetConsultation";
import HelpAndSupport from "../pages/HelpAndSupport";
import ViewPrecare from "../pages/ViewPrecare";
import Faq from "../pages/Faq";
import AttachpresetsView from "../pages/V2/Consultationpreset/AttachpresetsView";
import PreCareAcknowledgement from "../pages/PreCareAcknowledgement";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FaqComponent from "../pages/FaqComponent";
import FaqCategory from "../pages/FaqCategory";
import ViewCompletedConsultationForm from "../pages/ViewCompletedConsultation";
import ViewConsultationForClient from "../pages/ViewConsultationForClient";
const RoutesPage = () => {
  return (
    <>
      {/* SALON PANEL ROUTES */}
      <Routes>
        <Route path="/" element={<Signin />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2/:id" element={<SignUp2 />} />
        <Route path="/signup3/:id" element={<SignUp3 />} />
        <Route path="/subscription/:id" element={<SignUp_subscription />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordReset/:token" element={<ResetPassword />} />
        <Route path="/verify_user/:id" element={<VerifySalonUser />} />
        <Route path="/payment/:success/:id" element={<PaymentSuccess />} />
 <Route path="/terms-conditions" element={<TermsConditions />} />
 <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route element={<SaloonPrivateRoute />}>
          <Route path="/pre-care/:id" element={<PreCare />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/myclient" element={<MyClient />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route
            path="/CreateConsultationForm"
            element={<CreateConsultationForm />}
          />
          <Route path="/send_consulation" element={<SendConsulation />} />
          <Route
            path="/consultation_form/:id/:customerId/:path"
            element={<ConsultationForm />}
          />
          <Route path="/consultation_form2" element={<ConsultationForm2 />} />
          <Route path="/consultation_form3" element={<ConsultationForm3 />} />
          <Route
            path="/completed_consultation"
            element={<CompletedConsultation />}
          />
          <Route path="/createClient" element={<CreateClient />} />
          <Route path="/booking_settings" element={<BookingSettings />} />
          <Route path="/contact_preferences" element={<ContactPreferences />} />
          <Route path="/my_subscription" element={<MySubscription />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/password_security" element={<PasswordSecurity />} />
          <Route path="/opening_hours" element={<OpeningHours />} />
          <Route path="/manage_treatments" element={<ManageTreatments />} />
          <Route path="/staff_detail" element={<StaffOverview />} />
          <Route
            path="/treatement_availability"
            element={<TreatementAvailability />}
          />
          <Route path="/addedit_staff/:id" element={<AddeditStaff />} />
          <Route path="/search" element={<Search />} />
          <Route path="/subscription" element={<SignUp_subscription />} />
          <Route path="/search_results" element={<SearchResults />} />
          <Route path="/result_view" element={<ResultView />} />
          <Route path="/detail_screen/:search/:id" element={<DetailScreen />} />
          <Route path="/Treatement-stations" element={<Treatementstation />} />
          <Route path="/client_view/:id" element={<ClientView />} />
          <Route
            path="/video_consultation/:id/:cid"
            element={<VideoConsultation />}
          />
          <Route path="/mydetails" element={<MyDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faqs" element={<FaqComponent />} />
          <Route path="/faqs-category" element={<FaqCategory />} />
          <Route
            path="/view_consultation_form/:id"
            element={<ViewConsultationForm />}
          />

          <Route
            path="/view_completed_consultation_form/:id"
            element={<ViewCompletedConsultationForm />}
          />

<Route
            path="/viewconsultation/:id"
            element={<ViewConsultationForClient />}
          />

          <Route path="/staff_overview" element={<StaffOverview />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<DashboardOption />} />
          <Route
            path="/dashboardsecondoption"
            element={<DashboardSecondOption />}
          />

          {/* jitendra Consultation form */}

          <Route
            path="/create-consultaion-form"
            element={<MasterConsultationForm />}
          />
          <Route
            path="/edit-consultaion-form"
            element={<EditMasterConsultationForm />}
          />
          <Route
            path="/edit-consultation-presets-form"
            element={<EditMasterpresetConsultation />}
          />

          {/* jitendra End Consultation form */}
          <Route path="/forumhome" element={<ForumHome />} />
          <Route path="/topiclist/:catId" element={<TopicList />} />
          <Route
            path="/topiclistview/:topicId/:catId"
            element={<TopicListView />}
          />

          <Route path="/pre-care" element={<PreCare />} />
          <Route
            path="/consultation-presents"
            element={<ConsultationPresents />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/custom-email" element={<CustomEmail />} />
          <Route path="/edit-email" element={<EditEmail />} />
          <Route path="/precare-presents" element={<PreCarePresents />} />
          <Route path="/add-edit-precare" element={<AddPrecare />} />

          <Route path="/edit-precare/:id" element={<EditPrecare />} />
          <Route path="/view-precare/:id" element={<ViewPrecare />} />

          {/* V2 */}

          <Route
            path="/consultation-presets-form"
            element={<ConsultationformPresetmaster />}
          />

          <Route
            path="/create-consultation-presets"
            element={<CreateConsultationFormVoltwo />}
          />
          <Route
            path="/consultation-presets-questions"
            element={<ConsultationPresetsVoltwo />}
          />
          <Route
            path="/create-consultation-options"
            element={<CreateConsultationOptions />}
          />
          <Route
            path="/view-Consultation-form-two"
            element={<ViewConsultationFormvoltwo />}
          />
          <Route
            path="/consultation-preset-view/:id/:path"
            element={<ConsultationPresetView />}
          />

          <Route
            path="/attach-presets-view/:id/:path"
            element={<AttachpresetsView />}
          />

          <Route
            path="/edit-Consultation-Form-preset"
            element={<EditConsultationFormPreset />}
          />
          <Route
            path="/edit-Consultation-Form2-preset"
            element={<EditConsultationForm2Preset />}
          />
          <Route
            path="/edit-Consultation-Form3-preset"
            element={<EditConsultationForm3Preset />}
          />

          <Route
            path="/edit-new-consultation-mail"
            element={<EditNewConsultationEmail />}
          />

          <Route
            path="/edit-Precare-advice-mail"
            element={<EditPrecareAdviceEmail />}
          />
          <Route
            path="/edit-appointment-created-mail"
            element={<EditAppointmentCreatedEmail />}
          />
          <Route
            path="/edit-video-appointment-mail"
            element={<EditVideoAppointmentEmail />}
          />

          <Route path="/help-support" element={<HelpAndSupport />} />
          <Route path="/precareacknowledge" element={<PreCareAcknowledgement />} />
          {/* V2 */}
        </Route>  
      </Routes>
    </>
  );
};

export default RoutesPage;
