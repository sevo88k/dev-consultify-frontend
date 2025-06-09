import { ErrorMessage, FieldArray, Formik } from 'formik';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { addContradictionsDatabaseAction, getSideEffectAction } from '../Redux/Action/ContaindicationAction';
import { useDispatch, useSelector } from 'react-redux';
import Select from "react-select";
import { useState } from 'react';
import { useEffect } from 'react';
export default function Editform({ initialValues,validationSchema, getStaticApi,id }) {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    useEffect(() => {
     
      dispatch(getSideEffectAction());
    }, []);
 
    const sideeffectlists = useSelector(
      (state) => state.Containdication.Sideeffectlists
    );
    const [option, setOption] = useState([]);
  
    useEffect(() => {
      // Assuming sideeffectlists is an array of items
      const newOptions = sideeffectlists.map((element) => ({
        value: element._id, // You might want to replace this with the actual property from your sideeffectlists
        label: element.title, // You might want to replace this with the actual property from your sideeffectlists
        sid:element.s_id
      }));
  
      setOption(newOptions);
    }, [sideeffectlists]);


console.log(initialValues,"initialValuesinitialValuesinitialValuesinitialValues")

  return (
    <Formik
                       initialValues={
                       
                        {
                            formData: [initialValues]
                        }
                       }
                validationSchema={validationSchema}
          



                onSubmit={(values) => {
                    values.formData[0].id=id
                   
                  // Handle form submission
                //   console.log(values);
                  dispatch(addContradictionsDatabaseAction(values))
                  navigate('/ContradictionsDatabase')
                 

                }}
              >
                {({ values, handleSubmit, setFieldValue }) => (

                  <form onSubmit={handleSubmit}>
                  <FieldArray
                            name="formData"
                            render={({ push, remove }) => (



<div>


        
              {  values.formData.map((Treatment, TreatmentIndex) => (
                            
              
           
              <div className="main-content" key={TreatmentIndex}>
                  
                    <div className="container-fluid">
                        <div className='create_tab'>
                          {/* <!-- start page title --> */}
                          
                        <div className="row align-items-center">
                      
                            <div className="col-6 d-flex align-items-center">
                            <NavLink to="/ContradictionsDatabase" className="d-flex align-items-center">
                                <img src={require('../assets/images/Component.png')} />
                                <h4 className="mb-sm-0 font-size-28 hdng"> Create Contraindication Page</h4>
                                </NavLink>
                            </div>
                             
                              <div className='col-6 d-flex justify-content-end'>
                                
                               <button type='submit'  className="btn cre_new">Update</button>
                        
                                </div>
                            </div>
                        </div>
                          {/* <!-- end page title --> */}
                    </div>
                
                <div className='container-fluid'>
                  <div className="row">
                      
                            <div className="col-xl-12">
                                <div className="members_tbl">
                                
                                   <div className="card">
                                        <div className="card-body create">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Details</h4>
                                            </div>
                                          <div className='contact_details'>
                                              
                                                  <div className='row'>
                                                     
                                                      <div className='col-xxl-6 col-xl-6 col-lg-12 mb-3'>
                                                  <div className='new_form_fields'>
                                                      <label>Title</label>
                                                      <input type="text" 
                                                          name={`formData.${TreatmentIndex}.title`}
                                                      class="form-control ws_set" id="" placeholder="Type Here.."
                                                    value={Treatment.title}
                                                    onChange={(e) =>
                                                      setFieldValue(`formData.${TreatmentIndex}.title`, e.target.value)
                                                    }
                                                   

                                                      />
                                                          </div>
                                                          <div className='error new'>
                                                          <ErrorMessage name={`formData.${TreatmentIndex}.title`} />
                                                        </div>
                                                      </div>
                                                      <div className='col-xxl-6 col-xl-2 col-lg-3 .d-lg-none'></div>
                                                       <div className='col-xxl-6 col-xl-6 col-lg-12'>
                                                          <div className='new_form_fields'>
                                                      <label>Select Entry Type</label>
                                                     <select class="form-control ws_set" id="exampleFormControlSelect1"
                                                     
                                                     value={Treatment.entryType}
                                                    onChange={(e) =>
                                                      setFieldValue(`formData.${TreatmentIndex}.entryType`, e.target.value)
                                                    }

                                                     
                                                     >
                                                    <option>Select or Type</option>
                                                    {
                                                      getStaticApi?.getenterytype?.map(function(enterytypeobject,i){
                                                          return(
                                                            <option value={enterytypeobject?._id}>{enterytypeobject?.title}</option>
                                                          )
                                                      })
                                                    }
                                                    
                                                   
                                                    </select>
                                                  </div>
 
                                                  <div className='error new'>
                                                          <ErrorMessage name={`formData.${TreatmentIndex}.entryType`} />
                                                        </div>
                                                      </div>
                                                      <div className='col-xxl-6 col-xl-4 col-lg-3 .d-lg-none'></div>
                                                      </div>
                                                  
                                          
                                              </div>
                                        </div>
                                  </div>
                                
                                  

                                    <div className="card">
                                        <div className="card-body create">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Links</h4>
                                            </div>
                                          
                                          <div className='contact_details'>
                                              

                                          <FieldArray
                                           name={`formData.${TreatmentIndex}.links`}
                                              // Use a unique name for each dynamic field
                                              render={({ push, remove }) => (
                                        
                                                <div>
                                                  {Treatment.links &&
                                                    Treatment.links.map((link, index) => (
                                                      <div className="row" key={index}>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-12 mt-3">
                                                          <div className="new_form_fields">
                                                            <label>Select Source</label>
                                                            <select
                                                              as="select"
                                                              name={`formData.${index}.source`}
                                                              className="form-control ws_set"

                                                              value={link.source}
                                                    onChange={(e) =>
                                                      setFieldValue( `formData.${TreatmentIndex}.links.${index}.source`
                                                      , e.target.value)
                                                    }



                                                            >
                                                              <option>Select or Type</option>
                                                              {getStaticApi?.getsource?.map((getsourceobject, i) => (
                                                                <option key={i} value={getsourceobject?._id}>
                                                                  {getsourceobject?.title}
                                                                </option>
                                                              ))}
                                                            </select>
                                                          </div>
                                                              <div className='error new'>
                                                          <ErrorMessage name={`formData.${TreatmentIndex}.links.${index}.source`} />
                                                          </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-12 mt-3">
                                                          <div className="new_form_fields">
                                                            <label className="cent_txt">Paste URL </label>
                                                            <input
                                                              type="text"
                                                              name={`formData.${index}.url`}
                                                              className="form-control ws_set"
                                                              placeholder="Paste URL Here.."
                                                              value={link.url}
                                                    onChange={(e) =>
                                                      setFieldValue( `formData.${TreatmentIndex}.links.${index}.url`
                                                      , e.target.value)
                                                    }

                                                    
                                                            />
                                                          </div>
                                                          <div className='error new'>
                                                          <ErrorMessage name={`formData.${TreatmentIndex}.links.${index}.url`} />
                                                          </div>
                                                        </div>
                                                        <div className="col-lg-2 .d-xl-none"></div>
                                                      
                                                      </div>
                                                    ))}
                                                  <div className="addmore">
                                                    <button type="button" onClick={() => push({ source: '', url: '' })}>
                                                      Add More <img src={require('../assets/images/plusblue.png')} />
                                                    </button>
                                                  </div>
                                                </div>
                                              )}
                                            />
                                              </div>
                                   
                                        </div>
                                  </div>
                             
                                  
                                  
                                    <div className="card">
                                        <div className="card-body create">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">What is it used for?</h4>
                                            </div>
                                          <div className='contact_details'>
                                            
                                                  <div className='row'>
                                                      <div className='col-xxl-10 col-xl-10 col-lg-12'>
                                                          <div className='new_form_fields set_label'>
                                                      <label>Description</label>
                                                     <textarea class="form-control" id="exampleFormControlTextarea" rows="4" placeholder='Type Here..'
                                                     
                                                     
                                                     name={`formData.${TreatmentIndex}.description`}
                                        
                                                    value={Treatment.description}
                                                    onChange={(e) =>
                                                      setFieldValue(`formData.${TreatmentIndex}.description`, e.target.value)
                                                    }
                                                     
                                                     
                                                     ></textarea>
                                                  </div>
                                                  <div className='error old'>
                                                          <ErrorMessage name={`formData.${TreatmentIndex}.description`} />
                                                        </div>
                                                  
                                                      </div>
                                                     
                                                      </div>
                                                  
                                       
                                              </div>
                                        </div>
                                  </div>

                                   <div className="card">
                                        <div className="card-body create">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Side Effects</h4>
                                            </div>
                                            <div className="contact_details">
                                      <div className="row position-relative">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                          <div className="select_drop">
                                            <h2 className="hdn_set">
                                              Search Effects
                                            </h2>
                                            <Select
                                              defaultValue={Treatment.side_effect}
                                              name={`formData.${TreatmentIndex}.side_effect`}
                                              onChange={
                                                (e)=>{
                                                
                                                  setFieldValue(
                                                  `formData.${TreatmentIndex}.side_effect`,
                                                  e
                                                )
                                                }
                                                }
                                              options={option}
                                              isMulti
                                            />



                                   
                                              <div className="error old">
                                            <ErrorMessage
                                              name={`formData.${TreatmentIndex}.side_effect.${TreatmentIndex}.label`}

                                            
                                            />
                                          </div>


                                          </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 left_line">
                                          <div className="new_form_field">
                                            <h2 className="hdn_set">
                                              Selected Effects<br/>
                                            
                                            </h2>
                                            <p>
                                              Please use the search on the left
                                              to select Effects {Treatment?.side_effect?.length}
                                            </p>
                                            <ul>
                                              {Treatment.side_effect?.map(function (
                                                option,
                                                i
                                              ) {
                                                return (
                                                  <li key={i}>
                                                    {option.label}
                                                  </li>
                                                );
                                              })}
                                            </ul>
                                      
                                          </div>
                                          <div className="error old">
                                            <ErrorMessage
                                              name={`formData.${TreatmentIndex}.side_effect.0.lable`}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>


                                             
                                        </div>
                                  </div>

                                    <div className="card">
                                        <div className="card-body create">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Contraindication Advice</h4>
                                            </div>
                                          <div className='contact_details'>
                      

                                              <FieldArray
                                                name={`formData.${TreatmentIndex}.contraindicationAdvice`}
                                               // Use a unique name for each dynamic field
                                              render={({ push,remove }) => (
                                        
                                                <div>
                                                  {Treatment.contraindicationAdvice &&
                                                    Treatment?.contraindicationAdvice?.map((contraindicationAdvice_object, areaindex) => (
                                                      <div className='row mb-4' key={areaindex}>
                                                      <div className='col-xxl-6 col-xl-8 col-lg-12 mb-3'>
                                                          <div className='new_form_fields'>
                                                      <label>Select Area</label>
                                                      <select class="form-control ws_set" id="exampleFormControlSelect1"
                                                         name={`formData.${areaindex}.area`}
                                                     value={contraindicationAdvice_object?.area}
                                                    onChange={(e) =>
                                                      setFieldValue(`formData.${TreatmentIndex}.contraindicationAdvice.${areaindex}.area`, e.target.value)
                                                    }
                                                      
                                                      
                                                      >
                                                    <option>Select or Type</option>
                                                    {
                                                      getStaticApi?.getselectarea?.map(function(getselectareaobject,i){
                                                          return(
                                                            <option value={getselectareaobject?._id}>{getselectareaobject?.title}</option>
                                                          )
                                                      })
                                                    }
                                                    </select>

                                                    
                                                 
                                                  </div> 
                                                  <div className='error old'>

                                                    <ErrorMessage name={`formData.${TreatmentIndex}.contraindicationAdvice.${areaindex}.area`} />
                                                    </div>
                                                      </div>

                                                      <div className='col-xxl-6 col-xl-8 col-lg-12 mb-3'>
                                                          <div className='new_form_fields'>
                                                  
                                                      <select class="form-control ws_set" id="exampleFormControlSelect1"
                                                         name={`formData.${areaindex}.answer`}
                                                     value={contraindicationAdvice_object?.answer}
                                                    onChange={(e) =>
                                                      setFieldValue(`formData.${TreatmentIndex}.contraindicationAdvice.${areaindex}.answer`, e.target.value)
                                                    }
                                                      
                                                      
                                                      >
                                                    <option>Select </option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="Possibly">Possibly</option>
                                                
                                                    </select>

                                                    
                                                 
                                                  </div> 
                                                  <div className='error old'>

                                                    <ErrorMessage name={`formData.${TreatmentIndex}.contraindicationAdvice.${areaindex}.answer`} />
                                                    </div>
                                                      </div>



                                                      <div className='col-xxl-10 col-xl-10 col-lg-12'>
                                                          <div className='new_form_fields set_label'>
                                                      <label>Description</label>
                                                     <textarea class="form-control" id="exampleFormControlTextarea" rows="4" placeholder='Type Here..'
                                                     name={`formData.${areaindex}.source`}
                                                     value={contraindicationAdvice_object.source}
                                                    onChange={(e) =>
                                                      setFieldValue(`formData.${TreatmentIndex}.contraindicationAdvice.${areaindex}.source`, e.target.value)
                                                    }
                                                

                                                   
                                                  
                                                     
                                                     
                                                     ></textarea>
                                                  </div>
                                                  <div className='error old'>

                                                  <ErrorMessage name={`formData.${TreatmentIndex}.contraindicationAdvice.${areaindex}.source`} />
                                                  </div>
                                                
                                                      </div>
                                                     
                                                      </div>
                                                    ))}
                                                  <div className="addmore">
                                                    <button type="button" onClick={() => push({ area: "", source: "" })}>
                                                      Add More <img src={require('../assets/images/plusblue.png')} />
                                                    </button>
                                                  </div>
                                                </div>
                                              )}
                                            />








                                 
                                              </div>
                                        </div>
                                  </div>
                                </div>
                            </div>

                        
                        </div>
                        
                      </div>
                      {/* <!-- container-fluid --> */}
                </div>
                  ))}
                  </div>
              
                
                            )} />
                            </form>
                )}
                
            </Formik>
  )
}
