import React from "react";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import { useLocation } from "react-router-dom";
export default function Diagnosis() {
  const location = useLocation();
  const exactPath = location.hash;
  // console.log(exactPath);
  return (
    <div>
      <LayoutBlackTop>
        <div id="wrapper">
          <section className="tooth-decay">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-0">Diagnoses</h1>
              </div>
            </div>
          </section>

          <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  {/* Diagnosis Tabs */}
                  {/* <div className="diagnosis_tabs1">
                  <ul >
                    <li>
                        <a
                          href="#cavity"
                          className={exactPath == "#cavity" ? "active_tab" : ""}
                        >
                          Cavity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#gum-disease"
                          className={
                            exactPath == "#gum-disease" ? "active_tab" : ""
                          }
                        >
                          Gum Disease
                        </a>
                      </li>                      
                    </ul>
                  </div> */}
                  
                  <section className="diagnosis_tabs section-divide">
                  

                    <ul>  
                    <li>
                        <a
                          href="#cavity"
                          className={exactPath == "#cavity" ? "active_tab" : ""}
                        >
                          Cavity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#gum-disease"
                          className={
                            exactPath == "#gum-disease" ? "active_tab" : ""
                          }
                        >
                          Gum Disease
                        </a>
                      </li>                   
                      <li className="sub-heading-ul">
                        <a
                          href=""
                        >
                          Other Common Issues
                        </a>
                      </li>
                      <li>
                        <a
                          href="#irreversible-pulpitis"
                          className={
                            exactPath == "#irreversible-pulpitis"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Irreversible pulpitis
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Acute-apical-abscess"
                          className={
                            exactPath == "#Acute-apical-abscess"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Dental Abscess
                        </a>
                      </li>
                      <li>
                        <a
                          href="#headaches"
                          className={
                            exactPath == "#headaches" ? "active_tab" : ""
                          }
                        >
                          TMD
                        </a>
                      </li>

                      <li>
                        <a
                          href="#Pericorinits---Wisdom-tooth"
                          className={
                            exactPath == "#Pericorinits---Wisdom-tooth"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Pericorinits
                        </a>
                      </li>
                     
                      <li>
                        <a
                          href="#ulcers"
                          className={exactPath == "#ulcers" ? "active_tab" : ""}
                        >
                          Mouth Ulcers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#dry-socket"
                          className={
                            exactPath == "#dry-socket" ? "active_tab" : ""
                          }
                        >
                          Dry socket / Infected socket
                        </a>
                      </li>
                      <li>
                        <a
                          href="#post-operative-sensitivity"
                          className={
                            exactPath == "#post-operative-sensitivity"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Post-operative sensitivity / pain after fillings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#dentine-hypersensitivity"
                          className={
                            exactPath == "#dentine-hypersensitivity"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Dentine Hypersensitivity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#reversible-pulpitis"
                          className={
                            exactPath == "#reversible-pulpitis"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Reversible pulpitis
                        </a>
                      </li>
                   
                      <li>
                        <a
                          href="#cracked-tooth"
                          className={
                            exactPath == "#cracked-tooth" ? "active_tab" : ""
                          }
                        >
                          Cracked tooth syndrome
                        </a>
                      </li>
                      <li>
                        <a
                          href="#pulpal-necrosis"
                          className={
                            exactPath == "#pulpal-necrosis" ? "active_tab" : ""
                          }
                        >
                          Pulpal Necrosis with periapical periodontitis
                        </a>
                      </li>
                   
                      <li>
                        <a
                          href="#Lateral-periodontal-abscess"
                          className={
                            exactPath == "#Lateral-periodontal-abscess"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Lateral periodontal abscess
                        </a>
                      </li>
                      <li>
                        <a
                          href="#occlusal-overload"
                          className={
                            exactPath == "#occlusal-overload"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Occlusal Overload
                        </a>
                      </li>
                   


                      <li>
                        <a
                          href="#peridontal-disease"
                          className={
                            exactPath == "#peridontal-disease"
                              ? "active_tab"
                              : ""
                          }
                        >
                          Periodontal Disease (Periodontitis)
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="col-lg-8">
                {/* Cavity */}
                <section className=" tooth_prblms pb-100" id="cavity">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Cavity</h2>
                              <p className="mb-4">
                                Definition: A hole in in the tooth that has
                                formed as a result of tooth decay or part of the
                                tooth breaking (caries) overtime.{" "}
                              </p>

                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>How does caries develop? </h3>
                                  <ul>
                                    <li>
                                      There are 4 factors that lead to the
                                      development of caries(decay):
                                      <ul className="text-style-decoration">
                                        <li>Bacteria</li>
                                        <li>Sugar</li>
                                        <li>Tooth</li>
                                        <li>Time</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Prevention: </h3>
                                  <ul>
                                    <li>
                                      Strengthening and protecting the tooth:
                                      <ul className="text-style-decoration">
                                        <li>
                                          Use a fluoridated tooth paste and see
                                          a dentist for fluoride application.{" "}
                                        </li>
                                        <li>
                                          A dentist may also seal the biting
                                          surface of the tooth to prevent food
                                          and bacteria from getting in.{" "}
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Low sugar intake and regular, effective
                                      brushing
                                    </li>
                                    <li>
                                      Seeing a dentist/hygienist every 3 to 6
                                      months for a clean.{" "}
                                    </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Treatment:</h3>
                                  <p>
                                    If the cavity becomes large and the decay
                                    extends into the inner surface of the tooth
                                    (the dentine) the tooth will need a filling.
                                    This is when the tooth decay is cleaned out
                                    by dentist and sealed from the oral
                                    environment with the use of filling
                                    material. It is important to still
                                    incorporate preventative measures so that
                                    caries doesn’t return to treated teeth or
                                    develop in new teeth.
                                  </p>
                                  <p>
                                    It is important try to treat a cavity early,
                                    before the nerve of the tooth becomes
                                    infected or too much tooth structure is
                                    lost as other more invasive treatment may be
                                    required
                                  </p>
                                  <p>
                                    <span>Note: </span>if a cavity develops in
                                    the root of the tooth a dentist may be
                                    unable to restore it and save the tooth.
                                  </p>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Cavity / End*/}

                  {/* Gum Disease */}
                  <section className=" tooth_prblms pb-100" id="gum-disease">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Gum Disease</h2>
                              <p className="mb-4">
                                Definition: reversible inflammation of the gums.
                                The medical term for this early reversible stage
                                of gum disease is gingivitis.
                              </p>

                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Most common causes: </h3>
                                  <ul>
                                    <li>
                                      Plaque induced as a consequence of poor
                                      oral hygiene
                                    </li>
                                    <li>Smoking</li>
                                    <li>Genetics</li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Less common causes: </h3>
                                  <ul>
                                    <li>Hormonal changes in pregnancy</li>
                                    <li>
                                      Medications: phenytoin & some calcium
                                      channel blockers
                                    </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Signs and symptoms: </h3>
                                  <ul>
                                    <li>Red, puffy, swollen gums</li>
                                    <li>
                                      Bleeding gums when brushing/flossing
                                    </li>
                                    <li>Bad breath</li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Management/Prevention:</h3>
                                  <ul>
                                    <li>
                                      Good oral hygiene: toothbrushing x2/day,
                                      for 2 mins with fluoridated toothpaste
                                      combined with daily interdental cleaning
                                      (e.g., flossing or TePe brushes). Ensure
                                      the tooth brushes covers the gum line.
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
                                  <p>
                                    Note: It is important to manage gingivitis
                                    before it progresses to irreversible gum
                                    disease (periodontitis) where bone loss
                                    occurs
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Gum Disease / End*/}
                  {/* Irreversible-pulpitis */}
                  <section
                    id="irreversible-pulpitis"
                    className=" tooth_prblms pb-100"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Irreversible pulpits </h2>
                              <p className="mb-4">
                                Definition: When the nerve of the tooth becomes
                                so inflamed to the point that it can’t be saved
                                and returned to a healthy state. This will occur
                                if reversible pulpits remains untreated.
                              </p>

                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Symptoms:</h3>
                                  <ul>
                                    <li>
                                      A generalised, spontaneous, constant and
                                      at times dull throbbing pain from/around
                                      the affected tooth
                                    </li>
                                    <li>
                                      The pain is usually stimulated by hot and
                                      cold and can linger for a few minutes and
                                      even up to a few hours.
                                      <p className="extra_head">
                                        (In the later stages:)
                                      </p>
                                    </li>
                                    <li>Sleep may become disturbed</li>
                                    <li>
                                      Painkillers begin to have little to no
                                      effect
                                    </li>
                                    <li>
                                      The pain becomes more localised as the
                                      bacteria starts to spread to the tissues
                                      surrounding the apex of the tooth.{" "}
                                    </li>
                                    <li>
                                      Tooth becomes painful to bite on.
                                      <p className="extra_head">Treatment:</p>
                                    </li>
                                    <li>
                                      {" "}
                                      Short term:
                                      <ul className="text-style-decoration">
                                        <li>
                                          A dentist can open the roof of the
                                          nerve chamber, releasing the pressure
                                          as well as removing some of the
                                          affected nerve tissue and place a
                                          dressing to temporarily reduce the
                                          inflammation and resolve the pain.
                                          This is known as an{" "}
                                          <span>extirpation</span>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Long term:
                                      <ul className="text-style-decoration">
                                        <li>
                                          The source of the pain (i.e the
                                          affected nerve tissue) needs to be
                                          removed. There are two ways to achieve
                                          this
                                          <ul className="text-style-decoration">
                                            <li>
                                              <span>Root canal treatment</span>
                                              which involves the complete
                                              removal of the nerve and the
                                              disinfection of the canal(s) that
                                              the affected nerve tissues were
                                              once in; with the addition of a
                                              cap on the tooth (a crown) to
                                              protect the tooth from breaking in
                                              the majority of cases.
                                            </li>
                                            <li>
                                              <span>Removal of the tooth</span>
                                            </li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Irreversible-pulpitis / End*/}
                  
                   {/* Dental Abscess */}
                   <section
                    id="Acute-apical-abscess"
                    className=" tooth_prblms pb-100"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Dental Abscess</h2>
                              <p className="mb-4">
                                Definition- A gum swelling due to a collection
                                of pus. This infection is caused by bacterium at
                                the bottom of the root of your tooth or bacteria
                                in the surrounding gum.
                              </p>
                              <div className="box_shadow">
                                <img
                                  src={require("../../../assets/images/prevention-education/tooth_prblm_6.jpg")}
                                  alt=""
                                />
                                <div className="diagnosis-types">
                                  <h3>Types and Cause:</h3>
                                  <ul>
                                    <li>
                                      <span>Periapical abscess-</span>This is an
                                      abscess that forms at the bottom of the
                                      root of a tooth
                                      <ul className="text-style-decoration">
                                        <li>
                                          Origin- Overtime bacteria that cause
                                          tooth decay work their way down the
                                          root canal of the tooth and then
                                          collect at the bottom of the root tip.
                                          Your body fights this bacterium using
                                          white blood cells. Pus is a
                                          combination of white blood cells, dead
                                          tissue, and bacteria. Pus can
                                          eventually work its way through the
                                          bone surrounding the root tip into the
                                          surrounding gum forming a swelling
                                          (abscess)
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <span>Periodontal abscess-</span>A
                                      collection of pus in the gum around a
                                      tooth.
                                      <ul className="text-style-decoration">
                                        <li>
                                          Origin- Gum disease overtime cause
                                          swollen gums which pull away from the
                                          tooth forming pockets of space for
                                          bacteria to enter around the tooth. As
                                          these pockets deepen and bacteria work
                                          their way down, pus will collect in
                                          the gum around the tooth forming an
                                          abscess
                                        </li>
                                      </ul>
                                      <p className="extra_head">
                                        Abscesses can be:
                                      </p>
                                    </li>
                                    <li>
                                      <span>Acute-</span>a sudden flare up with
                                      pain and swelling due to a bacterial
                                      infection
                                    </li>
                                    <li>
                                      <span>Chronic- </span>- a slower
                                      developing infection that has been present
                                      for a long time, but the body’s immune
                                      defence has managed to stop the infection
                                      from flaring acutely so far
                                    </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Symptoms:</h3>
                                  <ul>
                                    <li>
                                      <span>acute dental abscess:</span>
                                      <ul className="text-style-decoration">
                                        <li>
                                          Mild to severe pain, localised red
                                          swelling, tooth is enlarged,
                                          tenderness to biting, pus discharge
                                          when swelling is pressed, fever and
                                          raised lymph nodes (systemic
                                          involvement)
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <span>
                                        Symptoms of chronic dental abscess:
                                      </span>
                                      <ul className="text-style-decoration">
                                        <li>
                                          No pain or dull pain, slightly raised
                                          tooth, tooth may be loose,
                                          intermittent pus discharge through a
                                          swelling near the tooth (sinus tract),
                                          usually without systemic involvement,
                                          present for weeks/months/years
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Treatment:</h3>
                                  <ul>
                                    <li>
                                      <span>For periapical abscess</span>
                                      <ul className="text-style-decoration">
                                        <li>Root canal treatment</li>
                                        <li>
                                          Extraction if root canal not possible
                                          or has failed
                                        </li>
                                        <li>
                                          Incise and drainage (Temporary
                                          solution)
                                        </li>
                                        <li>
                                          Antibiotics oral or I.V. (Temporary
                                          solution)
                                          <p> </p>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <span>For periodontal abscess</span>
                                      <ul className="text-style-decoration">
                                        <li>
                                          A deep clean around the gums (root
                                          surface debridement)
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Dental Abscess / End*/}
                  {/* TMD */}
                  <section id="headaches" className=" tooth_prblms pb-100">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>TMD</h2>
                              <p className="mb-1">
                                Definition: Temporomandibular joint disorder
                                (TMD) is characterised by pain or dysfunction
                                around the joint that controls jaw movement.
                                This can be on one or both sides of the jaw. The
                                source of this pain and dysfunction can be
                                muscular (myofascial), an issue within the joint
                                itself (arthrogenic), or a combination of the
                                two.
                              </p>
                              <p className="mb-4">
                                {/* Appearance: Circular red outer ring with a
                                white/yellow/grey centre */}
                              </p>
                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Types and presentation:</h3>
                                  <ul>
                                    <li>
                                      <span>Myofascial TMD-</span>This is caused
                                      by overworking the muscles that control
                                      jaw movement. This commonly presents as a
                                      dull throbbing ache around the jaw joint,
                                      pain in and around your ear, along with
                                      headaches/ tenderness around the temple
                                      area. This is exacerbated when stressed or
                                      chewing.
                                    </li>
                                    <li>
                                      <span>Arthrogenic TMD-</span>This is
                                      caused by a pathology within the joint
                                      itself. This commonly presents as painful
                                      clicking of the jaw on opening and
                                      closing, deviation of the jaw, limited
                                      mouth opening and jaw locking
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Causes:</h3>
                                  <ul>
                                    <li>
                                      <span>Myofascial TMD-</span>Grinding your
                                      teeth, habitual e.g., nail biting or
                                      chewing ice, stress and anxiety, or an
                                      uneven bite. If you grind your teeth at
                                      night, the pain is normally worse in the
                                      morning.
                                    </li>
                                    <li>
                                      <span>Arthrogenic TMD-</span>Displacement
                                      or degeneration of the articular disc
                                      (fibrocartilage “cushion” above the jaw).
                                      The jaw moves along this disc as it slides
                                      downwards and forwards when the mouth
                                      opens/closes. In addition, this can be
                                      caused by different types of arthritis and
                                      trauma to the area.
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types ">
                                  <h3>Treatment:</h3>
                                  <ul>
                                    <li>
                                      For mild cases, firstly a conservative
                                      approach to treatment should be attempted
                                      for 8-12 weeks. This entails:
                                      <ul className="text-style-decoration">
                                        <li>
                                          following a soft diet (fish, pasta,
                                          soup etc. Avoid very chewy food such
                                          as meat, bread, chewing-gum, nuts).
                                        </li>
                                        <li>
                                          Avoid biting into food with your front
                                          teeth, as this places a greater force
                                          on the jaw joints{" "}
                                        </li>
                                        <li>
                                          restrict yawning by placing your fist
                                          under your jaw{" "}
                                        </li>
                                        <li>
                                          Following different jaw exercises
                                          advised by dentists/physiotherapists
                                          to help relax the muscles{" "}
                                        </li>
                                        <li>
                                          Pain killers, topical ibuprofen gel,
                                          and warm/cold compresses to be applied
                                          over the muscles{" "}
                                        </li>
                                        <li>
                                          Lifestyle changes or speaking to a
                                          psychologist to help reduce stress and
                                          anxiety to reduce tooth
                                          grinding/clenching
                                        </li>
                                        <li>
                                          Wear a nightguard made by your dentist
                                          to protect your jaw and teeth from
                                          grinding{" "}
                                        </li>
                                      </ul>
                                    </li>

                                    <li>
                                      In more severe cases or where conservative
                                      management has not worked, a referral to
                                      maxillofacial specialists should be made
                                      by your doctor/dentist. More detailed
                                      clinical and radiographic investigations
                                      (e.g., x-rays, MRIs) will be carried out
                                      and a treatment plan can be formulated.
                                      <ul className="text-style-decoration">
                                        <li>
                                          Treatment carried out by maxillofacial
                                          specialists may include Botox to relax
                                          the muscles that move the jaw, a
                                          camera scope and washout of the jaw
                                          joint, and in very extreme cases a
                                          joint replacement.
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* TMD / End*/}
                  {/* Pericorinits */}
                  <section
                    id="Pericorinits---Wisdom-tooth"
                    className="section-divide tooth_prblms pb-100"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Pericoronitis</h2>
                              <p className="mb-4">
                                Definition: Inflammation of the soft tissues
                                surrounding a partially erupted wisdom tooth.
                                Bacteria enters the space between the overlying
                                flap of gum (operculum) and the erupting tooth
                                causing inflammation, which can lead to
                                infection.
                              </p>
                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Types and Appearance:</h3>
                                  <ul>
                                    <li>
                                      <span>Mild pericoronitis-</span>Gum around
                                      the tooth appears red and swollen, with
                                      tenderness
                                    </li>
                                    <li>
                                      <span>
                                        Moderate pericoronitis with infected
                                        operculum-
                                      </span>
                                      Pus, discharge, along with bad taste from
                                      this region
                                      <p className="extra_head">
                                        (In extreme cases:)
                                      </p>
                                    </li>
                                    <li>
                                      <span>Severe pericoronitis-</span>The
                                      above is accompanied with facial swelling
                                      +/- limited mouth opening
                                    </li>
                                    <li>
                                      <span>Very severe pericoronitis-</span>
                                      Swelling spreads to the neck or towards
                                      the eye, eventually leading to trouble
                                      swallowing or breathing (emergency)
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Treatment:</h3>
                                  <ul>
                                    <li>
                                      <span>Mild pericoronitis-</span>Irrigation
                                      (washing out) of the space between the
                                      infected gum area and the partially
                                      erupted wisdom tooth using saline or
                                      corsodyl
                                    </li>
                                    <li>
                                      <span>Moderate pericoronitis-</span>
                                      Irrigation along with a course of
                                      antibiotics
                                    </li>
                                    <li>
                                      <span>Severe pericoronitis-</span>
                                      Irrigation, antibiotics, along with
                                      removal of the tooth
                                    </li>
                                    <li>
                                      <span>Very severe pericoronitis-</span>
                                      Requires urgent medical attention in A&E.
                                      IV antibiotics, removal of the tooth and
                                      hospital admission is potentially needed
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Pericorinits / End*/}

                  

                  {/* Mouth Ulcers */}
                  <section id="ulcers" className=" tooth_prblms pb-100">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Mouth Ulcers</h2>
                              <p className="mb-1">
                                Definition: The skin that lines your mouth is
                                referred to as oral epithelium. A full thickness
                                break in the lining of this epithelium results
                                in an ulcer{" "}
                              </p>
                              <p className="mb-4">
                                Appearance: Circular red outer ring with a
                                white/yellow/grey centre
                              </p>
                              <div className="box_shadow">
                                <img  src={require("../../../assets/images/problems/ulcer_new.jpg")} alt="" class="p-4" />
                                <div className="diagnosis-types">
                                  <h3>Causes:</h3>
                                  <ul>
                                    <li>
                                      <span>Traumatic-</span>This can be:
                                      thermal e.g. burns from hot food; chemical
                                      e.g. aspirin burn; an allergy e.g. to
                                      foods; or mechanical e.g. repeated rubbing
                                      against a sharp tooth/filling.
                                    </li>
                                    <li>
                                      <span>Infective-</span>This can be viral
                                      or bacterial e.g. HIV
                                    </li>
                                    <li>
                                      <span>Blood disorders-</span>B12/Iron
                                      deficiency, Anaemia, Leukaemia{" "}
                                    </li>
                                    <li>
                                      <span>Autoimmune disorders-</span>E.g.
                                      Behcet's disease, Crohn’s disease, Chronic
                                      ulcerative stomatitis
                                    </li>
                                    <li>
                                      <span>
                                        Idiopathic (ulcers of unknown cause)-
                                      </span>
                                      Recurrent ulcers of unknown cause are a
                                      condition known as recurrent apthous
                                      stomatitis (RAS). This can be broken down
                                      into 3 types
                                      <ul className="text-style-decoration">
                                        <li>
                                          Major RAS-Large ulcers {">"}1cm in
                                          diameter, take several weeks to heal
                                          and leave behind scarring
                                        </li>
                                        <li>
                                          Minor RAS-Smaller ulcers 1cm that
                                          appear in small groups and normally
                                          heal within 14 days
                                        </li>
                                        <li>
                                          Herpetiform RAS-Groups of very small
                                          ulcers usually 3mm in diameter that
                                          can merge forming a large sore,
                                          typically healing within 10 days
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <span>Cancer-</span>Oral cancer may
                                      present as an ulcerated region in the
                                      mouth
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types ">
                                  <h3>Treatment:</h3>
                                  <ul>
                                    <li>
                                      If the ulcer is traumatic, removing the
                                      cause will allow the ulcer to heal e.g.
                                      smooth a sharp part of the tooth
                                    </li>
                                    <li>
                                      For initial therapy, dentists can
                                      prescribe topical analgesics, topical
                                      antimicrobials, topical corticosteroids
                                      (mouth rinses). Organising a blood test to
                                      see if you have any blood deficiencies
                                      should also be carried out.
                                    </li>
                                    <li>
                                      For recurrent cases where first line
                                      therapy has failed, oral medicine
                                      specialists can prescribe systemic
                                      corticosteroids and immunosuppressants{" "}
                                    </li>
                                    <li>
                                      Hot, spicy, salty and acidic foods should
                                      be avoided
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types ">
                                  <h3>
                                    When to urgently refer to oral medicine:
                                  </h3>
                                  <ul>
                                    <li>
                                      A non-healing ulcer that has been present
                                      for {">"}3 weeks with unknown cause
                                    </li>
                                    <li>Raised, rolled or firm margin</li>
                                    <li>
                                      Social history that puts you at a higher
                                      risk of oral cancer e.g. smoking, alcohol
                                      use, chewing tobacco, high intake of spicy
                                      foods
                                      <p className="extra_head">
                                        Other situations to refer:
                                      </p>
                                    </li>
                                    <li>
                                      Recurrent ulcers that are negatively
                                      impacting a patient’s quality of life
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Mouth Ulcers / End */}

                  {/* Dry socket / End */}
                  <section className=" tooth_prblms pb-100" id="dry-socket">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Dry socket / Infected socket</h2>
                              <p className="mb-2">
                                Definition: A dry socket is a painful condition
                                that occurs when a blood clot fails to form in
                                the tooth socket following a tooth extraction,
                                or if the blood clot becomes dislodged or is
                                removed. This usually happens within the first 3
                                to 5 days after the extraction procedure.
                              </p>
                              <p className="mb-4">
                                Background information: Typically, a blood clot
                                forms in the socket, this protects the socket as
                                it heals and forms the foundation for new bone
                                and soft tissue.
                              </p>
                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Causes:</h3>
                                  <ul>
                                    <li>
                                      You are more at risk of developing a dry
                                      socket if you:
                                      <ul className="text-style-decoration">
                                        <li>
                                          fail to follow your dentist's
                                          instructions after the procedure
                                        </li>
                                        <li>are a smoker</li>
                                        <li>have had a dry socket before</li>
                                        <li>are over 25 years old</li>
                                        <li>have poorly controlled diabetes</li>
                                        <li>
                                          Or if the extraction was difficult or
                                          complicated
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types ">
                                  <h3>Symptoms:</h3>
                                  <ul>
                                    <li>
                                      Severe ache/ throbbing pain in your jaw or
                                      gum– can resemble a toothache
                                    </li>
                                    <li>Local swelling of the gum</li>
                                    <li>Halitosis (bad breath)</li>
                                    <li>Bad metallic taste</li>
                                    <li>
                                      Tooth socket looks empty (you may see bone
                                      instead of a blood clot)
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types ">
                                  <h3>Treatment:</h3>
                                  <ul>
                                    <li>
                                      See your dentist or surgeon if you think
                                      you have dry socket
                                    </li>
                                    <li>
                                      A dentist will wash out (irrigate) any
                                      debris or bony fragments from the socket
                                      and then place a soothing antiseptic
                                      dressing inside
                                    </li>
                                    <li>
                                      If the pain persists after a week, this
                                      may have to be repeated
                                    </li>
                                    <li>
                                      Note: dry socket is NOT an infection,
                                      therefore antibiotics are not required
                                      unless there is also an infection. Your
                                      dentist will assess the need for
                                      antibiotics based on your general health
                                      and the clinical presentation
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types ">
                                  <h3>Prevention:</h3>
                                  <ul>
                                    <li>
                                      Gentle warm saltwater mouth rinses 4 times
                                      a day
                                    </li>
                                    <li>Maintaining good oral hygiene</li>
                                    <li>
                                      Taking regular pain relief if required
                                    </li>
                                    <li>
                                      Avoiding smoking and use of tobacco
                                      products or vapes
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
                  </section>
                  {/* Dry socket / End */}

                  {/* Post-operative sensitivity */}
                  <section
                    className=" tooth_prblms pb-100"
                    id="post-operative-sensitivity"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>
                                Post-operative sensitivity / pain after fillings
                              </h2>
                              <p className="mb-1">
                                Definition: Pain/Sensitivity in the weeks
                                following the placement of a filling
                                (restoration).{" "}
                              </p>
                              <p className="mb-4">
                                Background information: A filling is placed to
                                repair a cavity (hole) in the tooth typically
                                caused by decay or chipping. In some cases, the
                                discomfort is simply a reaction to the process
                                of repairing the tooth. In other instances,
                                there may be some intervention required by the
                                dentist.
                              </p>
                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Symptoms and Management:</h3>
                                  <ul>
                                    <li>
                                      Pain on biting
                                      <ul className="text-style-decoration">
                                        <li>
                                          The filling may be disrupting the way
                                          your teeth normally bite together
                                          (e.g. filling is too high). This can
                                          be painful to bite down on due to
                                          extra pressure on that tooth. This can
                                          be adjusted by your dentist.
                                        </li>
                                      </ul>
                                    </li>

                                    <li>
                                      Toothache/sensitivity
                                      <ul className="text-style-decoration">
                                        <li>
                                          Heat produced by the drill used to
                                          shape the cavity can cause
                                          inflammation of the pulp (the central
                                          part of the tooth containing the nerve
                                          and blood supply). As a result of
                                          this, in the days following your
                                          treatment, the tooth may be sensitive
                                          to sensations such as hot and cold or
                                          from the pressure of biting
                                        </li>
                                        <li>
                                          Note: sometimes with very deep or old
                                          fillings the pulp may be unable to
                                          heal, and the pain can get worse over
                                          time. In these occasions the tooth
                                          will most likely need root canal
                                          treatment or extraction to settle the
                                          symptoms.
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Pain from other areas of your jaw
                                      (referred pain)
                                      <ul className="text-style-decoration">
                                        <li>
                                          It is common to feel pain in the teeth
                                          surrounding the treated tooth. This is
                                          due to the anatomy of our nerves in
                                          our face and jaws and results in a
                                          phenomenon called referred pain.
                                          Single nerves provide sensations from
                                          multiple areas and therefore signals
                                          can get confused by the brain.{" "}
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Sore gums
                                      <ul className="text-style-decoration">
                                        <li>
                                          The gums around the tooth treated can
                                          be sore and tender for a few days
                                          after treatment, extra bruising can
                                          also be present around the area where
                                          the anaesthetic was administered.
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Discomfort when chewing
                                      <ul className="text-style-decoration">
                                        <li>
                                          -One should try and refrain from
                                          chewing on the site of any fillings
                                          for up to 24 hours after they have
                                          been applied. It can take some time
                                          for the mouth to get used to the new
                                          bite surface.
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Electric shock sensation
                                      <ul className="text-style-decoration">
                                        <li>
                                          This is a very rare situation and
                                          occurs as a sharp pain, almost like an
                                          electric shock, when two teeth with
                                          metal surfaces touch. For example,
                                          when one tooth has a gold crown, and
                                          the tooth above or below it has a
                                          silver filling it can create a little
                                          electric shock. This typically wears
                                          off after a while.{" "}
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Post-operative sensitivity / End */}

                  {/* Dentine Hypersensitivity */}
                  <section
                    className=" tooth_prblms pb-100"
                    id="dentine-hypersensitivity"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Dentine Hypersensitivity</h2>
                              <p className="mb-4">
                                Definition: When the inner (dentine) layer of
                                the tooth becomes exposed, it can cause
                                discomfort in response to cold, sweet, osmotic.
                                This is known as dentine hypersensitivity.{" "}
                              </p>

                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Causes of Exposed Dentine:</h3>
                                  <ul>
                                    <li>
                                      Pain on biting
                                      <ul className="text-style-decoration">
                                        <li>
                                          <span>Gum recession – </span>This is
                                          when the gum drops lower down the
                                          tooth. This is usually due to gum
                                          disease, aggressive tooth brushing and
                                          genetics..
                                        </li>
                                        <li>
                                          <span>Tooth Wear -</span>due to a
                                          combination of erosion from acidic
                                          drinks and/or stomach acids & grinding
                                          of the teeth. Tooth wear can be mild,
                                          moderate or severe.
                                        </li>
                                      </ul>
                                    </li>

                                    <li className="list-style-none">
                                      <ul className="imgs_section">
                                        <li>
                                          <img
                                            src={require("../../../assets/images/prevention-education/teeth.jpg")}
                                            alt=""
                                          />
                                          <p className="box_text">
                                            Exposed Dentine (mild toothwear)
                                          </p>
                                        </li>
                                        <li className="ml-30">
                                          <img
                                            src={require("../../../assets/images/prevention-education/teeth_prblm_img.jpg")}
                                            alt=""
                                          />
                                          <p className="box_text">
                                            In this case the outer (enamel)
                                            whiter surface of the tooth has been
                                            worn away due to erosion, exposing
                                            the yellower dentine underneath.
                                            Furthermore, the biting edges of the
                                            teeth have been flattened due to a
                                            combination of grinding and acid
                                            (moderate toothwear).{" "}
                                          </p>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      Treatment:
                                      <ul className="text-style-decoration">
                                        <li>
                                          1st line measures: gently brush the
                                          margin of where the tooth meets the
                                          gum, high fluoride tooth paste and/or
                                          application of fluoride from a
                                          dentist. Reduce acidic drinks/foods
                                          from diet. Consider seeing your GP to
                                          rule out intrinsic acid as a cause,
                                          such as acid reflux.
                                        </li>
                                        <li>
                                          2nd line measures: If 1st line
                                          measures fail to resolve symptoms you
                                          may need to consider covering the
                                          exposed dentine with a white filling
                                          material known as composite.
                                        </li>
                                      </ul>
                                    </li>
                                    <p className="fw-600 mb-0">
                                      Note: If you think you are suffering from
                                      tooth wear it is best to consult with a
                                      dentist to identify your cause so we can
                                      stop it from progressing.
                                    </p>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Dentine Hypersensitivity / End */}

                  {/* Reversible-pulpitis */}
                  <section
                    id="reversible-pulpitis"
                    className=" tooth_prblms pb-100"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Reversible pulpitis </h2>
                              <p className="mb-4">
                                Definition: Reversible inflammation of the nerve
                                of the tooth
                              </p>

                              <div className="box_shadow">
                             <div className="img_width_prblm">
                             <img
                                  src={require("../../../assets/images/prevention-education/tooth_prblm_4.jpg")}
                                  alt=""
                                  className="w-100"
                                />
                             </div>
                                <div className="diagnosis-types">
                                  <h3>Symptoms:</h3>
                                  <ul>
                                    <li className="mb-0">
                                      A provoked, sharp pain in the nerve of the
                                      tooth most commonly due to a cold or sweet
                                      stimulus. The pain is short lasting and
                                      quickly resolves after the removal of the
                                      stimulus.
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>
                                    What causes the nerve to become reversibly
                                    inflamed?
                                  </h3>
                                  <ul className="text-style-decoration">
                                    <li>
                                      Bacteria enter the tooth which leads to
                                      nerve inflammation within the tooth
                                    </li>
                                    <li className="mb-0">
                                      The most common route for bacteria to
                                      enter is through a cavity (a hole) which
                                      has formed because of tooth decay.
                                      Bacteria may also enter through a small
                                      crack in the tooth.{" "}
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Treatment:</h3>
                                  <ul className="text-style-decoration">
                                    <li>
                                      The tooth decay (caries) needs to be
                                      removed by a dentist and the tooth sealed
                                      from the oral environment with the use a
                                      filling material. This will allow the
                                      inflammation of the pulp to reverse back
                                      to normal.
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Prevention:</h3>
                                  <ul
                                    className="text-style-decoration
                                                mb-0"
                                  >
                                    <li className="mb-0">
                                      It is important to have good oral hygiene,
                                      low sugar intake and use a fluoridated
                                      toothpaste. Regular dental and hygiene
                                      visits are also advised.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Reversible-pulpitis / End*/}

                  

                  {/* Cracked tooth syndrome */}
                  <section id="cracked-tooth" className=" tooth_prblms pb-100">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Cracked tooth syndrome </h2>
                              <p className="mb-4">
                                Definition: A crack starting in the outer
                                surface of the tooth, resulting in sharp pain on
                                biting or release of bite due to movements in
                                the tooth. These movements, in combination with
                                bacteria being allowed to enter the tooth, lead
                                to irritation of the nerve.
                              </p>
                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Symptoms:</h3>
                                  <ul>
                                    <li>Pain on biting/release of bite</li>
                                    <li>May get sensitivity to hot and cold</li>
                                    <li>Pain may be infrequent </li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Causes:</h3>
                                  <ul>
                                    <li>Grinding of teeth together</li>
                                    <li>
                                      Teeth with large fillings, especially
                                      amalgam (metal), are weaker and more
                                      susceptible to cracking
                                    </li>
                                    <li>Biting very hard foods</li>
                                    <li>Trauma</li>
                                  </ul>
                                </div>

                                <div className="diagnosis-types">
                                  <h3>Treatment:</h3>
                                  <ul>
                                    <li>
                                      In early stages it may be managed with an
                                      adhesive restoration such as composite in
                                      combination with cuspal coverage (i.e.
                                      cover the biting surface of the tooth).
                                    </li>
                                    <li>
                                      However, if the cracked tooth leads to the
                                      nerve of the tooth to become irreversibly
                                      inflamed the only solution for the pain
                                      would be either root canal treatment +
                                      crown or removal of the tooth.{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      If the crack extends too below the gum
                                      line or into the root the tooth may become
                                      unsavable and require extraction{" "}
                                    </li>
                                  </ul>
                                  <ul className="img-section-row">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Cracked tooth syndrome / End*/}

                  {/* Pulpal Necrosis with periapical periodontitis */}
                  <section
                    className=" tooth_prblms pb-100"
                    id="pulpal-necrosis"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>
                                Pulpal Necrosis with periapical periodontitis
                              </h2>
                              <p className="mb-4">
                                Definition of pulpal necrosis: when the nerve of
                                the tooth dies. (This will occur if irreversible
                                pulpitis is left untreated but sometimes happens
                                by itself){" "}
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
                                      However, if left untreated the bacteria
                                      that killed the nerve will exit the bottom
                                      of the root of the tooth (apex) and start
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
                                      may struggle to sleep at night
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
                      </div>
                    </div>
                  </section>
                  {/* Pulpal Necrosis with periapical periodontitis / End*/}

                 

                  {/* Lateral periodontal abscess */}
                  <section
                    id={"Lateral-periodontal-abscess"}
                    className=" tooth_prblms pb-100"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Lateral periodontal abscess</h2>
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

                              <div className="box_shadow">
                                <img
                                  src={require("../../../assets/images/prevention-education/tooth_prblm_7.jpg")}
                                  alt=""
                                />
                                <div className="diagnosis-types">
                                  <h3>Symptoms: </h3>
                                  <ul>
                                    <li>
                                      an intense, throbbing pain in affected
                                      tooth/gum
                                    </li>
                                    <li>
                                      May notice a bad taste in your mouth
                                    </li>
                                    <li>The tooth may feel loose</li>
                                    <li>Pain may radiate across the jaw</li>
                                    <li>Sleep disturbed</li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Prevention</h3>
                                  <ul>
                                    <li>
                                      It is important to have good oral hygiene.
                                      It is important to clean x2/day between
                                      the teeth with the use of floss or
                                      interdental brushes followed by brushing
                                      your teeth where the tooth meets the gum.
                                      Regular dental visits and hygiene scales
                                      are also advised to remove and prevent the
                                      build-up of calculus.
                                    </li>
                                  </ul>
                                </div>
                                <div className="diagnosis-types">
                                  <h3>Management:</h3>
                                  <ul>
                                    <li>
                                      Short Term:
                                      <p className="mb-0 mt-2">
                                        Must see a dentist who will be able to:{" "}
                                      </p>
                                      <ul className="text-style-decoration">
                                        <li>
                                          Remove the calculus sealing the pocket
                                          and drain the infection{" "}
                                        </li>
                                        <li>
                                          They can then also mechanically clean
                                          the pocket and wash it with
                                          antibacterial mouthwash known as
                                          chlorhexidine.{" "}
                                        </li>
                                        <li>
                                          If this is a recurring problem or
                                          systemic involvement has occurred, you
                                          may also need antibiotics.{" "}
                                        </li>
                                      </ul>
                                    </li>

                                    <li>
                                      Long term:
                                      <ul className="text-style-decoration">
                                        <li>
                                          The gum disease must be stabilised.{" "}
                                        </li>
                                        <li>
                                          This can be achieved by a
                                          dentist/hygienist carrying out a
                                          surface and deep clean in combination
                                          with improved oral hygiene routine and
                                          other local factors such as stopping
                                          smoking.{" "}
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                  <p>
                                    <span>Note: </span>It is important that this
                                    condition is not untreated for a delayed
                                    period of time as the infection can enter
                                    the tooth from the root apex causing the
                                    nerve of the tooth to die. This is referred
                                    to as a periodontal-endodontic lesion. The
                                    management for this is either RCT + crown or
                                    removal of the tooth.
                                  </p>
                                  <p>
                                    Furthermore, if the tooth becomes too loose,
                                    it may not be saveable.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Lateral periodontal abscess / End*/}

                  {/* Occlusal Overload */}
                  <section
                    id="occlusal-overload"
                    className=" tooth_prblms pb-100"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2>Occlusal Overload: </h2>
                              <p className="mb-1">
                                <span>Definition: </span>a painful condition
                                which develops when a tooth is taking on more
                                force than it can withstand.{" "}
                              </p>
                              <p className="mb-4">
                                Often seen in implant patients and patients who
                                constantly grind their teeth.{" "}
                              </p>

                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Symptoms: </h3>
                                  <ul>
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

                                <div className="diagnosis-types">
                                  <h3>Management: </h3>

                                  <p>
                                    Wear a soft splint (otherwise referred to as
                                    a night guard) at night, to discourage
                                    grinding of the teeth. We strongly advise
                                    seeing a dentist to make this for a
                                    personalised fit (you can make your own but
                                    it may be uncomfortable to wear). Following
                                    this, the pain may take time to settle.{" "}
                                  </p>
                                  <p>
                                    If the pain does not resolve it is important
                                    to see your dentist as a crack may have
                                    developed in the tooth.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Occlusal Overload / End*/}

                  

                  {/* Periodontal Disease */}
                  <section
                    className=" tooth_prblms pb-100 mb-5"
                    id="peridontal-disease"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="diagnosis">
                            <div className="diagnosis_inner">
                              <h2 className="mb-1">
                                Periodontal Disease (Periodontitis)
                              </h2>
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
                              <div className="box_shadow">
                                <div className="diagnosis-types">
                                  <h3>Signs and symptoms</h3>
                                  <ul>
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

                                <div className="diagnosis-types">
                                  <h3>Management:</h3>
                                  <ul>
                                    <li>
                                      Treatment by a dentist is required to try
                                      and stabilise the periodontal disease. To
                                      start with, a dentist will measure and
                                      record the depths in millimetres of each
                                      pocket next, the dentist will do a deep
                                      clean out of the pockets of gum disease using
                                      an ultrasonic scaler (root surface
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
                                      Multiple deep clean cycles may be needed
                                      to stabilise your gum disease. 3 months
                                      after the deep clean, your dentist will
                                      re-measure these pockets and decide if
                                      another one is needed.
                                    </li>
                                  </ul>
                                  <p>
                                    <span>Note: </span>In cases where the
                                    periodontal disease is advanced (lots of
                                    bone loss has occurred) teeth are noticeably
                                    loose, we strongly recommend seeing a
                                    periodontist. Surgical intervention may be
                                    required.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Periodontal Disease / End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutBlackTop>
    </div>
  );
}
