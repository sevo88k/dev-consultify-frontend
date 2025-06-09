import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Include/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  convertCsvToExcel,
  deleteContraindicationAction,
  getStaticApiAction,
  getlistContradictionsDatabaseAction,
  uploadContradictionDB,
} from "../Redux/Action/ContaindicationAction";
import Modal from "react-bootstrap/Modal";
import { useCallback } from "react";
import { Encryptedid } from "../Util/BcruptEncyptid";
import Loader from "../Component/Loader";
import toast from "react-hot-toast";
export default function ContradictionDatabase() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState({
    title: undefined,
    enterytype: undefined,
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(getlistContradictionsDatabaseAction());
  }, []);
  const listsContradictionsDatabase = useSelector(
    (state) => state.Containdication.listsContradictionsDatabase
  );
  const getStaticApi = useSelector(
    (state) => state.Containdication.getStaticApi
  );
  const handleShow = (idvalue) => {
    setShow(true);
    setId(idvalue);
  };
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);

    setId("");
  };

  var editcontaindication = useCallback((id) => {
    const encodedEncrypted = Encryptedid(id);
    navigate("/Edit-contraidication-dtatabase/" + encodedEncrypted);
  }, []);

  useEffect(() => {
    dispatch(getStaticApiAction());
  }, []);

  const handleFilter = (e, type) => {
    if (e.key == "Enter") {
      return dispatch(
        getlistContradictionsDatabaseAction({
          filter: { ...filter, ["title"]: e.target.value },
        })
      );
    }
    let { value, name } = e.target;
    setFilter({ ...filter, [name]: value });
    if (type != "title") {
      dispatch(
        getlistContradictionsDatabaseAction({
          filter: { ...filter, [name]: value },
        })
      );
    }
  };

  // Open a link in a new tab
  const openLinkInNewTab = (link) => {
    window.open(link, "_blank");
  };

  const handleFileChange = (e) => {
    setLoader(true);
    setFile(e.target.files[0]);
    const formDatavalue = new FormData();
    formDatavalue.append("imagename1", e.target.files[0]);

    dispatch(convertCsvToExcel(formDatavalue)).then((item) => {
      if (item?.payload) {
        dispatch(uploadContradictionDB({ filePath: item?.payload })).then(
          (item) => {
            if (item?.payload) {
              setLoader(false);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              setLoader(false);
            }
          }
        );
      } else {
        setLoader(false);
      }
    });
  };
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {loader && <Loader />}

        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className={`vertical-menu ${toggle ? "open" : "close"}`}>
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div class="main-content">
          <div class="page-content">
            <div class="container-fluid">
              {/* <!-- start page title --> */}
              <div class="row">
                <div class="col-12">
                  <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                      <span class="small_text">Consultify</span>
                      <div className="d-flex justify-content-center align-items-center">
                        <h4 class="mb-sm-0 font-size-28">
                          Contraindication Database{" "}
                        </h4>
                        <p className="total">
                          {listsContradictionsDatabase?.length}
                        </p>
                      </div>
                    </div>

                    <div class="page-title-right">
                      {/* <!-- App Search--> */}
                      <div
                        className="hamburger-menu-btn"
                        onClick={handleToggle}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="35px"
                          height="35px"
                        >
                          <path
                            fill="#607D8B"
                            d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"
                          />
                        </svg>
                      </div>

                      <img
                        src={require("../assets/images/avatar.svg").default}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              {/* <!-- start search row --> */}
              <div class="row mb-4">
                <div class="col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <input
                    name="title"
                    type="text"
                    class="form-control cmn_fields"
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                    onChange={(e) => handleFilter(e, "message")}
                    onKeyDown={(e) => handleFilter(e)}
                    value={filter?.title}
                  />
                </div>

                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-6 mt-3 mt-sm-0 ">
                  <div class="form-group">
                    {/* <select class="form-control cmn_fields" id="exampleFormControlSelect1">
                                    <option>Entry Type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select> */}

                    <select
                      name="enterytype"
                      class="form-control cmn_fields"
                      id="exampleFormControlSelect1"
                      value={filter?.enterytype}
                      onChange={(e) => handleFilter(e)}
                    >
                      <option>Select or Type</option>
                      {getStaticApi?.getenterytype?.map(function (
                        enterytypeobject,
                        i
                      ) {
                        return (
                          <option value={enterytypeobject?.title}>
                            {enterytypeobject?.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-6 mt-3 mt-sm-3 mt-md-0 ">
                  <div class="form-group">
                    <select
                      class="form-control cmn_fields"
                      id="exampleFormControlSelect2"
                    >
                      <option>Last Viewed</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-6 mt-3 mt-sm-3 mt-md-0  d-flex justify-content-end">
                  <span>
                    <NavLink to="/CreateContradiction">
                      {" "}
                      <button class="btn cre_new">Create New</button>
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- end search row --> */}

            <div class="row">
              <div class="col-xl-12">
                <div class="members_tbl">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 class="title_text">All Entries</h4>
                        <div style={{ display: "flex" }}>
                          <NavLink to="">
                            {" "}
                            <button
                              onClick={() =>
                                openLinkInNewTab(
                                  `${process.env.REACT_APP_API_URL}/exportContradictionDB`
                                )
                              }
                              class="btn cre_new_one"
                            >
                              Export
                            </button>
                          </NavLink>

                          <div>
                            {/* <NavLink to="">  <button class="btn cre_new">Upload</button></NavLink> */}
                            <div className="uploaddata-btn cre_new">
                              <input
                                type="file"
                                class="file-input"
                                id="fileInput"
                                onChange={handleFileChange}
                              />
                              <label for="fileInput" class="">
                                Upload
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              {/* <th>Entry ID</th> */}
                              <th>Page Name</th>
                              <th>Entry Type</th>
                              <th>Contraindication Areas</th>
                              {/* <th>Total Page Views </th>
                                                        <th>Last Viewed</th>
                                                        <th>Actions</th> */}
                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {listsContradictionsDatabase?.map(function (
                              object,
                              i
                            ) {
                              return (
                                <tr key={i}>
                                  {/* <td>12323</td> */}
                                  <td>{object.title}</td>
                                  <td>{object.enterytype.title}</td>

                                  <td>
                                    {object.contraindication_advice.length}
                                  </td>
                                  {/* <td>31</td>
                                                        <td>25/07/2023</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td> */}

                                  <td>
                                    <button
                                      className="button edit"
                                      onClick={() => {
                                        editcontaindication(object?._id);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="button delete"
                                      onClick={() => {
                                        handleShow(object?._id);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
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

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="my_new_consult">
            <h2 className="text-center">
              Are you Sure to delete this Contraindication Database
            </h2>
            <div className="cent_btns">
              <button
                onClick={() => {
                  dispatch(deleteContraindicationAction(id)).then(function () {
                    dispatch(getlistContradictionsDatabaseAction());
                  });
                  setShow(false);
                }}
              >
                Yes
              </button>
              <button onClick={handleClose}>No</button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
}
