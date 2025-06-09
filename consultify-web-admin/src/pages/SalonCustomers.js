import React, { useCallback, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Include/Sidebar'
import SalondetailsNav from './Include/SalondetailsNav'
import { Decryptedid, Encryptedid } from '../Util/BcruptEncyptid';
import { salonDetailsAction } from '../Redux/Action/SalonAction';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { salonClientsDispatch } from '../Redux/Action/ManageconsultationAction';



export default function SalonCustomers() {
    const {id}=useParams();
    const navigate=useNavigate()

    const dispatch=useDispatch();
    const idvalue = Decryptedid(atob(id));

    var {salondetails, salonClients}=useSelector((state)=>({
      salondetails: state.Salon.salondetails,
      salonClients : state.Salon.salonClients
    }));


    useEffect(()=>{
        dispatch(salonDetailsAction(idvalue))
        dispatch(salonClientsDispatch({id:idvalue}))
    },[idvalue])


var userprofile =useCallback( (id) => {
  const encodedEncrypted = Encryptedid(id);
  navigate("/Customerviewdetails/"+encodedEncrypted);
},[]);

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
                                                <h4 class="title_text">Customers</h4>
                                            </div>
            
            
                                            <div class="table-responsive">
                                                <table id="" class="table dt-responsive dealers_table nowrap w-100">
                                                    <thead>
                                                    <tr>
                                                        {/* <th>Customer ID</th> */}
                                                        <th>Customer Name</th>
                                                        <th>Date Joined <img class="filt_arrow" src={require('../assets/images/greydownarrow.svg').default}  /></th>
                                                        <th>Contact Email</th>
                                                        <th>Contact Phone </th>
                                                        <th>City</th>
                                                        {/* <th>Last Active <img class="filt_arrow" src={require('../assets/images/greydownarrow.svg').default}  /></th> */}
                                                        <th>Consultations </th>
                                                        <th>TOTAL Consultations </th>
                                                    </tr>
                                                    </thead>
                                                   <tbody class="td_color">
                                                   {
                                                    salonClients?.map((item,i)=>{
                                                      return (
                                                        <>
                                                        <tr>
                                                        {/* <td>--</td> */}
                                                        <td className='cursor-pointer' onClick={()=>{
                                                          userprofile(item?._id)
                                                        }}>{item?.first_name + " " + item?.last_name}</td>
                                                        <td>{moment(item?.createdAt).format('DD/MM/YYYY')}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.phone_number}</td>
                                                        <td>{item?.city}</td>
                                                        {/* <td>-----</td> */}
                                                        <td>----</td>
                                                        <td>-----</td>
                                                      </tr>
                                                        </>
                                                      )
                                                    })
                                                   }
                                                 
                                                      
                                                      {/* <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                        <td>9</td>
                                                        <td>32</td>
                                                      </tr>
                                                          
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr>
                                                      <tr>
                                                        <td>12323</td>
                                                        <td><NavLink to="/Customer-overview">Jacqueline Rose </NavLink> </td>
                                                        <td>25/07/2023</td>
                                                        <td>sarah1331@sarahssalon.com</td>
                                                        <td>02038806050</td>
                                                        <td>Wakefield, UK</td>
                                                        <td>25/07/2023</td>
                                                          <td>9</td>
                                                          <td>32</td>
                                                      </tr> */}

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


       

       

       
