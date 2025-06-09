import React from "react";

const DryInfectedSocket = () => {
  return (
    <div className="col-xl-10 col-lg-9">
      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Dry/Infected Socket</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
          <div>
            <p>
              A dry socket is a painful condition that occurs when a blood clot
              fails to form in the tooth socket following a tooth extraction, or
              if the blood clot becomes dislodged or is removed. This usually
              happens within the first 3 to 5 days after the extraction
              procedure.
            </p>
            <p>
              Background information: Typically, a blood clot forms in the
              socket, this protects the socket as it heals and forms the
              foundation for new bone and soft tissue.
            </p>
          </div>
          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Causes &amp; Symptoms</h2>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail">
                  <div>
                    <h4>Causes:</h4>
                    <ul className="causes-detail">
                      <li>
                        Fail to follow your dentist's instructions after the
                        procedure
                      </li>
                      <li>Are a smoker</li>
                      <li>Have had a dry socket before</li>
                      <li>Are over 25 years old</li>
                      <li>Have poorly controlled diabetes</li>
                      <li>Or if the extraction was difficult or complicated</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-100">
                  <h4>Symptoms:</h4>
                  <ul className="causes-detail">
                    <li>
                      Severe ache/ throbbing pain in your jaw or gum– can
                      resemble a toothache
                    </li>
                    <li>Local swelling of the gum</li>
                    <li>Halitosis (bad breath)</li>
                    <li>Bad metallic taste</li>
                    <li>
                      Tooth socket looks empty (you may see bone instead of a
                      blood clot)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="treatment mt-4">
            <div className="main_section_title mb-4">
              <h2 className="text-center ">Treatment &amp; Prevention</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-400">
                  <h4>Treatment:</h4>
                  <ul className="causes-detail">
                    <li>
                      See your dentist or surgeon if you think you have dry
                      socket
                    </li>
                    <li>
                      A dentist will wash out (irrigate) any debris or bony
                      fragments from the socket and then place a soothing
                      antiseptic dressing inside
                    </li>
                    <li>
                      If the pain persists after a week, this may have to be
                      repeated
                    </li>
                    <li>
                      Note: dry socket is NOT an infection, therefore
                      antibiotics are not required unless there is also an
                      infection. Your dentist will assess the need for
                      antibiotics based on your general healthand the clinical
                      presentation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-400">
                  <h4>Prevention:</h4>
                  <ul className="causes-detail">
                    <li>Gentle warm saltwater mouth rinses 4 times a day</li>
                    <li> Maintaining good oral hygiene</li>
                    <li>Taking regular pain relief if required</li>
                    <li>
                      Avoiding smoking and use of tobacco products or vapes
                    </li>
                    <li>Drinking plenty of clear fluids</li>
                    <li>Maintaining a healthy diet</li>
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

export default DryInfectedSocket;
