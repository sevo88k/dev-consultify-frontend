import React from "react";
import { Link, useNavigate } from "react-router-dom";
export const ResultPage = ({ setAnswer, colorData, colData, type, check }) => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/consultations");
    } else {
      navigate("/userlogin");
    }
  };
  return (
    <>
      <section className="tooth-aid-prblms  symptom-checker result_ready dentailpain_result_ready">
        <div className="container">
          <div className="card card_shadow lg_height">
            <div className="row">
              <div className="col-md-12">
                <div className="detail_page_title">
                  <h2 className="text-center mb-3">Your Results</h2>
                  <p className="text-center black_parah mb-0">
                    From the information provided, it is likely you are
                    experiencing{" "}
                  </p>
                </div>

                <div className="mb-5 problem_selected">
                  <img
                    src={require("../../../assets/images/problems/tooth-ache.png")}
                    alt="tooth-ache"
                    className="img-fluid  mt-5"
                  />
                  <h2 className="text-center mb-2 mt-4">
                    Your Provisional Diagnosis is :
                  </h2>
                  {check && check == true ? (
                    <p className="text-center drk_parah mb-2">
                      {" "}
                      TMD or Wisdom Tooth Pain
                    </p>
                  ) : (
                    <p className="text-center drk_parah mb-2">
                      {setAnswer == undefined
                        ? type == "Headache"
                          ? colData?.red > colData?.black
                            ? " Sinusitis (headaches)"
                            : "Migraines"
                          : colorData?.pink == 1
                          ? "Cracked tooth syndrome"
                          : colorData?.brown == 4
                          ? "Occlusal Overload"
                          : colorData?.strictRed > colorData?.strictBlack
                          ? "Reversible pulpits/Dentine hypersensitivity"
                          : "Irreversible pulpitis/Cracked tooth"
                        : setAnswer}
                    </p>
                  )}

                  <p className="text-center drk_parah">
                    We recommend booking an online consultation with a ToothAid
                    Expert for a more thorough diagnosis and guidance on how you
                    can treat your condition.
                  </p>
                </div>
                <div className="booking_btns d-flex justify-content-center flex-column align-items-center">
                  <a
                    onClick={() => handleBookClick()}
                    className="text_link btn custom_btn active_main book-consultation"
                  >
                    Click here for a live chat or to book an online consultation
                    with a Dentist
                  </a>
                  <p className="text-center black_parah mb-3 mt-3 ">or</p>
                  <Link to="/common-issues" className="text_link">
                    Click here to find out more about each condition and how it
                    can be managed!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
