import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSalonTabsStatics } from "../Redux/Actions/user/salon";

export default function DashboardSecondOption() {
  const dispatch = useDispatch();
  const salonTabData = useSelector((state) => state?.myaccount?.salonTabStatics);
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {
    dispatch(getSalonTabsStatics());
  }, [])

  console.log(salonTabData, "salonTabData");
  return (
    <div>
      <div className="bg-color dashboard-option-two">
        <div className="container">
          <div className="tabs-two-main">
            {
              salonTabData?.salonTabSecArr?.map((item, i) => {
                return (
                  <>

                    <div className="row">
                      {
                        item?.map((data, index) => {
                          return (
                            <>
                              <div className={data?.class == "col-lg-4" ? "col-lg-4" : "col"}>
                                {
                                  data?.length>0 ? <div className="side-options">
                                    {
                                      data?.map((inner) => {
                                        return (
                                          <>
                                            <Link to="#">
                                              <img
                                                src={process.env.REACT_APP_HOST_NAME + inner?.image}
                                              />
                                              <p>{inner?.name} </p>
                                            </Link>
                                          </>
                                        )
                                      })
                                    }

                                  </div> : <Link to="#">
                                    <img
                                      src={process.env.REACT_APP_HOST_NAME + data?.image}
                                    />
                                    <p>
                                      {data?.name}
                                    </p>
                                  </Link>
                                }


                              </div>
                            </>
                          )
                        })
                      }

                    </div>
                  </>
                )
              })
            }
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
          {/* <div className="tabs-two-main">
            <div className="row">
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/Search.svg").default
                    }
                  />
                  <p>
                    Contraindication <br />
                    Search{" "}
                  </p>
                </Link>
              </div>
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/Clients.svg").default
                    }
                  />
                  <p>All Clients </p>
                </Link>
              </div>
              <div className="col">
                <Link to="#">
                  <img
                    src={require("../assets/img/dashboardtwo/Logo.svg").default}
                  />
                  <p>Schedule </p>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/mysalon.svg").default
                    }
                  />
                  <p>My Salon </p>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/wallet.svg").default
                    }
                  />
                  <p>Payments & Invoices </p>
                </Link>
              </div>
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/forum.svg").default
                    }
                  />
                  <p>Forum </p>
                </Link>
              </div>

              <div className="col-lg-4">
                <div className="side-options">
                  <Link to="#">
                    <img
                      src={
                        require("../assets/img/dashboardtwo/settingtw.svg")
                          .default
                      }
                    />
                    <p>Settings </p>
                  </Link>
                  <Link to="#">
                    <img
                      src={
                        require("../assets/img/dashboardtwo/staff.svg").default
                      }
                    />
                    <p>Staff Members </p>
                    <button type="button" className="lock-btn">
                      <img src={require("../assets/img/lock.svg").default} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/consultations.svg")
                        .default
                    }
                  />
                  <p>Consultations </p>
                  <button type="button" className="lock-btn">
                    <img src={require("../assets/img/lock.svg").default} />
                  </button>
                </Link>
              </div>
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/videoconsult.svg")
                        .default
                    }
                  />
                  <p>
                    Video <br />
                    Consultations{" "}
                  </p>
                  <button type="button" className="lock-btn">
                    <img src={require("../assets/img/lock.svg").default} />
                  </button>
                </Link>
              </div>
              <div className="col">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/manageservice.svg")
                        .default
                    }
                  />
                  <p>
                    Manage
                    <br /> Services{" "}
                  </p>
                  <button type="button" className="lock-btn">
                    <img src={require("../assets/img/lock.svg").default} />
                  </button>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link to="#">
                  <img
                    src={
                      require("../assets/img/dashboardtwo/salonappoint.svg")
                        .default
                    }
                  />
                  <p>
                    Salon <br />
                    Appointments{" "}
                  </p>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
