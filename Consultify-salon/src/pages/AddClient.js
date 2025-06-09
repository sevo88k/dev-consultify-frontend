import React, { useEffect, useState } from "react";
import { getProfileById, updateProfile } from "../Redux/Actions/user/salon";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { toast } from "react-hot-toast";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";



const AddClients = () => {
    const dispatch = useDispatch()
    const [validateValue, setValidateValue] = useState(false);

    const userProfile = useSelector((state) => state?.myaccount?.userInfo);

    useEffect(() => {
        dispatch(getProfileById())
    }, [])

    return (
        <MyAcoountLayout DidYouKnow={true}>
            <div className="col-lg-7">
                <div className="account_form">
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            email: "",
                            firstname: "",
                            lastname: "",
                            address1: "",
                            address2: "",
                            city: "",
                            postcode: "",
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
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
                            }
                            return errors;
                        }}
                        validateOnChange={validateValue}
                        onSubmit={(values, { setSubmitting, resetForm }) => {

                            setValidateValue(true)
                            const formData = new FormData();

                            for (const key in values) {
                                formData.append(key, values[key]);
                            }

                            dispatch(updateProfile(formData)).then((data) => {
                                if (data?.payload?.success) {
                                    resetForm();
                                    toast.success(data?.payload?.message)
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
                            setFieldValue
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h2>My Details</h2>
                                <div className="row">
                                    <div className="col-lg-6">

                                        <input
                                            className="form-control"
                                            placeholder="First Name *"
                                            name="firstname"
                                            onChange={handleChange}
                                            value={values.firstname}
                                        />
                                        {errors.firstname && (
                                            <span>{errors.firstname}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            className="form-control"
                                            placeholder="Surname *"
                                            name="lastname"
                                            onChange={handleChange}
                                            value={values.lastname}
                                        />
                                        {errors.lastname && (
                                            <span>{errors.lastname}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            className="form-control"
                                            placeholder="Salon Name"
                                            name="salonname"
                                            onChange={handleChange}
                                            value={values.salonname}
                                        />
                                        {errors.salonname && (
                                            <span>{errors.salonname}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            className="form-control"
                                            placeholder="Email *"
                                            name="personal_email"
                                            onChange={handleChange}
                                            value={values.personal_email}
                                        />
                                        {errors.personal_email && (
                                            <span>{errors.personal_email}</span>
                                        )}
                                    </div>

                                    <div className="col-lg-12">
                                        <input
                                            className="form-control"
                                            placeholder="Phone Number *"
                                            name="personal_phone"
                                            onChange={handleChange}
                                            value={values.personal_phone}
                                        />
                                        {errors.personal_phone && (
                                            <span>{errors.personal_phone}</span>
                                        )}
                                    </div>
                                    <div className="col-lg-6">
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
                                        <input
                                            className="form-control"
                                            placeholder="Post Code"
                                            name="personal_postcode"
                                            onChange={handleChange}
                                            value={values.personal_postcode}
                                        />
                                        {errors.personal_postcode && (
                                            <span>{errors.personal_postcode}</span>
                                        )}
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit" class="btn mb-3">Update</button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </MyAcoountLayout>
    )
}
export default AddClients;