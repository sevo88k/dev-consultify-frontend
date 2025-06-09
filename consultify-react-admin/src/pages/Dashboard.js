import React from "react";
import Layout from "../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Smart Choice Traders</span>
                    <h4 className="mb-sm-0 font-size-28">Dashboard </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            {/* <!-- dashboard first row start --> */}
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body h160">
                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                      <h4 className="title_text">Overview</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="bglight dasb_text">
                          <h2>12,401</h2>
                          <p className="dasb_text_p">Total </p>
                          <p className="dasb_textlastp">
                            10% Increase from Last Month
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bgbrown dasb_text">
                          <h2>9,829</h2>
                          <p className="dasb_text_p">Active</p>
                          <p className="dasb_textlastp">Logins past 4 weeks</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bgblue dasb_text">
                          <h2>90</h2>
                          <p className="dasb_text_p">New </p>
                          <p className="dasb_textlastp">Within Past 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <div className="card-body h160">
                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                      <h4 className="title_text">Offers</h4>
                      <span>
                        <div className="dropdown_custom ">
                          <div className="dropdown">
                            <button
                              className="p-0 btn-custom-drop dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Lifetime <i className="mdi mdi-menu-down"></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                              style={{ margin: "0px" }}
                            >
                              <a className="dropdown-item" href="#">
                                {" "}
                                Lifetime
                              </a>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="bg_dasg_ble bgblue dasb_text">
                          <h1>31,123</h1>
                          <p className="mb-2">
                            ****
                            <br />
                            &nbsp;
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg_dasg_ble bgyelow dasb_text">
                          <h1>12,123</h1>
                          <p className="mb-2">
                            **** <br />
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- dashboard first row end --> */}

            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                      <h4 className="title_text ff-inter">Top 25 </h4>

                      <span>
                        <div className="searcg_icon">
                          <form className="app-search d-none d-lg-block ">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative w-100">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search"
                                />
                                <span className="bx bx-search-alt cgrey"></span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </span>
                    </div>

                    <div className="tab_le_dealer">
                      <div className="table-responsive">
                        <table
                          id=""
                          className="table dt-responsive ff-inter active_dealer nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Lorem</th>
                              <th>Lorem</th>
                              <th>Lorem </th>
                              <th>Lorem</th>
                            </tr>
                          </thead>
                          <tbody className="td_color">
                            <tr>
                              <td>1564</td>
                              <td>Name</td>
                              <td>London</td>
                              <td>124</td>
                            </tr>

                            <tr>
                              <td>51568</td>
                              <td>Name</td>
                              <td>Newcastle</td>
                              <td>189</td>
                            </tr>
                            <tr>
                              <td>51568</td>
                              <td>Name</td>
                              <td>Newcastle</td>
                              <td>189</td>
                            </tr>
                            <tr>
                              <td>51568</td>
                              <td>Name</td>
                              <td>Newcastle</td>
                              <td>189</td>
                            </tr>
                            <tr>
                              <td>51568</td>
                              <td>Name</td>
                              <td>Newcastle</td>
                              <td>189</td>
                            </tr>

                            <tr>
                              <td>1564</td>
                              <td>Name</td>
                              <td>Carlisle</td>
                              <td>124</td>
                            </tr>

                            <tr>
                              <td>1564</td>
                              <td>Name</td>
                              <td>London</td>
                              <td>50</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="garph_1">
                          <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                            <h4 className="title_text">Statistics</h4>
                          </div>
                          <div className="days_moth d-block">
                            <ul className="nav nav-pills">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Day
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Week
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  Month
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="tot_trd_vech pt-3 d-block">
                            <p className="mb-2">Total Traded Sales</p>
                            <h5>
                              <b>1724</b>
                            </h5>
                          </div>

                          <div
                            id="spline_area"
                            className="apex-charts"
                            dir="ltr"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="garph_2">
                          <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                            <h4 className="title_text">Statistics</h4>
                          </div>
                          <div className="days_moth">
                            <ul className="nav nav-pills">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Day
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Week
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  Month
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="tot_trd_vech pt-3">
                            <p className="mb-2">Total Underwrite Sales</p>
                            <h5>
                              <b>1724</b>
                            </h5>
                          </div>

                          <div
                            id="spline_area1"
                            className="apex-charts"
                            dir="ltr"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
