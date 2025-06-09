import React from "react";
import Sidebar from "./Include/Sidebar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addSideeffectAction,
  deletesideeffectAction,
  getSideEffectAction,
} from "../Redux/Action/ContaindicationAction";
import { useEffect } from "react";
export default function SideEffectlist() {
  const [show, setShow] = useState(false);
  const [showdelete, setShowdelete] = useState(false);
  const [idvalue, setIdvalue] = useState("");
  const handleClose = () => {
    setShow(false);
    setIdvalue("");
    formik.setFieldValue("title", "");
  };
  const handleShow = () => {
    setShow(true);
    setIdvalue("");
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please enter title"),
    }),
    onSubmit: (values) => {
      values.id = idvalue;
      dispatch(addSideeffectAction(values));
      //dispatch(getSideEffectAction())
      setShow(false);
      // Handle step 1 submission
    },
  });

  useEffect(() => {
    dispatch(getSideEffectAction());
  }, []);
  const sideeffectlists = useSelector(
    (state) => state.Containdication.Sideeffectlists
  );

  console.log(sideeffectlists, "sideeffectlists");

  // iaddSideeffectAction
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div id="layout-wrapper">
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
                        <h4 class="mb-sm-0 font-size-28">Side Effects</h4>
                        <p className="total"></p>
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
              <div class="row mb-4 create-new">
                <div class="col-xxl-6 col-xl-8 col-lg-8 col-sm-8 ">
                  <input
                    name="title"
                    type="text"
                    class="form-control cmn_fields"
                    aria-describedby="emailHelp"
                    placeholder="Search Here"
                    //  onChange={(e) => handleFilter(e, 'message')}
                    //  onKeyDown={(e) => handleFilter(e)}
                    //value = {filter?.title}
                  />
                </div>

                <div className="col-xxl-6 col-xl-4 col-lg-4 col-sm-4 col-5 d-flex justify-content-end">
                  <span>
                    <button onClick={handleShow} class="btn cre_new">
                      Create New
                    </button>
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
                        <h4 class="title_text">Side Effects Lists</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              {/* <th>Entry ID</th> */}
                              <th>Side Effects Id</th>
                              <th>Title</th>

                              <th>Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {sideeffectlists?.map(function (object, i) {
                              return (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{object?.title}</td>

                                  <td>
                                    <button
                                      className="button edit"
                                      onClick={() => {
                                        formik.setFieldValue(
                                          "title",
                                          object.title
                                        );
                                        setIdvalue(object?._id);
                                        setShow(true);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="button delete"
                                      onClick={() => {
                                        setIdvalue(object?._id);
                                        setShowdelete(true);
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <form className="sideffect_popup" onSubmit={formik.handleSubmit}>
              <h2>Add Side Effects</h2>

              <div className="form-group">
                <label for="exampleInputEmail1">Side Effects</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.title && formik.errors.title && (
                  <div className="error">{formik.errors.title}</div>
                )}
              </div>

              <br />
              <Modal.Footer className="effect_footer">
                <Button className="save" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>

        <Modal
          show={showdelete}
          onHide={() => {
            setShowdelete(false);
          }}
          animation={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="my_new_consult">
            <h2 className="text-center">
              Are you Sure to delete this Contraindication Database
            </h2>
            <div className="cent_btns">
              <button
                onClick={() => {
                  dispatch(deletesideeffectAction(idvalue)).then(function () {
                    dispatch(getSideEffectAction());
                  });
                  setShowdelete(false);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setShowdelete(false);
                }}
              >
                No
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
