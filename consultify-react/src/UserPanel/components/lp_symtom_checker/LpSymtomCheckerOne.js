import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopBarBlue from "../topbarUser/TopBarBlue";
import LpSymtomCheckerTwo from "./LpSymtomCheckerTwo";
import scFlow from "./symptom-checker-data";
import LpSymtomCheckerThree from "./LpSymtomCheckerThree";
import LpSymtomCheckerFour from "./LpSymtomCheckerFour";
import LpSymtomCheckerFive from "./LpSymtomCheckerFive";
import LayoutSymtom from "../../Layout/LayoutSymtom";
export default function LpSymtomCheckerOne() {
  const [diseaseClick, setDiseaseClick] = useState(false);
  const [headDisease, setHeadDisease] = useState(false);
  const [ulcerDisease, setUlcerDisease] = useState(false);
  const [jawPainDisease, setJawPainDisease] = useState(false);
  return (
    <>
      <div id="wrapper">
        <LayoutSymtom>
          {diseaseClick == false &&
            headDisease == false &&
            ulcerDisease == false &&
            jawPainDisease == false && (
              <section className="tooth-aid-prblms symptom-checker m-120">
                <div className="container">
                  <div className="card card_shadow lg_height card-height-box">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center mb-5">
                          Are you experiencing any of the following?
                        </h2>
                        <div className="problems-content hm-prblm-sect">
                          <div className="row">
                            <div className="col-md-6 inner_prblm_detail inner-prblm_img d-flex justify-content-end prblm_img">
                              <div
                                onClick={() => setDiseaseClick(true)}
                                className="position-relative img_text"
                              >
                                <img
                                  src={require("../../../assets/images/problems/filling-issue.png")}
                                  className="img-fluid"
                                  alt="tooth-ache"
                                />
                                <h3 className="position-absolute absolute-txt">
                                  Dental pain
                                </h3>
                              </div>
                            </div>
                            <div className="col-md-6 inner_prblm_detail inner-prblm_img_end d-flex justify-content-start prblm_img">
                              <div
                                onClick={() => setJawPainDisease(true)}
                                className="position-relative img_text"
                              >
                                <img
                                  src={require("../../../assets/images/problems/abcesses.png")}
                                  className="img-fluid"
                                  alt="abcesses"
                                />
                                <h3 className="position-absolute absolute-txt">
                                  Jaw Ache
                                </h3>
                              </div>
                            </div>
                            <div className="col-md-6 inner_prblm_detail inner-prblm_img d-flex justify-content-end prblm_img">
                              <div
                                onClick={() => setHeadDisease(true)}
                                className="position-relative img_text"
                              >
                                <img
                                  src={require("../../../assets/images/problems/tooth-ache.png")}
                                  className="img-fluid"
                                  alt="filling-issue"
                                />
                                <h3 className="position-absolute absolute-txt">
                                  Headaches/Migraines
                                </h3>
                              </div>
                            </div>
                            <div className="col-md-6 inner_prblm_detail inner-prblm_img_end d-flex justify-content-start prblm_img">
                              <div
                                onClick={() => setUlcerDisease(true)}
                                className="position-relative img_text"
                              >
                                <img
                                  src={require("../../../assets/images/problems/ulcers.png")}
                                  className="img-fluid"
                                  alt="ulcers"
                                />
                                <h3 className="position-absolute absolute-txt">
                                  Ulcers
                                </h3>
                              </div>
                            </div>
                            {/* <div className="col-4 inner_prblm_detail">
                                            <a href="#" className="position-relative img_text">
                                                <img src={require("../../../assets/images/problems/imp-issues.png")} className="img-fluid" alt="imp-issues"/>
                                                <h3 className="position-absolute absolute-txt">Implant Issues</h3>
                                            </a>
                                        </div> */}
                            {/* <div className="col-4 inner_prblm_detail">
                                            <a href="#" className="position-relative img_text">
                                                <img src={require("../../../assets/images/problems/dent-issue.png")}  className="img-fluid" alt="denture-isssue"/>
                                                <h3 className="position-absolute absolute-txt">Denture Issues</h3>
                                            </a>
                                        </div> */}
                            {/* <div className="col-4 inner_prblm_detail">
                                            <a href="#" className="position-relative img_text">
                                                <img src={require("../../../assets/images/problems/swelling.png")} className="img-fluid" alt="swelling"/>
                                                <h3 className="position-absolute absolute-txt">Swelling</h3>
                                            </a>
                                        </div> */}

                            {/* <div className="col-4 inner_prblm_detail">
                                            <a href="#" className="position-relative img_text">
                                                <img src={require("../../../assets/images/problems/bleeding-gums.png")} className="img-fluid" alt="bleeding-gums"/>
                                                <h3 className="position-absolute absolute-txt">Bleeding Gums</h3>
                                            </a>
                                        </div> */}
                            {/* <div className="col-4 inner_prblm_detail">
                                            <a href="#" className="position-relative img_text">
                                                <img src={require("../../../assets/images/problems/cracked-tooth.png")} className="img-fluid" alt="cracked-tooth"/>
                                                <h3 className="position-absolute absolute-txt">Cracked Tooth</h3>
                                            </a>
                                        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

          {diseaseClick == true && headDisease == false && (
            <LpSymtomCheckerTwo scFlow={scFlow} />
          )}
          {headDisease == true && ulcerDisease == false && (
            <LpSymtomCheckerThree scFlow={scFlow} />
          )}
          {ulcerDisease == true && jawPainDisease == false && (
            <LpSymtomCheckerFour scFlow={scFlow} />
          )}
          {jawPainDisease == true && <LpSymtomCheckerFive scFlow={scFlow} />}
        </LayoutSymtom>
      </div>
    </>
  );
}
