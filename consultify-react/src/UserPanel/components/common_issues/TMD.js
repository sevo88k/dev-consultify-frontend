import React from "react";

const TMD = () => {
  return (
    <div className="col-xl-10 col-lg-9">
      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">TMD</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
          <div>
            <p>
              Temporomandibular joint disorder (TMD) is characterised by pain or
              dysfunction around the joint that controls jaw movement. This can
              be on one or both sides of the jaw. The source of this pain and
              dysfunction can be muscular (myofascial), an issue within the
              joint itself (arthrogenic), or a combination of the two.
            </p>
          </div>
          <div className="types_causes">
            <div className="mt-4 mb-4 main_section_title">
              <h2 className="text-center ">Types and Causes</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail h-400">
                  <div>
                    <h4>Types and presentation:</h4>
                    <ul className="causes-detail">
                      <li>
                        <span>Myofascial TMD</span>-This is caused by
                        overworking the muscles that control jaw movement. This
                        commonly presents as a dull throbbing ache around the
                        jaw joint, pain in and around your ear, along with
                        headaches/ tenderness around the temple area. This is
                        exacerbated when stressed or chewing.
                      </li>
                      <li>
                        <span>Arthrogenic TMD</span>-This is caused by a
                        pathology within the joint itself. This commonly
                        presents as painful clicking of the jaw on opening and
                        closing, deviation of the jaw, limited mouth opening and
                        jaw locking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="causes_box_shadow treatment_detail  h-400">
                  <h4>Causes: </h4>
                  <ul className="causes-detail">
                    <li>
                      <span>Myofascial TMD</span>-Grinding your teeth, habitual
                      e.g., nail biting or chewing ice, stress and anxiety, or
                      an uneven bite. If you grind your teeth at night, the pain
                      is normally worse in the morning.
                    </li>
                    <li>
                      <span>Arthrogenic TMD</span>-Displacement or degeneration
                      of the articular disc (fibrocartilage “cushion” above the
                      jaw). The jaw moves along this disc as it slides downwards
                      and forwards when the mouth opens/closes. In addition,
                      this can be caused by different types of arthritis and
                      trauma to the area.
                    </li>
                  </ul>
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
                  <p>
                    For mild cases, firstly a conservative approach to treatment
                    should be attempted for 8-12 weeks. This entails:
                  </p>
                  <ul className="causes-detail">
                    <li>
                      Following a soft diet (fish, pasta, soup etc. Avoid very
                      chewy food such as meat, bread, chewing-gum, nuts).
                    </li>
                    <li>
                      Avoid biting into food with your front teeth, as this
                      places a greater force on the jaw joints.
                    </li>
                    <li>
                      Restrict yawning by placing your fist under your jaw.
                    </li>
                    <li>
                      Following different jaw exercises advised by
                      dentists/physiotherapists to help relax the muscles.
                    </li>
                    <li>
                      Pain killers, topical ibuprofen gel, and warm/cold
                      compresses to be applied over the muscles.
                    </li>
                    <li>
                      Lifestyle changes or speaking to a psychologist to help
                      reduce stress and anxiety to reduce tooth
                      grinding/clenching.
                    </li>
                    <li>
                      Wear a nightguard made by your dentist to protect your jaw
                      and teeth from grinding.
                    </li>
                  </ul>
                  <p>
                    In more severe cases or where conservative management has
                    not worked, a referral to maxillofacial specialists should
                    be made by your doctor/dentist. More detailed clinical and
                    radiographic investigations (e.g., x-rays, MRIs) will be
                    carried out and a treatment plan can be formulated.
                  </p>
                  <ul className="causes-detail">
                    <li>
                      Treatment carried out by maxillofacial specialists may
                      include Botox to relax the muscles that move the jaw, a
                      camera scope and washout of the jaw joint, and in very
                      extreme cases a joint replacement.
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

export default TMD;
