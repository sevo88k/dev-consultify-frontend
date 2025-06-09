import React from "react";
import BecomeMember from "../components/footer/BecomeMember";
import Footer from "../components/footer/Footer";
import TopbarUser from "../components/topbarUser/TopbarUser";

const LayoutHome = ({ children }) => {
  return (
    <>
      <TopbarUser />
      {children}
      <BecomeMember />
      <Footer />
    </>
  );
};

export default LayoutHome;
