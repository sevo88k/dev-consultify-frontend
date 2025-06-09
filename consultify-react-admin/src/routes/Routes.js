import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import AllUsers from "../pages/AllUsers";
import TradePersons from "../pages/TradePersons";
import PendingVerification from "../pages/PendingVerification";
import AllEnquiries from "../pages/AllEnquiries";
import AllReviews from "../pages/AllReviews";
import ManageCategories from "../pages/ManageCategories/ManageCategories";
import ManageAdmins from "../pages/ManageAdmins";
import MemberDetails from "../components/All_Users/MemberDetails";
import EnquiryViews from "../components/All_Users/all_enquiries/EnquiryViews";
import TradePersonDetails from "../components/trades_persons/TradePersonDetails";
import ViewDetail from "../components/all_reviews/ViewDetail";
import PrivateRoute from "./PrivateRoute";
import CreateCategory from "../pages/ManageCategories/CreateCategory";
import EditCategory from "../pages/ManageCategories/EditCategory";
import Service from "../pages/ManageCategories/service/Service";
import CreateServiceCategory from "../pages/ManageCategories/service/CreateServiceCategory";
import EditServiceCategory from "../pages/ManageCategories/service/EditServiceCategory";
import EnquiryDetail from "../components/enquiry/EnquiryDetail";

const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        {/* USER PANEL ROUTES */}
        <Routes>
          <Route element={<PrivateRoute />}>
          <Route path="all-users" element={<AllUsers />} />
          </Route>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
