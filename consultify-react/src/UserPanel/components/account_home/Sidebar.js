import React from "react";
import file_dock_add_fill from "../../../assets/images/sidebar_icons/file_dock_add_fill.svg";
import home_white from "../../../assets/images/sidebar_icons/home_white.svg";
import folder_search_duotone from "../../../assets/images/sidebar_icons/folder_search_duotone.svg";
import temperature_white from "../../../assets/images/sidebar_icons/temperature_white.svg";
import date_today_duotone from "../../../assets/images/sidebar_icons/date_today_duotone.svg";
import user_cicrle_duotone from "../../../assets/images/sidebar_icons/user_cicrle_duotone.svg";
import home_duotone from "../../../assets/images/sidebar_icons/home_duotone.svg";
import prescriptionwhite from "../../../assets/images/sidebar_icons/prescription-white.svg";
import temperature from "../../../assets/images/sidebar_icons/temperature.svg";
import date_drk from "../../../assets/images/sidebar_icons/date_drk.svg";
import circleblue from "../../../assets/images/sidebar_icons/circle-blue.svg";
import folderSearchInvert from "../../../assets/images/sidebar_icons/Folder_search_duotone_white.svg"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getProfilePic,
  profileUpload,
} from "../../../Redux/Actions/user/userAll";
import { ReactCrop } from "react-image-crop";

const Sidebar = () => {
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;
  const dispatch = useDispatch();
  const [menuButton, setMenuButton] = useState(false);
  const [previewImg, setPreviewImg] = useState(
    require("../../../assets/images/place-holder-user.png")
  );
  const profilePic = useSelector((state) => state.consultaions.profilePic);
  useEffect(() => {
    dispatch(getProfilePic());
  }, []);

  const isHref = (pageStr, secondPageStr) => {
    if (
      window.location.href.split("/").includes(pageStr) ||
      window.location.href.split("/").includes(secondPageStr)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleImageUpload = (e) => {
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    dispatch(profileUpload(formData));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light flex-column sidebar_content">
        <button
          className={menuButton ? "navbar-toggler" : "navbar-toggler collapsed"}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={menuButton ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setMenuButton((prevState) => !prevState)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            menuButton
              ? "collapse navbar-collapsing navbar-collapse flex-column show"
              : "collapse navbar-collapse flex-column"
          }
          id="navbarNavDropdown"
        >
          <div className="profile_detail text-center show-img-profile">
            <div className="profile_img">
              <img
                className="show-img-profile"
                src={
                  profilePic
                    ? HOST_NAME + "public/uploads/" + profilePic
                    : previewImg
                }
              />
                {/* <ReactCrop crop={crop} onChange={c => setCrop(c)}>
      <img src={src} />
    </ReactCrop> */}
            </div>
            <div className="upload-input">
              <input
                onChange={handleImageUpload}
                type="file"
                className="img-upload-input"
              />
            </div>
          </div>
          {/* <button className="" onClick={() => setCheck((prev) => prev + 1)}>
            {check} +{" "}
          </button> */}
          <h3 className="mt-3">{sessionStorage.getItem("user")}</h3>
          <span className="mb-4 text-center">
            Member Since {sessionStorage.getItem("join")}
          </span>
          <ul className="navbar-nav sidebar_tabs flex-wrap justify-content-between">
            <li className="mm-active2">
              <Link
                className={
                  isHref("accountHome") ? "sidebarUser " : "waves-effect"
                }
                to="/accountHome"
              >
                <img
                  src={isHref("accountHome") ? home_white : home_duotone}
                  alt="home_icon"
                />
                <span
                  className={
                    isHref("accountHome")
                      ? "sidebarSpan waves-effect"
                      : "waves-effect"
                  }
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="mm-active2">
              <Link
                className={
                  isHref("prescriptions") ? "sidebarUser " : "waves-effect"
                }
                to="/prescriptions"
              >
                <img
                  src={
                    isHref("prescriptions")
                      ? prescriptionwhite
                      : file_dock_add_fill
                  }
                  alt="prescriptions"
                />
                <span
                  className={
                    isHref("prescriptions")
                      ? "sidebarSpan waves-effect"
                      : "waves-effect"
                  }
                >
                  Prescriptions
                </span>
              </Link>
            </li>
            <li className="mm-active2">
              <Link
                className={
                  isHref("common-issues") ? "sidebarUser " : "waves-effect"
                }
                to="/common-issues"
              >
                <img
                  src={
                    isHref("common-issues") ? folderSearchInvert : folder_search_duotone
                  }
                  alt="common-issues"
                />
                <span
                  className={
                    isHref("common-issues")
                      ? "sidebarSpan waves-effect"
                      : "waves-effect"
                  }
                >
                  Common Issues
                </span>
              </Link>
            </li>
            <li className="mm-active2">
              <Link
                className={
                  isHref("symptom-checker-start")
                    ? "sidebarUser "
                    : "waves-effect"
                }
                to="/symptom-checker-start"
              >
                <img
                  src={
                    isHref("symptom-checker-start")
                      ? temperature
                      : temperature_white
                  }
                  alt="symptom-checker"
                />
                <span
                  className={
                    isHref("symptom-checker-start")
                      ? "sidebarUser waves-effect"
                      : "waves-effect"
                  }
                >
                  Symptom Checker
                </span>
              </Link>
            </li>
            <li className="mm-active2">
              <Link
                className={
                  isHref("consultations", "new-consultation")
                    ? "sidebarUser "
                    : "waves-effect"
                }
                to="/consultations"
              >
                <img
                  src={
                    isHref("consultations", "new-consultation")
                      ? date_drk
                      : date_today_duotone
                  }
                  alt="consultations"
                />
                <span
                  className={
                    isHref("consultations", "new-consultation")
                      ? "sidebarUser waves-effect"
                      : "waves-effect"
                  }
                >
                  Consultations
                </span>
              </Link>
            </li>
            <li className="mm-active2">
              <Link
                className={
                  isHref("my-account") ? "sidebarUser " : "waves-effect"
                }
                to="/my-account/sidebar"
              >
                <img
                  src={isHref("my-account") ? circleblue : user_cicrle_duotone}
                  alt="my-account"
                />
                <span
                  className={
                    isHref("my-account")
                      ? "sidebarUser waves-effect"
                      : "waves-effect"
                  }
                >
                  My Account
                </span>
              </Link>
            </li>
            <li className="signOut_btn_hide"><button class="btn btn-primary white-btn mt-0 signOut_btn ">Sign Out</button></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
