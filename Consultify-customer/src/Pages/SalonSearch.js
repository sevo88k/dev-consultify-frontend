import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function SalonSearch() {
  return (
    <>
      <Layout>
        <section className="banner_saloon">
          <div className="container">
            <div className="banner_inner">
              <h2>Book your next treatment</h2>

              <form>
                <div className="row box_shad">
                  <div className="col-lg-4 px-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Business Name or Location"
                    />
                  </div>
                  <div className="col-lg-4 px-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Services and Classes"
                    />
                  </div>
                  <div className="col-lg-3 px-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Anytime"
                    />
                  </div>
                  <div className="col-lg-1 px-0">
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="select_list">
                    <ul>
                      <li>Hair</li>
                      <li>Spa</li>
                      <li>Yoga</li>
                      <li>Nail</li>
                      <li>Barber</li>

                      <li>Massage</li>
                      <li>Pilates</li>
                      <li>Personal Trainer</li>
                      <li>Cycling</li>
                      <li>More...</li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="salon_bottom">
            <div className="salon_search_tab">
              <h3>Popular in your area</h3>
              <Link to="#">
                See all{" "}
                <svg
                  width="7"
                  height="16"
                  viewBox="0 0 7 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_668_8223)">
                    <path
                      d="M5.98376 8.25L1.39001 12.875C1.30668 12.9583 1.21814 13 1.12439 13C1.03064 13 0.942098 12.9688 0.858765 12.9062L0.233765 12.2812C0.171265 12.1979 0.140015 12.1042 0.140015 12C0.140015 11.8958 0.171265 11.8125 0.233765 11.75L3.95251 8L0.233765 4.25C0.171265 4.1875 0.140015 4.10417 0.140015 4C0.140015 3.89583 0.171265 3.80208 0.233765 3.71875L0.858765 3.09375C0.942098 3.03125 1.03064 3 1.12439 3C1.21814 3 1.30668 3.03125 1.39001 3.09375L5.98376 7.71875C6.04626 7.80208 6.07751 7.89583 6.07751 8C6.07751 8.10417 6.04626 8.19792 5.98376 8.28125V8.25Z"
                      fill="#248DD5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_668_8223">
                      <rect
                        width="6"
                        height="16"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.140015 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </Link>
            </div>
            <div className="d-flex flex-wrap">
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg.png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Athena Nail Boutique
                  </h3>
                  <p>
                    Ann Arbor, MI <span>1 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>

              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(1).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Salon 401
                  </h3>
                  <p>
                    Saline, MI <span>7 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>

              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(2).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Salon Omnia
                  </h3>
                  <p>
                    Plymouth, MI <span>13 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(3).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Tranquility House Salon
                    &
                  </h3>
                  <p>
                    Plymouth, MI<span>14 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(4).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>My Wax Room
                  </h3>
                  <p>
                    Plymouth, MI <span>14 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(5).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Stay Lifted Skin Spa
                  </h3>
                  <p>
                    Plymouth, MI <span>14 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(6).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Leila's Hair Studio
                  </h3>
                  <p>
                    Northville, MI <span>15 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(7).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Braids Brows & Beneath
                    LLC
                  </h3>
                  <p>
                    Westland, MI <span>15 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(8).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Element 36 Spa
                  </h3>
                  <p>
                    Pinckney, MI<span>15 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(9).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Salon Cattitude
                  </h3>
                  <p>
                    Livonia, MI <span>16 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(10).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Kiss My Lash Beauty
                  </h3>
                  <p>
                    Northville, MI<span>16 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
              <div className="saloon_card">
                <img
                  className="card_logo"
                  src={require("../assets/img/div.card-bgimg(11).png")}
                  alt=""
                />
                <div className="salon_card_desc">
                  <h3>
                    <span className="add_show">Ad</span>Opal Salon
                  </h3>
                  <p>
                    Northville, MI<span>16 mi</span>
                  </p>
                  <div className="rating">
                    <img src={require("../assets/img/rate.png")} alt="" />
                    <span>(8)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
