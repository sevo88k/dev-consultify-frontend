import React from "react";
import Header from "./Header";

const LargeBannerLayout = ({ children }) => {
  return (
    <div className="">
      <Header pages={true} />
      {children}
    </div>
  );
};

export default LargeBannerLayout;
