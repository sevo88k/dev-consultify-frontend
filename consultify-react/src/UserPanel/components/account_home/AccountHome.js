import React from "react";
import file_dock_add_fill from "../../../assets/images/sidebar_icons/file_dock_add_fill.svg";
import home_white from "../../../assets/images/sidebar_icons/home_white.svg";
import folder_search_duotone from "../../../assets/images/sidebar_icons/folder_search_duotone.svg";
import temperature_white from "../../../assets/images/sidebar_icons/temperature_white.svg";
import date_today_duotone from "../../../assets/images/sidebar_icons/date_today_duotone.svg";
import user_cicrle_duotone from "../../../assets/images/sidebar_icons/user_cicrle_duotone.svg";
import temperature from "../../../assets/images/sidebar_icons/temperature.svg";
import close from "../../../assets/images/icons/close.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UpcomigConsultation from "./UpcomigConsultation";
import Layout from "../../Layout/Layout";
const cookies = new Cookies();
export default function AccountHome() {
  return (
    <Layout>
      <div className="col-lg-10">
        <UpcomigConsultation />
      </div>
    </Layout>
  );
}
