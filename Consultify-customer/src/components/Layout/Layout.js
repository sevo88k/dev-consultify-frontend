import React from "react";
import Header from "./Header";

const Layout = ({ children, type }) => {
  console.log(window.location.pathname, "pathname");

  const pages = [
    "/result_view",
    "/client_view",
    "/video_consultation",
    "/completed_consultation",
    "/consultation",
  ];

  return (
    <div>
      <Header type={type} />
      {/* banner Start */}
      {children}
      {/* banner Start */}
    </div>
  );
};

export default Layout;
