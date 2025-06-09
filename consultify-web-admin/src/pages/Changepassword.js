import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Include/Sidebar";





export default function ChangePassword() {
  return (
    <div>
       {/* // <!-- Begin page --> */}
        <div id="layout-wrapper">

        
            {/* <!-- ========== Left Sidebar Start ========== --> */}
     <div className="vertical-menu">
        <Sidebar />
         </div>
            {/* <!-- Left Sidebar End --> */}

            

            <div className="main-content">

                <div className="page-content" >
                      <div className="container">
                          <div className="chnage_pass_main d-flex align-items-center justify-content-center">
                               
                              <form>
                                  <h2 className='mb-4  cmn_dash'>Reset Password</h2>
                <div className="mb-3">
                    <label className="form-label">Old Password<span className="blue_text">*</span></label>
                     <input type="Password" className="form-control" placeholder="Enter Old Password *" name="Password"  value=""   onChange=""  onBlur="" />
                                  <div className='error'></div> </div>
                              
                              <div className="mb-3">
                    <label className="form-label">Enter New Password<span className="blue_text">*</span></label>
                     <input type="Password" className="form-control" placeholder="enter New Password" name="nPassword"  value=""   onChange=""  onBlur="" />
                    <div className='error'></div> </div>
                             

                              
                              <div className="mt-4 d-grid">
                        <button to="/dashboard" className="btn btn-primary waves-effect waves-light" >Reset </button>
                            </div>
                        </form>
                       </div>


                        
                      </div>
                      
                </div>
               
                
             

            </div>
        

        </div>
       

    </div>
         
  )
}
