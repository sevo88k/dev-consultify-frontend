import { Formik } from "formik";
import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../Redux/Actions/user/salon";
import toast from "react-hot-toast";

export default function AppointmentModal(props) {
  const dispatch = useDispatch();
  const [validateValue, setValidateValue] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="client_consulation">
          <div className="container">
            <Formik
              enableReinitialize={true}
              initialValues={{
                salonId: localStorage.getItem("userId"),
                // appointment_type: "",
                clientId: props?.clientId || "",
                description: "",
                date: props.date || "",
                time: "",
                invoice_amount: "",
                tax_amount: "",
              }}
              validate={(values) => {
                const errors = {};

                // if (!values.appointment_type) {
                //   errors.appointment_type = "Required";
                // }
                if (!values.clientId) {
                  errors.clientId = "Required";
                }
                if (!values.description) {
                  errors.description = "Required";
                }
                if (!values.date) {
                  errors.date = "Required";
                }
                if (!values.time) {
                  errors.time = "Required";
                }

                return errors;
              }}
              validateOnChange={validateValue}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setValidateValue(true);
                dispatch(createAppointment(values)).then((data) => {
                  if (data?.payload?.success) {
                    toast.success(data?.payload?.message);
                    props.onHide();
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
                  <h2>New Appointment</h2>
                  <div className="row">
           
                    <div className="col-lg-12 mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="clientId"
                        onChange={handleChange}
                        value={values.clientId}
                      >
                        <option selected>Select Client</option>
                        {props.salonClients?.map((item) => {
                          return (
                            <>
                              <option value={item?._id}>
                                {item?.first_name + " " + item?.last_name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      {errors.clientId && (
                        <span className="error_valid">{errors.clientId}</span>
                      )}
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        placeholder="Give your Appointment a Description"
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                      />
                      {errors.description && (
                        <span className="error_valid">
                          {errors.description}
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6 mt-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date: dd/mm/yyyy"
                        name="date"
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        value={values.date}
                      />
                      {errors.date && (
                        <span className="error_valid">{errors.date}</span>
                      )}
                    </div>
                    <div className="col-lg-6 mt-3">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Time: --:--"
                        name="time"
                        onChange={handleChange}
                        value={values.time}
                      />
                      {errors.time && (
                        <span className="error_valid">{errors.time}</span>
                      )}
                    </div>
                    {/* <div className="col-lg-6">
                                            <input 
                                            className="form-control" 
                                            placeholder="£ Invoice Amount (Optional)" 
                                            name="invoice_amount"
                                            onChange={handleChange}
                                            value={values.invoice_amount}
                                            />
                                             {errors.invoice_amount && (
                                                <span className="error_valid">{errors.invoice_amount}</span>
                                            )}
                                        </div> */}
                    {/* <div className="col-lg-6">
                      <input
                        className="form-control"
                        placeholder="% Tax Amount (Optional)"
                        name="tax_amount"
                        onChange={handleChange}
                        value={values.tax_amount}
                      />
                      {errors.tax_amount && (
                        <span className="error_valid">{errors.tax_amount}</span>
                      )}
                    </div> */}
                    <Row className="mt-4">
                      <Col
                        lg={6}
                        sm={6}
                        xs={6}
                        className="d-flex justify-content-end"
                      >
                        <div className="submit-btn schedule">
                          <button type="submit" class="btn mb-3 w-100">
                            Schedule Appointment
                          </button>
                        </div>
                      </Col>
                      <Col
                        lg={6}
                        sm={6}
                        xs={6}
                        className="d-flex justify-content-start"
                      >
                        <div
                          onClick={() => props.onHide()}
                          className="cancel-btn"
                        >
                          <button type="submit" class="btn mb-3">
                            Cancel
                          </button>
                        </div>
                      </Col>
                    </Row>
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
