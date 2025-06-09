import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { verifyTradePerson } from "../../redux/Action/AdminAction";
import { useDispatch } from "react-redux";
import moment from "moment";

const Company = ({ viewDetail }) => {
  const [verified, setVerified] = useState("");
  const [active, setActive] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDropSelect = (name, type) => {
    name == "verified" ? setVerified(type) : setActive(type);
  };
  useEffect(() => {
    if (viewDetail?._id == id) {
      setVerified(viewDetail?.verified);
      setActive(viewDetail?.active);
    }
  }, [viewDetail]);
  const handleUpdateTardeP = () => {
    const dataObject = {
      tradesPerson_id: id,
      verified: verified,
      active: active,
    };
    dispatch(verifyTradePerson(dataObject));
  };
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="row">
          <div className="col-xl-12">
            <div className="tbl_user_info">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                    <h4 className="title_text">Company Details</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Company Name
                            </label>
                            <div className="input-view-text">
                              {viewDetail?.company_name}
                            </div>
                            {/* <!-- <input type="text" className="form-control-new" placeholder=""> --> */}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Incorporation Date
                            </label>
                            <div className="input-view-text">
                              {viewDetail?.date
                                ? moment(viewDetail?.date).format("DD/MM/YYYY")
                                : "N/A"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Enquiry Email
                            </label>
                            <div className="input-view-text">
                              {viewDetail?.business_email
                                ? viewDetail?.business_email
                                : "N/A"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Phone
                            </label>
                            <div className="input-view-text">
                              {viewDetail?.business_phnNumber
                                ? viewDetail?.business_phnNumber
                                : "N/A"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label for="" className="view-label-input">
                          Business Address
                        </label>
                        {
                          viewDetail?.business_locations[0]?.address
                          ?.split(",")
                          .filter((str) => str !== " ")
                          .map((item) => {
                            return (
                              <div className="form-group mb-3">
                                <div className="input-view-text">{item}</div>
                              </div>
                            );
                          })}
                        <div className="input-view-text">
                          {viewDetail?.business_locations[0]?.postcode
                            ? viewDetail?.business_locations[0]?.postcode
                            : "N/A"}
                        </div>
                      </div>
                      {/* {viewDetail?.business_locations[0]?
                    <>
                    {
                      viewDetail?.business_locations[0]?.address_1?  <div className="form-group mb-3">
                      <div className="input-view-text">
                          {viewDetail?.business_locations[0]?.address_1}
                        </div>
                      </div>:""
                    }
                  {
                    viewDetail?.business_locations[0]?.address_2? <div className="form-group mb-3">
                        <div className="input-view-text">
                          {viewDetail?.business_locations[0]?.address_2}
                        </div>
                      </div>:""
                  }
                     {
                      viewDetail?.business_locations[0]?.city?  <div className="form-group mb-3">
                        <div className="input-view-text">
                          {viewDetail?.business_locations[0]?.city}
                        </div>
                      </div>:""
                     }
                    {
                      viewDetail?.business_locations[0]?.country?    <div className="form-group mb-3">
                        <div className="input-view-text">
                          {viewDetail?.business_locations[0]?.country}
                        </div>
                      </div>:""
                    }
                  {
                    viewDetail?.business_locations[0]?.postcode? <div className="form-group mb-3">
                        <div className="input-view-text">
                          {" "}
                          {viewDetail?.business_locations[0]?.postcode}
                        </div>
                      </div>:''
                  }
                     
                    </>:<div className="input-view-text">N/A</div>
                   } */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6">
            <div className="tbl_user_info">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                    <h4 className="title_text">Services</h4>
                  </div>
                  <div className="row overflow_prop">
                    {viewDetail?.multi_services ? (
                      viewDetail?.multi_services?.map((item, i) => {
                        return (
                          <div className="col-md-12" key={i}>
                            <div className="form-group mb-3">
                              <div className="bg-input-shadow-c">
                                <p>{item?.label}</p>
                                <div className="close-icon-red">
                                  <img
                                    src="assets/images/red_close.svg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <div className="bg-input-shadow-c">
                            <p>N/A</p>
                            <div className="close-icon-red">
                              <img src="assets/images/red_close.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tbl_user_info">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                    <h4 className="title_text">Documents</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <div className="bg-input-shadow-c">
                          <div className="group-icon-text">
                            <img src="assets/images/doc.svg" alt="" />
                            <p>Insurance</p>
                          </div>
                          <div className="pdf-text">PDF</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <div className="bg-input-shadow-c">
                          <div className="group-icon-text">
                            <img src="assets/images/doc.svg" alt="" />
                            <p>Identification</p>
                          </div>
                          <div className="pdf-text">PDF</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="tbl_user_info">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                    <h4 className="title_text">Profile</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label for="" className="view-label-input">
                          Bio
                        </label>

                        <div className="input-view-text height200 text_scroll">
                          {viewDetail?.bio}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className="col-12">
            <div className="user_profile">
              {viewDetail?.business_image ? (
                <img
                  src={
                    process.env.REACT_APP_IMG_URL +
                    "/business_image/" +
                    viewDetail?.business_image
                  }
                  alt=""
                />
              ) : (
                <img
                  src={require("../../assets/images/placeholder_img.png")}
                  alt=""
                  className=""
                />
              )}
              <div className="dropdown_items">
                <div className="dropdown_custom ">
                  <div className="dropdown_main">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="p-0 btn-custom-drop dropdown-toggle"
                      >
                        {verified == 0 ? "Unverified" : "Verified"}
                        <i class="mdi mdi-menu-down"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item
                          onClick={() => handleDropSelect("verified", 1)}
                        >
                          Verified
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDropSelect("verified", 0)}
                        >
                          Unverified
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="dropdown_custom ">
                  <div className="dropdown_main">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="p-0 btn-custom-drop dropdown-toggle"
                      >
                        {active == 0 ? "Inactive" : "Active"}
                        <i class="mdi mdi-menu-down"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item
                          onClick={() => handleDropSelect("active", 1)}
                        >
                          Active
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDropSelect("active", 0)}
                        >
                          Inactive
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style={{ margin: "0px" }}
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        Active
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleUpdateTardeP}
                  className="btn btn-primary btn-primary-lg border-radius-btn-c d-flex justify-content-center mx-auto"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tbl_user_info mt-5">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                    <h4 className="title_text">Badges</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <div className="bg-input-shadow-c">
                          <p>N/A</p>
                          <div className="close-icon-red">
                            <img src="assets/images/red_close.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <div className="bg-input-shadow-c">
                          <p>N/A</p>
                          <div className="close-icon-red">
                            <img src="assets/images/red_close.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
