import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
import { HashLink } from "react-router-hash-link";
import Modal from "react-bootstrap/Modal";
import ModalView from "./ModalView";
import { useDispatch, useSelector } from "react-redux";
import { getConsultationDate } from "../../../Redux/Actions/user/userAll";
import { LpSymtomCheckerResultImg1 } from "./LpSymtomCheckerResultImg1";
import SignUpModal from "./SignUpModal";
export default function LpSymtomCheckerFour({ scFlow }) {
  const [ulcerQues, setUlcerQues] = useState();
  const [viewModal, setShowModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowRegister,setModalShowRegister]=useState(false)
  const [imgResult, setImgResult] = useState(false);
  const [indexVal, setIndexVal] = useState('');

  const [reData, setRedata] = useState();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const consultaion = useSelector(
    (state) => state?.consultaions?.upcomingConsultations
  );
  useEffect(() => {
    setUlcerQues(scFlow[3].Ulcers[0]);
  }, [scFlow]);
useEffect(()=>{
  dispatch(getConsultationDate())
},[])
  const handleNoClick = () => {
    if (sessionStorage.getItem("token")) {
      toastInfo("We recommend booking a consultation for video assessment");
      navigate("/consultations");
    } else {
      toastInfo("We recommend booking a consultation for video assessment");
      navigate("/userlogin");
    }
  };
  const handleClose = () => {
    setShowModal(false);
  }; 
  const handleImgClick = (answer) => {
    setModalShowRegister(true)
    // setImgResult(true);
    setRedata(answer);
  };
  return (
    <>
    <Modal
    show={viewModal}
    onHide={handleClose}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="admin-popup provisional-popup detailed_popup"
  >
    <Modal.Header
      closeButton
      onClick={() => {
         handleClose();
      }}
    >
      <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="table-responsive table-defaut-design text_inner">
        <h4>Consultation Recommended</h4>
        From the information you've provided, we have concluded a provisional diagnosis. For a more accurate diagnosis, please book a consultation with one of our team.
      </div>
    </Modal.Body>
    <Modal.Footer>
      <div className="d-flex flex-column">
        <div className="btn_submit mb-3">
          <button
            onClick={() => {
              handleNoClick(),
             handleClose()
            }}
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
          >
            Okay
          </button>
        </div>
        <div className="btn_submit ">
          <button
            onClick={() => {
            handleClose();
            }}
            className="btn btn-primary cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal.Footer>
  </Modal>
  <ModalView modalShow={modalShow} setModalShow={setModalShow} consultaion={consultaion} handleImgClick={handleImgClick} indexVal={indexVal}/>
      <section className="question_bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center">Question 1</h4>
              <div className="progress_bar">
                <p className="ques-one" style={{ width: "100%" }}></p>
              </div>
              {/* <div className="mt-2">
                                <button className="white-btn">Back</button>
                            </div>              */}
            </div>
          </div>
        </div>
      </section>
      {imgResult==false && scFlow[3].key == "Ulcers" && (
        <section className="tooth-aid-prblms  symptom-checker">
          <div className="container">
            <div className="card card_shadow symptom_height">
              <div className="row">
                <div className="col-md-12">
                  <div className="ulcersImgDiv">
                    {/* <img
                      src={require("../../../assets/images/problems/ulcers.png")}
                    /> */}
                    <a
                      onClick={() =>
                      {setModalShow(true)
                        setIndexVal('0')
                      }
                      // setImgResult(true)
                      }
                      // to="/mouthulcers/pd"
                      className="cursor-pointer"
                    >
                      {
                        ulcerQues?.options[1] != undefined && <img
                          src={require("../../../assets/images/problems/" +
                            ulcerQues?.options[0])} />
                      }

                    </a>

                    <a
                      onClick={() =>{
                        setModalShow(true)
                        setIndexVal('1')
                        // setModalShow(true)
                        }
                        }
                      // to="/diagnosis/#Acute-apical-abscess"
                    // className="option-btn"
                    >
                      {
                        ulcerQues?.options[1] != undefined && <img
                          src={require("../../../assets/images/" +
                            ulcerQues?.options[1])} />
                      }

                      {/* {ulcerQues?.options[1]} */}
                    </a>
                  </div>
                  <h2 className="text-center mb-5">{ulcerQues?.ques}</h2>
                  <ul className="mb-0 d-flex p-0 justify-content-center align-items-center flex-wrap option-choose choose_option_content">
                   {/* <li className="h-40">
                       <div
                        onClick={() => navigate("/mouthulcers/pd")}
                        className="option-btn "
                      >
                        {ulcerQues?.options[0]}
                      </div> 
                    </li>*/}
                    {/*  <li className="h-40">

                     <HashLink
                 
                        to="/diagnosis/#Acute-apical-abscess"
                        className="option-btn"
                      >
                      {
                        ulcerQues?.options[1] != undefined && <img 
                        src={require("../../../assets/images/" +
                        ulcerQues?.options[1])} />
                      }
                      
                        {ulcerQues?.options[1]}
                      </HashLink> 

                    </li>*/}
                    <li className="">

                      <div
                        onClick={() =>  setShowModal(true) }
                        className="option-btn"
                      >
                        {ulcerQues?.options[2]}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {
        modalShowRegister==true && <SignUpModal modalShow={modalShowRegister} setModalShow={setModalShowRegister} setImgResult={setImgResult}/>
      }
      {imgResult==true&&( <LpSymtomCheckerResultImg1
      scFlow={scFlow}
      reData={reData}
       />)
      }
    </>
  );
}
