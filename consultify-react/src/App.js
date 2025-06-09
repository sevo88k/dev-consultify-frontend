import { Route, Routes } from 'react-router-dom';
import RegisterLandingPage from './Pages/RegisterLandingPage';
import TermsCondition from './Pages/TermsCondition';
import Privacy_policy from './Pages/Privacy_policy';
import { useEffect } from 'react';
import ScrollToTop from './utils/ScrollToTop';
import SignUp from './Pages/SignUp';
import SignUp2 from './Pages/SignUp2';
import SignUp3 from './Pages/SignUp3';
import Signin from './Pages/Signin';
import SignUp_subscription from './Pages/SignUp_subscription';
import Search from './Pages/Search1';
import Consultation from './Pages/Consultation';
import Consultation2 from './Pages/Consultation2';
import MyClient from './Pages/MyClient';
import Searchresult from './Pages/search_results';
import Resultview from './Pages/result_view';
import Myaccount from './Pages/Myaccount';
import Mydetails from './Pages/Mydetails';
import Booking from './Pages/Booking_settings';
import Sendconsultation from './Pages/send-consulation';
import CompletedConsultation from './Pages/completed_consultation';
import Consultingfrom from './Pages/consultation_form';
import Consultationfornone from './Pages/create_consultation_form_one';
import Consultationformtwo from './Pages/create_consultation_form_two';
import Consultationformthree from './Pages/create_consultation_form_three';
import Clientview from './Pages/client_view';
import Detailscreen from './Pages/Detail-screen';
import Salonview from './Pages/Salon-profile';
import Startconsultation from './Pages/start-consultation ';
import Contactpreferences from './Pages/Contact-preferences';
import Mysubscription from './Pages/My-subscription';
import Invoices from './Pages/Invoice';
import Passsecurity from './Pages/Password-security';
import Contactsecurity from './Pages/Contact-support';
import Openinghours from './Pages/Opening-hours';
import Managetreatment from './Pages/Manage-treatments';
import Treatementavailability from './Pages/Treatement-availability';
import Staffoverview from './Pages/Staff-overview';
import Addstaff from './Pages/Addedit-staff';
import Treatementstation from './Pages/Treatement-stations';
import Salonsearch from './Pages/Salon-search';
import Forgotpass from './Pages/Forgot-password';
import Videoconsultation from './Pages/Video-consultation';
import Treatmentpopup from './Pages/Treatements-popups';
import Schedule from './Pages/Schedule';

function App() {

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   document.body.style.overflow = "hidden"
  // }, []);
  return (
    <div className="App">

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<RegisterLandingPage />} />
        <Route path='/terms_condition' element={<TermsCondition />} />
        <Route path='/privacy_policy' element={<Privacy_policy />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/signup3' element={<SignUp3 />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/SignUp-subscription' element={<SignUp_subscription />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Consultation' element={<Consultation />} />
        <Route path='/Consultation2' element={<Consultation2 />} />
        <Route path='/MyClient' element={<MyClient />} />
        <Route path='/search_results' element={<Searchresult />} />
        <Route path='/result_view' element={<Resultview />} />
        <Route path='/Myaccount' element={<Myaccount />} />
        <Route path='/Mydetails' element={<Mydetails />} />
        <Route path='/Booking_settings' element={<Booking />} />
        <Route path='/send-consulation' element={< Sendconsultation />} />
        <Route path='/completed_consultation' element={< CompletedConsultation />} />
        <Route path='/consultation_form' element={< Consultingfrom />} />
        <Route path='/create_consultation_form_one' element={< Consultationfornone />} />
        <Route path='/create_consultation_form_two' element={< Consultationformtwo />} />
        <Route path='/create_consultation_form_three' element={< Consultationformthree />} />
        <Route path='/client_view' element={< Clientview />} />
        <Route path='/Detail-screen' element={< Detailscreen />} />
        <Route path='/Salon-profile' element={< Salonview />} />
        <Route path='/start-consultation' element={< Startconsultation />} />
        <Route path='/Contact-preferences' element={< Contactpreferences />} />
        <Route path='/My-subscription' element={< Mysubscription />} />
        <Route path='/Invoice' element={< Invoices />} />
        <Route path='/Password-security' element={< Passsecurity />} />
        <Route path='/Contact-support' element={< Contactsecurity />} />
        <Route path='/Opening-hours' element={< Openinghours />} />
        <Route path='/Manage-treatments' element={< Managetreatment />} />
        <Route path='/Treatement-availability' element={< Treatementavailability />} />
        <Route path='/Staff-overview' element={< Staffoverview />} />
        <Route path='/Addedit-staff' element={< Addstaff />} />
        <Route path='/Treatement-stations' element={< Treatementstation />} />
        <Route path='/Salon-search' element={< Salonsearch />} />
        <Route path='/Forgot-password' element={< Forgotpass />} />
        <Route path='/Video-consultation' element={< Videoconsultation />} />
        <Route path='/Treatements-popups' element={< Treatmentpopup />} />
        <Route path='/Schedule' element={< Schedule />} />
      </Routes>
    </div>
  );
};



export default App;

