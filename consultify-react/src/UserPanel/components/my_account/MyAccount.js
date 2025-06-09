import React, { useEffect } from "react";
import file_dock_add_fill from "../../../assets/images/sidebar_icons/file_dock_add_fill.svg";
import home_duotone from "../../../assets/images/sidebar_icons/home_duotone.svg";
import date_drk from "../../../assets/images/sidebar_icons/date_drk.svg";
import circleblue from "../../../assets/images/sidebar_icons/circle-blue.svg";
import home_white from "../../../assets/images/sidebar_icons/home_white.svg";
import folder_search_duotone from "../../../assets/images/sidebar_icons/folder_search_duotone.svg";
import temperature_white from "../../../assets/images/sidebar_icons/temperature_white.svg";
import date_today_duotone from "../../../assets/images/sidebar_icons/date_today_duotone.svg";
import user_cicrle_duotone from "../../../assets/images/sidebar_icons/user_cicrle_duotone.svg";
import temperature from "../../../assets/images/sidebar_icons/temperature.svg";
import close from "../../../assets/images/icons/close.svg";
import { Link, useParams } from "react-router-dom";
import Navbar from "../account_home/Navbar";
import Sidebar from "../account_home/Sidebar";
import Layout from "../../Layout/Layout";
import MedicalHistory from "../medical_history/MedicalHistory";
import { useState } from "react";
export default function MyAccount() {
  const [info, setInfo] = useState(false);

  const { tab } = useParams();

  useEffect(() => {
    if (tab == "med-history") {
      setInfo(true);
    }
  }, [tab]);

  // useEffect(()=>{
  //   if(sessionStorage.getItem("consId") != "undefined"){
  //     setInfo(true);
  //     sessionStorage.setItem("consIdReschedule",sessionStorage.getItem("consId"))
  //     sessionStorage.setItem("consId","undefined")
  //   }
  // },[])
  return (
    <Layout>
      {info == false && (
        <div className="col-lg-10">
          <div className="desc_area pb-0 ">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-9 col-12">
                <div className="new_consultation_booking common_shadow">
                  <h2 className="common_title padding_36">My Account</h2>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="personal_details personal_history_accordian">
                        <div className="card m-3">
                          <div className="card-body pb-0">
                            <a
                              className="d-flex account_info"
                              onClick={() => setInfo(true)}
                            >
                              <h6 className="mb-0">Medical History</h6>
                              <p className="update-history small_parah">
                                Update your History
                              </p>
                            </a>
                          </div>
                        </div>
                        <div className="card m-3">
                          <div className="card-body pb-0">
                            <Link
                              className="d-flex account_info"
                              to="/personal-information/main"
                            >
                              <h6 className="mb-0">Personal Information</h6>
                              <p className="update-history small_parah">
                                View and Update Your Personal Information
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="card m-3">
                          <div className="card-body pb-0">
                            <Link
                              className="d-flex account_info"
                              to="/contact-preferences"
                            >
                              <h6 className="mb-0">Contact Settings</h6>
                              <p className="update-history small_parah">
                                Update your contact details and communication
                                preferences
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="card m-3">
                          <div className="card-body pb-0">
                            <a className="d-flex account_info" href="#">
                              <h6 className="mb-0">Invoices</h6>
                              <p className="update-history small_parah">
                                View Invoices for previous consultations
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ad-sidebar d-flex justify-content-between flex-column">
            <div className="advertisement_info">
              <div className="ad-title">
                <h3>Did You know? </h3>
                <p className="text-center">
                  Bleeding Gums are the leading cause of tooth loss in the UK?
                </p>
              </div>
              <img
                src={require("../../../assets/images/advertisement/ad-1.png")}
                alt="advertisement"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      )}
      {info == true && <MedicalHistory setInfo={setInfo} />}
    </Layout>
  );
}
