import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import SymptomCheckerOne from "./SymtomCheckerOne";
import data from "./symptom-checker-data";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";

export default function SymptomCheckerStart() {
  const [activeClick, setActiveClick] = useState();
  const [specialCase, setSp] = useState(false);
  const [activeClickData, setActiveClickData] = useState();
  const [imgResult, setImgResult] = useState(false);
  const [showTmd, setShowTMD] = useState(false);
  const [checkbox, setCheckBox] = useState(false);
  const [pressedNext, setPressNext] = useState(false);

  const handleNext = () => {
    if (checkbox) {
      setPressNext(true);
      setActiveClick("Dental Pain");
      setActiveClickData(data[0]);
    } else {
      toastInfo("Please agree to our Terms & Conditions");
    }
  };
useEffect(()=>{
  if(specialCase==true){
    setPressNext(true);
    setActiveClick("Dental Pain");
    setActiveClickData(data[0]);
  }
 
},[specialCase])
  return (
    <Layout>
      <div className="col-lg-10">
        <div className="desc_area">
          <div className="row">
            <div className="col-xl-2 col-lg-3 ">
              <div className="overflow_prop">
                <ul className="problem_tabs p-0 mb-0 tab_scroll">
                  {data?.map((item, i) => {
                    return (
                      <li
                        onClick={() => {
                          pressedNext && setActiveClick(item?.key);
                          pressedNext && setActiveClickData(item);
                          setImgResult(false);
                          setShowTMD((prev) => !prev);
                        }}
                      >
                        <Link
                          className={
                            activeClick == item?.key ? "active_main" : ""
                          }
                        >
                          {item?.key}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {activeClick == undefined ? (
              <div className="col-xl-10 col-lg-9">
                <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
                  <h2 className="main-title">Symptom Checker</h2>
                  <div className="prblm_inner_content d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="red_text">Before we start</h3>
                      <p>
                        Our symptom checker provides a likely diagnosis based
                        on your symptoms, which you can then learn more about in
                        our education pages. A video consultation is recommended
                        to help reach a definitive diagnosis where we offer
                        treatment advice, prescriptions if indicated, and ways
                        to prevent your symptoms from reoccurring in the future.
                        Disclaimer: If you have a facial swelling that is
                        spreading towards your eye, neck, or have trouble breathing
                        or swallowing, please seek emergency services / 999
                        immediately.
                      </p>
                      <h4 className="red_text mb-5 fw-500">
                        If you have an urgent medical emergency CALL 999.
                      </h4>

                      <p>
                        <input
                          onChange={(e) => setCheckBox(e.target.checked)}
                          type="checkbox"
                          className="me-1"
                        />
                        Please tick the box to show you agree with our Terms &
                        Conditions
                      </p>
                    </div>
                    <div className="next_page_btn">
                      <button onClick={handleNext} className="btn dark_btn">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <SymptomCheckerOne
                activeClickData={activeClickData}
                imgResult={imgResult}
                setImgResult={setImgResult}
                tmdVal={showTmd}
                setSp={setSp}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
