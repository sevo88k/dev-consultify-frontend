import React from 'react'
import Sidebar from './Include/Sidebar'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { salonUpdatePasswordAction } from '../Redux/Action/SalonAction';
import { customerUpdatePasswordAction } from '../Redux/Action/UserAction';

export default function ResetPassword() {


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
          if(usertype=="customerUpdatePasswordAction"){
            dispatch(customerUpdatePasswordAction(values)).then(function(){
              navigate('/All-users')
             })
          }else{
            dispatch(salonUpdatePasswordAction(values)).then(function(){
              navigate('/All-salons')
             })
          }
 
    
     
  
      
      },
    });



  return (
    <div>
 
     <div id="layout-wrapper">

        

         <div className="vertical-menu">
        <Sidebar />
         </div>

          <div className='chnage_pass_main d-flex justify-content-center align-items-center'>
           <div className="main-content1 margin-left-reset">
            <div className='container-fluid'>
              <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className='col-lg-12'>
                  <h2 className='mb-4 cmn_dash'>Reset Password</h2>
                </div>
                  <div className='col-12 mb-4'>
                <label className="form-label">Old Password<span className="blue_text">*</span> </label>
                <div className="input-group auth-pass-inputgroup">
                <input type="password" className="form-control" placeholder="Password *"  name="password"  
                           
                                                    value={formik.values.password}   onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    />
                                                      
                  </div>
                  {formik.touched.password && formik.errors.password && (
                                                        <div className='error'>{formik.errors.password}</div>
                                                    )}
                                                  
                  </div> 
                 
                 
                  <div className='col-12'>
                  <label className="form-label">New Password<span className="blue_text">*</span> </label>
                <div className="input-group auth-pass-inputgroup">
                <input type="password" className="form-control" placeholder="Password *"  name="confirmpassword"  
       
                    value={formik.values.confirmpassword}   onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                        
                  </div>
                  {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                        <div className='error'>{formik.errors.confirmpassword}</div>
                    )}
                    </div> 
                     <div className="mt-4 d-grid">
                       <button type='submit' className="btn btn-primary waves-effect waves-light dark-blue-btn-d" >Reset Password</button>
                                            </div>
                     </div>
               </form>
                     
                   </div>
                   {/* <!-- container-fluid --> */}
             </div>
             {/* <!-- End Page-content --> */}
</div>
     
             </div>

         </div>
  )
}
