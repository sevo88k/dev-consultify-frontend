import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Sidebar from './Include/Sidebar'
import SalondetailsNav from './Include/SalondetailsNav'
import { Decryptedid } from '../Util/BcruptEncyptid';
import { useDispatch, useSelector } from 'react-redux';
import { salonDetailsAction, stafflistAction } from '../Redux/Action/SalonAction';
import moment from 'moment';

export default function SalonStaff() {

    const {id}=useParams();



    const idvalue = Decryptedid(atob(id));

    useEffect(()=>{
        dispatch(salonDetailsAction(idvalue))
        
    },[idvalue])
  
  
    var salondetails=useSelector((state)=>state.Salon.salondetails)
  

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(stafflistAction({
            id:idvalue
        }))
    },[])
    const stafflist=useSelector((state)=>state.Salon.stafflist)


 
 



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
                         <NavLink to="/All-salons">

                        <img src={require('../assets/images/Component.png')} />
                        </NavLink>
                             <h4 className="mb-sm-0 font-size-28">{salondetails.salonname}</h4>
                         </div>
                           <div className='col-6 d-flex justify-content-end'>
                               <p className='sub_heading'>Joined: {moment(salondetails.updatedAt).format("DD/MM/YYYY")}</p>
                             </div>
                         </div>
                     </div>
                   {/* <!-- end page title --> */}
                   
                      <div className='container-fluid'>
                   <div className='row'>
                    <SalondetailsNav id={id}  />
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
                                             <h4 class="title_text">Staff</h4>
                                         </div>
         
         
                                         <div class="table-responsive">
                                             <table id="" class="table dt-responsive dealers_table nowrap w-100">
                                                 <thead>
                                                 <tr>
                                                     <th className="hide-on-small">Customer ID</th>
                                                     <th>Customer Name</th>
                                                     <th className="hide-on-small">Date Joined <img class="filt_arrow" src={require('../assets/images/greydownarrow.svg').default}  /></th>
                                                     <th className="hide-on-small">Contact Email</th>
                                                     <th className="hide-on-small">Contact Phone </th>
                                                     <th className="hide-on-small">City</th>
                                                     <th className="hide-on-small">Last Active <img class="filt_arrow" src={require('../assets/images/greydownarrow.svg').default}  /></th>
                                                     <th className="hide-on-small">Consultations </th>
                                                     <th className="hide-on-small">TOTAL Consultations </th>
                                                 </tr>
                                                 </thead>
                                                <tbody class="td_color">
                                                {
                                                    stafflist?.map(function(staff_object,i){
                                                        return(
                                                            <tr key={i}>
                                                     <td className="hide-on-small">{staff_object?.memberNo}</td>
                                                     <td>{staff_object?.fullname} </td>
                                                     <td className="hide-on-small">{moment(staff_object.updatedAt).format("DD/MM/YYYY")}</td>
                                                     <td className="hide-on-small">{staff_object?.email}</td>
                                                     <td className="hide-on-small">{staff_object?.personal_phone}</td>
                                      
                                                     <td className="hide-on-small">{staff_object?.personal_city}</td>
                                                     <td className="hide-on-small">{moment(staff_object.updatedAt).format("DD/MM/YYYY")}</td>
                                                     <td className="hide-on-small">--</td>
                                                     <td className="hide-on-small">--</td>
                                                   </tr>
                                                        )
                                                    })
                                                }
                                                
                                                   
                                                 

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

         </div>
  )
}
