import React from "react";
import { useState, useEffect } from "react";
import { LpSymtomCheckerResultImg1 } from "./LpSymtomCheckerResultImg1";
import LpSymtomCheckerTwo from "./LpSymtomCheckerTwo";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
import Modal from "react-bootstrap/Modal";
import SignUpModal from "./SignUpModal";
export default function LpSymtomCheckerThree({ scFlow }) {
  const [imgResult, setImgResult] = useState(false);
  const [dentalPain, setDentalPain] = useState(false);
  const [modalShow,setModalShow]=useState(false)
  const [headQues, setHeadQues] = useState();
  const [viewVal, setViewVal] = useState(false);
  const [percent, setPercent] = useState(0);
  const [colData, setColorData] = useState({
    red: 0,
    black: 0,
    special: 0,
  });
  useEffect(() => {
    setHeadQues(scFlow[2].Headaches[0]);
  }, [scFlow]);
  useEffect(() => {
    if (colData.special == 1 && colData.red < colData.black) {
      setViewVal(true);
    }
  }, []);
  const handleClick = (colorCode) => {
    setHeadQues(scFlow[2].Headaches[headQues?.id + 1]);
    for (const key in colData) {
      if (key == colorCode) {
        setColorData({ ...colData, [key]: colData[key] + 1 });
      } else if (key == colorCode) {
        setColorData({ ...colData, [key]: colData[key] + 1 });
      }
    }
    if (headQues?.id == 5) {
      if (colData.special == 1 && colData.red < colData.black) {
        setViewVal(true);
      } else {
        setModalShow(true);
        // setImgResult(true)
      }
    }
  };
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 1;
      if (newPercent > 5) {
        return 5;
      }
      return newPercent;
    });
  };
  const handleClose = () => {
    setViewVal(false);
  };
  return (
    <>
      <Modal
        show={viewVal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="admin-popup provisional-popup detailed_popup"
      >
        <Modal.Header
          closeButton
          onClick={() => {
            setHeadQues(scFlow[2].Headaches[5]), handleClose();
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive table-defaut-design text_inner">
            <h4>More details required</h4>
            According to your answers so far, we recommend completing our Dental
            Pain questions.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-column">
            <div className="btn_submit mb-3">
              <button
                onClick={() => {
                  setDentalPain(true), handleClose();
                }}
                className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
              >
                Okay
              </button>
            </div>
            <div className="btn_submit ">
              <button
                onClick={() => {
                  setHeadQues(scFlow[2].Headaches[5]), handleClose();
                }}
                className="btn btn-primary cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      {dentalPain == false && (
        <div>
          <section className="question_bar">
            <div className="container">
              <div className="row">
                {percent == 6 ? null : (
                  <div className="col-md-12">
                    <h4 className="text-center">Question {headQues?.id + 1}</h4>
                    <div className="progress_bar">
                      <p
                        className="ques-one"
                        style={{ width: `${percent * 20}%` }}
                      ></p>
                    </div>
                    {/* <div className="mt-2">
                                <button className="white-btn">Back</button>
                            </div>              */}
                  </div>
                )}
              </div>
            </div>
          </section>
          {imgResult == false && scFlow[2].key == "Headaches" && (
            <section className="tooth-aid-prblms  symptom-checker">
              <div className="container">
                <div className="card card_shadow">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="text-center mb-5">{headQues?.ques}</h2>
                      <div className="option-choose text-center">
                        <ul className="mb-0 d-flex p-0 justify-content-center align-items-center flex-wrap option-choose choose_option_content">
                          {headQues?.options.map((item, i) => {
                            return (
                              <li key={i}>
                                <div
                                  onClick={() => {
                                    {
                                      handleClick(item?.colorCode);
                                      increase();
                                    }
                                  }}
                                  className="option-btn"
                                >
                                  {item?.type}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {
        modalShow==true && <SignUpModal modalShow={modalShow} setModalShow={setModalShow} setImgResult={setImgResult}/>
      }
          {imgResult == true && (
            <LpSymtomCheckerResultImg1
              scFlow={scFlow}
              colData={colData}
              type="headache"
            />
          )}
        </div>
      )}
      {dentalPain == true && <LpSymtomCheckerTwo scFlow={scFlow} />}
    </>
  );
}
