import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getSalonTabsStatics } from "../Redux/Actions/user/salon";

export default function DashboardOption() {
  const dispatch = useDispatch();
  const decoded = jwtDecode(localStorage.getItem("token"));
  const subscrtiption_data = useSelector(
    (state) => state?.myaccount?.subscription_data
  );

  const salonTabData = useSelector(
    (state) => state?.myaccount?.salonTabStatics
  );
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {
    dispatch(getSalonTabsStatics());
  }, []);

  console.log(salonTabData, "salonTabData");

  return (
    <div>
      <div
        className={
          !toggle
            ? "bg-color dashboard-option"
            : "bg-color dashboard-option two"
        }
      >
        <div className="container">
          <div className="nav-dash">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="logo-dash">
                  <img
                    src={require("../assets/img/Consultifygolden.svg").default}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
                <div className="acc-button">
                  {/* {!toggle ? (
                    <Link to="/myaccount" className="in-btn">
                      My Account
                    </Link>
                  ) : ( */}
                  <p>
                    Welcome Back,{" "}
                    {(decoded?.data?.firstname || "") +
                      " " +
                      (decoded?.data?.lastname || "")}
                    !
                  </p>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="dash-options">
            {/* <div className={!toggle ? "toggle-sec" : "toggle-sec-hide"}>
              <div>
                <h2>
                  Welcome Back,{" "}
                  {(decoded?.data?.firstname || "") +
                    " " +
                    (decoded?.data?.lastname || "")}
                  !
                </h2>
                <div className="toggle-tab-switch">
                  <div class="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={(e) => SetToggle(!toggle)}
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* {!toggle ? (
              <div className="dash-options-cards">
                {salonTabData?.salonTabArr?.map((item, i) => {
                  return (
                    <>
                      <Link className={(item?.isLocked && subscrtiption_data?.subscriptionType != 2) && "cursor-set"}
                        to={(item?.isLocked && subscrtiption_data?.subscriptionType == 2) ? item?.route : item?.isLocked ? "#" : item?.route}>
                        <img
                          src={process.env.REACT_APP_HOST_NAME + item?.image}
                        />
                        <p>{item?.name}</p>
                        {
                          (item?.isLocked == 1 && subscrtiption_data?.subscriptionType != 2) && <button type="button" className="lock-btn">
                            <img src={require("../assets/img/lock.svg").default} />
                          </button>
                        }
                        {
                          (item?.isLocked == 1 && subscrtiption_data?.subscriptionType == 2) && <button type="button" className="lock-btn">
                            <img src={require("../assets/img/unlock.svg").default} />
                          </button>
                        }

                      </Link>
                    </>
                  );
                })}
              </div>
            ) : ( */}
            <div className="tabs-two-main">
              {salonTabData?.salonTabSecArr?.map((item, i) => {
                return (
                  <>
                    <div className="row">
                      {item?.map((data, index) => {
                        return (
                          <>
                            <div
                              className={
                                data?.class == "col-lg-4" ? "col-lg-4" : "col"
                              }
                            >
                              {data?.length > 0 ? (
                                <div className="side-options">
                                  {data?.map((inner) => {
                                    return (
                                      <>
                                        <Link
                                          className={
                                            inner?.isLocked &&
                                            subscrtiption_data?.subscriptionType !=
                                              2 &&
                                            "cursor-set"
                                          }
                                          to={
                                            inner?.isLocked &&
                                            subscrtiption_data?.subscriptionType ==
                                              2
                                              ? inner?.route
                                              : inner?.isLocked
                                              ? "#"
                                              : inner?.route
                                          }
                                        >
                                          <img
                                            src={
                                              process.env.REACT_APP_HOST_NAME +
                                              inner?.image
                                            }
                                          />
                                          <p>{inner?.name} </p>
                                          {inner?.isLocked == 1 &&
                                            subscrtiption_data?.subscriptionType !=
                                              2 && (
                                              <button
                                                type="button"
                                                className="lock-btn"
                                              >
                                                <img
                                                  src={
                                                    require("../assets/img/lock.svg")
                                                      .default
                                                  }
                                                />
                                              </button>
                                            )}
                                          {inner?.isLocked == 1 &&
                                            subscrtiption_data?.subscriptionType ==
                                              2 && (
                                              <button
                                                type="button"
                                                className="lock-btn"
                                              >
                                                <img
                                                  src={
                                                    require("../assets/img/unlock.svg")
                                                      .default
                                                  }
                                                />
                                              </button>
                                            )}
                                        </Link>
                                      </>
                                    );
                                  })}
                                </div>
                              ) : (
                                <Link
                                  className={
                                    data?.isLocked &&
                                    subscrtiption_data?.subscriptionType != 2 &&
                                    "cursor-set"
                                  }
                                  to={
                                    data?.isLocked &&
                                    subscrtiption_data?.subscriptionType == 2
                                      ? data?.route
                                      : data?.isLocked
                                      ? "#"
                                      : data?.route
                                  }
                                >
                                  <img
                                    src={
                                      process.env.REACT_APP_HOST_NAME +
                                      data?.image
                                    }
                                  />
                                  <p>{data?.name}</p>
                                  {data?.isLocked == 1 &&
                                    subscrtiption_data?.subscriptionType !=
                                      2 && (
                                      <button
                                        type="button"
                                        className="lock-btn"
                                      >
                                        <img
                                          src={
                                            require("../assets/img/lock.svg")
                                              .default
                                          }
                                        />
                                      </button>
                                    )}
                                  {data?.isLocked == 1 &&
                                    subscrtiption_data?.subscriptionType ==
                                      2 && (
                                      <button
                                        type="button"
                                        className="lock-btn"
                                      >
                                        <img
                                          src={
                                            require("../assets/img/unlock.svg")
                                              .default
                                          }
                                        />
                                      </button>
                                    )}
                                </Link>
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
              {/* {
                      salonTabData?.map((item, i) => {
                        return (
                          <>
                            {
                              item?.row == 1 ? <div className="row">
                                <div className={item?.class == "col-lg-4" ? "col-lg-4" : "col"}>
                                  <Link to="#">
                                    <img
                                      src={process.env.REACT_APP_HOST_NAME + item?.image}
                                    />
                                    <p>
                                      {item?.name}
                                    </p>
                                  </Link>
                                </div>
                              </div> : item?.row == 2 ? <div className="row">
                               
                              <div className={item?.class == "col-lg-4" ? "col-lg-4" : "col"}>
                              {
                                  item?.class == "col-lg-4" ?   <div className="side-options">
                                  <Link to="#">
                                    <img
                                     src={process.env.REACT_APP_HOST_NAME + item?.image}
                                    />
                                     <p>{item?.name} </p>
                                  </Link>
                                </div> : <Link to="#">
                                    <img
                                      src={process.env.REACT_APP_HOST_NAME + item?.image}
                                    />
                                    <p>{item?.name} </p>
                                  </Link>
                                }
                                  
                                </div>
                               
    
                                <div className="col-lg-4">
                                
                                </div>
                              </div> : <div className="row">
                                <div className={item?.class == "col-lg-4" ? "col-lg-4" : "col"}>
                                  <Link to="#">
                                    <img
                                      src={process.env.REACT_APP_HOST_NAME + item?.image}
                                    />
                                    <p>{item?.name} </p>
                                    {
                                      item?.isLocked && <button type="button" className="lock-btn">
                                        <img src={require("../assets/img/lock.svg").default} />
                                      </button>
                                    }
    
                                  </Link>
                                </div>
    
                              </div>
    
                            }
    
    
    
    
                          </>
                        )
                      })
                    } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
