import React from "react";
import BecomeMember from "../components/footer/BecomeMember";
import Footer from "../components/footer/Footer";
import TopBarBlack from "../components/topbarUser/TopBarBlack";

export const LayoutBlackTop = ({ children }) => {
  return (
    <div>
      <TopBarBlack />
      {children}
      <BecomeMember />
      <Footer />
    </div>
  );
};
