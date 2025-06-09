import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getSalonTabsStatics } from "../Redux/Actions/user/salon";
import Dropdown from "react-bootstrap/Dropdown";
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

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
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
                    className="main-logo"
                    // src={require("../assets/img/newconsultlogowhite.png")}
                    src={require("../assets/img/consultify-white-logo.svg").default}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-end">
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
                <div className="nav-menu-new">
                  {/* <Link to="/schedule" className="head-link">
                    {" "}
                    <img src={require("../assets/img/calendor.svg").default} />
                  </Link>{" "} */}
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <img src={require("../assets/img/Menu.svg").default} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/myclient">
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <path
                                d="M0.191772 0.0684967H16.0942C16.0942 8.85115 8.97442 15.9709 0.191772 15.9709V0.0684967Z"
                                fill="#427272"
                              />
                              <path
                                d="M0.191772 31.8733H16.0942C16.0942 23.0906 8.97442 15.9709 0.191772 15.9709V31.8733Z"
                                fill="#427272"
                              />
                              <path
                                d="M31.9966 0.0684967H16.0942C16.0942 8.85115 23.2139 15.9709 31.9966 15.9709V0.0684967Z"
                                fill="#427272"
                              />
                              <path
                                d="M31.9966 31.8733H16.0942C16.0942 23.0906 23.2139 15.9709 31.9966 15.9709V31.8733Z"
                                fill="#427272"
                              />
                            </svg>
                            <div>
                              <h3>My Clients</h3>
                              <p>Manage Clients</p>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/consultation">
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="33"
                              viewBox="0 0 32 33"
                              fill="none"
                            >
                              <path
                                d="M16.0942 16.3236C16.0942 7.54098 9.35931 0.421233 1.05139 0.421233V32.226C9.35931 32.226 16.0942 25.1063 16.0942 16.3236Z"
                                fill="#427272"
                              />
                              <path
                                d="M16.0942 16.3236C16.0942 25.1063 22.8291 32.226 31.137 32.226V0.421233C22.8291 0.421233 16.0942 7.54098 16.0942 16.3236Z"
                                fill="#427272"
                              />
                            </svg>
                            <div>
                              <h3>Consultations</h3>
                              <p>Send and Manage Consultations</p>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item>

                      {/* <Dropdown.Item as={Link} to="/schedule">
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              className="calendor-ico"
                              width="35"
                              height="35"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="15" cy="15" r="15" fill="#427272" />
                              <path
                                d="M17.9181 8.74292H11.9247C10.0333 8.74292 8.5 10.2762 8.5 12.1677V18.5753C8.5 20.4667 10.0333 22 11.9247 22H17.9181C19.8095 22 21.3428 20.4667 21.3428 18.5753V12.1677C21.3428 10.2762 19.8095 8.74292 17.9181 8.74292Z"
                                stroke="white"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.74609 12.8857H21.1746"
                                stroke="white"
                                stroke-linecap="round"
                              />
                              <path
                                d="M18.2773 7.5V9.98571"
                                stroke="white"
                                stroke-linecap="round"
                              />
                              <path
                                d="M12.0625 7.5V9.98571"
                                stroke="white"
                                stroke-linecap="round"
                              />
                              <path
                                d="M11.6917 16.1999C12.0349 16.1999 12.3132 15.9217 12.3132 15.5785C12.3132 15.2353 12.0349 14.957 11.6917 14.957C11.3485 14.957 11.0703 15.2353 11.0703 15.5785C11.0703 15.9217 11.3485 16.1999 11.6917 16.1999Z"
                                fill="white"
                              />
                              <path
                                d="M15.0042 16.1999C15.3474 16.1999 15.6257 15.9217 15.6257 15.5785C15.6257 15.2353 15.3474 14.957 15.0042 14.957C14.661 14.957 14.3828 15.2353 14.3828 15.5785C14.3828 15.9217 14.661 16.1999 15.0042 16.1999Z"
                                fill="white"
                              />
                              <path
                                d="M18.3206 16.1999C18.6638 16.1999 18.9421 15.9217 18.9421 15.5785C18.9421 15.2353 18.6638 14.957 18.3206 14.957C17.9774 14.957 17.6992 15.2353 17.6992 15.5785C17.6992 15.9217 17.9774 16.1999 18.3206 16.1999Z"
                                fill="white"
                              />
                              <path
                                d="M11.6917 19.5141C12.0349 19.5141 12.3132 19.2359 12.3132 18.8927C12.3132 18.5495 12.0349 18.2712 11.6917 18.2712C11.3485 18.2712 11.0703 18.5495 11.0703 18.8927C11.0703 19.2359 11.3485 19.5141 11.6917 19.5141Z"
                                fill="white"
                              />
                              <path
                                d="M15.0042 19.5141C15.3474 19.5141 15.6257 19.2359 15.6257 18.8927C15.6257 18.5495 15.3474 18.2712 15.0042 18.2712C14.661 18.2712 14.3828 18.5495 14.3828 18.8927C14.3828 19.2359 14.661 19.5141 15.0042 19.5141Z"
                                fill="white"
                              />
                              <path
                                d="M18.3206 19.5141C18.6638 19.5141 18.9421 19.2359 18.9421 18.8927C18.9421 18.5495 18.6638 18.2712 18.3206 18.2712C17.9774 18.2712 17.6992 18.5495 17.6992 18.8927C17.6992 19.2359 17.9774 19.5141 18.3206 19.5141Z"
                                fill="white"
                              />
                            </svg>
                            <div>
                              <h3>Video Call Diary</h3>
                              <p>Video Consultation Diary</p>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item> */}

                      <Dropdown.Item as={Link} to="/pre-care">
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="33"
                              viewBox="0 0 32 33"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.0942 0.363022C7.31152 0.363022 0.191772 7.48277 0.191772 16.2654C0.191772 25.0481 7.31152 32.1678 16.0942 32.1678C24.8768 32.1678 31.9966 25.0481 31.9966 16.2654C31.9966 7.48277 24.8768 0.363022 16.0942 0.363022ZM16.0942 26.867C10.2391 26.867 5.49257 22.1205 5.49257 16.2654L26.6958 16.2654C26.6958 22.1205 21.9493 26.867 16.0942 26.867Z"
                                fill="#427272"
                              />
                            </svg>
                            <div>
                              <h3>Pre & Post Treatment Care</h3>
                              <p>Advice for Clients</p>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item>

                      {/* <Dropdown.Item as={Link} to="/forumhome">
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="33"
                              viewBox="0 0 32 33"
                              fill="none"
                            >
                              <path
                                d="M17.8611 0.715759H14.3272V12.3524L6.09889 4.12406L3.60007 6.62288L11.8284 14.8512H0.191772V18.3851H11.8284L3.60007 26.6134L6.09889 29.1123L14.3272 20.8839V32.5206H17.8611V20.8839L26.0895 29.1123L28.5883 26.6134L20.3599 18.3851H31.9966V14.8512H20.3599L28.5883 6.62287L26.0895 4.12405L17.8611 12.3524V0.715759Z"
                                fill="#427272"
                              />
                            </svg>
                            <div>
                              <h3>Forum</h3>
                              <p>Topics and Discussions</p>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item> */}

                      <Dropdown.Item as={Link} to="/myaccount">
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="33"
                              viewBox="0 0 32 33"
                              fill="none"
                            >
                              <path
                                d="M16.0942 16.3236C16.0942 7.54098 9.35931 0.421233 1.05139 0.421233V32.226C9.35931 32.226 16.0942 25.1063 16.0942 16.3236Z"
                                fill="#427272"
                              />
                              <path
                                d="M16.0942 16.3236C16.0942 25.1063 22.8291 32.226 31.137 32.226V0.421233C22.8291 0.421233 16.0942 7.54098 16.0942 16.3236Z"
                                fill="#427272"
                              />
                            </svg>
                            <div>
                              <h3>Settings</h3>
                              <p>Manage your Profile & Settings</p>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        <div className="menu-item-inner">
                          <div className="d-flex">
                            <svg
                              width="36"
                              height="33"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_930_2716)">
                                <path
                                  d="M18.7498 16.2498C18.0586 16.2498 17.4999 16.8099 17.4999 17.4997V22.4998C17.4999 23.1885 16.9398 23.7497 16.2498 23.7497H12.4998V4.99993C12.4998 3.93242 11.8198 2.9787 10.7974 2.62369L10.4273 2.49988H16.2498C16.9398 2.49988 17.4999 3.06108 17.4999 3.75002V7.49998C17.4999 8.1898 18.0586 8.74989 18.7498 8.74989C19.441 8.74989 19.9997 8.1898 19.9997 7.49998V3.75002C19.9997 1.68256 18.3172 5.85932e-05 16.2498 5.85932e-05H2.81247C2.76489 5.85932e-05 2.72505 0.0213279 2.67882 0.0275388C2.61859 0.0224998 2.56117 0 2.50005 0C1.1213 5.85932e-05 0 1.12118 0 2.49994V24.9997C0 26.0672 0.679974 27.0209 1.70242 27.376L9.22491 29.8835C9.47991 29.9622 9.7335 29.9998 9.99992 29.9998C11.3787 29.9998 12.4997 28.8785 12.4997 27.4997V26.2498H16.2497C18.3172 26.2498 19.9997 24.5673 19.9997 22.4998V17.4997C19.9997 16.8099 19.441 16.2498 18.7498 16.2498H18.7498Z"
                                  fill="#427272"
                                />
                                <path
                                  d="M29.6337 11.6164L24.6336 6.61652C24.4589 6.44159 24.2362 6.32242 23.9937 6.2741C23.7512 6.22578 23.4998 6.25047 23.2713 6.34506C22.8051 6.53894 22.5 6.99509 22.5 7.50022V11.2502H17.5001C16.8101 11.2502 16.25 11.81 16.25 12.5001C16.25 13.1901 16.8101 13.75 17.5001 13.75H22.5V17.5C22.5 18.0051 22.8051 18.4612 23.2713 18.6551C23.4998 18.7497 23.7511 18.7744 23.9936 18.7261C24.2361 18.6778 24.4588 18.5587 24.6336 18.3838L29.6337 13.3838C30.1224 12.8951 30.1224 12.1051 29.6337 11.6164Z"
                                  fill="#427272"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_930_2716">
                                  <rect width="30" height="30" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <div>
                              <h3>Logout</h3>
                            </div>
                          </div>
                          <img
                            src={require("../assets/img/arrow.svg").default}
                          />
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="dash-options">
            <div className="tabs-two-main">
              <div className="side-options-main">
                {salonTabData?.salonTabArr?.filter(
                  (item) => item.name !== "Forum" && item.name !== "Video Consultations"
                ).map((item, i) => {
                  return (
                    <>
                      <div className="side-options">
                        <>
                          <Link
                            className={
                              item?.isLocked &&
                              subscrtiption_data?.subscriptionType != 2 &&
                              "cursor-set"
                            }
                            to={
                              item?.isLocked &&
                                subscrtiption_data?.subscriptionType == 2
                                ? item?.route
                                : item?.isLocked
                                  ? "#"
                                  : item?.route
                            }
                          >
                            <img
                              src={
                                process.env.REACT_APP_HOST_NAME + item?.image
                              }
                            />
                            <p>{item?.name} </p>
                            {item?.isLocked == 1 &&
                              subscrtiption_data?.subscriptionType != 2 && (
                                <button type="button" className="lock-btn">
                                  <img
                                    src={
                                      require("../assets/img/lock.svg").default
                                    }
                                  />
                                </button>
                              )}
                            {/* {item?.isLocked == 1 &&
                                subscrtiption_data?.subscriptionType == 2 && (
                                  <button type="button" className="lock-btn">
                                    <img
                                      src={
                                        require("../assets/img/unlock.svg")
                                          .default
                                      }
                                    />
                                  </button>
                                )} */}
                          </Link>
                        </>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
