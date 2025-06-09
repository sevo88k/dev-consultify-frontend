import React from 'react'

const GumDisease = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">

      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Gum Disease</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">

          <p className="mb-4">
            Definition: reversible inflammation of the gums.
            The medical term for this early reversible stage
            of gum disease is gingivitis.
          </p>

          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Symptoms and Causes</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-100">
                  <div>
                    <h4>Most common causes:</h4>
                    <ul className="causes-detail">
                      <li>
                        Plaque induced as a consequence of poor
                        oral hygiene
                      </li>
                      <li>Smoking</li>
                      <li>Genetics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail  h-100">
                  <h4>Less common causes: </h4>
                  <ul className="causes-detail">
                    <li>Hormonal changes in pregnancy</li>
                    <li>
                      Medications: phenytoin & some calcium
                      channel blockers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="treatment mt-5">
            <div className="main_section_title mb-4">
              <h2 className="text-center ">Symptoms & Management: </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-100">
                  <div>
                    <h4>Signs and symptoms: </h4>
                    <ul className="causes-detail">
                      <li>Red, puffy, swollen gums</li>
                      <li>
                        Bleeding gums when brushing/flossing
                      </li>
                      <li>Bad breath</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail  h-100">
                  <h4>Management/Prevention:</h4>
                  <ul className="causes-detail">
                    <li>
                      good oral hygiene: brush x2/day, for 2
                      mins with fluoridated toothpaste combined
                      with daily interdental cleaning (e.g.,
                      flossing or TePe brushes). Ensure the
                      tooth brushes covers the gum line.
                    </li>
                    <li>
                      3 to 6 mostly visits to your
                      hygienist/dentist for a scale and polish.
                      This removes hard calculus and plaque from
                      the gum line, allowing the gums to heal.
                      Good oral hygiene will prevent calculus
                      from forming again.
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

export default GumDisease