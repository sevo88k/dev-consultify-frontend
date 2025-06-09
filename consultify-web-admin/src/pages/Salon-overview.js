import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { salonDetailsAction } from '../Redux/Action/SalonAction';
import Sidebar from './Include/Sidebar';

export default function Salonoverview() {
    const {id}=useParams();
    const dispatch=useDispatch();
    console.log(id);
    useEffect(()=>{
        dispatch(salonDetailsAction(id))
        
    },[id])


    var salondetails=useSelector((state)=>state.Salon.salondetails)
    console.log(salondetails)
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
                        <div className='create_tab'>
                          {/* <!-- start page title --> */}
                          
                        <div className="row align-items-center">
                            <div className="col-6 d-flex align-items-center">
                                <img src={require('../assets/images/Component.png')} />
                                <h4 className="mb-sm-0 font-size-28">Sarahs Salon Wakefield</h4>
                            </div>
                              <div className='col-6 d-flex justify-content-end'>
                                  <p className='sub_heading'>Joined: 26/08/2021</p>
                                </div>
                            </div>
                        </div>
                      {/* <!-- end page title --> */}
                      
                      <div className='row'>
                          <div className='col-lg-12 d-flex justify-content-end'>
                              <button className="btn cre_new">Overview</button>
                              <NavLink to="/Salon-search-history"><button className="btn cre_new_one">Searches</button></NavLink>
                              <NavLink to="/Salon-customers"><button className="btn cre_new_one">Customers</button></NavLink>
                              <button className="btn cre_new_one">Consultations</button>
                               <button className="btn cre_new_one">Subscription</button>
                        </div>   
                       </div>

                    </div>
                
                <div className='container-fluid'>
                  <div className="row">
                      
                            <div className="col-xl-12">
                                <div className="members_tbl">

                                    <div className="card mt-4">
                                        <div className="card-body">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Contact Details</h4>
                                            </div>
                                          <div className='contact_details'>
                                              <form>
                                                  <div className='row'>
                                                      <div className='col-lg-6'>
                                                  <div className='form_fields_main mb-2'>
                                                      <label>Salon Name</label>
                                                      <input type="text" class="form-control" id="" placeholder="" value={salondetails.firstname}/>
                                                  </div>
                                                   <div className='form_fields_main mb-2'>
                                                      <label>Contact Name</label>
                                                      <input type="text" class="form-control" id="" placeholder="" value={salondetails.lastname}/>
                                                  </div>
                                                   <div className='form_fields_main mb-2'>
                                                      <label>Email</label>
                                                      <input type="email" class="form-control" id="" placeholder="" value={salondetails.email}/>
                                                  </div>
                                                   <div className='form_fields_main mb-2'>
                                                      <label>Phone</label>
                                                      <input type="text" class="form-control" id=""   pattern="[0-9]*"
                                                 onChange={(e) =>
                                                         ((v) => (e.target.validity.valid ? e.target.value : v))} placeholder="" value={salondetails.contact_no}/>
                                                      </div>
                                                      </div>
                                                      <div className='col-lg-6'>
                                                          <div className='form_fields_main mb-2'>
                                                      <label>Website</label>
                                                      <input type="text" class="form-control" id="" placeholder="" value="https://sarahssalon.com"/>
                                                  </div>
                                                      </div>
                                                  </div>
                                                  
                                            </form>
                                              </div>
                                        </div>
                                  </div>


                                  <div className="card">
                                        <div className="card-body">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Salon Details</h4>
                                            </div>
                                          <div className='contact_details'>
                                              <div className='row'>
                                                  <div className='col-lg-5'>
                                              <form>
                                                  <div className='form_fields_main additional'>
                                                      <label> Salon Address</label>
                                                      <input type="text" class="form-control" id="" placeholder="" value="Sarahs Salon Wakefield"/>
                                                      <input type="text" class="form-control" id="" placeholder="" value="124 Wakefield Road"/>
                                                      <input type="text" class="form-control" id="" placeholder="" value="Wakefield"/>
                                                      <input type="text" class="form-control" id="" placeholder="" value="West Yorkshire" />
                                                      <input type="text" class="form-control" id="" placeholder="" value="WF10 1TY"/>
                                                  </div>
                                                      </form>
                                                  </div>
                                                  <div className='col-lg-1'></div>
                                                  <div className='col-lg-4'>
                                                      <div className='additional_info'>
                                                      <ul>
                                                          <li>Last Log In
                                                          <p>24/08/2022</p>
                                                          </li>
                                                          <li>Account Status
                                                          <p> <img src={require('../assets/images/check_circle.png')} /> Active</p>
                                                          </li>
                                                          <li>Live / Suspend
                                                          <p> <img src={require('../assets/images/check_circle.png')} /> Live</p>
                                                          </li>
                                                          <li>Password Reset
                                                          <button className='reset_btn'>Reset Password</button>
                                                          </li>
                                                          <li>Delete Salon 
                                                          <button className='delete_btn'>Delete</button>
                                                          </li>
                                                      </ul>
                                                      </div>
                                                      </div>
                                              </div>
                                              </div>
                                        </div>
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

       

       

       
