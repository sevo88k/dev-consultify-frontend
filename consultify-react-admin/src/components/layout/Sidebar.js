import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
const Sidebar = () => {
  const cookies = new Cookies()
  const path = useLocation();
  const pathArr = path.pathname.split("/");
  const isHref = (path) => {
    return pathArr.includes(path) ? true : false;
  };
  const handleLogOut = () => {
    cookies.remove("adminToken");
    sessionStorage.removeItem("adminToken");
  };
  return (
    <div id="sidebar-menu">
      {/* <!-- Left Menu Start --> */}
      <ul className="metismenu list-unstyled mt-2" id="side-menu">
        <div className="flex-colum-part mm-active">
          <div className="flex-colum-c">
          <li className="border_none">
              <Link
                to="/all-users"
                className={
                  isHref("all-users") ? "waves-effect active" : "waves-effect"
                }
              >
                <i className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" fill={isHref("all-users") ? "#0A4949" : "#A3AED0"}></path></svg>
                </i>
                <span key="t-dashboards">All Users</span>
              </Link>
            </li>
          </div>
          <div className="flex-colum-c">
         

            <li className="">
              <Link
                onClick={() => handleLogOut()}
                to="/"
                className={
                  isHref("/") ? "waves-effect active" : "waves-effect"
                }
              >
                <i className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isHref("/") ? "#2b3674" : "#A3AED0"}><path d="M18 2H6a1 1 0 0 0-1 1v9l5-4v3h6v2h-6v3l-5-4v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path></svg>
                </i>
                <span key="t-dashboards">Log Out</span>
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
