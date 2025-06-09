import React from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { resetpasswordAction } from '../Redux/Action/AdminAuthAction';
export default function ForgotPassword() {
    const dispatch=useDispatch();

    const formik = useFormik({
        initialValues: {
          email:  '',
         
        },
        validationSchema: Yup.object({
          email: Yup.string().email().required('Please Enter your Email'),
        
        }),
        onSubmit: (values) => {
        dispatch(resetpasswordAction(values))
            
          // Handle step 1 submission
      
        },
      });
  return (
    <div>
    <div className="container-fluid p-0">
             <div className="row g-0">
             <div className="col-xl-6">
                     <div className="auth-full-page-content p-md-10 p-4">
                         <div className="w-100">
                      <div className="d-flex flex-column h-100">
                        <div className="my-auto">
                                     <div className="mt-4">
                               <div className="titl_text mb-3">
                                             <h1 className="p-color font-weight-semibold">Forgot your password</h1>
                                             <p>Please enter the email address you had like your password reset information sent to</p>
                                         </div>
                                         <form onSubmit={formik.handleSubmit}>
             
                                             <div className="mb-3">
                                                 <label for="username" className="form-label">Enter email address<span className="blue_text">*</span></label>
                                                 <input type="email" className="form-control" placeholder="Email *" name="email"  value={formik.values.email}   onChange={formik.handleChange}  onBlur={formik.handleBlur}   />
                                                     {formik.touched.email && formik.errors.email && (<div className='error'>{formik.errors.email}</div>  )}
                                             </div>

                                         <div className="mt-4 d-grid">
                                             <button to="/dashboard" className="btn btn-primary waves-effect waves-light" >Request reset link</button>
                                         </div>
                                         
                                         <div className="d-flex justify-content-between mt-2 mb-3">
                                                
                                                <NavLink to="/" className="font-weight-semibold pt-4 m-auto">Back to login</NavLink>
                                            </div>
                                         </form>
                                        
                                     </div>
                                 </div>

                                
                             </div>
                             
                             
                         </div>
                     </div>
                 </div>
                

                 <div className="col-xl-6">
                     <div className="auth-full-bg bg-black pt-lg-5 p-4">
                         <div className="bg-overlay">
                           <div className="new_logo">
                               {/* <img src={require('../assets/images/logo-light.png')}/> */}
                               <img src={require("../assets/images/whitelogo.svg").default} />
                            </div>
                         </div>
                     </div>
                 </div>
                


             </div>
           
         </div>
 </div>
  )
}
