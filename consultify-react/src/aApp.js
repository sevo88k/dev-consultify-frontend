//ADMIN component imports
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Admin/components/authentication/Login/Login";
import Blog from "./Admin/components/blog/Blog";
import CreateBlog from "./Admin/components/createBlog/CreateBlog";
import Dashboard from "./Admin/components/dashboard/Dashboard";
import LiveChat from "./Admin/components/liveChat/LiveChat";
import MemberDetails from "./Admin/components/memberDetails/MemberDetails";
import Members from "./Admin/components/members/Members";
import Transactions from "./Admin/components/transactions/Transactions";
import Calendar from "./Admin/components/calendar/Calendar";
import AdminForgotPassword from "./Admin/components/authentication/forgotpassword/AdminForgotPassword";
import SetAvailability from "./Admin/components/calendar/SetAvailability";
//USER PANEL component Imports

import Homepage from "./UserPanel/components/homepage/Homepage";
import About from "./UserPanel/components/about/About";
import AccountHome from "./UserPanel/components/account_home/AccountHome";
import Register from "./UserPanel/components/register/Register";
import UserLogin from "./UserPanel/components/userlogin/UserLogin";
import Consultations from "./UserPanel/components/consultaions/Consultaions";
import NewConsultation from "./UserPanel/components/consultaions/NewConsultaion";
import NewConsultationQues from "./UserPanel/components/consultaions/NewConsultaionQues";
import LpSymtomCheckerOne from "./UserPanel/components/lp_symtom_checker/LpSymtomCheckerOne";
import SymptomCheckerStart from "./UserPanel/components/symtom_checker/SymtomCheckerStart";
import TimePicker from "./UserPanel/components/time_picker/TimePicker";
import ToothDecay from "./UserPanel/components/tooth_decay/ToothDecay";
import SelectDate from "./UserPanel/components/select_date/SelectDate";
import PreventionEeducation from "./UserPanel/components/prevention&education/PreventionEducation";
import Prescriptions from "./UserPanel/components/prescriptions/Prescriptions";
import PersonalInformation from "./UserPanel/components/personal_information/PersonalInformation";
import Payment from "./UserPanel/components/payment/Payment";
import MyAccount from "./UserPanel/components/my_account/MyAccount";
import MissingTeeth from "./UserPanel/components/missing_teeth/MissingTeeth";
import MedicalHistory from "./UserPanel/components/medical_history/MedicalHistory";
import JoinCall from "./UserPanel/components/join_call/JoinCall";
import JawProblems from "./UserPanel/components/jaw_problem/JawProblem";
import GumDisease from "./UserPanel/components/gum_disease/GumDisease";
import ForgetPassword from "./UserPanel/components/forget_password/ForgetPassword";
import ContactPreferences from "./UserPanel/components/contact_preferences/ContactPreferences";
import ConfirmBooking from "./UserPanel/components/confirm_booking/ConfirmBooking";
import BadBreath from "./UserPanel/components/bad_breath/BadBreath";
import AdminPrivateRouter from "./Routes/AdminPrivateRouter";
import UserPrivateRoute from "./Routes/UserPrivateRoute";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPay from "./UserPanel/components/payment/MainPay";
import ViewBlog from "./Admin/components/blog/ViewBlog";
import NewPrescriptions from "./Admin/components/newPrescriptions/NewPrescriptions";
import ConsultationWEBRTC from "./Admin/components/consultations/ConsultationWEBRTC";
import ViewBlogUser from "./UserPanel/components/blogs/ViewBlogUser";
import ResetPassword from "./UserPanel/components/reset_password/ResetPassword";
import EditBlog from "./Admin/components/editBlog/EditBlog";
import Layout from "./UserPanel/Layout/Layout";
import Diagnosis from "./UserPanel/components/diagnosis/Diagnosis";
import WebBlogs from "./UserPanel/components/websiteBlog/WebBlogs";
import AllBlogs from "./UserPanel/components/websiteBlog/AllBlogs";
import ManageAdmins from "./Admin/components/manageAdmins/ManageAdmins";
import CommonIssues from "./UserPanel/components/common_issues/CommonIssues";
import TMD from "./UserPanel/components/tmd/TMD";
import Senstivity from "./UserPanel/components/senstivity/Senstivity";
import MouthUlcers from "./UserPanel/components/mouthUlcers/MouthUlcers";
import Pericoronitis from "./UserPanel/components/pericoronitis/Pericoronitis";
import DrySocket from "./UserPanel/components/drySocket/DrySocket";
import VerifyAccount from "./UserPanel/components/verifyAccount/VerifyAccount";
import DentalPain from "./UserPanel/components/lp_symtom_checker/home_symtom_checker/DentalPain";
import JawAche from "./UserPanel/components/lp_symtom_checker/home_symtom_checker/JawAche";
import HeadAche from "./UserPanel/components/lp_symtom_checker/home_symtom_checker/HeadAche";
import Ulcers from "./UserPanel/components/lp_symtom_checker/home_symtom_checker/Ulcers";
import SymptomCheckerOne from "./UserPanel/components/symtom_checker/SymtomCheckerOne";
import Loader from "./UserPanel/Loader/Loader";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname != "/contact") window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Loader />
      <ToastContainer autoClose={2000} limit={1} />

      {/* USER PANEL ROUTES */}
      <Routes>
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/verify/:otp/:id" element={<VerifyAccount />} />
        <Route element={<UserPrivateRoute />}>
          <Route exact path="/accountHome" element={<AccountHome />} />
          <Route
            path="/symptom-checker-start"
            element={<SymptomCheckerStart />}
          />

          <Route path="/payment" element={<Payment />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/missing-teeth" element={<MissingTeeth />} />
          <Route path="/my-account/:tab" element={<MyAccount />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/new-consultation" element={<NewConsultation />} />
          <Route
            path="/new-consultation-ques"
            element={<NewConsultationQues />}
          />
          <Route path="/select-date" element={<SelectDate />} />
          <Route path="/time-picker/:date" element={<TimePicker />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route exact path="/stripe" element={<MainPay />} />
          <Route path="/join-call/:id" element={<JoinCall />} />
          <Route
            path="/confirm-booking/:date/:time"
            element={<ConfirmBooking />}
          />
        </Route>

        <Route exact path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<Navigate to="/adminlogin" />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/resetPass/:resetToken"
          element={<ResetPassword />}
        />
        <Route path="/lp-symtom-checker-dental-pain" element={<DentalPain />} />
        <Route path="/lp-symtom-checker-jaw-ache" element={<JawAche />} />
        <Route
          path="/lp-symtom-checker-headaches-migration"
          element={<HeadAche />}
        />
        <Route path="/lp-symtom-checker-ulcers" element={<Ulcers />} />

        <Route exact path="/blog/:id" element={<WebBlogs />} />
        <Route exact path="/allBlogs" element={<AllBlogs />} />

        <Route path="/read-blog/:id" element={<ViewBlogUser />} />
        <Route path="/register" element={<Register />} />

        <Route path="/bad-breath" element={<BadBreath />} />
        <Route path="/jaw-problems" element={<JawProblems />} />
        <Route path="/gum-disease" element={<GumDisease />} />
        <Route path="/contact-preferences" element={<ContactPreferences />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/common-issues" element={<CommonIssues />} />
        <Route path="/tmd/:type" element={<TMD />} />
        <Route path="/senstivity" element={<Senstivity />} />
        <Route path="/mouthulcers/:type" element={<MouthUlcers />} />
        <Route path="/perico" element={<Pericoronitis />} />
        <Route path="/drysocket" element={<DrySocket />} />
        <Route
          path="/prevention-education"
          element={<PreventionEeducation />}
        />
        <Route path="/lp-symtom-checker-one" element={<LpSymtomCheckerOne />} />
        <Route path="/tooth-decay" element={<ToothDecay />} />

        {/* ADMIN PANEL ROUTES */}
        <Route
          exact
          path="adminforgotPassword"
          element={<AdminForgotPassword />}
        />

        <Route exact path="/adminlogin" element={<Login />} />
        <Route path="/admin" element={<AdminPrivateRouter />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route exact path="blog" element={<Blog />} />

          <Route exact path="createblog" element={<CreateBlog />} />
          <Route exact path="livechat" element={<LiveChat />} />
          <Route exact path="member" element={<Members />} />
          <Route exact path="memberdetails/:id" element={<MemberDetails />} />
          <Route
            exact
            path="member/newPrescriptions/:id"
            element={<NewPrescriptions />}
          />
          <Route exact path="transactions" element={<Transactions />} />
          <Route exact path="calendar" element={<Calendar />} />
          <Route
            exact
            path="calendar/setAvailability"
            element={<SetAvailability />}
          />

          <Route exact path="blog/viewBlog/:id" element={<ViewBlog />} />
          <Route exact path="blog/editBlog/:id" element={<EditBlog />} />
          <Route
            exact
            path="adminConsultation/:id"
            element={<ConsultationWEBRTC />}
          />
          <Route exact path="manageAdmins" element={<ManageAdmins />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
