import React from "react";
import DeleteModal from "../Modals/DeleteModal";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const AccountHolder = ({ viewDetail }) => {
  const [showModal, setShowModal] = useState(false);
  const [delId, setDeleteId] = useState();
  const val = viewDetail?.address.split(",").filter((str) => str !== " ");
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="row">
          <div className="col-xl-12">
            <div className="tbl_user_info">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative border-b-c">
                    <h4 className="title_text">Account Holder Details</h4>
                  </div>
                  <DeleteModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    id={delId}
                    modalName="deleteTradePeople"
                  />

                  <div className="row">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Name
                            </label>
                            <div className="input-view-text">
                              {viewDetail?.firstName +
                                " " +
                                viewDetail?.lastName}
                            </div>
                            {/* <!-- <input type="text" className="form-control-new" placeholder=""> --> */}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              DOB
                            </label>
                            <div className="input-view-text">N/A</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Email
                            </label>
                            <div className="input-view-text">
                              {viewDetail?.email}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group mb-3">
                            <label for="" className="view-label-input">
                              Mailing List
                            </label>
                            <div className="input-view-text-y">Yes</div>
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
                              {viewDetail?.mobile}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label for="" className="view-label-input">
                          Address
                        </label>
                        {val.map((item) => {
                          return (
                            <div className="form-group mb-3">
                              <div className="input-view-text">{item}</div>
                            </div>
                          );
                        })}
                        {/* <div className="input-view-text">32 Elthiron Road</div> */}
                      </div>
                      {/* <div className="form-group mb-3">
                        <div className="input-view-text">Fulham</div>
                      </div>
                      <div className="form-group mb-3">
                        <div className="input-view-text">United Kingdom</div>
                      </div> */}
                      <div className="form-group mb-3">
                        <div className="input-view-text">
                          {viewDetail?.postcode}
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
        <div className="user_profile">
          {viewDetail?.profile_image ? (
            <img
              src={
                process.env.REACT_APP_IMG_URL +
                "/business_image/" +
                viewDetail?.business_image
              }
              alt=""
              className=""
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
                    Active
                    {/* {verified == 0 ? "Unverified" : "Verified"}   */}
                    <i class="mdi mdi-menu-down"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item
                    // onClick={() => handleDropSelect("verified", 1)}
                    >
                      Active
                    </Dropdown.Item>
                    <Dropdown.Item
                    // onClick={() => handleDropSelect("verified", 0)}
                    >
                      InActive
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="dropdown_custom ">
              <div className="dropdown">
                <button
                  className="p-0 btn-custom-drop dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => {
                    setShowModal(true);
                    setDeleteId(viewDetail?._id);
                  }}
                >
                  Delete Account
                </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHolder;
