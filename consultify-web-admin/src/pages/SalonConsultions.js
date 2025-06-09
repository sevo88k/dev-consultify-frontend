import React, { useState } from 'react'
import Sidebar from './Include/Sidebar'
import { NavLink, useParams } from 'react-router-dom'
import SalondetailsNav from './Include/SalondetailsNav'
import moment from 'moment'
import { useEffect } from 'react'
import { getCompletedconsultaitonformSalonAction, salonDetailsAction, updateConsultationStatus } from '../Redux/Action/SalonAction'
import { Decryptedid, Encryptedid } from '../Util/BcruptEncyptid'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

export default function SalonConsultions() {


  const { id } = useParams();
  const dispatch = useDispatch();

  const [switchStates, setSwitchStates] = useState({});
  const saloncompletedconsultationform = useSelector((state) => state.Salon.saloncompletedconsultationform)
  const salondetails = useSelector((state) => state.Salon.salondetails)

  const idvalue = Decryptedid(atob(id));

  useEffect(() => {
    dispatch(salonDetailsAction(idvalue))
    dispatch(getCompletedconsultaitonformSalonAction({
      id: idvalue
    }))

  }, [idvalue])


  useEffect(() => {
    dispatch(salonDetailsAction(idvalue));
    dispatch(getCompletedconsultaitonformSalonAction({ id: idvalue }));
  }, [idvalue]);

  // useEffect(() => {
  //   if (saloncompletedconsultationform?.length > 0) {
  //     setSwitchStates(
  //       saloncompletedconsultationform.reduce((acc, item) => {
  //         acc[item._id] = item?.consultationId?.hasOwnProperty("see_consultation")
  //           ? item.consultationId.see_consultation
  //           : 1;
  //         return acc;
  //       }, {})
  //     );
  //   }
  // }, [saloncompletedconsultationform]);


  // const handleToggle = (consultationId) => {
  //   const updatedState = switchStates[consultationId] === 0 ? 1 : 0;
  
  //   setSwitchStates((prevState) => ({
  //     ...prevState,
  //     [consultationId]: updatedState,
  //   }));
  
  //   dispatch(
  //     updateConsultationStatus({
  //       // id: idvalue,
  //       see_consultation: updatedState,
  //       consultation_id: consultationId
  //     })
  //   );
  // };
  


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
                <SalondetailsNav id={id} />
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
                              <th className="hide-on-small">
                                Category{" "}
                                <img
                                  class="filt_arrow"
                                  src={
                                    require("../assets/images/greydownarrow.svg")
                                      .default
                                  }
                                />
                              </th>
                              <th className="hide-on-small">
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
                              <th className="hide-on-small">Salon </th>
                              <th className="hide-on-small">Actions</th>
                              {/* <th className="hide-on-small">Consultations Tab</th> */}
                            </tr>
                          </thead>

                          <tbody class="td_color">
                            {saloncompletedconsultationform?.map((item, i) => {
                              return (
                                <>
                                  <tr>
                                    <td>{item?.consultationId?.form_title}</td>
                                    <td className="hide-on-small">--</td>
                                    <td className="hide-on-small">
                                      {moment(item?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td >
                                      {item?.customerId?.first_name +
                                        " " +
                                        item?.customerId?.last_name}
                                    </td>
                                    <td className="hide-on-small">
                                      {item?.salonId?.firstname +
                                        " " +
                                        item?.salonId?.lastname}
                                    </td>
                                    <td className="hide-on-small d-flex">
                                      <NavLink
                                        className="button edit"
                                        to={`/view_consultation_form-salon/${Encryptedid(
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
                                    {/* <td>
                                      {item?.is_completed === 0 ? (
                                      <Form.Check
                                      type="switch"
                                      id={`custom-switch-${item?._id}`}
                                      className="switchh"
                                      checked={switchStates[item._id] === 0} 
                                      onChange={() => handleToggle(item._id)}
                                    />

                                      ) : (
                                        <p>Completed</p>
                                      )}
                                    </td> */}
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
