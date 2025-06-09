import React from 'react'

const PulpalNecrosis = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">
        <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
            <h2 className="main-title">Pulpal Necrosis with periapical periodontitis</h2>
            <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
            
                              <p className="mb-4">
                                Definition of pulpal necrosis: when the nerve of
                                the tooth dies. (This will occur if irreversible
                                pulpitis is left untreated){" "}
                              </p>

                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Symptoms of pulpal necrosis:</h3>
                                  <ul>
                                    <li>
                                      This is initially not painful and at first
                                      you will experience some relief! When the
                                      nerve dies completely it can no longer
                                      detect stimuli and therefore you will no
                                      longer experience pain provoked by e.g.
                                      cold drinks & food
                                    </li>
                                    <li>
                                      However, if left untreated the infection
                                      that killed the nerve will exit the bottom
                                      og the root of the tooth (apex) and start
                                      to infect and inflame the tissues that
                                      surround the apex.
                                      <span>
                                        This is known as periapical
                                        periodontitis.{" "}
                                      </span>
                                      This where symptoms can start to develop
                                      again.
                                    </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>
                                    Symptoms of pulpal necrosis with acute
                                    (painful) periapical periodontitis:
                                  </h3>
                                  <ul>
                                    <li>
                                      a constant dull throbbing ache which is
                                      triggered and worsened when biting down
                                    </li>
                                    <li>A greatly intense, localised pain</li>
                                    <li>
                                      Tooth is very painful to bite down on
                                    </li>
                                    <li>
                                      {" "}
                                      Painkillers have no/little effect and you
                                      are really struggle to sleep at night
                                    </li>
                                  </ul>
                                  <p className="mt-3 fw-500">
                                    This is very painful as there is a big build
                                    up in inflammation and pressure. Eventually
                                    if left untreated, you may notice a lump on
                                    the gum above the tooth, known as an
                                    <span> abscess.</span>
                                  </p>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>
                                    Symptoms of pulpal necrosis with chronic
                                    periapical periodontitis:
                                  </h3>
                                  <ul>
                                    <li>
                                      This is often NOT painful as the infection
                                      is currently causing little inflammation
                                      to the surrounding tissues.
                                    </li>
                                    <li>
                                      Another reason why the infection may not
                                      be causing pain is because it has found an
                                      exit route and there is no longer a
                                      build-up in pressure. (This is known as a
                                      sinus)
                                    </li>
                                    <li>
                                      You may notice a bad taste in the mouth
                                      from the draining infection.{" "}
                                    </li>
                                    <li>
                                      <span>Note:</span> you may experience a
                                      dull ache, and episodes of severe pain can
                                      develop again. This is referred to as
                                      pulpal necrosis with an acute exacerbation
                                      of chronic apical periodontitis.{" "}
                                    </li>
                                  </ul>
                                  <ul>
                                    <li className="list-style-none">
                                      <img
                                        src={require("../../../assets/images/prevention-education/tooth_prblm_5.jpg")}
                                        alt=""
                                      />
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Treatment:</h3>
                                  <li>
                                    {" "}
                                    Short term:
                                    <ul className="text-style-decoration">
                                      <li>
                                        if there is an abscess present on the
                                        gum, a dentist can burst it, allowing
                                        the infection to drain.{" "}
                                      </li>
                                      <li>
                                        The dentist can then open up the roof of
                                        the nerve chamber, releasing the
                                        pressure as well as removing some of the
                                        infected nerve tissue and place a
                                        dressing to temporarily reduce the
                                        inflammation and resolve the pain.{" "}
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    Long term:
                                    <ul className="text-style-decoration">
                                      <li>
                                        the source of the infection (i.e the
                                        infected nerve tissue) needs to be
                                        removed. There are two to achieve this
                                        <ul className="text-style-decoration">
                                          <li>
                                            <span>Root canal treatment</span>
                                            which involves the complete removal
                                            of the nerve and the disinfection of
                                            the canal(s) that the infected nerve
                                            tissues were once in; with the
                                            addition of a cap on the tooth (a
                                            crown) to protect the tooth from
                                            breaking in the majority of cases.{" "}
                                          </li>
                                          <li>
                                            <span>Removal of the tooth</span>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </div>
                              </div>
               </div>
               </div>
               </div>
  )
}

export default PulpalNecrosis