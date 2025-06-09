import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import useGetAddressIO from "../Hooks/getAddressIo";
import { getProfileById, updateProfile } from "../Redux/Actions/user/salon";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import Select from "react-select";

const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addressData, getAddress } = useGetAddressIO();
  const [profileImage, setProfileImage] = useState("");
  const [preview, setPreview] = useState("");
  const [postcode, setPostcode] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const userProfile = useSelector((state) => state?.myaccount?.userInfo);
  const [isData, setIsData] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);


  const handleImageUpload = (e, setFieldValue) => {
    if (e.target.files[0]) {
      setFieldValue("salon_profile", e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      getAddress(postcode);
    }
  };

  useEffect(() => {
    dispatch(getProfileById()).then((data) => {
      if (data?.payload?.data?.postcode) {
        getAddress(data?.payload?.data?.postcode);
      }
    });
  }, []);

  const [selectedValue, setSelectedValue] = useState("4");

  const handleChange2 = (e) => {
    setSelectedValue(e.target.value);
  };

  const [selectedValue2, setSelectedValue2] = useState("3");

  const handleChange3 = (e) => {
    setSelectedValue2(e.target.value);
  };

  const [selectedValue3, setSelectedValue3] = useState("3");

  const handleChange4 = (e) => {
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

  useEffect(() => {
    if (userProfile && userProfile?.otherCountries) {
      if (userProfile.otherCountries === "United Kingdom") {
        setIsData(1);
      } else {
        setIsData(2);
      }
    }
  }, [userProfile]);

  const handleCountryChange = (selectedOption, setFieldValue) => {
    setSelectedCountry(selectedOption);
    setIsData(selectedOption?.label === "United Kingdom" ? 1 : 2);
    setFieldValue("otherCountries", selectedOption?.label || "");
  };


  useEffect(() => {
    if (userProfile && userProfile?.pin_code) {
      getAddress(userProfile?.pin_code);
    }
  }, [userProfile]);

  return (
    <MyAcoountLayout>
       <div className="setting-titles"> <h1>Salon Details</h1></div> 
      <div className="account_form">
        <Formik
          enableReinitialize={true}
          initialValues={{
            salonname: userProfile?.salonname || "",
            postcode: userProfile?.postcode || "",
            address: userProfile?.address || "",
            description: userProfile?.description || "",
            website_url: userProfile?.website_url || "",
            description: userProfile?.description || "",
            contact_no: userProfile?.contact_no || "",
            parking: userProfile?.parking || "",
            child_availability: userProfile?.child_availability || "",
            amenities: userProfile?.amenities || "",
            salon_profile: userProfile?.salon_profile || "",
            gender: userProfile?.gender || "0",
            self_describe: userProfile?.self_describe || "",
            personal_address1: address1 || "",
            personal_address2: address2 || "",
            personal_city: city || "",
            park_availability_notes: userProfile?.park_availability_notes || "",
            otherCountries: userProfile?.otherCountries || "",
            first_line_address: userProfile?.first_line_address || "",
            second_line_address: userProfile?.second_line_address || "",
            city: userProfile?.city || "",
            zip_code: userProfile?.zip_code || ""
          }}
          //validateOnChange={false}
          onSubmit={(values, { setSubmitting, resetForm }) => {

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
              <h2>Salon Profile</h2>
              <p>Update your Salon Details for your clients to view. </p>
              <div className="row">
                <div className="col-lg-4">
                  <label>Salon Name</label>
                  <input
                    className="form-control"
                    placeholder="Salon Name"
                    name="salonname"
                    onChange={handleChange}
                    value={values.salonname}
                  />
                  {errors.salonname && (
                    <span className="error_valid">{errors.salonname}</span>
                  )}
                </div>
                <div className="col-lg-8 col-12">
                  <div className="logo_upload">
                    <img
                      src={
                        preview
                          ? preview
                          : values?.salon_profile
                          ? process.env.REACT_APP_HOST_NAME +
                            values?.salon_profile
                          : require("../assets/img/greyrectangle.png")
                      }
                      alt=""
                    />
                    <p>Upload a Logo</p>
                    <input
                      id="input-file"
                      type="file"
                      className="form-control box_shadow_new"
                      onChange={(e) => handleImageUpload(e, setFieldValue)}
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <label>Public Bio</label>
                  <input
                    type="text"
                    className="form-control width_set"
                    id="exampleFormControlInput1"
                    placeholder="Salon Description"
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                  />
                  {errors.description && (
                    <span className="error_valid">{errors.description}</span>
                  )}
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <label>Choose Country</label>
                    <Select
                      className=""
                      name="otherCountries"
                      onChange={(e) => handleCountryChange(e, setFieldValue)}
                      value={
                        selectedCountry ||
                        options.find((e) => e.label === values.otherCountries)
                      }
                      options={options}
                    />
                  </div>
                </div>

                {isData === 1 && (
                  <>
                    <div className="col lg-6">
                      <div className="row">
                        <div className="col-lg-6">
                          <label>Post Code Search</label>
                          <input
                            className="form-control"
                            placeholder="Post Code"
                            name="postcode"
                            onChange={(e) => {
                              setPostcode(e.target.value);
                              handleChange(e);
                            }}
                            value={values.postcode}
                          />
                          {errors.postcode && (
                            <span className="error_valid">
                              {errors.postcode}
                            </span>
                          )}
                        </div>
                        <div className="col-lg-6 d-flex align-items-end">
                          <button
                            type="button"
                            className="w-100"
                            // onKeyPress={handleKeyEnter}
                            onClick={() => {
                              getAddress(postcode);
                            }}
                          >
                            Search
                          </button>
                        </div>
                        <div className="col-lg-12">
                          <select
                            name="address"
                            className={`form-control ${
                              values.address == 3 ? "dif-color" : "other-color"
                            }`}
                            value={values.address}
                            onChange={(e) => {
                              handleChange4(e);
                              handleChange(e);
                              const data = addressData?.addresses?.find(
                                (element) =>
                                  element?.formatted_address === e.target.value
                              );
                              setFieldValue("address", e.target.value);
                              setAddress1(data?.line_1);
                              setAddress2(data?.line_2);
                              setCity(data?.town_or_city);
                            }}
                          >
                            <option
                              value="3"
                              className={
                                selectedValue3 == "3"
                                  ? "dif-color"
                                  : "other-color"
                              }
                            >
                              Confirm Address{" "}
                            </option>
                            {addressData?.addresses?.map((item, index) => (
                              <option
                                key={index}
                                value={item?.formatted_address}
                                className="other-color"
                              >
                                {item?.formatted_address
                                  ?.filter((item) => item !== "")
                                  .join(",")}
                              </option>
                            ))}
                          </select>
                          {errors.address && <span>{errors.address}</span>}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {isData === 2 && (
                  <>
                     <div className="col lg-6 mt-4">
                      <input
                        className="form-control mb-2"
                        placeholder="First Line of Address"
                        name="first_line_address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={values.first_line_address}
                      />

                      <input
                        className="form-control mb-2"
                        placeholder="Second Line (Optional)"
                        name="second_line_address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={values.second_line_address}
                      />

                      <input
                        className="form-control mb-2"
                        placeholder="Town or City"
                        name="city"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={values.city}
                      />

                      <input
                        className="form-control "
                        placeholder="Zip or Post Code"
                        name="zip_code"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={values.zip_code}
                      />
                    </div>
                  </>
                )}

                <div className="col-lg-6">
                  <label>Website URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website URL"
                    onChange={handleChange}
                    value={values.website_url}
                    name="website_url"
                  />
                  {errors.website_url && (
                    <span className="error_valid">{errors.website_url}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact Number"
                    onChange={handleChange}
                    value={values.contact_no}
                    name="contact_no"
                  />
                  {errors.contact_no && (
                    <span className="error_valid">{errors.contact_no}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <label>Parking Availability</label>
                  <select
                    className={`form-control ${
                      values.parking == "4" ? "dif-color" : "other-color"
                    }`}
                    aria-label="Default select example"
                    onChange={(e) => {
                      handleChange(e);
                      handleChange2(e);
                    }}
                    value={Number(values.parking)}
                    name="parking"
                  >
                    <option
                      value="4"
                      className={
                        selectedValue == "4" ? "dif-color" : "other-color"
                      }
                    >
                      Parking Availability
                    </option>
                    <option value="1" className="other-color">
                      {" "}
                      No Parking Available
                    </option>
                    <option value="2" className="other-color">
                      Free Parking Available
                    </option>
                    <option value="3" className="other-color">
                      Paid Parking
                    </option>
                  </select>
                  {errors.parking && (
                    <span className="error_valid">{errors.parking}</span>
                  )}
                </div>
                <div className="col-lg-12">
                  <label>Parking Availability Notes</label>
                  <textarea
                    name="park_availability_notes"
                    value={values.park_availability_notes}
                    rows={3}
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6">
                  <label>Child Friendliness</label>
                  <select
                    className={`form-control ${
                      values.child_availability === "3"
                        ? "dif-color"
                        : "other-color"
                    }`}
                    aria-label="Default select example"
                    onChange={(e) => {
                      handleChange(e);
                      handleChange3(e);
                    }}
                    value={values.child_availability}
                    name="child_availability"
                  >
                    <option
                      value="3"
                      className={
                        selectedValue2 == "3" ? "dif-color" : "other-color"
                      }
                    >
                      Child Friendly
                    </option>
                    <option value="1" className="other-color">
                      Yes
                    </option>
                    <option value="2" className="other-color">
                      No
                    </option>
                  </select>
                  {errors.child_availability && (
                    <span className="error_valid">
                      {errors.child_availability}
                    </span>
                  )}
                </div>
                {/* <div className="col-lg-6">
                  <label>Gender</label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="gender"
                    value={values?.gender}
                    onChange={handleChange}
                  >
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                    <option value="2">Non Binary</option>
                    <option value="3">Others </option>
                    <option value="4">Prefer not to say </option>
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
                )} */}
                <div className="col-lg-12 ">
                  <label> Amenities</label>
                  <textarea
                    rows={3}
                    className="form-control width_set"
                    id="exampleFormControlInput1"
                    placeholder="Any Other Amenities? (Optional)"
                    name="amenities"
                    onChange={handleChange}
                    value={values.amenities}
                  />
                  {errors.amenities && (
                    <span className="error_valid">{errors.amenities}</span>
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
    </MyAcoountLayout>
  );
};

export default MyAccount;
