import React from 'react'

const LateralAbscess = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">

      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Lateral periodontal abscess</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
          <div>
            <p className="mb-4">
              Definition: When you suffer from gum disease the
              gum starts to pull away from the tooth forming a
              pocket. Bacteria can enter this pocket and
              rapidly grow. If this pocket is sealed off at
              the gum line, usually by hard food deposits know
              as calculus, this causes the soft tissues to
              become inflamed, leading to a swelling in the
              gum. This is known as a lateral periodontal
              abscess.
            </p>
            <img
              src={require("../../../assets/images/prevention-education/tooth_prblm_7.jpg")}
              alt="" className=''
            />
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
                        an intense, throbbing pain in affected tooth/gum
                      </li>
                      <li>
                        May notice a bad taste in your mouth
                      </li>
                      <li>The tooth may feel loose </li>
                      <li>Pain may radiate across the jaw</li>
                      <li>Sleep disturbed</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail  h-100">
                  <h4>Prevention </h4>
                  <ul className="causes-detail">
                    <li>
                      It is important to have good oral hygiene. It is important to clean x2/day between the teeth with the use of floss or interdental brushes followed by brushing your teeth where the tooth meets the gum. Regular dental visits and hygiene scales are also advised to remove and prevent the build-up of calculus.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="treatment mt-5">
            <div className="main_section_title mb-4">
              <h2 className="text-center ">Management:</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment-prevention">
                  <h4>Short Term:</h4>
                  <p>Must see a dentist who will be able to: </p>
                  <ul className="causes-detail">
                    <li>
                      Remove the calculus sealing the pocket and drain the infection
                    </li>
                    <li>
                      They can then also mechanical clean the pocket and wash it with antibacterial mouthwash known as chlorhexidine.
                    </li>
                    <li>If this is a recurring problem or systemic involvement has occurred, you may also need antibiotics.</li>
                  </ul>

                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment-prevention">
                  <h4>Long term:</h4>
                  <ul className="causes-detail">
                    <li>
                      The gum disease must be stabilised.
                    </li>
                    <li>
                      This can be achieved by a dentist/hygienist carrying out a surface and deep clean in combination with improved oral hygiene routine and other local factors such as stopping smoking.
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

export default LateralAbscess