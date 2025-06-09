import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import admin_logo_login from "../../../../assets/images/logo-light.svg";
import { useParams } from "react-router-dom";
import { verifyOtp } from "../../../../Redux/Actions/admin/auth";

const VerifyOtp = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const validate = (values) => {
    const errors = {};
    if (!values.otp) {
      errors.otp = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        dispatch(verifyOtp({ ...values, id }));
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <div className="bg-grey-admin">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-page-content p-md-4 p-4 h-100">
                <div className="w-100 h-100">
                  <div className="d-flex flex-column h-100">
                    <div className="my-auto mx-width">
                      <div className="mt-4">
                        <div className="titl_text mb-5">
                          <h1 className="blue-heading-admin">Verify OTP</h1>
                          <p className="g-color fw-regular">
                            Enter your OTP to Log in!
                          </p>
                        </div>
                        <form
                          className="login-from-p"
                          onSubmit={formik.handleSubmit}
                        >
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label ">
                              OTP<span className="blue_text">*</span>
                            </label>
                            <input
                              name="otp"
                              onChange={formik.handleChange}
                              type="number"
                              className="form-control"
                              id="username"
                              placeholder="OTP"
                              value={formik.values.otp}
                            />
                            {formik.errors.otp ? (
                              <p style={{ color: "red" }}>
                                {formik.errors.otp}*
                              </p>
                            ) : null}
                          </div>

                          <div className="mt-4 d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary-admin"
                            >
                              Verify
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-bg bg-black pt-lg-5 p-4">
                <div className="bg-overlay">
                  <div className="new_logo">
                    <img src={admin_logo_login} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container-fluid --> */}
      </div>
    </div>
  );
};

export default VerifyOtp;
