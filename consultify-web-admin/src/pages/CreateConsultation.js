import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Include/Sidebar'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Formik, Field, FieldArray, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";






export default function CreateConsultation() {


  const validationSchema = Yup.object().shape({
    formData: Yup.array().of(
      Yup.object().shape({
        question: Yup.string().required("Question is required"),
        optiontype: Yup.string().required("Option Type is required"),
        required: Yup.boolean().required("Required field is required"),
        correctanswer: Yup.string(),
        options: Yup.array().of(
          Yup.object().shape({
            optiontitle: Yup.string().required("Option Title is required"),
            formOptiontitle: Yup.string().required("Form Option Title is required"),
          })
        ),
      })
    ),
  });

  const initialValues = {
    formData: [
      {
        question: "",
        optiontype: "0",
        required: false,
        correctanswer: "",
        options: [{ optiontitle: "", formOptiontitle: "" }],
      },
    ],
  };



 


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
         
            

          
            <div className='container-fluid'>
            <div className='new_consult'>
                  <div className="row">
                      <div className="col-lg-12">
                <div className='create_new'>
                  <h2>Create a new consultation form</h2>
                  
                  <ol>
                    <li>Title & Description</li>
                    <li>Questions</li>
                    <li>Review</li>
                  </ol>
                </div>
                <div className='create_form'>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission
                  console.log(values);
                }}
              >
      {({ values, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray
            name="formData"
            render={({ push, remove }) => (
              <div>
                {values.formData.map((question, questionIndex) => (
                  
                  <div className="form_Questions" key={questionIndex}>
              

                    <div className="top_form">
                      <h2>Question {questionIndex + 1}</h2>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={question.optiontype}
                        onChange={(e) =>
                           (e.target.value === "2"?
                          // If it is "Text Field," remove all options
                          setFieldValue(`formData.${questionIndex}.options`, []):
                 
                          // Otherwise, update the option type as usual
                          setFieldValue(`formData.${questionIndex}.optiontype`, e.target.value))
                        
                        }
                      >
                        <option value="0">Single Choice</option>
                        <option value="1">Multiple choice</option>
                        <option value="2">Text Field</option>
                      </select>
                    </div>
                    <div className="form_field">
                      <div className="f_field">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Question Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter your question here"
                          value={question.question}
                          onChange={(e) =>
                            setFieldValue(`formData.${questionIndex}.question`, e.target.value)
                          }
                        />
                            <div className='error'>

                        <ErrorMessage  name={`formData.${questionIndex}.question`} />
                        </div>
                      </div>

                      <FieldArray
                        name={`formData.${questionIndex}.options`}
                        render={({ push: pushOption, remove: removeOption }) => (
                          <div>
                            {question.options.map((option, optionIndex) => (
                              <div className="options" key={optionIndex}>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type={
                                          question.optiontype === "0"
                                            ? "radio"
                                            : "checkbox"
                                        }
                                        name={`options_${questionIndex}`}
                                        id={`option_${questionIndex}_${optionIndex}`}
                                        value="option"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`option_${questionIndex}_${optionIndex}`}
                                      >
                                        <input
                                          type="text"
                                          placeholder={option.optiontitle}
                                          value={option.optiontitle}
                                          onChange={(e) =>
                                            setFieldValue(
                                              `formData.${questionIndex}.options.${optionIndex}.optiontitle`,
                                              e.target.value
                                            )
                                          }
                                        />
                                         <div className='error'><ErrorMessage  name={  `formData.${questionIndex}.options.${optionIndex}.optiontitle`} /></div>

                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                      value={option.formOptiontitle}
                                      onChange={(e) =>
                                        setFieldValue(
                                          `formData.${questionIndex}.options.${optionIndex}.formOptiontitle`,
                                          e.target.value
                                        )
                                      }
                                    >
                                      <option value="0">Response Option</option>
                                      <option value="1">No Response</option>
                                      <option value="2">Cannot Proceed</option>
                                      <option value="3">
                                        Proceed with Message
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                {/* <button
                                  type="button"
                                  onClick={() => removeOption(optionIndex)}
                                >
                                  Remove Option
                                </button> */}
                              </div>
                            ))}

                            {
                              question.optiontype !="2" &&
                     
                            <div className="form-check add">
                              <img
                                onClick={() =>
                                  pushOption({
                                    optiontitle: "",
                                    formOptiontitle: "",
                                  })
                                }
                                className="blu_plus"
                                src={require("../assets/images/pluswhite.png")}
                                alt="plus"
                              />
                              <label className="form-check-label">
                                Add Another
                              </label>
                            </div>
                          }
                          </div>
                        )}
                      />

                      <div className="form_bottom_main">
                        <div className="add_bottom_tab">
                          <div className="form-check form-switch">
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              Required
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                          {
                           values.formData.length>1 &&
                          <button onClick={() => remove(questionIndex)}>
                            <img
                              src={require("../assets/images/trashjkl.png")}
                              alt="trash"
                            />
                          </button>
                          }

                          {
                            questionIndex== values.formData.length-1 &&
                        
                          <button
                            onClick={() =>
                              push({
                                question: "",
                                optiontype: "0",
                                required: false,
                                correctanswer: "",
                                options: [
                                  { optiontitle: "", formOptiontitle: "" },
                                ],
                              })
                            }
                          >
                            <img
                              className="blu_plus"
                              src={require("../assets/images/pluswhite.png")}
                              alt="plus"
                            />
                          </button>
                        }
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
           
              </div>
            )}
          />
          <button type='submit' >Save data</button>
        </form>
      )}
                </Formik>
                  
                </div>
                           
                      </div>
            
              </div>
              </div>
          </div>
                      {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}

        
                </div>



  



            </div>
  )
}


       

       

       
