import React, { useEffect, useState } from "react";
import { LpSymtomCheckerResultImg1 } from "./LpSymtomCheckerResultImg1";
import SignUpModal from "./SignUpModal";
export default function LpSymtomCheckerTwo({ scFlow }) {
  const [singleObject, setSingleObject] = useState();
  const [imgResult, setImgResult] = useState(false);
  const [modalShow,setModalShow]=useState(false)
  const [reData, setRedata] = useState();
  const [percent, setPercent] = useState(1);
  const [colorData, setColorData] = useState({
    red: 0,
    black: 0,
    brown: 0,
    pink: 0,
    strictRed: 0,
    strictBlack: 0,
  });

  const resultColorCode = {
    red: 8,
    black: 5,
    brown: 4,
    pink: 1,
    strictRed: 8,
    strictBlack: 7,
  };
  useEffect(
    (id) => {
      setSingleObject(scFlow[0].DENTAL_PAIN[0]);
    },
    [scFlow]
  );

  const handleImgClick = (answer) => {
    setModalShow(true)
    // setImgResult(true);
    setRedata(answer);
  };
  const handleClickAnswer = (colorCode, strictcode) => {
    setSingleObject(scFlow[0].DENTAL_PAIN[singleObject?.id + 1]);
    // Iterate through the object
    for (const key in colorData) {
      if (key == colorCode && strictcode != "") {
        setColorData({
          ...colorData,
          [key]: colorData[key] + 1,
          [strictcode]: colorData[strictcode] + 1,
        });
      } else if (key == colorCode && strictcode == "") {
        setColorData({ ...colorData, [key]: colorData[key] + 1 });
      }
    }
  };

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 1;
      if (newPercent > 10) {
        return 10;
      }
      return newPercent;
    });
  };
  return (
    <>
      <section className="question_bar">
        <div className="container">
          <div className="row">
            {
              percent == 10 ? null : <div className="col-md-12">

                <h4 className="text-center">Question {singleObject?.id + 1}</h4>
                <div className="progress_bar">

                  <p className="ques-one" style={{ width: `${percent * 10}%` }}></p>

                </div>
                {/* <div className="mt-2">
                              <button className="white-btn">Back</button>
                          </div>*/}
              </div>
            }

          </div>
        </div>
      </section>
      {imgResult == false && scFlow[0].key == "DENTAL_PAIN" && (
        <section className="tooth-aid-prblms  symptom-checker">
          <div className="container">
            <div className={singleObject?.id == 9?"card card_shadow card_shadow_height":"card card_shadow card_shadow_height card-height-small"}>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center mb-5">{singleObject?.ques}</h2>
                  <div className="option-choose text-center">
                    {singleObject?.id == 9 ? (
                      <div>
                        <div className="d-flex justify-content-between symptom_images_inner">
                          {singleObject?.options?.map((item, i) => {
                            return (
                              item?.img != undefined && (
                                <div key={i} className="symptom-img ">
                                  <img
                                    onClick={() => handleImgClick(item.answer)}
                                    src={require("../../../assets/images/" +
                                      item?.img)}
                                  />
                                </div>
                              )
                            );
                          })}
                        </div>

                        <div
                          // onClick={() => setImgResult(true)}
                          onClick={() => setModalShow(true)}
                          className="option-btn mt-5 swelling_btn"
                        >
                          {singleObject?.options[2]?.type}
                        </div>
                      </div>
                    ) : (
                      <ul className="mb-0 d-flex p-0 justify-content-center align-items-center flex-wrap option-choose choose_option_content">
                        {singleObject?.options?.map((item, i) => {
                          return (
                            <li key={i}>
                              <div
                                onClick={() => {
                                  handleClickAnswer(
                                    item?.colorCode,
                                    item?.strictCode
                                  )
                                  increase()
                                }
                                }
                                className="option-btn cursor-pointer"
                              >
                                {item?.type}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
          setAnswer={reData}
          colorData={colorData}
        />
      )}
    </>
  );
}
