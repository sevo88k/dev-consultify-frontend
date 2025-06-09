import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changePass } from "../Redux/Actions/user/salon";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";

const PasswordSecurity = () => {
  const dispatch = useDispatch();
  const [validateValue, setValidateValue] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.new_password) {
      errors.new_password = "Required";
    } else if (values.new_password != values.confirm_password) {
      errors.confirm_password = "Password Doesn't match";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validate,
    validateOnChange: validateValue,
    onSubmit: (values) => {
      setValidateValue(true);
      dispatch(
        changePass({
          password: values?.confirm_password,
          old_password: values?.old_password,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          formik.resetForm();
          toast.success(data?.payload?.message);
        } else {
          toast.error(data?.payload?.message);
        }
      });
    },
  });

  return (
    <MyAcoountLayout DidYouKnow={true}>
      <div className="col-lg-8 mx-auto">
        <div className="setting-titles"> <h1>Account Security</h1></div> 
        <div className="account_form pass_security">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h2>Update Password</h2>
              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="password"
                    name="old_password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.old_password}
                    placeholder="Old Password *"
                  />
                  {formik.errors.old_password && (
                    <div className="error_valid">
                      {formik.errors.old_password}
                    </div>
                  )}
                </div>
                <div className="col-lg-12">
                  <input
                    type="password"
                    name="new_password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.new_password}
                    placeholder="New Password *"
                  />
                  {formik.errors.new_password && (
                    <div className="error_valid">
                      {formik.errors.new_password}
                    </div>
                  )}
                </div>
                <div className="col-lg-12">
                  <input
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                    placeholder="Re-Enter New Password *"
                  />
                  {formik.errors.confirm_password && (
                    <div className="error_valid">
                      {formik.errors.confirm_password}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" class="btn mb-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </MyAcoountLayout>
  );
};
export default PasswordSecurity;
