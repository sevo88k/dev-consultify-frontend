import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Include/Sidebar'

export default function Ingredients() {
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
            <div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">

                        {/* <!-- start page title --> */}
                        <div class="row">
                            <div class="col-12">
                                
                                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                   <div>
                                          <span class="small_text">Consultify</span>
                                          <div className='d-flex justify-content-center align-items-center'>
                                               <h4 class="mb-sm-0 font-size-28">Ingredients </h4>
                                          <p className='total'>50</p>
                                          </div>
                                         
                                    </div>

                                    <div class="page-title-right">
                                    {/* <!-- App Search--> */}
                                           
                                <img src={require('../assets/images/avatar.svg').default} />
                                                
                                    </div>

                                </div>
                            </div>
                        </div>
                          {/* <!-- end page title --> */}
                          

                           {/* <!-- start search row --> */}
                        <div class="row mb-4">
                            <div class="col-xxl-4 col-lg-3">
                            <input type="text" class="form-control cmn_fields" id="" aria-describedby="emailHelp" placeholder="Search Here" />
                              </div>    

                            <div className="col-xxl-2 col-lg-3">  
                                    <div class="form-group">
                                    <select class="form-control cmn_fields" id="exampleFormControlSelect1">
                                    <option>Type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                  </div>
                                  </div>
                                      
                               <div className="col-xxl-2 col-lg-3"> 
                                      <div class="form-group">
                                    <select class="form-control cmn_fields" id="exampleFormControlSelect2">
                                    <option>Last Active</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                  </div>
                                  </div>
                                      
                               <div className="col-xxl-2 col-lg-3"> 
                                       <div class="form-group">
                                    <select class="form-control cmn_fields" id="exampleFormControlSelect3">
                                    <option>Purchases</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                  </div>
                              </div>
                              
                              
                            </div>
                        </div>
                        {/* <!-- end search row --> */}

                        <div class="row">
                            <div class="col-xl-12">
                                <div class="members_tbl">

                                    <div class="card">
                                        <div class="card-body">

                                            <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                                                <h4 class="title_text">Ingredients</h4>
                                            </div>
            
            
                                            <div class="table-responsive">
                                                <table id="" class="table dt-responsive dealers_table nowrap w-100">
                                                    <thead>
                                                    <tr>
                                                        
                                                        <th>Treatment ID</th>
                                                        <th>Treatment Name</th>
                                                        <th>Linked Medical Conditions</th>
                                                        <th>Linked Products</th>
                                                        <th>Last Viewed </th>
                                                        <th>Total Views</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                
                
                                                    <tbody class="td_color">

                                                    <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                    </tr>
                                                    <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td>Botox - Frown Lines</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>25/07/2023</td>
                                                        <td>31</td>
                                                          <td><button className='button edit'>Edit</button>
                                                          <button className='button delete'>Delete</button>
                                                          </td>
                                                      </tr>
                                                      
                                                   
                                                  
                                                   
                                                    </tbody>
                                                </table>
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
            {/* <!-- end main content--> */}

      </div>
  )
}

       

       

       
