
import Sidebar from '../pages/Include/Sidebar';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Decryptedid, Encryptedid } from '../Util/BcruptEncyptid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { customerDetailsAction, getCompletedconsultaitonformUserAction } from '../Redux/Action/UserAction';
import moment from 'moment';







export default function UserCompleteConsultationform({id,url}) {

 
    var idvalue = Decryptedid(atob(id));
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(customerDetailsAction(idvalue))
      

      dispatch(getCompletedconsultaitonformUserAction({id:idvalue}))
  },[idvalue])


  var userdetails=useSelector((state)=>state.User.userdetails)


  var usercompletedconsultationform=useSelector((state)=>state.User.usercompletedconsultationform)
  console.log(userdetails,"DFfffffffffff")
  
  return (
    <div>
    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div className="vertical-menu">
        <Sidebar />
      </div>
      {/* <!-- Left 
              Sidebar End --> */}

      {/* <!-- ============================================================== -->
          <!-- Start right Content here -->
          <!-- ============================================================== --> */}
      <div class="main-content">

      <div className="container-fluid">
                   <div className='create_tab'>
                     {/* <!-- start page title --> */}

                     {
                        (()=>{
                            if(url=="/All-users"){
                              return(  <div className="row align-items-center">
                         <div className="col-6 d-flex align-items-center">
                         <NavLink to={url}>

                      <img src={require('../assets/images/Component.png')} />
                      </NavLink>
                             <h4 className="mb-sm-0 font-size-28">{userdetails.first_name+" "+userdetails.last_name}</h4>
                         </div>
                           <div className='col-6 d-flex justify-content-end'>
                               <p className='sub_heading'>Joined: {moment(userdetails.updatedAt).format("DD/MM/YYYY")}</p>
                             </div>
                         </div>)
                            }else{
                                return  (<div className="row align-items-center">
                         <div className="col-6 d-flex align-items-center">
                         <NavLink to={url+"/"+  Encryptedid(userdetails?.salonId) }>

                      <img src={require('../assets/images/Component.png')} />
                      </NavLink>
                             <h4 className="mb-sm-0 font-size-28">{userdetails.first_name+" "+userdetails.last_name}</h4>
                         </div>
                           <div className='col-6 d-flex justify-content-end'>
                               <p className='sub_heading'>Joined: {moment(usercompletedconsultationform.updatedAt).format("DD/MM/YYYY")}</p>
                             </div>
                         </div>)
                            }
                            
                        })()
                     }
                     
                 
                   </div>
                 {/* <!-- end page title --> */}
                 
                 

                  <div className='container-fluid'>
                   <div className='row'>
                       <div className='col-lg-12 d-flex justify-content-end'>
                          <NavLink to={"/Customer-overview/"+Encryptedid(userdetails?._id)}>
                         <button className="btn  cre_new_one">Overview</button>  </NavLink>
                           <button className="btn cre_new">Consultations</button>

                           
                     </div>   
                    </div>
                </div>
               </div>


               <div className='container-fluid'>
              <div class="row mt-4">
                       <div class="col-xl-12">
                           <div class="members_tbl">

                               <div class="card">
                                   <div class="card-body">

                                       <div class="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                                           <h4 class="title_text">Consultations</h4>
                                       </div>
       
       
                                       <div class="table-responsive">
                                        
                                           <table id="" class="table dt-responsive dealers_table nowrap w-100" >
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>
                              Category{" "}
                              <img
                                class="filt_arrow"
                                src={
                                  require("../assets/images/greydownarrow.svg")
                                    .default
                                }
                              />
                            </th>
                            <th>
                              Completed{" "}
                              <img
                                class="filt_arrow"
                                src={
                                  require("../assets/images/greydownarrow.svg")
                                    .default
                                }
                              />
                            </th>
                            <th>Customer </th>
                            <th>Salon </th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody class="td_color">
                        {usercompletedconsultationform?.map((item, i) => {
                            return (
                              <>
                                <tr>
                                  <td>{item?.consultationId?.form_title}</td>
                                  <td>--</td>
                                  <td>
                                    {moment(item?.createdAt).format(
                                      "DD/MM/YYYY"
                                    )}
                                  </td>
                                  <td>
                                    {item?.customerId?.first_name +
                                      " " +
                                      item?.customerId?.last_name}
                                  </td>
                                  <td>
                                    {item?.salonId?.firstname +
                                      " " +
                                      item?.salonId?.lastname}
                                  </td>
                                  <td className="d-flex">
                                    <NavLink
                                      className="button edit"
                                      to={`/View-User-ConsultationForm/${Encryptedid(
                                        item?._id
                                      )}`}
                                      role="button"
                                      data-rr-ui-event-key="#"
                                      tabindex="0"
                                    >
                                      View
                                    </NavLink>
                                    {/* <button className="button delete">
                                      Delete
                                    </button> */}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
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
