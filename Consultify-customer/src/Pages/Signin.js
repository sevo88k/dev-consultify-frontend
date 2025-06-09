import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logincustomerLoginAction } from "../Redux/Action/CustomerAuthAction";

export default function Signin() {

    const dispatch=useDispatch();

    const formik = useFormik({
        initialValues: {
          email:  '',
          password:  '',
        },
        validationSchema: Yup.object({
          email: Yup.string().email().required('Please Enter your Email'),
          password: Yup
          .string()
          .required('Please Enter your password')
        }),
        onSubmit: values => {
            dispatch(logincustomerLoginAction(values))
            
          // Handle step 1 submission
      
        },
      });





  return (
    <div className="bg-color">

    {/* Header Start */}
    <Navbar expand="lg" className="bg-body-tertiary header-main">
        <Container>
            <Navbar.Brand href="#">
                <img 
                // src={require('../assets/img/logo-white.svg').default} 
                src={require("../assets/img/consultify-white-logo.svg").default}
                alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="">
                    <p>Not a member yet?</p>
                  
                    <NavLink to="/signup" className="white-btn">Sign Up</NavLink>
                </Nav>
            </Navbar.Collapse> */}
        </Container>
    </Navbar>
    {/* Header End */}

    {/* Signup flow Start */}
    <section className="signup-content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="signup-inner">
                        <h2>Sign in to your account</h2>
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
                                                    <input type="email" className="form-control" placeholder="Email *" name="email" 
                                                    value={formik.values.email}   onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    />
                                                        {formik.touched.email && formik.errors.email && (
                                                        <div className='error'>{formik.errors.email}</div>
                                                    )}
                                                </li>
                                                <li className="form-grp">
                                                    <input type="password" className="form-control" placeholder="Password *"  name="password"  
                                                    value={formik.values.password}   onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    />
                                                        {formik.touched.password && formik.errors.password && (
                                                        <div className='error'>{formik.errors.password}</div>
                                                    )}
                                                </li>                                                  
                                            
                                            </ul>
                                        
                                            <div className="submit-btn">
                                                <button  type="submit" className="lg-btn">
                                                Sign in
                                                </button>
                                            </div>
                                            <div className="forgot-password">
                                            <NavLink to="/reset-password" className="gry-text-link">Forgot Password?</NavLink>

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
