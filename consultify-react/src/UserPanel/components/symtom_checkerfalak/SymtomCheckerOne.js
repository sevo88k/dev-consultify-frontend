import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toastfunc } from "../../../Redux/Reducers/user/ConsultationSlice";
import { LpSymtomCheckerResultImg1 } from "../lp_symtom_checker/LpSymtomCheckerResultImg1";
import { ResultPage } from "./ResultPage";
import { HashLink } from "react-router-hash-link";
import TMD from "../common_issues/TMD";
import MouthUlcers from "../common_issues/MouthUlcers";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
import Modal from "react-bootstrap/Modal";
export default function SymptomCheckerOne({
  activeClickData,
  setImgResult,
  imgResult,
  tmdVal,
  setSp,
}) {
  const navigate = useNavigate();
  const [isTMD, setShowTMD] = useState(false);
  const [isUlcers, setShowUlcers] = useState(false);
  const [dataArr, setDataArr] = useState([]);
  const [jawArr, setJawArr] = useState([]);
  const [viewVal, setShowVal] = useState(false);
  const [check, setCheck] = useState(false);
  const [colorData, setColorData] = useState({
    red: 0,
    black: 0,
    brown: 0,
    pink: 0,
    strictRed: 0,
    strictBlack: 0,
    special: 0,
  });
  const [colData, setColData] = useState({
    red: 0,
    black: 0,
    brown: 0,
    pink: 0,
    strictRed: 0,
    strictBlack: 0,
    special: 0,
  });
  const [reData, setRedata] = useState();
  useEffect(() => {
    setShowTMD(false);
    setShowUlcers(false);
  }, [tmdVal]);

  useEffect(() => {
    setDataArr([activeClickData?.name[0]]);
  }, [activeClickData]);
  const handleActiveClick = (
    itemParent,
    index,
    indexoption,
    colorCode,
    strictcode,
    item
  ) => {
    dataArr?.forEach((element, i) => {
      if (index == i) {
        element?.options?.forEach((ele, optIndex) => {
          if (indexoption == optIndex) {
            ele.active = true;
          } else {
            ele.active = false;
          }
        });
      }
    });

    for (const key in colorData) {
      if (key == colorCode && strictcode != "") {
        setColorData({
          ...colorData,
          [key]: colorData[key] + 1,
          [strictcode]: colorData[strictcode] + 1,
        });
        setColData({
          ...colorData,
          [key]: colorData[key] + 1,
          [strictcode]: colorData[strictcode] + 1,
        });
      } else if (key == colorCode && strictcode == "") {
        setColorData({ ...colorData, [key]: colorData[key] + 1 });
        setColData({ ...colorData, [key]: colorData[key] + 1 });
      }
    }
    setDataArr([...dataArr]);
    const mainInd = dataArr?.findIndex((element) => element.id == index + 1);
    if (mainInd == -1 && activeClickData?.name[itemParent + 1] != undefined) {
      setDataArr([...dataArr, activeClickData?.name[itemParent + 1]]);
    } else {
      setDataArr([dataArr[0]]);
      setColorData({
        red: 0,
        black: 0,
        brown: 0,
        pink: 0,
        strictRed: 0,
        strictBlack: 0,
        special: 0,
      });
    }
    if (activeClickData?.key == "Headaches/Migraines" && itemParent == 5) {
      if (colData.special == 1 && colData.red < colData.black) {
        toastInfo(
          "It seems you have some serious brain condition, Please follow the dental pain flow"
        );
        setSp(true);
        setImgResult(false);
      }else{ setImgResult(true)}
    }else{setSp(false)} 

    if (activeClickData?.key == "Ulcers" && itemParent == 0) {
      // if (indexoption == 0) {
      //   navigate("/diagnosis#mouth_ulcers");
      // }
      if (indexoption == 1) {
        if (sessionStorage.getItem("token")) {
          navigate("/consultations");
        } else {
          navigate("/userlogin");
        }
      }
    }
    if (activeClickData?.key == "Jaw Ache") {
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
    }
  };
  const handleImgClick = (answer) => {
    setImgResult(true);
    setRedata(answer);
  };

  const handleClose = () => {
    setShowVal(false);
  };

  const handleCheckClick = () => {
    const jawData = jawArr.find(
      (item) => item == "Swelling in your gums around your back tooth"
    );
    if (jawData) {
      setImgResult(true);
      setCheck(true);
    } else if (jawArr.length > 0) {
      // navigate("/diagnosis");
      setShowVal(true);
      setShowTMD(true);
      // toastInfo("Provisional Diagnosis");
    } else {
      toastfunc("Please select before move.");
    }
  };

  const handleUlcerClick = () => {
    setShowUlcers(true);
    setShowVal(true);
  };
  return (
    <>
      <Modal
        show={viewVal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="admin-popup provisional-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> Provisional Diagnosis</h4>
          <div className=" table-defaut-design text_inner">
            From the information you've provided, we have concluded a
            provisional diagnosis. For a more accurate diagnosis, please book a
            consultation with one of our team.
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="btn_submit ">
            <button
              onClick={handleClose}
              className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
            >
              Okay
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {isTMD ? (
        <TMD />
      ) : isUlcers ? (
        <MouthUlcers />
      ) : (
        <div className="col-xl-10 col-lg-9">
          <div className="problem_desc border-radius-prop">
            <h2 className="main-title mb-0">{activeClickData?.key}</h2>

            {imgResult == false && (
              <div className="questions_part  d-flex flex-column justify-content-between">
                {dataArr?.map((itemParent, index) => {
                  return (
                    <div className="ques_detail">
                      {activeClickData?.key == "Ulcers" && (
                        <img
                          className="ulcer_img_logged_in"
                          src={require("../../../assets/images/problems/ulcers.png")}
                        />
                      )}
                      <div
                        className={`d-flex justify-content-between align-items-center ques_detail-inner  ${
                          activeClickData?.key == "Jaw Ache" &&
                          "jaw_ques_detail-inner"
                        } 
                        ${
                                          activeClickData?.key == "Ulcers"
                                            ? " ulcer-options-width"
                                            : ""
                                        }
                        `}
                      >
                        <p className="mb-0">{itemParent?.ques}</p>
                        <div
                          className={`options_part questions_options ${
                            activeClickData?.key == "Jaw Ache" &&
                            "jaw_questions_options"
                          }`}
                        >
                          <ul
                            className={`mb-0 d-flex p-0  ${
                              activeClickData?.key == "Jaw Ache" &&
                              "jaw_symptom_ul"
                            }`}
                          >
                            {itemParent?.id == 9 ? (
                              <li>
                                <div className="d-flex justify-content-between">
                                  {itemParent?.options?.map((item, i) => {
                                    return (
                                      item?.img != undefined && (
                                        <div
                                          key={i}
                                          className="symptom-img symptom_img_depiction"
                                        >
                                          <img
                                            onClick={() =>
                                              handleImgClick(item.answer)
                                            }
                                            src={require("../../../assets/images/" +
                                              item?.img)}
                                          />
                                        </div>
                                      )
                                    );
                                  })}
                                </div>
                                <div
                                  onClick={() => setImgResult(true)}
                                  className="option-btn mt-2 btn_end"
                                >
                                  {itemParent?.options[2]?.type}
                                </div>
                              </li>
                            ) : (
                              itemParent?.options?.map((item, indexoption) => {
                                return activeClickData?.key == "Ulcers" ? (
                                  <HashLink
                                    onClick={() => {
                                      indexoption == 0
                                        ? handleUlcerClick(): indexoption == 1 ? navigate("/diagnosis")
                                        : toastInfo(
                                            "We recommend booking a consultation for video assessment"
                                          );
                                    }}
                                    to={indexoption == 2 && "/consultations" || indexoption == 1 &&"/diagnosis/#Acute-apical-abscess"}
                                  >
                                    <li
                                      onClick={() =>
                                        handleActiveClick(
                                          itemParent?.id,
                                          index,
                                          indexoption,
                                          item?.colorCode,
                                          item?.strictCode,
                                          item?.type
                                        )
                                      }
                                      className={
                                        activeClickData?.key == "Jaw Ache" &&
                                        "jaw_symptom_li"
                                      }
                                    >
                                      <a
                                        className={`select_option_btn cursor-pointer w-75 ${
                                          activeClickData?.key == "Jaw Ache"
                                            ? jawArr?.includes(item?.type)
                                              ? "active-btn jaw_select_option_btn"
                                              : "jaw_select_option_btn"
                                            : item?.active == true
                                            ? "active-btn"
                                            : ""
                                        } ${
                                          activeClickData?.key == "Dental Pain"
                                            ? "h-38 fixHeight "
                                            : ""
                                        } 
                                        
                                        `}
                                      >
                                        {item?.type}
                                      </a>
                                    </li>
                                  </HashLink>
                                ) : (
                                  <li
                                    onClick={() =>
                                      handleActiveClick(
                                        itemParent?.id,
                                        index,
                                        indexoption,
                                        item?.colorCode,
                                        item?.strictCode,
                                        item?.type
                                      )
                                    }
                                    className={
                                      activeClickData?.key == "Jaw Ache" &&
                                      "jaw_symptom_li"
                                    }
                                  >
                                    <a
                                      className={`select_option_btn cursor-pointer w-75 ${
                                        activeClickData?.key == "Jaw Ache"
                                          ? jawArr?.includes(item?.type)
                                            ? "active-btn jaw_select_option_btn"
                                            : "jaw_select_option_btn"
                                          : item?.active == true
                                          ? "active-btn"
                                          : ""
                                      }  ${
                                        activeClickData?.key == "Dental Pain"
                                          ? "h-38 fixHeight"
                                          : ""
                                      }  `}
                                    >
                                      {item?.type}
                                    </a>
                                  </li>
                                );
                              })
                            )}
                          </ul>
                          {activeClickData?.key == "Jaw Ache" && (
                            <div className="d-flex justify-content-center">
                              <button
                                onClick={() => handleCheckClick()}
                                className={`btn btn-primary white-btn ${
                                  activeClickData?.key == "Jaw Ache" &&
                                  "jaw_white-btn"
                                }`}
                              >
                                Check
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* <div className="next_page_btn">
              <a href="#" className="btn dark_btn">
                Next
              </a>
            </div> */}
              </div>
            )}
            {imgResult == true && (
              <ResultPage
                check={check}
                setAnswer={reData}
                colorData={colorData}
                type={
                  activeClickData?.key == "Headaches/Migraines"
                    ? "Headache"
                    : "Migraine"
                }
                colData={colData}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
