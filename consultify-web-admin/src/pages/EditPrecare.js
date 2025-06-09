import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { SavepostcareAdminAction, getpoastcaredetailsAdminAction } from '../Redux/Action/ManageconsultationAction';
import Sidebar from './Include/Sidebar';
import { getCategory } from '../Redux/Action/ContaindicationAction';
export default function EditPrecare() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const category = useSelector((state) => state.Forum.category);
    useEffect(() => {
      dispatch(
        getCategory({
          page: 1,
          limit: 1000000000000,
          search: "",
        })
      );
    }, []);
    const {id}=useParams();
            useEffect(()=>{
          dispatch(getpoastcaredetailsAdminAction({
            id:id
          })).then((payload)=>{
       var datainfo=payload.payload ;
      
              formik.setFieldValue('treatmentname',datainfo.treatmentname,{strict:false})
              formik.setFieldValue('description',datainfo.description,{strict:false})
              formik.setFieldValue('pre_care_advice',datainfo.pre_care_advice,{strict:false})
              formik.setFieldValue('after_care_advice',datainfo.after_care_advice,{strict:false})
              formik.setFieldValue('notes',datainfo.notes,{strict:false})
              formik.setFieldValue('category',datainfo.category,{strict:false})
  
  
          })
            },[id])
  
    const formik = useFormik({
        initialValues: {
          treatmentname:  '',
          description:  '',
          pre_care_advice:  '',
          after_care_advice:  '',
          notes:"",
          category:""
        },
        validationSchema: Yup.object({
          treatmentname: Yup.string().required('Treatment name is required'),
          category: Yup.string().required("Category is required"),
          description: Yup.string().required('Description is required'),
          pre_care_advice: Yup.string().required('Pre care advice is required'),
          after_care_advice: Yup.string().required('After care advice required'),
          notes: Yup.string(),
        
        }),
        onSubmit: values => {
          values.id=id;
           dispatch(SavepostcareAdminAction(values)).then(function(){
            navigate('/pre-care')
           })
      
        },
      });

  return (
    <div>
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <Sidebar />
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="container-fluid">
            <div className="create_tab">
              {/* <!-- start page title --> */}

              <div className="row align-items-center">
                <div className="col-6 d-flex align-items-center">
                  <NavLink to="/pre-care">
                    {" "}
                    <img src={require("../assets/images/Component.png")} />
                  </NavLink>
                  <h4 className="mb-sm-0 font-size-28">Pre care</h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
          </div>
          <div class="container-fluid">
          <form onSubmit={formik.handleSubmit}>
              <div class="new_consult">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="create_new">
                      <h2>Update Pre-Care / Post Care</h2>
                    </div>
                    <div class="create_form">
                      <div class="form-group mb-4">
                        <label for="exampleFormControlInput1">
                          Treatment Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Type Here..."
                          name="treatmentname" 
                        value={formik.values.treatmentname}   onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                            {formik.submitCount>0 &&   formik.touched.treatmentname && formik.errors.treatmentname && (
                            <div className='error'>{formik.errors.treatmentname}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Category
                        </label>
                        <select
                          name="category"
                          aria-label="Default select example"
                          className="form-control form-select"
                          onChange={formik.handleChange}
                          value={formik.values.category}
               
                          onBlur={formik.handleBlur}
                        >
                          <option value="">Select Category from List</option>
                          {category?.map((item) => {
                            return (
                              <option value={item?._id}>{item?.title}</option>
                            );
                          })}

                        </select>
                        
                        {formik.submitCount>0 &&  formik.touched.category &&
                            formik.errors.category && (
                              <div className="error">
                                {formik.errors.category}
                              </div>
                            )}
                      </div>


                      <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1">
                          Brief Description
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Enter here.."
                          name="description" 
                            value={formik.values.description}   onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></textarea>
                         {formik.submitCount>0 &&   formik.touched.description && formik.errors.description && (
                         <div className='error'>{formik.errors.description}</div>
                       )}
                      </div>
                      <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1">
                          Pre-Care Advice
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Enter here.."
                          name="pre_care_advice" 
                value={formik.values.pre_care_advice}   onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                        ></textarea>
                          {formik.submitCount>0 &&   formik.touched.pre_care_advice && formik.errors.pre_care_advice && (
                    <div className='error'>{formik.errors.pre_care_advice}</div>
                )}
                      </div>
                      <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1">
                          After Care Advice
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Enter here.."
                          name="after_care_advice" 
                value={formik.values.after_care_advice}   onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                        ></textarea>
                         {formik.submitCount>0 &&   formik.touched.after_care_advice && formik.errors.after_care_advice && (
                    <div className='error'>{formik.errors.after_care_advice}</div>
                )}
                      </div>
                      <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1">
                          Notes
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                          placeholder="Enter here.."
                          name="notes"
                          value={formik.values.notes}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        ></textarea>
                        {formik.submitCount > 0 &&
                          formik.touched.notes &&
                          formik.errors.notes && (
                            <div className="error">
                              {formik.errors.notes}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="create_tab fixed_btn">
                <div class="row align-items-center">
                  <div class="col-12 d-flex justify-content-between">
                    <span></span>
                    <span>
                      <button class="btn cre_new" type="submit">
                        Update
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
