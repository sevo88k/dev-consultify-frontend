import admin_logo_login from "../../../../assets/images/logo-light.svg";
import { useFormik } from "formik";

export default function AdminForgotPassword() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="bg-grey-admin">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-page-content p-md-10 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="my-auto">
                      <div className="mt-4">
                        <div className="titl_text mb-5">
                          <h1 className="blue-heading-admin">
                            Forgot Password
                          </h1>
                          <p className="g-color fw-regular">Enter your email</p>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label ">
                              Email<span className="blue_text">*</span>
                            </label>
                            <input
                              name="email"
                              onChange={formik.handleChange}
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="mail@simmmple.com"
                              value={formik.values.email}
                            />
                          </div>
                          <div className="mt-4 d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary-admin"
                            >
                              Submit
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
}
