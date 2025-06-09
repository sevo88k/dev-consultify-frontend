import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Include/Sidebar'
import SalondetailsNav from './Include/SalondetailsNav'
import { Decryptedid, Encryptedid } from '../Util/BcruptEncyptid';
import { salonConsultationPresetCreatedByAdmin, salonDetailsAction, updateConsultationPresetStatus, updateConsultationStatus } from '../Redux/Action/SalonAction';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Form } from 'react-bootstrap'

export default function SalonConsultationsPresets() {
    const { id } = useParams();
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const idvalue = Decryptedid(atob(id));

    const [switchStates, setSwitchStates] = useState({});
    const [switchStatesPreset, setSwitchStatesPreset] = useState({});

    var { salondetails, salonconsultationpresetlist } = useSelector((state) => ({
        salondetails: state.Salon.salondetails,
        salonconsultationpresetlist: state.Salon.salonconsultationpresetlist
    }));


    useEffect(() => {
        dispatch(salonDetailsAction(idvalue))
        dispatch(salonConsultationPresetCreatedByAdmin(idvalue))
    }, [idvalue])

      useEffect(() => {
        if (salonconsultationpresetlist?.length > 0) {
          setSwitchStates(
            salonconsultationpresetlist.reduce((acc, item) => {
              acc[item._id] = item?.hasOwnProperty("see_consultation")
                ? item.see_consultation
                : 1;
              return acc;
            }, {})
          );
        }

        if (salonconsultationpresetlist?.length > 0) {
            setSwitchStatesPreset(
              salonconsultationpresetlist.reduce((acc, item) => {
                acc[item._id] = item?.hasOwnProperty("see_preset_tab")
                  ? item.see_preset_tab
                  : 1;
                return acc;
              }, {})
            );
          }
      }, [salonconsultationpresetlist]);


    const handleToggle = (consultationId) => {
        const updatedState = switchStates[consultationId] === 0 ? 1 : 0;
        setSwitchStates((prevState) => ({
            ...prevState,
            [consultationId]: updatedState,
        }));

        dispatch(
            updateConsultationStatus({
                // id: idvalue,
                salon_id: idvalue,
                see_consultation: updatedState,
                consultation_id: consultationId
            })
        );
    };

    const handleTogglePreset = (consultationId) => {
        const updatedState = switchStatesPreset[consultationId] === 0 ? 1 : 0;
        setSwitchStatesPreset((prevState) => ({
            ...prevState,
            [consultationId]: updatedState,
        }));

        dispatch(
            updateConsultationPresetStatus({
                see_preset_tab: updatedState,
                consultation_id: consultationId
            })
        );
    };


    return (
        <div>
            {/* <!-- Begin page --> */}
            <div id="layout-wrapper">


                {/* <!-- ========== Left Sidebar Start ========== --> */}
                <div className="vertical-menu">
                    <Sidebar />
                </div>

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
                                                <h4 class="title_text">Consultation Preset</h4>
                                            </div>


                                            <div class="table-responsive">
                                                <table id="" class="table dt-responsive dealers_table nowrap w-100">
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
                                                                CreatedBy{" "}
                                                                <img
                                                                    class="filt_arrow"
                                                                    src={
                                                                        require("../assets/images/greydownarrow.svg")
                                                                            .default
                                                                    }
                                                                />
                                                            </th>


                                                            <th className="hide-on-small">Actions</th>
                                                            <th className="hide-on-small">Consultations Tab</th>
                                                            <th className="hide-on-small">Preset Tab</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="td_color">
                                                        {
                                                            salonconsultationpresetlist?.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>{item?.form_title}</td>
                                                                            <td className="hide-on-small">--</td>
                                                                            <td>{item.hasOwnProperty("formcreatedbyadminPanel") ? "Admin" : "Salon"}</td>

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

                                                                            </td>
                                                                            <td>
                                                                                
                                                                                    <Form.Check
                                                                                        type="switch"
                                                                                        id={`custom-switch-${item?._id}`}
                                                                                        className="switchh"
                                                                                        checked={switchStates[item._id] === 0}
                                                                                        onChange={() => handleToggle(item._id)}
                                                                                    />
                                                                            </td>

                                                                            <td>
                                                                                    <Form.Check
                                                                                        type="switch"
                                                                                        id={`custom-switch-${item?._id}`}
                                                                                        className="switchh"
                                                                                        checked={switchStatesPreset[item._id] === 0}
                                                                                        onChange={() => handleTogglePreset(item._id)}
                                                                                    />
                                                                            </td>
                                                                        </tr>
                                                                    </>
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
                </div>

            </div>

        </div>
    )
}







