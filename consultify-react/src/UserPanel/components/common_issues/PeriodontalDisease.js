import React from 'react'

const PeriodontalDisease = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">

      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Periodontal Disease (Periodontitis)</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">

          <p className="mb-1">
            Definition: if gingivitis is left untreated, the
            gum and surrounding bone will become
            irreversibly damaged. This is known as
            periodontitis.
          </p>
          <p className="mb-4">
            The swollen gums that remain untreated for long
            periods of time eventually start to pull away
            from the teeth forming “pockets”. Bacteria enter
            and calculus form in these pockets. The pockets
            of gum disease below the gum line can no longer
            be cleaned by a toothbrush and begin to deepen
            overtime. The body’s immune response to the
            bacteria along with the toxins produced by
            bacteria leads to the loss of bone around the
            tooth. Gums follow this pattern of bone loss and
            recede further down. If left untreated long
            enough, teeth will become loose due to lack of
            bone support and eventually lost.
          </p>


          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Signs and symptoms</h2>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="causes_box_shadow treatment_detail h-100">
                  <div>
                    <h4>Symptoms</h4>
                    <ul className="causes-detail">
                      <li>
                        receding gums (gum pulls away from teeth
                        making them appear “longer”)
                      </li>
                      <li>Bad breath</li>
                      <li>Bleeding on brushing/flossing </li>
                      <li>Sensitive teeth</li>
                      <li>Bone loss can be observed on x-rays</li>
                      <li>
                        In later stages teeth may become loose and
                        painful to bite on{" "}
                      </li>
                    </ul>
                  </div>
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
                      Treatment by a dentist is required to try
                      and stabilise the periodontal disease. To
                      start with, a dentist will measure and
                      record the depths in millimetres of each
                      pocket. Next dentist will do a deep clean
                      out the pockets of gum disease using an
                      ultrasonic scaler (root surface
                      debridement), removing bacteria and
                      calculus.
                    </li>
                    <li>
                      After treatment, following a good oral
                      health routine to prevent new accumulation
                      of plaque and calculus on the gum line is
                      essential in stabilising the gum disease.
                    </li>
                    <li>
                      There are strong links to gum disease with
                      smoking and diabetes. It is important to
                      stop smoking (if you’re a smoker) and it
                      is also worth considering getting a blood
                      test to rule out underlying undiagnosed
                      diabetes.{" "}
                    </li>
                    <li>
                      There is a bi-directional relationship
                      between diabetes and gum disease. Poorly
                      controlled diabetes can lead to worsening
                      of the gum disease (and vice versa). We
                      would also recommend 3 monthly
                      hygiene/dental visits to monitor bone &
                      gum levels and aid in cleaning.
                    </li>
                    <li>
                      More than once deep clean cycle may be
                      needed to stabilise your gum disease. 3
                      months after the deep clean, your dentist
                      will re-measure these pockets and decide
                      if another one is needed.
                    </li>

                  </ul>
                  <p>  Note: In cases where the periodontal disease is advanced (lots of bone loss has occurred) teeth are noticeably loose, we strongly recommend seeing a periodontist. Surgical intervention may be required.</p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PeriodontalDisease