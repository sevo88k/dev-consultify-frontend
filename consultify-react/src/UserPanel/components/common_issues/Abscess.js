import React from "react";

const Abscess = () => {
    return (
        <div className="col-xl-10 col-lg-9 ">
        <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
            <h2 className="main-title">Dental Abscess </h2>
            <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
                <div>
                    <p>
                    A gum swelling due to a collection of pus. This infection is caused by bacterium at the bottom of the root of your tooth or bacteria in the surrounding gum.
                    </p>
                    <img
                          src={require("../../../assets/images/prevention-education/tooth_prblm_6.jpg")}
                          alt="tooth-decay"
                          className="img-fluid position-relative"
                        />
                </div>
                <div className="types_causes">
                    <div className="mt-4 mb-4 main_section_title">
                        <h2 className="text-center ">Types  &amp; Causes</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="causes_box_shadow treatment_detail h-100">
                                <div>
                                    <h4 className="mb-2">Types </h4>
                                    <ul className="causes-detail">
                                        <li>
                                            <span>Periapical abscess</span>-This is an abscess that forms at the bottom of the root of a tooth
                                            Origin- Overtime bacteria that cause tooth decay work their way down the root canal of the tooth and then collect at the bottom of the root tip. Your body fights this bacterium using white blood cells. Pus is a combination of white blood cells, dead tissue, and bacteria. Pus can eventually work its way through the bone surrounding the root tip into the surrounding gum forming a swelling (abscess)
                                        </li>
                                        <li>
                                            <span>Periodontal abscess</span>-A collection of pus in the gum around a tooth.
                                             Origin- Gum disease overtime cause swollen gums which pull away from the tooth forming pockets of space for bacteria to enter around the tooth.  As these pockets deepen and bacteria work their way down, pus will collect in the gum around the tooth forming an abscess

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="causes_box_shadow treatment_detail h-100">
                                <h4 className="mb-2">Causes</h4>
                                <ul className="causes-detail">
                                    <li>
                                        <span>Acute</span>-A sudden flare up with pain and swelling due to a bacterial infection
                                    </li>
                                    <li>
                                        <span>Chronic</span>-A slower developing infection that has been present for a long time, but the body’s immune defence has managed to stop the infection from flaring acutely so far
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="treatment mt-5">
                    <div className="main_section_title mb-4">
                        <h2 className="text-center ">Symptoms &amp; Treatment</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="causes_box_shadow treatment_detail h-100">
                                <div>
                                    <h4 className="mb-2">Symptoms </h4>
                                    <ul className="causes-detail">
                                        <li>
                                            <span>Acute dental abscess:</span> Mild to severe pain, localised red swelling, tooth is raised, tenderness to biting, pus discharge when swelling is pressed, fever and raised lymph nodes (systemic involvement)
                                        </li>
                                        <li>
                                            <span>Symptoms of chronic dental abscess:</span> No pain or dull pain, slightly raised tooth, tooth may be loose, intermittent pus discharge through a swelling near the tooth (sinus tract), usually without systemic involvement, present for weeks/months/years
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="causes_box_shadow treatment_detail h-100">
                                <h4 className="mb-2">Treatment</h4>
                                <ul className="causes-detail">
                                    <li>
                                        <span>For periapical abscess</span>
                                        <ul>
                                            <li>Root canal treatment </li>
                                            <li>Extraction if root canal not possible or has failed</li>
                                            <li>Incise and drainage</li>
                                            <li>Antibiotics oral or I.V.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>For periodontal abscess</span>
                                        <ul>
                                            <li>A deep clean around the gums (root surface debridement) </li>                                          
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
    );
};

export default Abscess;
