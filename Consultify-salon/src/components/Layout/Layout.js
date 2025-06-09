import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  console.log(window.location.pathname, "pathname");

  const pages = [
    "/result_view",
    "/client_view",
    "/video_consultation",
    "/completed_consultation",
    "/consultation",
  ];

  return (
    <div
      className={
        pages?.includes(window.location.pathname) && "banner-section-small"
      }
    >
      <Header pages={pages?.includes(window.location.pathname)} />
      {/* banner Start */}
      <section>
        <div className="container">{children}</div>
      </section>
      {/* banner Start */}
    </div>
  );
};

export default Layout;
