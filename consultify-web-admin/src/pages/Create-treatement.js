import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Include/Sidebar'

export default function Createtreatement() {
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
                                <h4 className="mb-sm-0 font-size-28">Create New Treatment</h4>
                            </div>
                              <div className='col-6 d-flex justify-content-end'>
                                  <span>
                                <NavLink to="#"> <button  className="btn cre_new">Save</button></NavLink>
                                </span>
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
                                        <div className="card-body">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Details</h4>
                                            </div>
                                          <div className='contact_details'>
                                              <form>
                                                  <div className='form_fields_main'>
                                                      <label>Treatment Name</label>
                                                      <input type="text" class="form-control" id="" placeholder="Type Here.."/>
                                                  </div>
                                                  <div className='form_fields_main'>
                                                      <label>Category</label>
                                                     <select class="form-control" id="exampleFormControlSelect1">
                                                    <option>Select or Type</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </select>
                                                  </div>
                                                  <div className='form_fields_main'>
                                                      <label>Description</label>
                                                      <textarea rows="3" class="form-control" id="" placeholder="Type Here.." />
                                                  </div>
                                                  <div className='form_fields_main justify-content-end'>
                                                      <div>
                                                          <input type="file" id="file-input-choose" name="file-input-choose" />
                                                           <label id="file-input-label" for="file-input-choose"
                                                                >Upload Image</label>
                                                      </div>
                                                      
                                                  </div>
                                                  
                                            </form>
                                              </div>
                                        </div>
                                  </div>
                                  

                                   <div className="card">
                                        <div className="card-body">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Link Medical Conditions</h4>
                                            </div>
                                          <div className='link_conditions'>
                                              <div className='row'>
                                                  <div className='col-lg-6'>
                                                      <div className='srch_click d-flex'>
                                                      <input type="text" class="form-control" id="" placeholder="search" />
                                                      <button><img src={require('../assets/images/plus.png')} /></button>
                                                      </div>
                                                      <div className='srch_list'>
                                                          <ul>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>

                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>

                                                          </ul>
                                                      </div>
                                                  </div>
                                                  <div className='col-lg-3 col-md-4 col-sm-6 mt-4'>
                                                      <div className='selected_condition'>
                                                      <ul>
                                                              <li>Selected Medical Condition <img src={require('../assets/images/Close_square_fill.png')} /></li>
                                                              <li>Selected Medical Condition <img src={require('../assets/images/Close_square_fill.png')} /></li>
                                                          </ul>
                                                    </div>
                                                  </div>
                                              </div>
                                          </div>
                                        </div>
                                  </div>
                                  


                                  <div className="card">
                                        <div className="card-body">

                                              <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Link Products</h4>
                                            </div>
                                          <div className='link_conditions'>
                                              <div className='row'>
                                                  <div className='col-lg-6'>
                                                      <div className='srch_click d-flex'>
                                                      <input type="text" class="form-control" id="" placeholder="search" />
                                                      <button><img src={require('../assets/images/plus.png')} /></button>
                                                      </div>
                                                      <div className='srch_list'>
                                                          <ul>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                              <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>

                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>
                                                               <li>
                                                                  Result Line <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                              </li>

                                                          </ul>
                                                      </div>
                                                  </div>
                                                  <div className='col-lg-3 col-md-4 col-sm-6 mt-4'>
                                                      <div className='selected_condition'>
                                                      <ul>
                                                              <li>Selected Products <img src={require('../assets/images/Close_square_fill.png')} /></li>
                                                              <li>Selected Products <img src={require('../assets/images/Close_square_fill.png')} /></li>
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

       

       

       
