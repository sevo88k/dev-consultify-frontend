import React, { useState, useEffect, useRef } from "react";
import logoMain from "../../../assets/images/logo-1.svg";
import expand_right from "../../../assets/images/icons/expand_right.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopBarBlack from "../topbarUser/TopBarBlack";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import Modal from "react-bootstrap/Modal";
import OtherCommonIssues from "../common_issues/OtherCommonIssues";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
const TMD = () => {
  const [tmd]=useState('TMD')
  const { type } = useParams();
  const ref=useRef()
  const [viewVal, setShowVal] = useState(false);
  useEffect(() => {
    if (type == "pd") {
      setShowVal(true);
    }
  }, []);

  const handleClose = () => {
    setShowVal(false);
  };
  const navigate = useNavigate();
  const handleDentistClick = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/symptom-checker-start");
    } else {
      navigate("/userlogin");
    }
  };

  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'px', 'a4');
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =pdf.internal.pageSize.getHeight()
      // (imgProperties.height * pdfWidth) / imgProperties.width;
      // console.log(pdfHeight,pdfWidth);
 
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth,pdfHeight);
    pdf.save('Toothaid.pdf');
   
  };

 
  return (
    <>
      <LayoutBlackTop>
        <Modal
          show={viewVal}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="admin-popup provisional-popup"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h4> Provisional Diagnosis</h4>
            <div className="table-responsive table-defaut-design text_inner">
              From the information you've provided, we have concluded a
              provisional diagnosis. For a more accurate diagnosis, please book
              a consultation with one of our team.
            </div>
          </Modal.Body>

          <Modal.Footer>
            <div className="btn_submit ">
              <button
                onClick={handleClose}
                className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
              >
                Okay
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <div id="wrapper">
          {/* <!-- header start --> */}
          {/* <!-- header end -->

       <!-- banner  start --> */}
       <div ref={ref}>

       
          <section className="gum-disease common_issues_detailPage tmd_page">
            <div className="container-fluid container_inner_width">
              <div className="banner-content">
                <h1 className="mb-2">TMD</h1>
                {/* <h2 className="mt-3">Reversible inflammation of the gums.</h2> */}
                <p>
                  Temporomandibular joint disorder (TMD) is characterised by
                  pain or dysfunction around the joint that controls jaw
                  movement. This can be on one or both sides of the jaw. The
                  source of this pain and dysfunction can be muscular
                  (myofascial), an issue within the joint itself (arthrogenic),
                  or a combination of the two.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- banner  end --> 
     
        
        <!-- common banner bottom part start --> */}
          <section className="trust_wrapper position-relative">
            <div className="banner_btm">
              <div className="btm_logo d-none">
                <img
                  src={logoMain}
                  alt="bottom-logo"
                  classNameName="img-fluid"
                />
              </div>

              <div className="btm_ques">
                <p onClick={()=>handleDentistClick()} className="book_dentist_link">
                  Having issues? Book in online {" "}
                  <img src={expand_right} alt="right-arrow" />
                </p>
              </div>
            </div>
          </section>
          {/* <!-- common banner bottom part end -->

        <!--Reason for Teeth Problem Start--> */}
          <section className="section-divide">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Types and Causes</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail box-height">
                    <div>
                      <h4>Types and presentation:</h4>
                      <ul className="causes-detail">
                        <li>
                          <span>Myofascial TMD</span>-This is caused by
                          overworking the muscles that control jaw movement.
                          This commonly presents as a dull throbbing ache around
                          the jaw joint, pain in and around your ear, along with
                          headaches/ tenderness around the temple area. This is
                          exacerbated when stressed or chewing.
                        </li>
                        <li>
                          <span>Arthrogenic TMD</span>-This is caused by a
                          pathology within the joint itself. This commonly
                          presents as painful clicking of the jaw on opening and
                          closing, deviation of the jaw, limited mouth opening
                          and jaw locking
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="causes_box_shadow treatment_detail box-height">
                    <h4>Causes: </h4>
                    <ul className="causes-detail">
                      <li>
                        <span>Myofascial TMD</span>-Grinding your teeth,
                        habitual e.g., nail biting or chewing ice, stress and
                        anxiety, or an uneven bite. If you grind your teeth at
                        night, the pain is normally worse in the morning.
                      </li>
                      <li>
                        <span>Arthrogenic TMD</span>-Displacement or
                        degeneration of the articular disc (fibrocartilage
                        “cushion” above the jaw). The jaw moves along this disc
                        as it slides downwards and forwards when the mouth
                        opens/closes. In addition, this can be caused by
                        different types of arthritis and trauma to the area.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
          <section className="section-divide">
            <div className="container">
              <div className="m-60 main_section_title">
                <h2 className="text-center ">Treatment & Prevention</h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="causes_box_shadow treatment-prevention">
                    <p>
                      For mild cases, firstly a conservative approach to
                      treatment should be attempted for 8-12 weeks. This
                      entails:
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
                        Wear a nightguard made by your dentist to protect your
                        jaw and teeth from grinding.
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
          </section>
         
          <section className="section-divide">
            <div className="container-fluid p-0">
              <img
                src={require("../../../assets/images/line.png")}
                className="line_divide"
                alt="line"
              />
            </div>
          </section>
          
          <section className="section-divide">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="m-90 main_section_title">
                    <h2 className="text-center mb-3">Treatment & Prevention</h2>
                    <p className="text-center large_parah mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis viverra mi et diam cursus consectetur. Etiam ac
                      congue nunc. Aenean id dignissim nulla. Vivamus suscipit
                      iaculis turpis, vel ornare diam. Mauris blandit dapibus
                      arcu, in ultricies mauris molestie non. Integer tincidunt
                      tellus quis dolor sagittis, in hendrerit ligula egestas.{" "}
                    </p>
                  </div>
                  <div className="main_section_content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="reason-cards position-relative disease-card-box">
                          <img
                            src={require("../../../assets/images/treatment/1.png")}
                            alt="treatment"
                            className="img-fluid position-relative"
                          />
                          <div className="p-3">
                            <h3 className="text-start mb-3">
                              Good oral hygiene:
                            </h3>
                            <p className="large_parah mb-0">
                              Brush x2/day, for 2 mins with fluoridated
                              toothpaste combined with daily interdental
                              cleaning (e.g., flossing or TePe brushes). Ensure
                              the tooth brushes covers the gum line.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="reason-cards position-relative disease-card-box">
                          <img
                            src={require("../../../assets/images/treatment/1.png")}
                            alt="treatment"
                            className="img-fluid position-relative"
                          />
                          <div className="p-3">
                            <h3 className="text-start mb-3">
                              Visits to your dentist{" "}
                            </h3>
                            <p className="large_parah mb-0">
                              3 to 6 mostly visits to your hygienist/dentist for
                              a scale and polish. This removes hard calculus and
                              plaque from the gum line, allowing the gums to
                              heal. Good oral hygiene will prevent calculus from
                              forming again
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
          <section className="section-divide p-120-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 justify-content-center align-items-center d-flex short-logo">
                  <img
                    src={require("../../../assets/images/logo-short.png")}
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="about-us-title d-flex justify-content-center align-items-center mb-3">
                    <h2>Dr. Adam Patel Says</h2>
                  </div>
                  <p>
                  Almost all problems can be avoided by attending for your
                    regular 6 monthly checkups and ensuring good quality oral
                    hygiene methods at home!
                  </p>
                  <div className="d-flex justify-content-center mt-4">
                    <a onClick={handleDownloadPdf} className="white-btn download_btn">
                      Download Our Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
      <OtherCommonIssues tmd={tmd}/>
          
        </div>
      </LayoutBlackTop>
    </>
  );
};

export default TMD;
