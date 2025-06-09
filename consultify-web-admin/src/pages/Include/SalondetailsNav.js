import React from "react";
import { NavLink } from "react-router-dom";

export default function SalondetailsNav({ id }) {
  return (
    <div className="">
      <div className="col-lg-12 d-flex justify-content-end rikki-nav rikki-nav-ps">
        <NavLink to={"/Salon-overview/" + id}>
          <button
            className={
              window.location.pathname == "/Salon-overview/" + id
                ? "btn cre_new"
                : " btn cre_new_one"
            }
          >
            Overview
          </button>
        </NavLink>
        <NavLink to={"/Salon-search-history/" + id}>
          <button
            className={
              window.location.pathname == "/Salon-search-history/" + id
                ? "btn cre_new"
                : "btn cre_new_one"
            }
          >
            Searches
          </button>
        </NavLink>

        <NavLink to={"/Salon-customers/" + id}>
          <button
            className={
              window.location.pathname == "/Salon-customers/" + id
                ? "btn cre_new"
                : "btn cre_new_one"
            }
          >
            Customers
          </button>
        </NavLink>
        <NavLink to={"/salon-staff/" + id}>
          <button
            className={
              window.location.pathname == "/salon-staff/" + id
                ? "btn cre_new"
                : "btn cre_new_one"
            }
          >
            Staff
          </button>
        </NavLink>

        <NavLink to={"/Salon-consultation/" + id}>
          <button
            className={
              window.location.pathname == "/Salon-consultation/" + id
                ? "btn cre_new"
                : "btn cre_new_one"
            }
          >
            {" "}
            Consultations
          </button>
        </NavLink>


        <NavLink to={"/consultation_preset/" + id}>
          <button
            className={
              window.location.pathname == "/consultation_preset/" + id
                ? "btn cre_new"
                : "btn cre_new_one"
            }
          >
            {" "}
            Consultation Preset
          </button>
        </NavLink>


        <NavLink to={"/preset_setting/" + id}>
          <button
            className={
              window.location.pathname == "/preset_setting/" + id
                ? "btn cre_new"
                : "btn cre_new_one"
            }
          >
            {" "}
           Presets Setting
          </button>
        </NavLink>

        {/* <button className="btn cre_new_one">Subscription</button> */}
      </div>
    </div>
  );
}
