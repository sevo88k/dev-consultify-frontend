import React from "react";

const TMD = () => {
    return (
        <div className="col-xl-10 col-lg-9 ">
      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Cavity</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
          <div>
            <p>
              A hole in in the tooth that has formed as a result of tooth decay (caries) overtime. 
            </p>
            <h6 className="mb-0">
            How does caries develop? 
            </h6>
            <p>There are 4 factors that lead to the development of caries(decay):</p>
            <ul className="causes-detail">
                <li>Bacteria</li>
                <li>Sugar</li>
                <li>Tooth</li>
                <li>Time</li>
            </ul>
            <ul
                                    className="d-flex p-0
                                                img-section-row"
                                  >
                                    <li className="list-style-none">
                                      <img
                                        src={require("../../../assets/images/prevention-education/tooth_prblm_8.jpg")}
                                        alt=""
                                      />
                                    </li>
                                    <li
                                      className="list-style-none
                                                    ml-30"
                                    >
                                      <img
                                        src={require("../../../assets/images/prevention-education/cavity_new.jpg")}
                                        alt=""
                                      />
                                      <p
                                        className="text-center
                                                        mb-0"
                                      >
                                        A cavity in its later stages
                                      </p>
                                    </li>
                                  </ul>
          </div>
          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Prevention &amp; Treatment</h2>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-400 cavity_box">
                  <div>
                    <h4>Prevention</h4>
                    <ul className="causes-detail">
                      <li>
                      Strengthening and protecting the tooth:
                        <ul className="list-style-none inner_points">
                            <li>-	Use a fluoridated tooth paste and see a dentist for fluoride application. </li>
                            <li>-	A dentist may also seal the biting surface of the tooth to prevent food and bacteria from getting in. </li>
                        </ul>
                      </li>
                      <li>Low sugar intake and regular, effective brushing</li>
                      <li>Seeing a dentist/hygienist every 3 to 6 months for a clean. </li>                   
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-400 cavity_box">
                  <h4>Treatment</h4>
                  <ul className="causes-detail">
                    <li>
                    If the cavity becomes large and the decay extends into the inner surface of the tooth (the dentine) the tooth will need a filling. This is when the tooth decay is cleaned out by dentist and sealed from the oral environment with the use a filling material. It is important to still incorporate preventative measures so that caries doesn’t return to treated teeth or develop in new teeth. 
                    </li>
                    <li>It is important to try treat a cavity early, before the nerve of the tooth becomes infected or tooth much tooth structure is lost as other more invasive treatment may be required. </li>                   
                    <li>
                    Note: if a cavity develops in the root of the tooth a dentist may be unable to restore it and save the tooth.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </div>
    </div>
    );
};

export default TMD;
