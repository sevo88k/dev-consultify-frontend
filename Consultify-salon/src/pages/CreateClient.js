import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createClientAction } from "../Redux/Actions/user/salon";
import DateOfBirthPicker from "../components/DateOfBirthPicker";
import useGetAddressIO from "../Hooks/getAddressIo";
import Select from "react-select";

const CreateClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dob, setDOB] = useState();
  const [postcode, setPostcode] = useState();
  const { addressData, getAddress } = useGetAddressIO();
  const [prevImg2, setPrevImg2] = useState();
  const [pdfFile, setPdfFile] = useState();
  const [isData, setIsData] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      phone_number: "",
      last_name: "",
      email: "",
      pronouns: "",

      // first_line_address: "",
      // second_line_address: "",
      // city: "",
      pin_code: "",
      dob: "",
      gender: "",
      self_describe: "",
      document_title: "",
      client_document: "",
      otherCountries: "United Kingdom",
      first_line_address: "",
      second_line_address: "",
      city: "",
      zip_code: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First Name  is required"),
      pronouns: Yup.string(),
      last_name: Yup.string().required("Surname   is required"),
      // dob: Yup.string().required("Dob   is required"),
      gender: Yup.string(),
      self_describe: Yup.string().when("gender", {
        is: "3", // Condition: Require 'self_describe' if 'gender' is 3
        then: Yup.string().required("Self describe is required."),
        otherwise: Yup.string(), // 'self_describe' is optional otherwise
      }),

      email: Yup.string().email().required("Email   is required"),
      // first_line_address: Yup.string().required(
      //   "One Line  address  is required"
      // ),
      // phone_number: Yup.string().required("Phone number  is required"),
      // city: Yup.string().required("City  is required"),
      // pin_code: Yup.string().required("Post code  is required"),
    }),
    onSubmit: (values) => {
      values.dob = dob;
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      console.log(values, "werwer234234234234")
      dispatch(createClientAction(formData, navigate)).then(function (data) {
        if (data?.payload) {
          navigate("/myclient");
        }
      });
    },
  });

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("1");
  const [countries, setCountries] = useState([]);

  const handleChange3 = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleChange4 = (e) => {
    setSelectedValue2(e.target.value);
  };

  const handleChange5 = (e) => {
    setSelectedValue3(e.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const englishSpeakingCountries = data.filter(
          (country) =>
            country.languages &&
            (Object.values(country.languages).includes("English") ||
              country.name.common === "United Kingdom")
        );
        setCountries(englishSpeakingCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const options = countries.map((country) => ({
    value: country.cca3,
    label: country.name.common,
  }));

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setIsData(selectedOption?.label === "United Kingdom" ? 1 : 2);
    formik.setFieldValue("otherCountries", selectedOption?.label || "");
  };
  return (
    <Layout>
      <div className="mydetails">
        <div className="myaccount_tabcmn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="prev_main">
                  <img
                    src={
                      require("../../src/assets/img/right-arrow.svg").default
                    }
                    alt="arrow"
                    className="arrow-next-green"
                  />
                  <NavLink className="prev_result" to="/myclient">
                    Back to All Clients
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs_content">
          <div className="container">
            <div className="row justify-content-center">
              {/* <div className="col-lg-5">
                            <div className="you_know">
                                <h2>Did you know?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit ame. </p>
                            </div>
                        </div> */}
              <div className="col-lg-8">
                <div className="account_form">
                  <form onSubmit={formik.handleSubmit} autoComplete={"off"}>
                    <h2>Client Details</h2>
                    <p>
                      Send your consultation for your client to complete
                      themselves.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <label>First Name *</label>

                        <input
                          className="form-control"
                          placeholder="First Name"
                          name="first_name"
                          value={formik.values.first_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />

                        {formik.touched.first_name &&
                          formik.errors.first_name && (
                            <span className="error">
                              {formik.errors.first_name}
                            </span>
                          )}
                      </div>
                      <div className="col-lg-6">
                        <label>Surname *</label>
                        <input
                          className="form-control"
                          placeholder="Surname"
                          name="last_name"
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.last_name &&
                          formik.errors.last_name && (
                            <span className="error">
                              {formik.errors.last_name}
                            </span>
                          )}
                      </div>
                      <div className="col-lg-6">
                        <label>Gender</label>

                        <select
                          class="form-select"
                          className={`form-control ${formik.values.gender == ""
                              ? "dif-color"
                              : "other-color"
                            }`}
                          aria-label="Default select example"
                          name="gender"
                          value={formik.values.gender}
                          onChange={(e) => {
                            formik.handleChange(e);
                            handleChange3(e);
                          }}
                          onBlur={formik.handleBlur}
                        >
                          <option
                            selected
                            value=""
                            className={
                              selectedValue == "" ? "dif-color" : "other-color"
                            }
                          >
                            Please Select
                          </option>
                          <option value="0" className="other-color">
                            Male
                          </option>
                          <option value="1" className="other-color">
                            Female
                          </option>
                          <option value="2" className="other-color">
                            Non Binary
                          </option>
                          <option value="3" className="other-color">
                            Others{" "}
                          </option>
                          <option value="4" className="other-color">
                            Prefer not to say{" "}
                          </option>
                        </select>
                        {formik.submitCount > 0 &&
                          formik.touched.gender &&
                          formik.errors.gender && (
                            <span className="error">
                              {formik.errors.gender}
                            </span>
                          )}
                      </div>
                      {formik.values.gender == 3 && (
                        <div className="col-lg-6">
                          <label>Self-Describe </label>
                          <input
                            className="form-control"
                            placeholder=""
                            name="self_describe"
                            value={formik.values.self_describe}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.submitCount > 0 &&
                            formik.touched.self_describe &&
                            formik.errors.self_describe && (
                              <span className="error">
                                {formik.errors.self_describe}
                              </span>
                            )}
                        </div>
                      )}
                      <div className="col-lg-6">
                        <label>Pronouns</label>
                        <select
                          class="form-select"
                          className={`form-control ${formik.values.pronouns == ""
                              ? "dif-color"
                              : "other-color"
                            }`}
                          aria-label="Default select example"
                          name="pronouns"
                          value={formik.values.pronouns}
                          onChange={(e) => {
                            formik.handleChange(e);
                            handleChange4(e);
                          }}
                          onBlur={formik.handleBlur}
                        >
                          <option
                            className={
                              selectedValue2 == "" ? "dif-color" : "other-color"
                            }
                            value=""
                          >
                            Please Select
                          </option>
                          <option value="She/Her" className="other-color">
                            She/Her
                          </option>
                          <option value="He/Him" className="other-color">
                            He / Him
                          </option>
                          <option value="They/Them" className="other-color">
                            They / Them
                          </option>
                          <option value="Others" className="other-color">
                            Others{" "}
                          </option>
                        </select>

                        {formik.submitCount > 0 &&
                          formik.touched.pronouns &&
                          formik.errors.pronouns && (
                            <span className="error">
                              {formik.errors.pronouns}
                            </span>
                          )}
                      </div>
                      {/* <div className="col-lg-6 create-date-picker dob-design">
                        <label>DOB</label>
                        <DateOfBirthPicker
                          dob={dob}
                          setDOB={(e) => {
                            setDOB(e);
                            formik.setFieldValue("dob", e, { strict: false });
                          }}
                        />
                      </div> */}

                      <div className="col-lg-6 create-date-picker dob-design">
                        <label htmlFor="dob-picker">Date of Birth</label>
                        <DateOfBirthPicker
                          dob={dob}
                          setDOB={(date) => {
                            setDOB(date);
                            formik.setFieldValue("dob", date);
                          }}
                        />
                      </div>

                      <div className="col-lg-6">
                        <label>Email Address *</label>
                        <input
                          className="form-control"
                          placeholder="Type to search"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          autocomplete="off"

                        />
                        {formik.submitCount > 0 &&
                          formik.touched.email &&
                          formik.errors.email && (
                            <span className="error">{formik.errors.email}</span>
                          )}
                      </div>
                      <div className="col-lg-6">
                        <label>Phone</label>
                        <input
                          className="form-control"
                          placeholder="Type Here"
                          name="phone_number"
                          value={formik.values.phone_number}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {/* {formik.submitCount > 0 &&
                          formik.touched.phone_number &&
                          formik.errors.phone_number && (
                            <span className="error">
                              {formik.errors.phone_number}
                            </span>
                          )} */}
                      </div>
                      <div className="col-lg-6">
                        <div className="row">
                          <label>Choose Country</label>
                          <Select
                            className=""
                            name="otherCountries"
                            onChange={handleCountryChange}
                            value={
                              selectedCountry ||
                              options.find(
                                (e) => e.label === formik.values.otherCountries
                              )
                            }
                            options={options}
                          />
                        </div>
                      </div>
                      {isData === 1 && (
                        <>
                          <div className="col-lg-6">
                            <label>Post Code Search</label>
                            <input
                              className="form-control"
                              placeholder="Post Code"
                              name="pin_code"
                              value={formik.values.pin_code}
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                              onBlur={formik.handleBlur}
                            />
                            {formik.submitCount > 0 &&
                              formik.touched.pin_code &&
                              formik.errors.pin_code && (
                                <span className="error">
                                  {formik.errors.pin_code}
                                </span>
                              )}
                          </div>

                          <div className="col-lg-6 d-flex align-items-end">
                            <button
                              className="w-100"
                              type="button"
                              onClick={() => {
                                getAddress(formik.values.pin_code);
                              }}
                            >
                              Search
                            </button>
                          </div>

                          <div className="col-lg-12">
                            <select
                              name="address"
                              className={`form-control ${selectedValue3 == "1"
                                  ? "dif-color"
                                  : "other-color"
                                }`}
                              aria-label="Default select example"
                              onChange={(e) => {
                                formik.handleChange(e);
                                handleChange5(e);

                                const data = addressData?.addresses?.find(
                                  (element) =>
                                    element?.formatted_address?.toString() ===
                                    e.target.value?.toString()
                                );

                                formik.setFieldValue(
                                  "first_line_address",
                                  data?.line_1
                                );
                                formik.setFieldValue(
                                  "second_line_address",
                                  data?.line_2
                                );
                                formik.setFieldValue(
                                  "city",
                                  data?.town_or_city
                                );
                              }}
                              value={formik.values.address}
                            >
                              <option
                                value="1"
                                className={
                                  selectedValue3 == "1"
                                    ? "dif-color"
                                    : "other-color"
                                }
                              >
                                Confirm Address
                              </option>
                              {addressData?.addresses?.map((item) => {
                                return (
                                  <option value={item?.formatted_address}>
                                    {item?.formatted_address
                                      ?.filter((item) => item !== "")
                                      .join(",")}
                                  </option>
                                );
                              })}
                            </select>
                            {formik.submitCount > 0 &&
                              formik.errors.address && (
                                <span>{formik.errors.address}</span>
                              )}
                          </div>
                        </>
                      )}
                      {isData === 2 && (
                        <>
                          <li>
                            <input
                              className="form-control mb-2"
                              placeholder="First Line of Address"
                              name="first_line_address"
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                              value={formik.values.first_line_address}
                            />

                            <input
                              className="form-control mb-2"
                              placeholder="Second Line (Optional)"
                              name="second_line_address"
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                              value={formik.values.second_line_address}
                            />

                            <input
                              className="form-control"
                              placeholder="Town or City"
                              name="city"
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                              value={formik.values.city}
                            />

                            <input
                              className="form-control"
                              placeholder="Zip or Post Code"
                              name="zip_code"
                              onChange={(e) => {
                                formik.handleChange(e);
                              }}
                              value={formik.values.zip_code}
                            />
                          </li>
                        </>
                      )}
                      {/* <div className="col-lg-6">
                        <label>Address</label>
                        <input
                          className="form-control mb-2"
                          placeholder="First Line "
                          name="first_line_address"
                          value={formik.values.first_line_address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.first_line_address &&
                          formik.errors.first_line_address && (
                            <span className="error">
                              {formik.errors.first_line_address}
                            </span>
                          )}
                        <input
                          className="form-control mb-2"
                          placeholder="Second Line "
                          name="second_line_address"
                          value={formik.values.second_line_address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.second_line_address &&
                          formik.errors.second_line_address && (
                            <span className="error">
                              {formik.errors.second_line_address}
                            </span>
                          )}
                        <input
                          className="form-control"
                          placeholder="City"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.submitCount > 0 &&
                          formik.touched.city &&
                          formik.errors.city && (
                            <span className="error">{formik.errors.city}</span>
                          )}
                      </div> */}
                      <div className="col-lg-6"></div>{" "}
                      <div className="submit-btn">
                        <button class="btn mb-3" type="submit">
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CreateClient;
