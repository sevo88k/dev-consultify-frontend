import React from 'react'

const CracketTooth = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">
      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Cracked tooth syndrome</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">

          <div>
            <p className="mb-4">
              Definition: A crack starting in the outer
              surface of the tooth, resulting in sharp pain on
              biting or release of bite due to movements in
              the tooth. These movements, in combination with
              bacteria being allowed to enter the tooth, lead
              to irritation of the nerve.
            </p>
            <ul className="img-section-row d-flex align-items-center">
              <li className="list-style-none">
                <img
                  src={require("../../../assets/images/prevention-education/teeth_prblm-2.jpg")}
                  alt=""
                />
                <img
                  src="images/tooth_prblm-3.jpg"
                  alt=""
                  className="ml-30"
                />
              </li>
              <li className="list-style-none">
                <img
                  src={require("../../../assets/images/prevention-education/tooth_prblm_4_new.jpg")}
                  alt=""
                />
              </li>
            </ul>

          </div>

          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Symptoms and Causes</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-100">
                  <div>
                    <h4>Symptoms</h4>
                    <ul className="causes-detail">
                      <li>
                        Pain on biting/release of bite
                      </li>
                      <li>
                        May get sensitivity to hot and cold
                      </li>
                      <li>Pain may be infrequent </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail  h-100">
                  <h4>Causes: </h4>
                  <ul className="causes-detail">
                    <li>
                      Grinding of teeth together
                    </li>
                    <li>
                      Teeth with large fillings, especially amalgam (metal), are weaker and more susceptible to cracking
                    </li>
                    <li>Biting very hard foods</li>
                    <li>Trauma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="treatment mt-5">
            <div className="main_section_title mb-4">
              <h2 className="text-center ">Treatment &amp; Prevention</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="causes_box_shadow treatment-prevention">

                  <ul className="causes-detail">
                    <li>
                      In early stages it may be managed with an adhesive restoration such as composite in combination with cuspal coverage (i.e. cover the biting surface of the tooth).
                    </li>
                    <li>
                      However, if the cracked tooth leads to the nerve of the tooth to become irreversibly inflamed the only solution for the pain would be either root canal treatment + crown or removal of the tooth.
                    </li>
                    <li>
                      If the crack extends too below the gum line or into the root the tooth may become unsavable and require extraction.
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CracketTooth