import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { getProfileById, updateProfile } from "../Redux/Actions/user/salon";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { toast } from "react-hot-toast";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";

const MyDetails = () => {
  const dispatch = useDispatch();
  const [validateValue, setValidateValue] = useState(false);

  const userProfile = useSelector((state) => state?.myaccount?.userInfo);

  useEffect(() => {
    dispatch(getProfileById());
  }, []);

  const [selectedValue, setSelectedValue] = useState({
    gender: userProfile?.gender || "6"
  });


  const handleChange2 = (e) => {
    setSelectedValue({ gender: e.target.value });
  };

  const [selectedValue2, setSelectedValue2] = useState("");

  const handleChange3 = (e) => {
    setSelectedValue2(e.target.value);
  };

  console.log(userProfile, "userProfile")

  return (
    <MyAcoountLayout DidYouKnow={true}>
      <div className="col-lg-8 mx-auto">
        <div className="setting-titles"> <h1>My Details</h1></div>

        <div className="account_form">
          <Formik
            enableReinitialize={true}
            initialValues={{
              salonname: userProfile?.salonname || "",
              firstname: userProfile?.firstname || "",
              lastname: userProfile?.lastname || "",
              email: userProfile?.email || "",
              gender: userProfile?.gender ?? "",
              self_describe: userProfile?.self_describe || "",
              personal_phone: userProfile?.personal_phone || "",
              personal_address1: userProfile?.personal_address1 || userProfile?.address || "",
              personal_address2: userProfile?.personal_address2 || "",
              personal_city: userProfile?.personal_city || "",
              postcode: userProfile?.postcode || "",
              pronouns: userProfile?.pronouns || "",
            }}
            validate={(values) => {
              const errors = {};

              if (!values.firstname) {
                errors.firstname = "Required*";
              }
              if (!values.lastname) {
                errors.lastname = "Required*";
              }

              if (!values.email) {
                errors.email = "Required*";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.personal_phone) {
                errors.personal_phone = "Required*";
              }

              return errors;
            }}
            validateOnChange={validateValue}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setValidateValue(true);
              const formData = new FormData();

              for (const key in values) {
                formData.append(key, values[key]);
              }

              dispatch(updateProfile(formData)).then((data) => {
                if (data?.payload?.success) {
                  resetForm();
                  toast.success(data?.payload?.message);
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
              <form onSubmit={handleSubmit}>
                {/* <h2>My Details</h2> */}
                <div className="row">
                  <div className="col-lg-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      placeholder="First Name *"
                      name="firstname"
                      onChange={handleChange}
                      value={values.firstname}
                    />
                    {errors.firstname && <span>{errors.firstname}</span>}
                  </div>
                  <div className="col-lg-6">
                    <label>Surname</label>
                    <input
                      className="form-control"
                      placeholder="Surname *"
                      name="lastname"
                      onChange={handleChange}
                      value={values.lastname}
                    />
                    {errors.lastname && <span>{errors.lastname}</span>}
                  </div>
                  <div className="col-lg-6">
                    <label>Gender</label>

                    <select
                      className={`form-control ${Number(values.gender) === 0 || Number(values.gender) === Number(selectedValue.gender)
                          ? "dif-color"
                          : "other-color"
                        }`}
                      name="gender"
                      value={values.gender}
                      onChange={(e) => {
                        console.log("Selected Gender:", e.target.value); // Debugging
                        handleChange(e);
                        handleChange2(e);
                      }}
                    >
                      <option value={6} className={values.gender === 6 ? "other-color" : "dif-color"}>
                        Please Select
                      </option>
                      <option value={0} className={values.gender === 0 ? "dif-color" : "other-color"}>
                        Male
                      </option>
                      <option value={1} className={values.gender === 1 ? "dif-color" : "other-color"}>
                        Female
                      </option>
                      <option value={2} className={values.gender === 2 ? "dif-color" : "other-color"}>
                        Non Binary
                      </option>
                      <option value={3} className={values.gender === 3 ? "dif-color" : "other-color"}>
                        Others
                      </option>
                      <option value={4} className={values.gender === 4 ? "dif-color" : "other-color"}>
                        Prefer not to say
                      </option>
                    </select>

                    {errors?.gender && (
                      <span className="error">{errors?.gender}</span>
                    )}
                  </div>

                  {values?.gender == 3 && (
                    <div className="col-lg-6">
                      <label>Self-Describe </label>
                      <input
                        className="form-control"
                        placeholder=""
                        name="self_describe"
                        value={values?.self_describe}
                        onChange={handleChange}
                      />
                      {errors.self_describe && (
                        <span className="error">{errors.self_describe}</span>
                      )}
                    </div>
                  )}

                  <div className="col-lg-6">
                    <label>Salon Name</label>
                    <input
                      className="form-control"
                      placeholder="Salon Name"
                      name="salonname"
                      onChange={handleChange}
                      value={values.salonname}
                    />
                    {errors.salonname && <span>{errors.salonname}</span>}
                  </div>
                  <div className="col-lg-6">
                    <label>Email</label>
                    <input
                      className="form-control"
                      placeholder="Email *"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      disabled={true}
                    />
                    {errors.email && <span>{errors.email}</span>}
                  </div>
                  <div className="col-lg-6">
                    <label>Pronouns</label>
                    <select
                      class="form-select"
                      className={`form-control ${values.pronouns === "" ? "dif-color" : "other-color"
                        }`}
                      aria-label="Default select example"
                      name="pronouns"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange3(e);
                      }}
                      value={values.pronouns}
                    >
                      <option selected value="" className={selectedValue2 === "2" ? "dif-color" : "other-color"}>
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
                  </div>
                  <div className="col-lg-12">
                    <label>Phone</label>
                    <input
                      className="form-control"
                      placeholder="Phone Number *"
                      name="personal_phone"
                      onChange={handleChange}
                      value={values.personal_phone}
                    />
                    {errors.personal_phone && (
                      <span className="text-danger">{errors.personal_phone}</span>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label>First Line of Address</label>
                    <input
                      className="form-control"
                      placeholder="First Line of Address"
                      name="personal_address1"
                      onChange={handleChange}
                      value={values.personal_address1}
                    />
                    {errors.personal_address1 && (
                      <span>{errors.personal_address1}</span>
                    )}
                  </div>

                  <div className="col-lg-6">
                    <label>Second Line of Address</label>
                    <input
                      className="form-control"
                      placeholder="Second Line of Address"
                      name="personal_address2"
                      onChange={handleChange}
                      value={values.personal_address2}
                    />
                    {errors.personal_address2 && (
                      <span>{errors.personal_address2}</span>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label>Town / City</label>
                    <input
                      className="form-control"
                      placeholder="City"
                      name="personal_city"
                      onChange={handleChange}
                      value={values.personal_city}
                    />
                    {errors.personal_city && (
                      <span>{errors.personal_city}</span>
                    )}
                  </div>

                  <div className="col-lg-6">
                    <label>Post Code</label>
                    <input
                      className="form-control"
                      placeholder="Post Code"
                      name="postcode"
                      onChange={handleChange}
                      value={values.postcode}
                    />
                    {errors.postcode && <span>{errors.postcode}</span>}
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
    </MyAcoountLayout>
  );
};
export default MyDetails;
