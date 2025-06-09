import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { updatePasswordAction } from '../Redux/Action/AdminAuthAction';
export default function Adminresetpassword() {

    const dispatch=useDispatch();
    const {id,time,usertype}=useParams();
    const navigate=useNavigate()
  
    console.log(usertype)
  
    const formik = useFormik({
        initialValues: {
        
          password:  '',
          confirmpassword:'',
        },
        validationSchema: Yup.object({
        
          password: Yup.string().required('Password is required'),
          confirmpassword:Yup .string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Password must match') 
         
        }),
        onSubmit: (values) => {
     
            values.id=id;
            values.time=time
           
              dispatch(updatePasswordAction(values)).then(function(){
                navigate('/')
               })
            
   
      
       
    
        
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
                                                 <label for="username" className="form-label">New password<span className="blue_text">*</span></label>
                                                 <input type="password" className="form-control" placeholder="Password *" name="password"  value={formik.values.password}   onChange={formik.handleChange}  onBlur={formik.handleBlur}   />
                                                     {formik.touched.password && formik.errors.password && (<div className='error'>{formik.errors.password}</div>  )}
                                             </div>

                                             <div className="mb-3">
                                                 <label for="username" className="form-label">Confirm password<span className="blue_text">*</span></label>
                                                 <input type="password" className="form-control" placeholder="Password *" name="confirmpassword"  value={formik.values.confirmpassword}   onChange={formik.handleChange}  onBlur={formik.handleBlur}   />
                                                     {formik.touched.confirmpassword && formik.errors.confirmpassword && (<div className='error'>{formik.errors.confirmpassword}</div>  )}
                                             </div>

                                         <div className="mt-4 d-grid">
                                             <button type="submit" className="btn btn-primary waves-effect waves-light" >Update Password</button>
                                         </div>
                                         
                                         <div className="d-flex justify-content-between mt-2 mb-3">
                                                
                                                <NavLink to="/" className="font-weight-semibold">Back to login</NavLink>
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
