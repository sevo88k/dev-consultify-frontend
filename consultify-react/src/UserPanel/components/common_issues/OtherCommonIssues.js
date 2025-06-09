import React from "react";
import { Link, useLocation } from "react-router-dom";

const OtherCommonIssues = ({
  dentalAb,
  irreversible,
  crackedTooth,
  reversible,
  tmd,
  pericoronitis,
  badBreath,
  missingTeeth,
  jawPro,
  toothDecay
}) => {
  return (
    <section className="section-divide p-120">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main_section_title">
              <h2 className="text-center mb-5">Other Common Issues</h2>
            </div>
            <div className="main_section_content common_issues_scroll">
              <div className="row d-flex justify-content-center common_issues_scroll_inner">
                {toothDecay == "TOOTH_DECAY" ? (
                  ""
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="tooth-decay"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">Tooth Cavity</h3>
                        <p className="large_parah mb-0">
                        A hole in in the tooth that has formed as a result
                            of tooth decay (caries) overtime.
                        </p>
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/tooth-decay" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {jawPro == "JAW_PROBLEM" ? (
                  ""
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="tooth-decay"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">Jaw Post-Op Pain</h3>
                        <p className="large_parah mb-0">
                        Pain/Sensitivity in the weeks following the
                            placement of a filling (restoration).
                        </p>
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/jaw-problems" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {missingTeeth == "MISSING_TEETH" ? (
                  ""
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="tooth-decay"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">Dry or Infected Socket Teeth</h3>
                        <p className="large_parah mb-0">
                        A dry socket is a painful condition that occurs when
                            a blood clot fails to form in the tooth socket
                            following a tooth extraction, or if the blood clot
                            becomes dislodged or is removed. This usually
                            happens within the first 3 to 5 days after the
                            extraction procedure.
                        </p>
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/missing-teeth" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {badBreath == "BAD_BREATH" ? (
                  ""
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="tooth-decay"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">Mouth Ulcers</h3>
                        <p className="large_parah mb-0">
                        The skin that lines your mouth is referred to as
                            oral epithelium. A full thickness break in the
                            lining of this epithelium results in an ulcer.
                        </p>
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/bad-breath" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {dentalAb == "DENTAL_AB" ? (
                  " "
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="tooth-decay"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">Dental Abscess</h3>
                        <p className="large_parah mb-0">
                          A gum swelling due to a collection of pus. This
                          infection is caused by bacterium at the bottom of the
                          root of your tooth or bacteria in the surrounding gum.
                        </p>
                        {/* <h5 className="mt-2">Types and Appearance:</h5>
                          <ul className="causes-detail">
                            <li>
                              <b>Mild pericoronitis</b>-Gum around the tooth
                              appears red and swollen, with tenderness
                            </li>
                            <li>
                              <b>
                                Moderate pericoronitis with infected operculum
                              </b>
                              Pus, discharge, along with bad taste from this
                              region
                            </li>
                          </ul> */}
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/dental-abscess" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {irreversible == "IRREVERDIBLE" ? (
                  " "
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/problems/swelling.png")}
                        alt="jaw-problems"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">
                          Irreversible pulpitis
                        </h3>
                        <p className="large_parah mb-0">
                          When the nerve of the tooth becomes so inflamed to the
                          point that it can’t be saved and returned to a healthy
                          state. This will occur if pulpitis remains untreated.
                        </p>
                        {/* <h5 className="mt-2">Types and presentation:</h5>
                    <ul className="causes-detail">
                      <li>
                        <b>Myofascial TMD</b>This is caused by overworking
                        the muscles that control jaw movement.
                      </li>
                    </ul> */}
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link
                            to="/irreversible-pulpitis"
                            className="white-btn "
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {crackedTooth == "CRACKED_TOOTH" ? (
                  " "
                ) : (
                  <div className="col-4 mb-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/problems/ulcers.png")}
                        alt="Missing-teeth"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">
                          Cracked tooth syndrome{" "}
                        </h3>
                        <p className="large_parah mb-0">
                          A crack starting in the outer surface of the tooth,
                          resulting in sharp pain on biting or release of bite
                          due to movements in the tooth. These movements, in
                          combination with bacteria being allowed to enter the
                          tooth, lead to irritation of the nerve.
                        </p>
                        {/* <h5 className="mt-2">Causes:</h5>
                    <ul className="causes-detail">
                      <li>
                        <b>Traumatic</b>-This can be: thermal e.g. burns
                        from hot food; chemical
                      </li>
                    </ul> */}
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link
                            to="/cracked-tooth-syndrome"
                            className="white-btn"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {reversible == "REVERSIBLE" ? (
                  " "
                ) : (
                  <div className="col-4 ">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/problems/dent-issue.png")}
                        alt="Missing-teeth"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">
                          Reversible pulpitis
                        </h3>
                        <p className="large_parah mb-0">
                          Reversible inflammation of the nerve of the tooth
                        </p>
                        {/* <h5 className="mt-2">Causes:</h5>
                    <ul className="causes-detail">
                      <li>
                        fail to follow your dentist's instructions after
                        the procedure
                      </li>
                    </ul> */}
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link
                            to="/reversible-pulpitis"
                            className="white-btn "
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tmd == "TMD" ? (
                  " "
                ) : (
                  <div className="col-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="gum-disease"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">TMD</h3>
                        <p className="large_parah mb-0">
                          Temporomandibular joint disorder (TMD) is
                          characterised by pain or dysfunction around the joint
                          that controls jaw movement. This can be on one or both
                          sides of the jaw. The source of this pain and
                          dysfunction can be muscular (myofascial), an issue
                          within the joint itself (arthrogenic), or a
                          combination of the two.
                        </p>
                        {/* <h5 className="mt-2">Most common causes: </h5>
                    <ul className="causes-detail">
                      <li>
                        Plaque induced as a consequence of poor oral
                        hygiene
                      </li>
                      <li>Smoking</li>
                      <li>Genetics</li>
                    </ul> */}
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/tmd/tmd" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {pericoronitis == "PERICORONITIS" ? (
                  " "
                ) : (
                  <div className="col-4">
                    <div className="reason-cards position-relative disease_detail_card">
                      <img
                        src={require("../../../assets/images/prevention-education/1.png")}
                        alt="gum-disease"
                        className="img-fluid position-relative"
                      />
                      <div className="p-4">
                        <h3 className="text-center mb-3">Pericoronitis</h3>
                        <p className="large_parah mb-0">
                          Inflammation of the soft tissues surrounding a
                          partially erupted wisdom tooth. Bacteria enters the
                          space between the overlying flap of gum (operculum)
                          and the erupting tooth causing inflammation, which can
                          lead to infection.
                        </p>
                        {/* <h5 className="mt-2">Most common causes: </h5>
                    <ul className="causes-detail">
                      <li>
                        Plaque induced as a consequence of poor oral
                        hygiene
                      </li>
                      <li>Smoking</li>
                      <li>Genetics</li>
                    </ul> */}
                        <div className="mt-4 d-flex justify-content-center align-items-center">
                          <Link to="/perico" className="white-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="row">
              <div className="col-md-3">
                <Link
                  className="common_issues_inner position-relative"
                  to="/tooth-decay"
                >
                  <img
                    src={require("../../../assets/images/problems/imp-issues.png")}
                    alt="bbc-logo"
                    className="img-fluid"
                  />
                  <h3 className="position-absolute absolute-txt">
                    Tooth <br />
                    Decay
                  </h3>
                </Link>
              </div>
              <div className="col-md-3">
                <Link
                  className="common_issues_inner position-relative"
                  to="/jaw-problems"
                >
                  <img
                    src={require("../../../assets/images/problems/imp-issues.png")}
                    alt="daily-mail"
                    className="img-fluid"
                  />
                  <h3 className="position-absolute absolute-txt">
                    Jaw <br />
                    Problems
                  </h3>
                </Link>
              </div>
              <div className="col-md-3">
                <Link
                  className="common_issues_inner position-relative"
                  to="/missing-teeth"
                >
                  <img
                    src={require("../../../assets/images/problems/imp-issues.png")}
                    alt="guardian-logo"
                    className="img-fluid"
                  />
                  <h3 className="position-absolute absolute-txt">
                    Missing <br />
                    Teeth
                  </h3>
                </Link>
              </div>
              <div className="col-md-3">
                <Link
                  className="common_issues_inner position-relative"
                  to="/bad-breath"
                >
                  <img
                    src={require("../../../assets/images/problems/imp-issues.png")}
                    alt="cosmopolitan"
                    className="img-fluid"
                  />
                  <h3 className="position-absolute absolute-txt">
                    Bad <br /> Breath
                  </h3>
                </Link>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherCommonIssues;
