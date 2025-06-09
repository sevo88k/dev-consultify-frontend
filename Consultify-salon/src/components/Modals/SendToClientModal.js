import { Formik } from "formik";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  createConsultationForm,
  fetchAllCustomers,
  getpostcarelistAction,
  registerStaff,
  salonfetchClientsAction,
} from "../../Redux/Actions/user/salon";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Encryptedid } from "../../utils/BcruptEncyptid";
import Select from "react-select";
import { Col, Row } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const allCustomers = useSelector((state) => state.myaccount.salonClients);
  const preCareList = useSelector((state) => state?.myaccount?.preCareListAsPerConsultation);

  const [validateValue, setValidateValue] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCustomers());
    dispatch(salonfetchClientsAction());
    dispatch(getpostcarelistAction({ search: "" }));
  }, []);

  const options = allCustomers?.map((item) => {
    return {
      label: item?.first_name + " " + item?.last_name,
      value: item?._id,
    };
  });

  const handleSelectChange = (data, setFieldValue) => {
    setFieldValue("customerId", data?.value);
  };
  const handleSelectChangeprecare = (selectedOptions, setFieldValue) => {
    // setFieldValue("postcare_id", data?.value._id);
    if (!selectedOptions) {
      setFieldValue('postcare_id', []);
      return;
    }
  
    const selectedValues = selectedOptions?.map(option => option.value);
    setFieldValue('postcare_id', selectedValues);
  };

  const consultationform = useSelector(
    (state) => state.myaccount.consultationlists
  );
  let postcarelistDatadata = useSelector(
    (state) => state?.myaccount?.postcarelist
  );


  const options2 = postcarelistDatadata?.map((item) => {
    return {
      label: item?.treatmentname,
      value: item?._id,
    };
  });

  // const createOptions = () => {
  //   return consultationform?.data?.flatMap((item) =>
  //     item.pre_care_setarray
  //       .filter((preCareItem) =>
  //         postcarelistDatadata?.some(
  //           (consultItem) => consultItem._id === preCareItem.pre_care_id._id
  //         )
  //       )
  //       .map((filteredItem) => ({
  //         label: filteredItem.pre_care_id.treatmentname,
  //         value: filteredItem.pre_care_id,
  //       }))
  //   );
  // };

  // const options3 = createOptions();

  // const initialSelectedValues = options2?.filter((option) =>
  //   postcarelistDatadata?.some(
  //     (item) => item._id === option.value._id // Check if the option value (which is pre_care_id._id) matches consultationform _id
  //   )
  // );

  // const handleSelectChangeprecare = (selectedOptions, setFieldValue) => {
  //   const values = selectedOptions ? selectedOptions?.map(option => option.value) : [];
  //   setFieldValue("postcare_id", values);
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="client-consult"
    >
      <Modal.Body closeButton>
        <div className="client_consulation">
          <div className="container">
            <Formik
            enableReinitialize={true} 
              initialValues={{
                customerId: "",
                postcare_id: preCareList ? preCareList?.map((item) => item?._id) : [],
                msg_for_client: "",
                invoice_amount: "",
                tax_amount: "",
                requiredoption: "",
                days: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.customerId) {
                  errors.customerId = "Required*";
                }

                // if (props.modalType != "start") {
                //     if (!values.invoice_amount) {
                //         errors.invoice_amount = "Required*";
                //     }
                //     if (!values.tax_amount) {
                //         errors.tax_amount = "Required*";
                //     }
                // }

                return errors;
              }}
              validateOnChange={validateValue}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values, props, "valuse");
                setValidateValue(true);
                if (props.modalType == "start") {
                  navigate(
                    `/consultation_form/${Encryptedid(
                      props.cunsultationId
                    )}/${Encryptedid(values?.customerId)}/` + props.path
                  );
                } else {
                  const currentDate = new Date();
                  const futureDate = new Date(currentDate);
                  futureDate.setDate(currentDate.getDate() + Number(values?.days));
            
                  const consultationDateISO = futureDate.toISOString();
                  dispatch(
                    createConsultationForm({
                      salonId: localStorage.getItem("userId"),
                      customerId: values?.customerId,
                      postcare_id:
                      values?.postcare_id == "" ? null : values?.postcare_id,
                      msg_for_client: values?.msg_for_client,
                      requiredoption: values?.requiredoption,
                      days: Number(values?.days),
                      consultationDate: consultationDateISO ,
                      consultationId: props.cunsultationId,
                      formCompletedBy: "customer",
                    })
                  ).then((data) => {
                    if (data?.payload?.success) {
                      resetForm();
                      toast.success(
                        "Consultation sent to client successfully."
                      );
                      navigate("/" + props.path);
                    }
                  });
                }
                setSubmitting(false);
                props.setModalShow(false);
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
                  <h2 className="mb-0">
                    {props.modalType == "start"
                      ? "Prepare consultation for customer"
                      : "Send Consultation to Client"}
                  </h2>
                  <p className="mb-3">
                    Send your consultation for your client to complete
                    themselves.
                  </p>
                  <div className="row">
                    {props.modalType == "start" ? (
                      <>
                        <div className="col-lg-12">
                          <div className="col-lg-12">
                            <Select
                              name="customerId"
                              options={options}
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) =>
                                handleSelectChange(e, setFieldValue)
                              }
                            />

                            {errors.customerId && (
                              <span className="error_valid">
                                {errors.customerId}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-6 col-6">
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
                          <div className="col-lg-6 col-6">
                            <div className="submit-btn">
                              <button type="submit" class="btn mb-3">
                                Start
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (

                      <>
                      {  console.log(preCareList, "preCareList")}
                        <div className="col-lg-12">
                          <div className="col-lg-12">
                            <label>Select client</label>
                            <Select
                              name="customerId"
                              options={options}
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) =>
                                handleSelectChange(e, setFieldValue)
                              }
                            />

                            {errors.customerId && (
                              <span className="error_valid">
                                {errors.customerId}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Add Pre-care / Aftercare Advice (Optional)
                          </label>
                          <p>
                            You can opt to attach Treatment Advice to the email
                            we send to the client{" "}
                          </p>

                          <Select
                            name="postcare_id"
                            options={options2}
                            isMulti={true}
                            class="form-select"
                            aria-label="Default select example"
                            onChange={(e) =>
                              handleSelectChangeprecare(e, setFieldValue)
                            }
                            value={options2?.filter(option => values.postcare_id.includes(option.value))}
                          />
                        </div>
                        <div className="col-lg-12">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Leave a note (optional)
                          </label>
                          <textarea
                            name="msg_for_client"
                            type="text"
                            rows={3}
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Type here.. "
                            onChange={handleChange}
                            value={values.msg_for_client}
                          />
                          {errors.msg_for_client && (
                            <span className="error_valid">
                              {errors.msg_for_client}
                            </span>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <label>Required by (Optional)</label>
                          <select
                            style={{ appearance: "auto" }}
                            class="form-select mb-3"
                            aria-label="Default select example"
                            name="requiredoption"
                            onChange={handleChange}
                          >
                            <option selected>No option</option>
                            <option value="1">
                              {values.days == ""
                                ? "Complete within [x] days from sending"
                                : `Complete within ${values.days} days from sending`}
                            </option>
                            <option value="2">
                              {values.days == ""
                                ? "Complete [x] days before appointment"
                                : `  Complete ${values.days} days before appointment`}
                            </option>
                          </select>
                          <input
                            name="days"
                            type="number"
                            className="form-control "
                            placeholder="No. of days"
                            onChange={handleChange}
                            value={values.days}
                          />
                          {/* {errors.days && (
                              <span className="error_valid">
                                {errors.days}
                              </span>
                            )} */}
                        </div>
                        {/* <div className="col-lg-12">

                                                        <input
                                                            name="invoice_amount"
                                                            type="number"
                                                            className="form-control wset"
                                                            placeholder="£ Invoice Amount (Optional)"
                                                            onChange={handleChange}
                                                            value={values.invoice_amount}
                                                        />
                                                        {errors.invoice_amount && (
                                                            <span className="error_valid">{errors.invoice_amount}</span>
                                                        )}
                                                    </div> */}

                        {/* <div className="col-lg-12">
                          <input
                            name="tax_amount"
                            className="form-control wset"
                            placeholder="% Tax Amount (Optional)"
                            onChange={handleChange}
                            value={values.tax_amount}
                          />
                          {errors.tax_amount && (
                            <span className="error_valid">
                              {errors.tax_amount}
                            </span>
                          )}
                        </div> */}
                        <div className="col-lg-12">
                          <Row>
                            <Col lg={6} xs={6}>
                              <div className="cancel-btn">
                                <button
                                  type="button"
                                  onClick={() => props.setModalShow(false)}
                                  class="btn mb-3"
                                >
                                  Cancel
                                </button>
                              </div>
                            </Col>
                            <Col lg={6} xs={6}>
                              <div className="submit-btn">
                                <button type="submit" class="btn mb-3">
                                  Send Client
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </>
                    )}
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

export default function SendToClientModal({
  preCareList,
  setModalShow,
  modalShow,
  modalType,
  cunsultationId,
  path,
}) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        modalType={modalType}
        cunsultationId={cunsultationId}
        path={path}
      />
    </>
  );
}
