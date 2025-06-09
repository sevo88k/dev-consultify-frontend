import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink } from "react-router-dom";
import { FieldArray, Formik, Form as FormikForm } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  editStaffProfile,
  fetchOpeningHours,
  fetchStaffById,
  staffCreateOpeningHours,
  staffFetchOpeningHours,
  staffUpdateOpeningHours,
} from "../Redux/Actions/user/salon";
import { toast } from "react-hot-toast";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import useTimePicker from "../Hooks/timePicker";
import { openingHoursData } from "../utils/rawData";

const AddeditStaff = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const formRef = useRef();
  const [profileImage, setProfileImage] = useState("");
  const [preview, setPreview] = useState("");
  const [checked, setChecked] = useState(0);
  const userProfile = useSelector((state) => state?.myaccount?.staffMember);
  const { timeRanges } = useTimePicker();
  const openingHourSelector = useSelector(
    (state) => state.myaccount.staff_opening_hours
  );
  const openingHourSalonSelector = useSelector(
    (state) => state.myaccount.opening_hours
  );

  const handleImageUpload = (e, setFieldValue) => {
    if (e.target.files[0]) {
      setFieldValue("staff_profile", e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    dispatch(fetchOpeningHours());
  }, []);

  useEffect(() => {
    dispatch(fetchStaffById(params?.id));
  }, []);

  useEffect(() => {
    dispatch(staffFetchOpeningHours(params?.id));
  }, []);
  useEffect(() => {
    setChecked(openingHourSelector?.same_as_salon);
  }, [openingHourSelector]);

  const handleStaffOpeningHours = () => {
    let values = {};
    setChecked(!checked);
    values.id = userProfile?._id;
    values.same_as_salon = !checked ? 1 : 0;
    dispatch(staffUpdateOpeningHours(values)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
      }
    });
    window.location.reload();
  };
  return (
    <MyAcoountLayout>
      <div className="col-lg-12">
        <div className="staff_over">
          <div className="top_bar_staff">
            <div className="row">
              <div className="col-lg-6">
                <div className="search-input">
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="group-box-search">
                      <img
                        src={require("../assets/img/search.svg").default}
                        alt="search"
                      />
                    </InputGroup.Text>
                    <Form.Control placeholder="Search here" />
                  </InputGroup>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <NavLink to="/staff_overview" className="green-btn text-center">
                  Add
                </NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="customer-faqs mt-4">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Profile
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="account_form mb-2 mt-3">
                          <Formik
                            enableReinitialize={true}
                            initialValues={{
                              id: userProfile?._id,
                              fullname: userProfile?.fullname || "",
                              bio: userProfile?.bio || "",
                              staff_profile: userProfile?.staff_profile || "",
                            }}
                            onSubmit={(
                              values,
                              { setSubmitting, resetForm }
                            ) => {
                              console.log(values, profileImage, "values");

                              const formData = new FormData();

                              for (const key in values) {
                                formData.append(key, values[key]);
                              }

                              dispatch(editStaffProfile(formData)).then(
                                (data) => {
                                  if (data?.payload?.success) {
                                    resetForm();
                                    toast.success(data?.payload?.message);
                                  }
                                }
                              );
                              setSubmitting(false);
                            }}
                          >
                            {({
                              values,
                              errors,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                              setFieldValue,
                            }) => (
                              <form onSubmit={handleSubmit}>
                                <h2>Details</h2>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="fullname"
                                      placeholder="Staff Member Name"
                                      onChange={handleChange}
                                      value={values.fullname}
                                    />
                                    {errors.fullname && (
                                      <span className="error_valid">
                                        {errors.fullname}
                                      </span>
                                    )}
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="logo_upload">
                                      <img
                                        src={
                                          preview
                                            ? preview
                                            : values?.staff_profile
                                            ? process.env.REACT_APP_HOST_NAME +
                                              values?.staff_profile
                                            : require("../assets/img/greyrectangle.png")
                                        }
                                        alt=""
                                      />
                                      <p>Upload a Logo</p>
                                      <input
                                        id="input-file"
                                        type="file"
                                        className="form-control box_shadow_new"
                                        onChange={(e) =>
                                          handleImageUpload(e, setFieldValue)
                                        }
                                        accept="image/*"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <label
                                      for="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Bio
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="bio"
                                      placeholder="Bio"
                                      onChange={handleChange}
                                      value={values.bio}
                                    />
                                    {errors.bio && (
                                      <span className="error_valid">
                                        {errors.bio}
                                      </span>
                                    )}
                                  </div>

                                  <div className="submit-btn">
                                    <button type="submit" class="btn mb-3">
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Availability
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        {" "}
                        <div className="treatment_form">
                          <div className="treatement_form_header">
                            <h2>Category - Treatment</h2>
                            <div className="right_head">
                              <p>Same as Salon Opening Hours</p>
                              <Form>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  id="custom-switch"
                                  onChange={handleStaffOpeningHours}
                                  checked={checked}
                                />
                              </Form>
                            </div>
                          </div>
                          <div
                            className={`account_form buisness_hours inner-form ${
                              checked && "disabled_openhours"
                            }`}
                          >
                            <Formik
                              // enableReinitialize: true
                              innerRef={formRef}
                              initialValues={{
                                opening_hours:
                                  openingHourSelector?.same_as_salon
                                    ? openingHourSalonSelector?.opening_hours ||
                                      openingHoursData
                                    : openingHourSelector?.opening_hours ||
                                      openingHoursData,
                              }}
                              onSubmit={(values) => {
                                values.id = userProfile?._id;
                                values.salonId = localStorage.getItem("userId");
                                if (openingHourSelector?.opening_hours) {
                                  dispatch(
                                    staffUpdateOpeningHours(values)
                                  ).then((data) => {
                                    if (data?.payload?.success) {
                                      toast.success(data?.payload?.message);
                                    }
                                  });
                                } else {
                                  dispatch(
                                    staffCreateOpeningHours(values)
                                  ).then((data) => {
                                    if (data?.payload?.success) {
                                      toast.success(data?.payload?.message);
                                    }
                                  });
                                }
                              }}
                              render={({
                                values,
                                handleChange,
                                setFieldValue,
                              }) => (
                                <FormikForm>
                                  <FieldArray
                                    name="opening_hours"
                                    render={(arrayHelpers) => (
                                      <>
                                        <div className="row">
                                          {values?.opening_hours?.map(
                                            (item, itemIndex) => {
                                              return (
                                                <>
                                                  <FieldArray
                                                    name={`opening_hours.${itemIndex}.arr`}
                                                  >
                                                    {(subArrayHelpers) => (
                                                      <div
                                                        index={itemIndex}
                                                        className="col-lg-12"
                                                      >
                                                        <div className="buisness_form_fields">
                                                          <p className="first-sec-p">
                                                            {item?.day}
                                                          </p>
                                                          {item?.day ==
                                                            "Saturday" ||
                                                          item?.day ==
                                                            "Sunday" ? (
                                                            <>
                                                              {item?.arr?.map(
                                                                (data, i) => {
                                                                  return (
                                                                    <>
                                                                      {i !=
                                                                        0 && (
                                                                        <p></p>
                                                                      )}
                                                                      <input
                                                                        type="text"
                                                                        placeholder="Unavailable"
                                                                        name={`opening_hours.${itemIndex}.arr.${i}.reason`}
                                                                        value={
                                                                          values
                                                                            .opening_hours[
                                                                            itemIndex
                                                                          ].arr[
                                                                            i
                                                                          ]
                                                                            .reason
                                                                        }
                                                                        onChange={
                                                                          handleChange
                                                                        }
                                                                      />
                                                                      <div className="edit_btns">
                                                                        {i !=
                                                                          0 && (
                                                                          <button type="button">
                                                                            <img
                                                                              onClick={() =>
                                                                                subArrayHelpers.remove(
                                                                                  i
                                                                                )
                                                                              }
                                                                              src={require("../assets/img/Delete.png")}
                                                                              alt=""
                                                                            />
                                                                          </button>
                                                                        )}

                                                                        <img
                                                                          onClick={() =>
                                                                            subArrayHelpers.push(
                                                                              {
                                                                                reason:
                                                                                  "",
                                                                              }
                                                                            )
                                                                          }
                                                                          src={require("../assets/img/add.png")}
                                                                          alt=""
                                                                        />
                                                                      </div>
                                                                    </>
                                                                  );
                                                                }
                                                              )}
                                                            </>
                                                          ) : (
                                                            item?.arr?.map(
                                                              (data, i) => {
                                                                return (
                                                                  <>
                                                                    {i != 0 && (
                                                                      <p className="first-sec-p"></p>
                                                                    )}
                                                                    {data?.reason ? (
                                                                      <>
                                                                        <input
                                                                          type="text"
                                                                          placeholder="Unavailable"
                                                                          name={`opening_hours.${itemIndex}.arr.${i}.reason`}
                                                                          value={
                                                                            values
                                                                              .opening_hours[
                                                                              itemIndex
                                                                            ]
                                                                              .arr[
                                                                              i
                                                                            ]
                                                                              .reason
                                                                          }
                                                                          onChange={
                                                                            handleChange
                                                                          }
                                                                        />
                                                                        <div className="edit_btns">
                                                                          {i !=
                                                                            0 && (
                                                                            <button type="button">
                                                                              <img
                                                                                onClick={() =>
                                                                                  subArrayHelpers.remove(
                                                                                    i
                                                                                  )
                                                                                }
                                                                                src={require("../assets/img/Delete.png")}
                                                                                alt=""
                                                                              />
                                                                            </button>
                                                                          )}

                                                                          <img
                                                                            onClick={() => {
                                                                              subArrayHelpers.remove(
                                                                                0
                                                                              );
                                                                              subArrayHelpers.push(
                                                                                {
                                                                                  start:
                                                                                    "08:00 am",
                                                                                  end: "09:00 pm",
                                                                                }
                                                                              );
                                                                            }}
                                                                            src={require("../assets/img/add.png")}
                                                                            alt=""
                                                                          />
                                                                        </div>
                                                                      </>
                                                                    ) : (
                                                                      <>
                                                                        <select
                                                                          key={
                                                                            i
                                                                          }
                                                                          class="form-select add_width"
                                                                          aria-label="Default select example"
                                                                          name={`opening_hours.${itemIndex}.arr.${i}.start`}
                                                                          value={
                                                                            values
                                                                              .opening_hours[
                                                                              itemIndex
                                                                            ]
                                                                              .arr[
                                                                              i
                                                                            ]
                                                                              .start
                                                                          }
                                                                          onChange={
                                                                            handleChange
                                                                          }
                                                                        >
                                                                          {timeRanges?.map(
                                                                            (
                                                                              time
                                                                            ) => (
                                                                              <option
                                                                                value={
                                                                                  time
                                                                                }
                                                                              >
                                                                                {
                                                                                  time
                                                                                }
                                                                              </option>
                                                                            )
                                                                          )}
                                                                        </select>
                                                                        <select
                                                                          class="form-select add_width"
                                                                          aria-label="Default select example"
                                                                          name={`opening_hours.${itemIndex}.arr.${i}.end`}
                                                                          value={
                                                                            values
                                                                              .opening_hours[
                                                                              itemIndex
                                                                            ]
                                                                              .arr[
                                                                              i
                                                                            ]
                                                                              .end
                                                                          }
                                                                          onChange={
                                                                            handleChange
                                                                          }
                                                                        >
                                                                          {timeRanges?.map(
                                                                            (
                                                                              time
                                                                            ) => (
                                                                              <option
                                                                                value={
                                                                                  time
                                                                                }
                                                                              >
                                                                                {
                                                                                  time
                                                                                }
                                                                              </option>
                                                                            )
                                                                          )}
                                                                        </select>
                                                                        <div className="edit_btns">
                                                                          {
                                                                            <button type="button">
                                                                              <img
                                                                                onClick={() => {
                                                                                  subArrayHelpers.remove(
                                                                                    i
                                                                                  );
                                                                                  if (
                                                                                    item
                                                                                      ?.arr
                                                                                      ?.length <
                                                                                    2
                                                                                  ) {
                                                                                    subArrayHelpers.push(
                                                                                      {
                                                                                        reason:
                                                                                          "Unavailable",
                                                                                      }
                                                                                    );
                                                                                  }
                                                                                }}
                                                                                src={require("../assets/img/Delete.png")}
                                                                                alt=""
                                                                              />
                                                                            </button>
                                                                          }

                                                                          <button type="button">
                                                                            <img
                                                                              onClick={() =>
                                                                                subArrayHelpers.push(
                                                                                  {
                                                                                    start:
                                                                                      "08:00 am",
                                                                                    end: "09:00 pm",
                                                                                  }
                                                                                )
                                                                              }
                                                                              src={require("../assets/img/add.png")}
                                                                              alt=""
                                                                            />
                                                                          </button>
                                                                        </div>
                                                                      </>
                                                                    )}
                                                                  </>
                                                                );
                                                              }
                                                            )
                                                          )}
                                                        </div>
                                                      </div>
                                                    )}
                                                  </FieldArray>
                                                </>
                                              );
                                            }
                                          )}

                                          <div className="submit-btn">
                                            <button
                                              type="submit"
                                              class="btn mb-3"
                                            >
                                              {openingHourSelector?.opening_hours
                                                ? "Update"
                                                : "Create"}
                                            </button>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  />
                                </FormikForm>
                              )}
                              enableReinitialize={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Services
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <div className="availability_set">
                          <ul>
                            <li>
                              <h3>Category - Treatment</h3>
                              <div className="tick_available">
                                <Nav.Link to="#" className="p-0">
                                  Set Availability
                                </Nav.Link>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <h3>Category - Treatment</h3>
                              <div className="tick_available">
                                <Nav.Link to="#" className="p-0">
                                  Set Availability
                                </Nav.Link>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <h3>Category - Treatment</h3>
                              <div className="tick_available">
                                <Nav.Link to="#" className="p-0">
                                  Set Availability
                                </Nav.Link>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <h3>Category - Treatment</h3>
                              <div className="tick_available">
                                <Nav.Link to="#" className="p-0">
                                  Set Availability
                                </Nav.Link>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
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
    </MyAcoountLayout>
  );
};

export default AddeditStaff;
