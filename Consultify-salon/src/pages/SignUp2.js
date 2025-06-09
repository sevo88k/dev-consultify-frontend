import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { editProfile } from "../Redux/Actions/user/auth";
import { useDispatch } from "react-redux";
import useGetAddressIO from "../Hooks/getAddressIo";
import Select from "react-select";
const SignUp2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { addressData, getAddress } = useGetAddressIO();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [city1, setCity] = useState();
  const [countries, setCountries] = useState([]);
  const [postcode, setPostcode] = useState();
  const [isData, setIsData] = useState(1);

  const handleKeyEnter = (event) => {
    //  if (event.key === 'Enter') {
    getAddress(postcode).then((data) => {});
    //  }
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

  return (
    <div className="bg-color">
      {/* Header Start */}
      <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
          <Link to="/">
            <img
              className="main-logo"
              // src={require("../assets/img/newconsultlogowhite.png")}
              src={require("../assets/img/consultify-white-logo.svg").default}
              alt="logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <p>Already have an account?</p>
              <Nav.Link href="/signin" className="white-btn">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Header End */}

      {/* Signup flow Start */}
      <section className="signup-content new-fields">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-inner">
                <h2>You’re almost there!</h2>
                <div className="create-acc-form">
                  <div className="row">
                    <div className="col-lg-5 pe-0">
                      <div className="features">
                        <ul>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>£14.99 Per Month</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Dedicated Account Manager</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Unlimited Consultations</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Unlimited Clients</p>
                          </li>
                          <li>
                            <img
                              src={require("../assets/img/tick.svg").default}
                              alt="tick"
                            />
                            <p>Cancel Anytime</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 ps-0">
                      <Formik
                        //enableReinitialize={true}
                        initialValues={{
                          id: params?.id,
                          salonname: "",
                          postcode: "",
                          address: "",
                          leaveformstep: 1,
                          first_line_address: "",
                          second_line_address: "",
                          city: "",
                          zip_code: "",
                          otherCountries: "United Kingdom",
                        }}
                        validate={(values) => {
                          const errors = {};

                          if (!values.salonname) {
                            errors.salonname = "Required*";
                          }
                          if (values.postcode) {
                            if (!values.address) {
                              errors.address = "Required*";
                            }
                          } else if (!values.otherCountries) {
                            errors.postcode = "Required*";
                            errors.otherCountries = "Required*";
                          }
                          if (values.otherCountries !== "United Kingdom") {
                            if (!values.first_line_address) {
                              errors.first_line_address = "Required*";
                            }
                            if (!values.city) {
                              errors.city = "Required*";
                            }
                            if (!values.zip_code) {
                              errors.zip_code = "Required*";
                            }
                          }

                          return errors;
                        }}
                        validateOnChange={false}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          if (values.postcode) {
                            // Include personal address details only if postcode is present
                            values.personal_address1 = address1 || "";
                            values.personal_address2 = address2 || "";
                            values.personal_city = city1 || "";

                            // Remove fields not needed if postcode is present
                            delete values.first_line_address;
                            delete values.second_line_address;
                            delete values.city;
                            delete values.zip_code;
                            delete values.otherCountries;
                          } else if (values.otherCountries) {
                            // Remove postcode related fields if otherCountries is present
                            delete values.postcode;
                            delete values.address;
                          }

                          values.leaveformstep = 1;
                          dispatch(
                            editProfile({
                              ...values,
                              // personal_address1: address1 || "",
                              // personal_address2: address2 || "",
                              // personal_city: city1 || "",
                            })
                          ).then((data) => {
                            if (data?.payload?.success) {
                              resetForm();
                              navigate(`/signup3/${data?.payload?.data?._id}`);
                            }
                          });
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
                          <form onSubmit={handleSubmit} className="h-100">
                            <div className="create-account create-account-next">
                              <ul className="">
                                <li className="form-grp">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Salon Name"
                                    name="salonname"
                                    onChange={handleChange}
                                    value={values.salonname}
                                  />
                                  {errors.salonname && (
                                    <span className="error_valid">
                                      {errors.salonname}
                                    </span>
                                  )}
                                </li>

                                <li>
                                  {errors.otherCountries && (
                                    <span className="error_valid">
                                      {errors.otherCountries}
                                    </span>
                                  )}
                                  <Select
                                    className="react-select-countries"
                                    name="otherCountries"
                                    onChange={(e) => {
                                      setFieldValue(
                                        "otherCountries",
                                        e ? e.label : ""
                                      );
                                      setIsData(
                                        e.label === "United Kingdom" ? 1 : 2
                                      );
                                    }}
                                    value={options.find(
                                      (e) => e.label === values.otherCountries
                                    )}
                                    options={options}
                                  />
                                </li>

                                {(isData === 1 ||
                                  values.otherCountries ===
                                    "United Kingdom") && (
                                  <>
                                    <li className="form-grp">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Salon Post Code"
                                        name="postcode"
                                        onChange={(e) => {
                                          setPostcode(e.target.value);
                                          handleChange(e);
                                        }}
                                        //onKeyPress={handleKeyEnter}
                                        value={values.postcode}
                                      />
                                      <button
                                        onClick={handleKeyEnter}
                                        type="button"
                                      >
                                        Search
                                      </button>
                                      {errors.postcode && (
                                        <span className="error_valid">
                                          {errors.postcode}
                                        </span>
                                      )}
                                    </li>
                                    <li
                                      className={
                                        addressData?.addresses?.length > 0
                                          ? "select-appear"
                                          : "form-grp"
                                      }
                                    >
                                      <select
                                        name="address"
                                        aria-label="Default select example"
                                        className="form-control form-select"
                                        onChange={(e) => {
                                          handleChange(e);
                                          const data =
                                            addressData?.addresses?.find(
                                              (element) =>
                                                element?.formatted_address?.toString() ==
                                                e.target.value?.toString()
                                            );
                                          setAddress1(data?.line_1);
                                          setAddress2(data?.line_2);
                                          setCity(data?.town_or_city);
                                        }}
                                        value={values.address}
                                      >
                                        <option>
                                          Select Address From List
                                        </option>
                                        {addressData?.addresses?.map((item) => {
                                          return (
                                            <option
                                              value={item?.formatted_address
                                                ?.filter((item) => item !== "")
                                                .join(",")}
                                            >
                                              {item?.formatted_address
                                                ?.filter((item) => item !== "")
                                                .join(",")}
                                            </option>
                                          );
                                        })}
                                      </select>

                                      {/* {errors.address && (
                                              <span>{errors.address}</span>
                                         )} */}
                                    </li>
                                  </>
                                )}

                                {isData === 2 && (
                                  <>
                                    <li>
                                      <input
                                        className="form-control mb-2"
                                        placeholder="First Line of Address"
                                        name="first_line_address"
                                        onChange={handleChange}
                                        value={values.first_line_address}
                                      />
                                      {errors.first_line_address && (
                                        <span className="error_valid">
                                          {errors.first_line_address}
                                        </span>
                                      )}
                                      <input
                                        className="form-control mb-2"
                                        placeholder="Second Line (Optional)"
                                        name="second_line_address"
                                        onChange={handleChange}
                                        value={values.second_line_address}
                                      />

                                      <input
                                        className="form-control"
                                        placeholder="Town or City"
                                        name="city"
                                        onChange={handleChange}
                                        value={values.city}
                                      />
                                      {errors.city && (
                                        <span className="error_valid">
                                          {errors.city}
                                        </span>
                                      )}

                                      <input
                                        className="form-control"
                                        placeholder="Zip or Post Code"
                                        name="zip_code"
                                        onChange={handleChange}
                                        value={values.zip_code}
                                      />
                                      {errors.zip_code && (
                                        <span className="error_valid">
                                          {errors.zip_code}
                                        </span>
                                      )}
                                    </li>
                                  </>
                                )}
                              </ul>

                              <div className="submit-btn">
                                <button type="submit" className="lg-btn">
                                  Next
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
            </div>
          </div>
        </div>
      </section>
      {/* Signup flow End */}
    </div>
  );
};
export default SignUp2;
