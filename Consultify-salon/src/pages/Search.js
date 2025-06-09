import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LargeBannerLayout from "../components/Layout/LargeBannerLayout";
import { useDispatch } from "react-redux";
import { createSalonSearchHistory } from "../Redux/Actions/user/salon";
import { InputGroup } from "react-bootstrap";

const Search = () => {
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const keyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/search_results?search=" + search);
    }
  };

  return (
    <LargeBannerLayout>
      {/* banner Start */}
      <section className=" ">
        <div className="container">
          <div className="banner-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-title">
                  <h1 className="mb-0">
                    Treatment
                    <br />& Diagnosis Search
                  </h1>
                  <h3 className="grey-text">
                    Search for Treatments, Diagnosis, Products & More....{" "}
                  </h3>
                  <div className="form-grp d-flex justify-content-between align-items-end">
                    <div className="search-input">
                      <InputGroup className="">
                        <InputGroup.Text className="group-box-search">
                          <img
                            src={require("../assets/img/search.svg").default}
                            alt="search"
                          />
                        </InputGroup.Text>
                        <Form.Control
                          type="search"
                          value={search}
                          className="form-control"
                          name="search"
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          onKeyDown={keyPress}
                          placeholder="Search...."
                        />
                      </InputGroup>
                    </div>

                    <div className="search-btn ms-4">
                      <button
                        className="med-btn"
                        onClick={() => {
                          dispatch(
                            createSalonSearchHistory({
                              salonId: localStorage.getItem("userId"),
                              typedSearch: search,
                            })
                          ).then((item) => {
                            if (item?.payload?.success) {
                              navigate(
                                `/search_results?search=${search}&search_id=${item?.payload?.data?._id}`
                              );
                            }
                          });
                          //navigate(`/search_results?search=${search}&search_id=${}`);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-img">
                  <img
                    src={require("../../src/assets/img/banner.webp")}
                    alt="banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner Start */}

      {/* <div className="view-form">
        <div className="container custom">
          <div className="row">
            <div className="col-lg-12 justify-content-end d-flex">
              <Link
                to="/subscription"
                type="submit"
                className="view-forum-inner"
              >
                View Our Forum
                <img
                  src={require("../../src/assets/img/right-arrow.svg").default}
                  alt="arrow"
                  className="arrow-next-green"
                />
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </LargeBannerLayout>
  );
};
export default Search;
