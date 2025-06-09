import React from "react";

const MouthUlcers = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">
      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Mouth Ulcers</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
          <div>
            <p>
              The skin that lines your mouth is referred to as oral epithelium.
              A full thickness break in the lining of this epithelium results in
              an ulcer.
            </p>
            <p>
              Appearance: Circular red outer ring with a white/yellow/grey
              centre
            </p>
            <img  src={require("../../../assets/images/problems/ulcer_new.jpg")} alt="" />
          </div>
          <div className="types_causes">
            <div className="mb-4 mt-4 main_section_title">
              <h2 className="text-center ">Causes &amp; Treatment</h2>
              
            </div>
            <div className="row mb-4">
              <div className="col-md-12">
                <div className="causes_box_shadow treatment_detail">
               
                  <div>
                    <h4>Causes:</h4>
                    <ul className="causes-detail">
                      <li>
                        <span>Traumatic</span>-This can be: thermal e.g. burns
                        from hot food; chemical e.g. aspirin burn; an allergy
                        e.g. to foods; or mechanical e.g. repeated rubbing
                        against a sharp tooth/filling.
                      </li>
                      <li>
                        <span>Infective</span>-This can be viral or bacterial
                        e.g. HIV.
                      </li>
                      <li>
                        <span>Blood Disorders</span>-B12/Iron deficiency,
                        Anaemia, Leukaemia.
                      </li>
                      <li>
                        <span>Autoimmune disorders</span>-e.g.Behcet's disease,
                        Crohn’s disease, Chronic ulcerative stomatitis.
                      </li>
                      <li>
                        <span>Idiopathic (ulcers of unknown cause)</span>o
                        Recurrent ulcers of unknown cause are a condition known
                        as recurrent apthous stomatitis (RAS). This can be
                        broken down into 3 types.
                        <ul>
                          <li>
                            Major RAS-Large ulcers &gt;1cm in diameter, take
                            several weeks to heal and leave behind scarring.
                          </li>
                          <li>
                            Minor RAS-Smaller ulcers &lt;1cm that appear in
                            small groups and normally heal within 14 days.
                          </li>
                          <li>
                            Herpetiform RAS-Groups of very small ulcers usually
                            &lt;3mm in diameter that can merge forming a large
                            sore, typically healing within 10. days
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Cancer</span>-Oral cancer may present as an
                        ulcerated region in the mouth.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="causes_box_shadow treatment_detail">
                  <h4>Treatment:</h4>
                  <ul className="causes-detail">
                    <li>
                      If the ulcer is traumatic, removing the cause will allow
                      the ulcer to heal e.g. smooth a sharp part of the tooth.
                    </li>
                    <li>
                      For initial therapy, dentists can prescribe topical
                      analgesics, topical antimicrobials, topical
                      corticosteroids (mouth rinses). Organising a blood test to
                      see if you have any blood deficiencies should also be
                      carried out.
                    </li>
                    <li>
                      For recurrent cases where first line therapy has failed,
                      oral medicine specialists can prescribe systemic
                      corticosteroids and immuno-suppressants.
                    </li>
                    <li>
                      Hot, spicy, salty and acidic foods should be avoided.
                    </li>
                  </ul>
                  <h4 className="pt-4">When to urgently refer to oral medicine:</h4>
                  <ul className="causes-detail">
                    <li>
                      A non-healing ulcer that has been present for &gt;3 weeks
                      with unknown cause.
                    </li>
                    <li>Raised, rolled or firm margin.</li>
                    <li>
                      Social history that puts you at a higher risk of oral
                      cancer e.g. smoking, alcohol use, chewing tobacco, high
                      intake of spicy foods.
                    </li>
                    <li>
                      Recurrent ulcers that are negatively impacting a patient’s
                      quality of life
                    </li>
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

export default MouthUlcers;
