import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Include/Sidebar'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Createconsultation() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                                <h4 className="mb-sm-0 font-size-28">New Consultation</h4>
                            </div>
                              <div className='col-6 d-flex justify-content-end'>
                                  <span>
                                <NavLink to="#"> <button  className="btn cre_new">Save</button></NavLink>
                                </span>
                                  <span>
                                <NavLink to="#"> <button  className="btn cre_new">Publish</button></NavLink>
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

                                              {/* <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Contact Details</h4>
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
                                                  
                                                  
                                            </form>
                                              </div> */}
                                        </div>
                                  </div>
                                  

                                  
                                    <div className="card">
                                        <div className="card-body">

                                              {/* <div className="d-flex justify-content-start align-items-center flex-wrap mb-3 position-relative">
                                              <h4 className="title_text">Question 1</h4>
                                            </div>
                                          <div className='contact_details'>
                                              <form>
                                                  <div className='form_fields_main mb-3'>
                                                      <label>Question Title</label>
                                                      <input type="text" class="form-control" id="" placeholder="Type Here.."/>
                                                  </div>
                                                  
                                                  <div className='form_fields_main'>
                                                      <label>Subtext</label>
                                                      <textarea rows="3" class="form-control" id="" placeholder="Type Here.." />
                                                  </div>
                                                  
                                                  <div className='form_fields_extra mt-4'>
                                                      <label>Set Answers</label>
                                                      <div className='extra_bottom d-flex align-items-center'>
                                                          <div>
                                                              
                                                          <input type="text" class="form-control" id="" placeholder="Type Here.." /><br/>
                                                             <input type="text" class="form-control" id="" placeholder="Type Here.." />
                                                              
                                                      </div>
                                                          <div className='inputs_extra'>
                                                              <p>Correct?</p>
                                                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><br/><br/>
                                                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" /><br/><br/>
                                                              <img src={require('../assets/images/plus.png')} />
                                                      </div>
                                                      <div>
                                                          <input type="file" id="file-input-choose" name="file-input-choose" />
                                                           <label id="file-input-label" for="file-input-choose"
                                                          >Upload Image</label><br/><br/>
                                                          <input type="file" id="file-input-choose" name="file-input-choose" />
                                                           <label id="file-input-label" for="file-input-choose"
                                                                >Upload Image</label>
                                                          </div>
                                                          </div>
                                                  </div>
                                                  
                                            </form>
                                              </div> */}
                                           <div className='admin_add_question'>
                                            <div className="row">
                                              <div className='col-lg-6 col-md-6 cmn_space'>
                                                    <h4 className="title_text">Question 1</h4>
                                              </div>
                                            <div className='col-lg-6 col-md-6 d-flex justify-content-end cmn_space'>
                                              <select class="form-select select_cmn" aria-label="Default select example">
                                                    <option selected>Single Choice</option>
                                                    <option value="1">Multiple Choice</option>
                                                    <option value="2">Text Field</option>
                                                  </select>
                                                    </div>
                          <div className='col-lg-2 col-md-2 cmn_space'>
                            
                                                 <label className='main_sub'>Question Title</label>
                                                  </div>
                                                  <div className='col-lg-10 cmn_space'>
                                                  <input type="text" class="form-control text_main" id="" placeholder="Enter your question here"/>
                                              </div>
                                                
                              <div className='col-lg-5 col-md-4 cmn_space d-flex flex-column align-items-end'>
                                <div className='question_checks'>`
                                                  <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label className="form-check-label" for="flexRadioDefault1">
                                              <input type="text" class="form-control text_main" id="" placeholder="Type here"/>
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                              <input type="text" class="form-control text_main" id="" placeholder="Type here"/>
                                            </label>
                                                  </div>
                              <div className="form-check add">
                                <button>
                                          <img src={require('../assets/images/pluswhite.png')} />
                                            <label>
                                            Add Another
                                  </label>
                                  </button>
                                          </div>
                            </div>
                            </div>
                                            <div className='col-lg-4 col-md-5 d-flex flex-column justify-content-start align-items-end cmn_space'>
                                              <select class="form-select select_cmn mb-3" aria-label="Default select example">
                                                                        <option>Response Option</option>
                                                                        <option value="1">No Response</option>
                                                                        <option value="2">Cannot Proceed</option>
                                                                        <option value="3">Proceed with Message</option>
                                              </select>
                                              <select class="form-select select_cmn" aria-label="Default select example">
                                                                        <option>Response Option</option>
                                                                        <option value="1">No Response</option>
                                                                        <option value="2">Cannot Proceed</option>
                                                                        <option value="3">Proceed with Message</option>
                                                                      </select>
                                            </div>
                                            <div className='col-lg-2 col-md-3 cmn_space'>
                                              <button onClick={handleShow} className='custom_msg'>Add a Custom Message</button>
                                            </div>
                                            <div className='col-lg-12 col-md-12 cmn_space'>
                                              <div className='add_bottom_tab'>
                                              <div className="form-check form-switch">
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Required</label>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                              </div>
                              <button><img src={require('../assets/images/trashjkl.png')} /></button>
                              <button><img className="blu_plus" src={require('../assets/images/pluswhite.png') } /></button>
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
 <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className='main_pop'>
          <div className='my_new_pop'>
            <h2>Custom Message</h2>
               <input type="text" class="form-control" id="exampleInput" placeholder="Type here"></input>
              <div className='pop_btns'>
              <button className='done_btn'>Done</button>
              <button className='cancel'>Cancel</button>
            </div>
        </div>
        </Modal.Body>
      
      </Modal>
            </div>
            

  )
}

       

       

       
