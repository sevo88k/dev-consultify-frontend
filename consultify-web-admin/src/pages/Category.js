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
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../Redux/Action/ContaindicationAction";
import { useEffect } from "react";
export default function Category() {
  const [show, setShow] = useState(false);
  const [showdelete, setShowdelete] = useState(false);
  const [idvalue, setIdvalue] = useState("");
  const handleClose = () => {
    setShow(false);
    setIdvalue("");
    formik.setFieldValue("title", "");
    // formik.setFieldValue("desc", "");
  };
  const handleShow = () => {
    setShow(true);
    setIdvalue("");
    formik.setFieldValue("title", "");
    // formik.setFieldValue("desc", "");
  };
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please enter title"),
    }),
    onSubmit: (values) => {
      if (idvalue) {
        values.id = idvalue;
        dispatch(updateCategory(values)).then((data) => {
          if (data?.payload?.success) {
            dispatch(
              getCategory({
                page: 1,
                limit: 1000000000000,
                search: "",
              })
            );
          }
        });
      } else {
        dispatch(createCategory(values)).then((data) => {
          if (data?.payload?.success) {
            dispatch(
              getCategory({
                page: 1,
                limit: 1000000000000,
                search: "",
              })
            );
          }
        });
      }

      //dispatch(getSideEffectAction())
      setShow(false);
      // Handle step 1 submission
    },
  });

  useEffect(() => {
    dispatch(
      getCategory({
        page: 1,
        limit: 1000000000000,
        search: "",
      })
    );
  }, []);
  const sideeffectlists = useSelector((state) => state.Forum.category);

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
                        <h4 class="mb-sm-0 font-size-28">Category</h4>
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
                <div class="col-xxl-4 col-sm-6 ">
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

                <div className="col-xxl-8 col-sm-6 mt-3 mt-sm-0 d-flex justify-content-end">
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
                        <h4 class="title_text">Category</h4>
                      </div>

                      <div class="table-responsive">
                        <table
                          id=""
                          class="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              {/* <th>Entry ID</th> */}
                              <th className="hide-on-small">Id</th>
                              <th>Title</th>

                              <th className="hide-on-small">Actions</th>
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {sideeffectlists?.map(function (object, i) {
                              return (
                                <tr key={i}>
                                  <td className="hide-on-small">{i + 1}</td>
                                  <td
                                    onClick={
                                      isMobile
                                        ? () => {
                                            formik.setFieldValue(
                                              "title",
                                              object.title
                                            );
                                            formik.setFieldValue(
                                              "desc",
                                              object.desc
                                            );
                                            setIdvalue(object?._id);
                                            setShow(true);
                                          }
                                        : null
                                    }
                                  >
                                    {object?.title}
                                  </td>

                                  <td className="hide-on-small">
                                    <button
                                      className="button edit"
                                      onClick={() => {
                                        formik.setFieldValue(
                                          "title",
                                          object.title
                                        );
                                        formik.setFieldValue(
                                          "desc",
                                          object.desc
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
              <h2>{idvalue ? "Edit" : "Add"} Category</h2>

              <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter Title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="error">{formik.errors.title}</div>
                )}

                {/* <label for="exampleInputEmail1" className="mt-2">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="desc"
                  placeholder="Enter Description"
                  value={formik.values.desc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.desc && formik.errors.desc && (
                  <div className="error">{formik.errors.desc}</div>
                )} */}
              </div>

              <br />
              <Modal.Footer className="effect_footer">
                <Button className="save" type="submit">
                  {idvalue ? "Update" : "Add"}
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
              Are you Sure to delete this Category
            </h2>
            <div className="cent_btns">
              <button
                onClick={() => {
                  dispatch(deleteCategory(idvalue)).then(function () {
                    dispatch(
                      getCategory({
                        page: 1,
                        limit: 1000000000000,
                        search: "",
                      })
                    );
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
