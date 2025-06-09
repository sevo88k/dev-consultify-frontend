import React from 'react'

const Pericoronitis = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">
    <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
      <h2 className="main-title">Pericoronitis</h2>
      <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
        <div>
          <p>
            Inflammation of the soft tissues surrounding a partially
            erupted wisdom tooth. Bacteria enters the space between the
            overlying flap of gum (operculum) and the erupting tooth
            causing inflammation, which can leadto infection.
          </p>
        </div>
        <div>
          <div className="mt-4 mb-4 main_section_title">
            <h2 className="text-center ">Types &amp; Treatment</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="causes_box_shadow treatment_detail h-400">
                <div>
                  <h4 className="mb-2">Types and Appearance:</h4>
                  <ul className="causes-detail">
                    <li>
                      <span>Mild pericoronitis</span>-Gum around the
                      tooth appears red and swollen, with tenderness
                    </li>
                    <li>
                      <span>
                        Moderate pericoronitis with infected operculum
                      </span>
                      -Pus, discharge, along with bad taste from this
                      region
                    </li>
                    <li>
                      <span>Severe pericoronitis- </span>The above is
                      accompanied with facial swelling +/- limited mouth
                      opening
                    </li>
                    <li>
                      <span>Very severe pericoronitis- </span>Swelling
                      spreads to the neck or towards the eye, eventually
                      leading to trouble swallowing or breathing
                      (emergency)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="causes_box_shadow treatment_detail h-400">
                <h4 className="mb-2">Treatment:</h4>
                <ul className="causes-detail">
                  <li>
                    <span>Mild pericoronitis-</span>Irrigation (washing
                    out) of the space between the infected gum area and
                    the partially erupted wisdom tooth using saline or
                    corsydl.
                  </li>
                  <li>
                    <span>Moderate pericoronitis-</span>Irrigation along
                    with a course of antibiotics.
                  </li>
                  <li>
                    <span>Severe pericoronitis-</span>Irrigation,
                    antibiotics, along with removal of the tooth.
                  </li>
                  <li>
                    <span>Very severe pericoronitis-</span>Requires
                    urgent medical attention in A&amp;E. IV antibiotics,
                    removal of the tooth and hospital admission is
                    potentially need.
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

export default Pericoronitis