import React from "react";

const Dentine = () => {
  return (
    <div className="col-xl-10 col-lg-9 ">
   
      <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
        <h2 className="main-title">Dentine Hypersensitivity</h2>
        <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
        <p className="mb-4">
          Definition: When the inner (dentine) layer of
          the tooth becomes exposed, it can cause
          discomfort in response to cold, sweet, osmotic.
          This is known as dentine hypersensitivity.{" "}
        </p>
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

        <div className="types_causes">
                <div className="mt-4 mb-4 main_section_title">
                  <h2 className="text-center ">Causes & Treatment</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="causes_box_shadow treatment_detail h-100">
                      <div>
                        <h4>Causes</h4>
                        <p><span>Pain on biting</span></p>
                        <ul className="causes-detail">
                          <li>
                          <span> Gum recession –</span>This is when the gum drops lower down the tooth. This is usually due to gum disease, aggressive tooth brushing and genetics..
                          </li>
                          <li>
                            <span>Tooth Wear -</span>due to a combination of erosion from acidic drinks and/or stomach acids & grinding of the teeth. Tooth wear can be mild, moderate or severe.
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="causes_box_shadow treatment_detail  h-100">
                      <h4>Treatment: </h4>
                      <ul className="causes-detail">
                        <li>
                        1st line measures: gently brush the margin of where the tooth meets the gum, high fluoride tooth paste and/or application of fluoride from a dentist. Reduce acidic drinks/foods from diet. Consider seeing your GP to rule out intrinsic acid as a cause, such as acid reflux.
                        </li>
                        <li>
                        2nd line measures: If 1st line measures fail to resolve symptoms you may need to consider covering the exposed dentine with a white filling material known as composite.
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

export default Dentine;
