import { Formik } from "formik";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { registerStaff } from "../../Redux/Actions/user/salon";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

function MyVerticallyCenteredModal(props) {
  const [validateValue, setValidateValue] = useState(false);
  const dispatch = useDispatch();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton>
        <div className="client_consulation">
          <div className="container">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.fullname) {
                  errors.fullname = "Required*";
                }
                if (!values.email) {
                  errors.email = "Required*";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                return errors;
              }}
              validateOnChange={validateValue}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setValidateValue(true);
                dispatch(registerStaff(values)).then((data) => {
                  if (data?.payload?.success) {
                    resetForm();
                    toast.success(data?.payload?.message);
                  } else {
                    toast.error(data?.payload?.message);
                  }
                  props.setModalShow(false);
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
                  <h2>Create New Staff Member</h2>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          placeholder="Staff Member Name"
                          onChange={handleChange}
                          value={values.fullname}
                        />
                        {errors.fullname && (
                          <span className="error_valid">{errors.fullname}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Staff Member Email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      {errors.email && (
                        <span className="error_valid">{errors.email}</span>
                      )}
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-6">
                        <div className="cancel-btn">
                          <button
                            type="button"
                            onClick={() => props.setModalShow(false)}
                            class="btn mb-3"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="submit-btn">
                          <button type="submit" class="btn mb-3">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function AddMembersModal({ setModalShow, modalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}
