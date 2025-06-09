import React from "react";
import BecomeMember from "../components/footer/BecomeMember";
import Footer from "../components/footer/Footer";
import TopBarBlue from "../components/topbarUser/TopBarBlue";

const LayoutSymtom = ({ children }) => {
  return (
    <div>
      <TopBarBlue />
      {children}
      <BecomeMember />
      <Footer />
    </div>
  );
};

export default LayoutSymtom;
