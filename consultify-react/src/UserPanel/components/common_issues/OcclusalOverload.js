import React from 'react'

const OcclusalOverload = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">

      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Occlusal Overload</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">

          <p className="mb-1">
            <span>Definition: </span>a painful condition
            which develops when a tooth is taking on more
            force than it can withstand.{" "}
          </p>
          <p className="mb-4">
            Often seen in implant patients and patients who
            constantly grind their teeth.{" "}
          </p>



          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Symptoms and Management</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-100">
                  <div>
                    <h4>Symptoms</h4>
                    <ul className="causes-detail">
                      <li>
                        sharp pain on biting, normally of short
                        duration
                      </li>
                      <li>
                        Pain may linger after biting in the form
                        of a dull ache
                      </li>
                      <li>Hot and cold sensitivity</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail  h-100">
                  <h4>Management: </h4>
                  <ul className="causes-detail">
                    <li>
                      Wear a soft splint *otherwise referred to as
                      a night guard) at night, to discourage
                      grinding of the teeth. We strongly advise
                      seeing a dentist to make this for a
                      personalised fit (you can but it may be
                      uncomfortable to wear). Following this, the
                      pain may take time to settle.{" "}
                    </li>
                    <li>
                      If the pain does not resolve it is important
                      to see your dentist as a crack may have
                      developed in the tooth.{" "}
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

export default OcclusalOverload