import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  convertCsvToExcel,
  uploadContradictionDB,
} from "../../Redux/Action/ContaindicationAction";
import { useDispatch } from "react-redux";
import Loader from "../../Component/Loader";
import toast from "react-hot-toast";

export default function Sidebar({ handleToggle }) {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  // Open a link in a new tab
  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  const handleFileChange = (e) => {
    setLoader(true);

    const formDatavalue = new FormData();
    formDatavalue.append("imagename1", e.target.files[0]);
    dispatch(convertCsvToExcel(formDatavalue)).then((item) => {
      if (item?.payload) {
        dispatch(uploadContradictionDB({ filePath: item?.payload })).then(
          (item) => {
            if (item?.payload) {
              setLoader(false);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              setLoader(false);
            }
          }
        );
      } else {
        setLoader(false);
      }
    });
  };

  return (
    <div data-simplebar="" className="h-100">
      {/* <!--- Sidemenu --> */}
      {loader && <Loader />}

      <div id="sidebar-menu">
        <div class="navbar-brand-box">
          <NavLink to="/dashboard" class="logo logo-dark">
            <span class="logo-lg">
              {/* <img src={require("../../assets/images/logo.svg").default} /> */}
              <img    className="main-logo" src={require("../../assets/images/blacklogo.svg").default} />
            </span>
            {/* <div onClick={handleToggle}> X</div> */}
          </NavLink>
        </div>
        {/* <!-- Left Menu Start --> */}
        <ul className="metismenu list-unstyled" id="side-menu">
          <hr />
          <li
            className={
              window.location.pathname == "/dashboard" ? "bar_active" : ""
            }
          >
            <NavLink to="/dashboard" className="waves-effect">
              <i>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_82_4735)">
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.6C12.29 3.26 11.71 3.26 11.33 3.6L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                      fill="#A3AED0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_4735">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              <span key="t-dashboards">Dashboard</span>
            </NavLink>
          </li>
          <hr />
          {/* <li className="">
                <NavLink to="/Treatements" className="waves-effect">
                    <i className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0"/>
                            </svg>
                      
                    </i>
                    <span key="t-dashboards">Treatments</span>
                </NavLink>
            </li> */}

          <li
            className={
              window.location.pathname == "/ContradictionsDatabase"
                ? "bar_active"
                : ""
            }
          >
            <NavLink to="/ContradictionsDatabase" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Contraindication Database</span>
            </NavLink>
          </li>

          <li
            className={
              window.location.pathname == "/side-effect-list"
                ? "bar_active"
                : ""
            }
          >
            <NavLink to="/side-effect-list" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Side Effects</span>
            </NavLink>
          </li>

          {/* <li className="">
                <NavLink to="/Medical-conditions" className="waves-effect">
                    <i className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0"/>
                            </svg>
                      
                    </i>
                    <span key="t-dashboards">Medical Conditions</span>
                </NavLink>
            </li>

            <li className="">
                <NavLink to="/Products" className="waves-effect">
                    <i className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0"/>
                            </svg>
                      
                    </i>
                    <span key="t-dashboards">Products</span>
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/Ingredients" className="waves-effect">
                    <i className="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0"/>
                            </svg>
                      
                    </i>
                    <span key="t-dashboards">Ingredients</span>
                </NavLink>
              </li> */}
          <hr />
          <li className="">
            <NavLink
              onClick={() =>
                openLinkInNewTab(
                  `${process.env.REACT_APP_API_URL}/exportContradictionDB`
                )
              }
              to="#"
              className="waves-effect"
            >
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 11.5H17.9415C17.2458 11.5 16.8979 11.5 16.636 11.6888C16.3742 11.8775 16.2642 12.2075 16.0442 12.8675L15.9558 13.1325C15.7358 13.7925 15.6258 14.1225 15.364 14.3112C15.1021 14.5 14.7542 14.5 14.0585 14.5H9.94152C9.2458 14.5 8.89794 14.5 8.63605 14.3112C8.37416 14.1225 8.26416 13.7925 8.04415 13.1325L7.95585 12.8675C7.73584 12.2075 7.62584 11.8775 7.36395 11.6888C7.10206 11.5 6.7542 11.5 6.05848 11.5H3.5"
                    stroke="#A3AED0"
                    stroke-width="2"
                  />
                  <path
                    d="M9.5 6.5L12 9M12 9L14.5 6.5M12 9L12 2"
                    stroke="#A3AED0"
                    stroke-width="1.5"
                  />
                  <path
                    d="M6.5 8.5L4.78246 9.64502C4.31358 9.95761 4.07914 10.1139 3.90942 10.3204C3.75917 10.5032 3.64643 10.7139 3.57767 10.9403C3.5 11.196 3.5 11.4778 3.5 12.0413V15.62C3.5 16.6281 3.5 17.1321 3.69619 17.5172C3.86876 17.8559 4.14413 18.1312 4.48282 18.3038C4.86786 18.5 5.37191 18.5 6.38 18.5H17.62C18.6281 18.5 19.1321 18.5 19.5172 18.3038C19.8559 18.1312 20.1312 17.8559 20.3038 17.5172C20.5 17.1321 20.5 16.6281 20.5 15.62V12.0413C20.5 11.4778 20.5 11.196 20.4223 10.9403C20.3536 10.7139 20.2408 10.5032 20.0906 10.3204C19.9209 10.1139 19.6864 9.95761 19.2175 9.64502L17.5 8.5"
                    stroke="#A3AED0"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Download Database</span>
            </NavLink>
          </li>
          <li className="position-relative upload-sata">
            <div className="upload-database">
              {/* <NavLink to="#" className="waves-effect"> */}
              <div className="d-flex align-items-center">
                <i className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 11.5H17.9415C17.2458 11.5 16.8979 11.5 16.636 11.6888C16.3742 11.8775 16.2642 12.2075 16.0442 12.8675L15.9558 13.1325C15.7358 13.7925 15.6258 14.1225 15.364 14.3112C15.1021 14.5 14.7542 14.5 14.0585 14.5H9.94152C9.2458 14.5 8.89794 14.5 8.63605 14.3112C8.37416 14.1225 8.26416 13.7925 8.04415 13.1325L7.95585 12.8675C7.73584 12.2075 7.62584 11.8775 7.36395 11.6888C7.10206 11.5 6.7542 11.5 6.05848 11.5H3.5"
                      stroke="#A3AED0"
                      stroke-width="2"
                    />
                    <path
                      d="M14.4898 4.47488L11.9648 2.00018M11.9648 2.00018L9.49007 4.52523M11.9648 2.00018L12.0353 8.99983"
                      stroke="#A3AED0"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6.5 8.5L4.78246 9.64502C4.31358 9.95761 4.07914 10.1139 3.90942 10.3204C3.75917 10.5032 3.64643 10.7139 3.57767 10.9403C3.5 11.196 3.5 11.4778 3.5 12.0413V15.62C3.5 16.6281 3.5 17.1321 3.69619 17.5172C3.86876 17.8559 4.14413 18.1312 4.48282 18.3038C4.86786 18.5 5.37191 18.5 6.38 18.5H17.62C18.6281 18.5 19.1321 18.5 19.5172 18.3038C19.8559 18.1312 20.1312 17.8559 20.3038 17.5172C20.5 17.1321 20.5 16.6281 20.5 15.62V12.0413C20.5 11.4778 20.5 11.196 20.4223 10.9403C20.3536 10.7139 20.2408 10.5032 20.0906 10.3204C19.9209 10.1139 19.6864 9.95761 19.2175 9.64502L17.5 8.5"
                      stroke="#A3AED0"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </i>

                <input
                  type="file"
                  class="file-input"
                  id="fileInput"
                  onChange={handleFileChange}
                />
                <p key="t-dashboards" for="fileInput" class="">
                  Upload Database
                </p>
              </div>

              {/* </NavLink> */}
            </div>
          </li>
          <hr />
          <li
            className={
              window.location.pathname == "/Transactions" ? "bar_active" : ""
            }
          >
            <NavLink to="/Transactions" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Transactions</span>
            </NavLink>
          </li>
          <hr />
          <li
            className={
              window.location.pathname == "/All-users" ? "bar_active" : ""
            }
          >
            <NavLink to="/All-users" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="inner-circle"
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#A3AED0"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <circle
                    className="outer-circle"
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#A3AED0"
                    stroke-width="2"
                  />
                  <path
                    d="M17.7805 18.8264C17.9076 18.7566 17.9678 18.6055 17.914 18.4708C17.5284 17.5045 16.7856 16.6534 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.21444 16.6534 6.4716 17.5045 6.08598 18.4708C6.03223 18.6055 6.09236 18.7566 6.21948 18.8264C9.81971 20.803 14.1803 20.803 17.7805 18.8264Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Users</span>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname == "/All-salons" ? "bar_active" : ""
            }
          >
            <NavLink to="/All-salons" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="inner-circle"
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="#A3AED0"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <circle
                    className="outer-circle"
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#A3AED0"
                    stroke-width="2"
                  />
                  <path
                    d="M17.7805 18.8264C17.9076 18.7566 17.9678 18.6055 17.914 18.4708C17.5284 17.5045 16.7856 16.6534 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.21444 16.6534 6.4716 17.5045 6.08598 18.4708C6.03223 18.6055 6.09236 18.7566 6.21948 18.8264C9.81971 20.803 14.1803 20.803 17.7805 18.8264Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Salons</span>
            </NavLink>
          </li>
          <hr />
          <li
            className={
              window.location.pathname == "/Manage-consultations"
                ? "bar_active"
                : ""
            }
          >
            <NavLink to="/Manage-consultations" className="waves-effect">
              <i className="">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 14H13C14.8856 14 15.8284 14 16.4142 13.4142C17 12.8284 17 11.8856 17 10V5C17 3.11438 17 2.17157 16.4142 1.58579C15.8284 1 14.8856 1 13 1H5C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V16.5C1 15.1193 2.11929 14 3.5 14ZM13.4142 7.41421C14.1953 6.63317 14.1953 5.36684 13.4142 4.58579C12.6332 3.80474 11.3668 3.80474 10.5858 4.58579L8 7.17157L7.41421 6.58579C6.63317 5.80474 5.36684 5.80474 4.58579 6.58579C3.80474 7.36683 3.80474 8.63316 4.58579 9.41421L5.87868 10.7071C7.05025 11.8787 8.94975 11.8787 10.1213 10.7071L13.4142 7.41421Z"
                    fill="#A3AED0"
                  />
                  <path
                    d="M16.4142 13.4142L15.7071 12.7071L15.7071 12.7071L16.4142 13.4142ZM16.4142 1.58579L15.7071 2.29289L15.7071 2.29289L16.4142 1.58579ZM13.4142 4.58579L14.1213 3.87868L14.1213 3.87868L13.4142 4.58579ZM13.4142 7.41421L12.7071 6.70711L13.4142 7.41421ZM10.5858 4.58579L9.87868 3.87868L10.5858 4.58579ZM8 7.17157L7.29289 7.87868L8 8.58579L8.70711 7.87868L8 7.17157ZM7.41421 6.58579L6.70711 7.29289H6.70711L7.41421 6.58579ZM4.58579 6.58579L5.29289 7.29289L5.29289 7.29289L4.58579 6.58579ZM4.58579 9.41421L5.29289 8.70711V8.70711L4.58579 9.41421ZM5.87868 10.7071L5.17157 11.4142L5.87868 10.7071ZM10.1213 10.7071L9.41421 10L10.1213 10.7071ZM13 13H3.5V15H13V13ZM15.7071 12.7071C15.631 12.7832 15.495 12.8774 15.0613 12.9357C14.5988 12.9979 13.9711 13 13 13V15C13.9145 15 14.701 15.0021 15.3278 14.9179C15.9833 14.8297 16.6117 14.631 17.1213 14.1213L15.7071 12.7071ZM16 10C16 10.9711 15.9979 11.5988 15.9357 12.0613C15.8774 12.495 15.7832 12.631 15.7071 12.7071L17.1213 14.1213C17.631 13.6117 17.8297 12.9833 17.9179 12.3278C18.0021 11.701 18 10.9145 18 10H16ZM16 5V10H18V5H16ZM15.7071 2.29289C15.7832 2.36902 15.8774 2.50496 15.9357 2.9387C15.9979 3.40121 16 4.02892 16 5H18C18 4.08546 18.0021 3.29896 17.9179 2.67221C17.8297 2.01669 17.631 1.38834 17.1213 0.878679L15.7071 2.29289ZM13 2C13.9711 2 14.5988 2.00212 15.0613 2.06431C15.495 2.12262 15.631 2.21677 15.7071 2.29289L17.1213 0.87868C16.6117 0.369017 15.9833 0.170272 15.3278 0.0821405C14.701 -0.00212371 13.9145 0 13 0V2ZM5 2H13V0H5V2ZM2.29289 2.29289C2.36902 2.21677 2.50496 2.12262 2.9387 2.06431C3.40121 2.00212 4.02892 2 5 2V0C4.08546 0 3.29896 -0.00212371 2.67221 0.0821405C2.01669 0.170272 1.38834 0.369017 0.87868 0.87868L2.29289 2.29289ZM2 5C2 4.02892 2.00212 3.40121 2.06431 2.9387C2.12262 2.50496 2.21677 2.36902 2.29289 2.29289L0.87868 0.87868C0.369017 1.38834 0.170272 2.01669 0.0821405 2.67221C-0.00212371 3.29896 0 4.08546 0 5H2ZM2 16.5V5H0V16.5H2ZM3.5 13C1.567 13 0 14.567 0 16.5H2C2 15.6716 2.67157 15 3.5 15V13ZM12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L14.1213 8.12132C15.2929 6.94975 15.2929 5.05025 14.1213 3.87868L12.7071 5.29289ZM11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L14.1213 3.87868C12.9497 2.70711 11.0503 2.70711 9.87868 3.87868L11.2929 5.29289ZM8.70711 7.87868L11.2929 5.29289L9.87868 3.87868L7.29289 6.46447L8.70711 7.87868ZM6.70711 7.29289L7.29289 7.87868L8.70711 6.46447L8.12132 5.87868L6.70711 7.29289ZM5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L8.12132 5.87868C6.94975 4.70711 5.05025 4.70711 3.87868 5.87868L5.29289 7.29289ZM5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289L3.87868 5.87868C2.70711 7.05025 2.70711 8.94975 3.87868 10.1213L5.29289 8.70711ZM6.58579 10L5.29289 8.70711L3.87868 10.1213L5.17157 11.4142L6.58579 10ZM9.41421 10C8.63316 10.781 7.36684 10.781 6.58579 10L5.17157 11.4142C6.73367 12.9763 9.26633 12.9763 10.8284 11.4142L9.41421 10ZM12.7071 6.70711L9.41421 10L10.8284 11.4142L14.1213 8.12132L12.7071 6.70711ZM8 18H3.5V20H8V18ZM0 16.5C0 18.433 1.567 20 3.5 20V18C2.67157 18 2 17.3284 2 16.5H0Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Manage Consultations</span>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname == "/Completed-consultations"
                ? "bar_active"
                : ""
            }
          >
            <NavLink to="/Completed-consultations" className="waves-effect">
              <i className="">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 14H13C14.8856 14 15.8284 14 16.4142 13.4142C17 12.8284 17 11.8856 17 10V5C17 3.11438 17 2.17157 16.4142 1.58579C15.8284 1 14.8856 1 13 1H5C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V16.5C1 15.1193 2.11929 14 3.5 14ZM13.4142 7.41421C14.1953 6.63317 14.1953 5.36684 13.4142 4.58579C12.6332 3.80474 11.3668 3.80474 10.5858 4.58579L8 7.17157L7.41421 6.58579C6.63317 5.80474 5.36684 5.80474 4.58579 6.58579C3.80474 7.36683 3.80474 8.63316 4.58579 9.41421L5.87868 10.7071C7.05025 11.8787 8.94975 11.8787 10.1213 10.7071L13.4142 7.41421Z"
                    fill="#A3AED0"
                  />
                  <path
                    d="M16.4142 13.4142L15.7071 12.7071L15.7071 12.7071L16.4142 13.4142ZM16.4142 1.58579L15.7071 2.29289L15.7071 2.29289L16.4142 1.58579ZM13.4142 4.58579L14.1213 3.87868L14.1213 3.87868L13.4142 4.58579ZM13.4142 7.41421L12.7071 6.70711L13.4142 7.41421ZM10.5858 4.58579L9.87868 3.87868L10.5858 4.58579ZM8 7.17157L7.29289 7.87868L8 8.58579L8.70711 7.87868L8 7.17157ZM7.41421 6.58579L6.70711 7.29289H6.70711L7.41421 6.58579ZM4.58579 6.58579L5.29289 7.29289L5.29289 7.29289L4.58579 6.58579ZM4.58579 9.41421L5.29289 8.70711V8.70711L4.58579 9.41421ZM5.87868 10.7071L5.17157 11.4142L5.87868 10.7071ZM10.1213 10.7071L9.41421 10L10.1213 10.7071ZM13 13H3.5V15H13V13ZM15.7071 12.7071C15.631 12.7832 15.495 12.8774 15.0613 12.9357C14.5988 12.9979 13.9711 13 13 13V15C13.9145 15 14.701 15.0021 15.3278 14.9179C15.9833 14.8297 16.6117 14.631 17.1213 14.1213L15.7071 12.7071ZM16 10C16 10.9711 15.9979 11.5988 15.9357 12.0613C15.8774 12.495 15.7832 12.631 15.7071 12.7071L17.1213 14.1213C17.631 13.6117 17.8297 12.9833 17.9179 12.3278C18.0021 11.701 18 10.9145 18 10H16ZM16 5V10H18V5H16ZM15.7071 2.29289C15.7832 2.36902 15.8774 2.50496 15.9357 2.9387C15.9979 3.40121 16 4.02892 16 5H18C18 4.08546 18.0021 3.29896 17.9179 2.67221C17.8297 2.01669 17.631 1.38834 17.1213 0.878679L15.7071 2.29289ZM13 2C13.9711 2 14.5988 2.00212 15.0613 2.06431C15.495 2.12262 15.631 2.21677 15.7071 2.29289L17.1213 0.87868C16.6117 0.369017 15.9833 0.170272 15.3278 0.0821405C14.701 -0.00212371 13.9145 0 13 0V2ZM5 2H13V0H5V2ZM2.29289 2.29289C2.36902 2.21677 2.50496 2.12262 2.9387 2.06431C3.40121 2.00212 4.02892 2 5 2V0C4.08546 0 3.29896 -0.00212371 2.67221 0.0821405C2.01669 0.170272 1.38834 0.369017 0.87868 0.87868L2.29289 2.29289ZM2 5C2 4.02892 2.00212 3.40121 2.06431 2.9387C2.12262 2.50496 2.21677 2.36902 2.29289 2.29289L0.87868 0.87868C0.369017 1.38834 0.170272 2.01669 0.0821405 2.67221C-0.00212371 3.29896 0 4.08546 0 5H2ZM2 16.5V5H0V16.5H2ZM3.5 13C1.567 13 0 14.567 0 16.5H2C2 15.6716 2.67157 15 3.5 15V13ZM12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L14.1213 8.12132C15.2929 6.94975 15.2929 5.05025 14.1213 3.87868L12.7071 5.29289ZM11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L14.1213 3.87868C12.9497 2.70711 11.0503 2.70711 9.87868 3.87868L11.2929 5.29289ZM8.70711 7.87868L11.2929 5.29289L9.87868 3.87868L7.29289 6.46447L8.70711 7.87868ZM6.70711 7.29289L7.29289 7.87868L8.70711 6.46447L8.12132 5.87868L6.70711 7.29289ZM5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L8.12132 5.87868C6.94975 4.70711 5.05025 4.70711 3.87868 5.87868L5.29289 7.29289ZM5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289L3.87868 5.87868C2.70711 7.05025 2.70711 8.94975 3.87868 10.1213L5.29289 8.70711ZM6.58579 10L5.29289 8.70711L3.87868 10.1213L5.17157 11.4142L6.58579 10ZM9.41421 10C8.63316 10.781 7.36684 10.781 6.58579 10L5.17157 11.4142C6.73367 12.9763 9.26633 12.9763 10.8284 11.4142L9.41421 10ZM12.7071 6.70711L9.41421 10L10.8284 11.4142L14.1213 8.12132L12.7071 6.70711ZM8 18H3.5V20H8V18ZM0 16.5C0 18.433 1.567 20 3.5 20V18C2.67157 18 2 17.3284 2 16.5H0Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Completed Consultations</span>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname == "/pre-care" ? "bar_active" : ""
            }
          >
            <NavLink to="/pre-care" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Manage Pre Care</span>
            </NavLink>
          </li>

          <li
            className={
              window.location.pathname == "/category" ? "bar_active" : ""
            }
          >
            <NavLink to="/category" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Manage Categories </span>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname == "/customer-account-updates"
                ? "bar_active"
                : ""
            }
          >
            <NavLink to="/customer-account-updates" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Customer Account Updates</span>
            </NavLink>
          </li>
          <hr />
          <li
            className={window.location.pathname == "/forum" ? "bar_active" : ""}
          >
            <NavLink to="/forum" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Forum</span>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname == "/help-support" ? "bar_active" : ""
            }
          >
            <NavLink to="/help-support" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">Support</span>
            </NavLink>
          </li>
          <li
            className={window.location.pathname == "/faq-category" ? "bar_active" : ""}
          >
            <NavLink to="/faq-category" className="waves-effect">
              <i className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#A3AED0"
                  />
                </svg>
              </i>
              <span key="t-dashboards">FAQs</span>
            </NavLink>
          </li>
          <hr />

          <div className="last-menu">
            <li
              className={
                window.location.pathname == "/Manage-admin" ? "bar_active" : ""
              }
            >
              <NavLink to="/Manage-admin" className="waves-effect">
                <i className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                      fill="#A3AED0"
                    />
                  </svg>
                </i>
                <span key="t-dashboards">Manage Admin</span>
              </NavLink>
            </li>
            <hr />
            <li
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
            >
              <NavLink to="" className="waves-effect">
                <i className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                      fill="#A3AED0"
                    />
                  </svg>
                </i>
                <span key="t-dashboards">Log Out</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      {/* <!-- Sidebar --> */}
    </div>
  );
}
