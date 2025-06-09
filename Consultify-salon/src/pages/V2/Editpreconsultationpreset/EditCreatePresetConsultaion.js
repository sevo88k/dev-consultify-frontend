import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { deleteConsultationAction, getCategory } from "../../../Redux/Actions/user/salon";
import DeletePopup from "../../../components/Modals/DeletePopup";
import { Modal, ModalHeader } from "react-bootstrap";
export default function EditCreatePresetConsultaion({
  formData,
  setFormData,
  nextStep,
  view,
}) {
  const dispatch = useDispatch();
  const [delModalShow, setDelModalShow] = React.useState(false);
  const [cunsultationId, setConsultationId] = React.useState();
  const [trashIndex, setTrashIndex] = React.useState();
  useEffect(() => {
    dispatch(
      getCategory({
        page: 1,
        limit: 1000000000000,
        search: "",
      })
    );
  }, []);

  const category = useSelector((state) => state.myaccount.category);
  const formik = useFormik({
    initialValues: {
      form_title:
        formData?.formData?.length > 0
          ? formData.form_title
          : formData?.form_title,

      form_description:
        formData?.formData?.length > 0
          ? formData.form_description
          : formData?.form_description,

      category:
        formData?.formData?.length > 0 ? formData.category : formData?.category,
    },
    validationSchema: Yup.object({
      form_title: Yup.string().required("Form title is required"),
      form_description: Yup.string().required("Form description  is required"),
    }),
    onSubmit: (values) => {
      setFormData({
        ...formData,
        ...values,
      });
      nextStep();

      // Handle step 1 submission
    },
  });
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  const [searchParams] = useSearchParams();

  searchParams.get("path");
  const navigate=useNavigate();

//deleteConsultationAction
  return (
    <div className="consulation_form one">
      {/* Header Start */}
      <Navbar
        expand="lg"
        className={
          scroll
            ? "bg-body-tertiary header-blck active"
            : "bg-body-tertiary header-blck"
        }
      >
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              className="main-logo"
              src={require("../../../assets/img/newconsultlogo.webp")}
              alt="logo"
            />
          </Navbar.Brand>
          <NavLink className="exit_btn" to={"/" + searchParams.get("path")}>
            Exit
          </NavLink>
        </Container>
      </Navbar>
      {/* Header End */}
      <div className="container">
        <div className="consultationform_tab">
          <div className="d-flex justify-content-between">
            <h2 className="form_cmn_heading">Edit Consultation Form</h2>
            {
              formData?.formcreatedby?._id==localStorage.getItem('userId')  &&   <button className="delete-consult"  onClick={()=>{
              setDelModalShow(true)
              setConsultationId(formData?._id)
            }}>Delete Consultation</button>
            }
          
          </div>
          <div className="steps two w-75">
            <Nav.Link href="#">1. Title & Description</Nav.Link>
            <Nav.Link href="#">2. Questions</Nav.Link>
            <Nav.Link href="#">3. Options</Nav.Link>
            <Nav.Link href="#">4. Review</Nav.Link>
          </div>
        </div>

        <form
          className={`consultaing_detailsform  ${
            view == "only_view" && "pointer-nones"
          }`}
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Form Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Here"
              name="form_title"
              value={formik.values.form_title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.form_title && formik.errors.form_title && (
              <span className="error">{formik.errors.form_title}</span>
            )}
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Form Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter a description"
              rows="5"
              name="form_description"
              value={formik.values.form_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.form_description &&
              formik.errors.form_description && (
                <span className="error">{formik.errors.form_description}</span>
              )}
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Category
            </label>
            <select
              className="category-pad form-control form-select"
              name="category"
              aria-label="Default select example"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              <option>Select category from list</option>
              {category.category?.map((item) => {
                return <option value={item?._id}>{item?.title}</option>;
              })}

              {formik.touched.category && formik.errors.category && (
                <span className="error">{formik.errors.category}</span>
              )}
            </select>
          </div>
          <div className="submit-btn">
            <button type="submit" className="lg-btn">
              Next
            </button>
          </div>
        </form>
      </div>
      <Modal
           show={delModalShow}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader closeButton>

            </ModalHeader>
            <Modal.Body >
                <div className='delete-modal'>
                    <p>Are You Sure?</p>
                    <div className='d-flex'>
                        <button className='delete-yes' onClick={()=>{
                          dispatch(deleteConsultationAction({
                            idconsultaion: cunsultationId,
                            see_preset_tab: 1
                          })).then(function(){
                            navigate('/'+ searchParams.get("path"))
                          })
                        }} >Delete</button>
                        <button className='delete-cancel' onClick={function () {
                          setDelModalShow(false)
                        }}>Cancel</button>
                    </div>

                </div>
            </Modal.Body>

        </Modal>
    </div>
  );
}
