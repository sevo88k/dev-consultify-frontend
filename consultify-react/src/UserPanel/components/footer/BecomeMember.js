import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from "universal-cookie";
import { useFormik } from "formik";
const BecomeMember=()=> {
  const cookies= new Cookies();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // const [valueEmail, setvalueEmail] = useState("");
 
  const HandleSubmitEmail=()=>{
    if (sessionStorage.getItem("token") || cookies.get("userToken")) {
      if (
        cookies.get("userToken") &&
        !sessionStorage.getItem("token")
      ) {
        sessionStorage.setItem("token", cookies.get("userToken"));
      }
      Navigate("/userlogin");
    }
    else{
      Navigate("/register")
    }
    }
    const formik = useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: async (values) => {
         sessionStorage.setItem("Email",values.email)
         HandleSubmitEmail()
      },
    });
    // onClick={()=>HandleSubmitEmail()} 
  return (
    <div>
       <section className="cta-section common-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={formik.handleSubmit}>
                  <h2>Become a Member</h2>
                  <p>
                    Sign up today for access to online consultations, treatments
                    and more.
                  </p>
                  <div className="d-flex justify-content-center input-mail">
                    <input 
                      type="email"
                      name="email"
                      placeholder="Type your email here"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <button className='email-submit-btn' type='submit'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default BecomeMember;
