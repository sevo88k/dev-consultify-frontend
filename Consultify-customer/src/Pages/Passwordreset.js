import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import {  updatePasswordAction } from '../Redux/Action/CustomerAuthAction';
export default function Passwordreset() {
    const dispatch=useDispatch();
    const {id,time}=useParams();

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
            window.location.href="/"
         })
       
    
        
        },
      });
  return (
    <div className="bg-color">

    {/* Header Start */}
    <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
            <Navbar.Brand href="#">
                <img
                //  src={require('../assets/img/logo-white.svg').default} 
                src={require("../assets/img/consultify-white-logo.svg").default}
                 alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="">
                    <p>Not a member yet?</p>
                  
                    <NavLink to="/" className="white-btn">Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    {/* Header End */}

    {/* Signup flow Start */}
    <section className="signup-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="signup-inner">
                        <h2>Password Reset</h2>
                        <p className='text-white text-center'>Your New password should be diffrent from old password</p>
                        <div className="create-acc-form">
                            <div className="row">                                  
                                <div className="col-lg-7 mx-auto">                                         
                                    <form onSubmit={formik.handleSubmit} >
                                        <div className="create-account create-account-next border-radius-10">
                                            <div className="logo-circle">
                                            <img 
                                            // src={require('../assets/img/logo-circle.png')} 
                                            src={require("../assets/img/circlelogo.svg").default}
                                            alt='logo' />
                                            </div>
                                            <ul className="">
                                             
                                                <li className="form-grp">
                                                    <input type="password" className="form-control" placeholder="New Password *" name="password" 
                                                    value={formik.values.password}   onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    />
                                                        {formik.touched.password && formik.errors.password && (
                                                        <div className='error'>{formik.errors.password}</div>
                                                    )}
                                                </li>
                                                <li className="form-grp">
                                                    <input type="password" className="form-control" placeholder="Confirm Password *" name="confirmpassword" 
                                                    value={formik.values.confirmpassword}   onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    />
                                                        {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                                                        <div className='error'>{formik.errors.confirmpassword}</div>
                                                    )}
                                                </li>
                                                                                       
                                            
                                            </ul>
                                        
                                            <div className="submit-btn">
                                                <button  type="submit" className="lg-btn">
                                              Save New Password
                                                </button>
                                            </div>
                                          
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Signup flow End */}
</div>
  )
}
