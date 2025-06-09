import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
import { toastfunc } from "../../../Redux/Reducers/user/ConsultationSlice";
import { LpSymtomCheckerResultImg1 } from "./LpSymtomCheckerResultImg1";
import ModalView from "./ModalView";
import SignUpModal from "./SignUpModal";
export default function LpSymtomCheckerFive({ scFlow }) {
  const [index, setIndex] = useState(false); 
  const [viewModal, setShowModal] = useState(false);
  const [otherOptionsClick, setOtherOptionsClick] = useState(false);
  const [modalShow,setModalShow]=useState(false)
  const [jawPainQues, setJawPainQues] = useState();
  const [resultPage, setResultPage] = useState(false);
  const [jawArr, setJawArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setJawPainQues(scFlow[1].JawAche[0]);
  }, [scFlow]);

  const handleClick = (item) => {
    if (!jawArr.includes(item)) {
      setJawArr([...jawArr, item]);
    } else {
      const index = jawArr?.indexOf(item);
      if (index > -1) {
        jawArr.splice(index, 1);
        setJawArr([]);
        setJawArr(jawArr);
      }
    }
  };

  const handleCheckClick = () => {

    const arr = jawArr.find(
      (dataItem) => dataItem == "Swelling in your gums around your back tooth"
    );
    if (arr) {
      setModalShow(true)
      // setResultPage(true);
    } else if (jawArr.length > 0) {
      setOtherOptionsClick(true)
      setModalShow(true)
      // navigate("/tmd/pd");
    } else {
      toastfunc("Select atleast one symptom");
    }
  };

  return (
    <>
      <div>
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
        <ModalView handleCheckClick={handleCheckClick} index={index} modalShow={viewModal} setModalShow={setShowModal} />
        {resultPage == false && scFlow[1].key == "JawAche" && (
          <section className="tooth-aid-prblms  symptom-checker">
            <div className="container">
              <div className="card card_shadow symptom_height">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-center mb-5">{jawPainQues?.ques}</h2>
                    <ul className="mb-0 d-flex p-0 justify-content-center align-items-center flex-wrap  max-options">
                      {jawPainQues?.options.map((item, i) => {
                        return (
                          <li className="inner-options same-width-btn" key={i}>
                            <div
                              onClick={() => {handleClick(item);setIndex(false)}}
                              className={
                                jawArr?.includes(item)
                                  ? "option-btn option-btn-border border-focus cursor-pointer"
                                  : "option-btn option-btn-border cursor-pointer"
                              }
                            >
                              {item}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => {setShowModal(true);setIndex(true)}}
                        className="btn btn-primary white-btn"
                      >
                        Check
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>)}
        { /*resultPage == false && scFlow[1].key == "JawAche" && (
          <section className="tooth-aid-prblms  symptom-checker">
            <div className="container">
              <div className="card card_shadow">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-center mb-5">{jawPainQues?.ques}</h2>
                    <ul className="mb-0 d-flex p-0 justify-content-center align-items-center flex-wrap  max-options">
                      {jawPainQues?.options.map((item, i) => {
                        return (
                          <li className="inner-options same-width-btn" key={i}>
                            <div
                              onClick={() => handleClick(item)}
                              className={
                                jawArr?.includes(item)
                                  ? "option-btn option-btn-border border-focus cursor-pointer"
                                  : "option-btn option-btn-border cursor-pointer"
                              }
                            >
                              {item}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => handleCheckClick()}
                        className="btn btn-primary white-btn"
                      >
                        Check
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) */}
        {
        modalShow==true && <SignUpModal modalShow={modalShow} setModalShow={setModalShow} setImgResult={setResultPage} otherOptionsClick={otherOptionsClick}/>
      }
        {resultPage == true && (
          <LpSymtomCheckerResultImg1 scFlow={scFlow} resultPage={resultPage} index={index}/>
        )}
      </div>
    </>
  );
}
