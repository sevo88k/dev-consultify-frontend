import React, { useState } from 'react'

const Reversible = () => {
    return (
        <div className="col-xl-10 col-lg-9">
            <div className="problem_desc border-radius-prop margin_top_20 issues_main_page">
                <h2 className="main-title">Reversible pulpitis </h2>
                <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
                    <div className='img_width_prblm'>
                        <p>
                            Reversible inflammation of the nerve of the tooth
                        </p>
                        <img
                                  src={require("../../../assets/images/prevention-education/tooth_prblm_4.jpg")}
                                  alt=""
                                  className="w-100"
                                />
                    </div>
                    <div className="types_causes">
                        <div className="mt-4 mb-4 main_section_title">
                            <h2 className="text-center ">Symptoms &amp; Causes</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="causes_box_shadow treatment_detail h-100">
                                    <div>
                                        <h4 className="mb-2">Symptoms </h4>
                                        <ul className="causes-detail">
                                            <li>
                                                A provoked, sharp pain in the nerve of the tooth most commonly due to a cold or sweet stimulus. The pain is short lasting and quickly resolves after the removal of the stimulus.
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
                                            Bacteria enter the tooth which leads to nerve inflammation within the tooth
                                        </li>
                                        <li>
                                            The most common route for bacteria to enter is through a cavity (a hole) which has formed because of tooth decay. Bacteria may also enter through a small crack in the tooth.
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
                            <div className="col-md-6">
                                <div className="causes_box_shadow treatment_detail h-100">
                                    <div>
                                        <h4 className="mb-2">Symptoms </h4>
                                        <ul className="causes-detail">
                                            <li>
                                                The tooth decay (caries) needs to be removed by a dentist and the tooth sealed from the oral environment with the use a filling material. This will allow the inflammation of the pulp to reverse back to normal.
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
                                            It is important to have good oral hygiene, low sugar intake and use a fluoridated toothpaste. Regular dental and hygiene visits are also advised.
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="problem_desc border-radius-prop mt-4">
                <h2 className="main-title">Irreversible pulpitis</h2>
                <div className="prblm_inner_content d-flex flex-column justify-content-between toothaid_prblm_content">
                    <div>
                        <p>
                            When the nerve of the tooth becomes so inflamed to the point that it can’t be saved and returned to a healthy state. This will occur if pulpitis remains untreated.
                        </p>
                    </div>
                    <div className="types_causes">
                        <div className="mt-4 mb-4 main_section_title">
                            <h2 className="text-center ">Symptoms &amp; Treatment</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="causes_box_shadow treatment_detail h-100">
                                    <div>
                                        <h4 className="mb-2">Symptoms </h4>
                                        <ul className="causes-detail">
                                            <li>
                                                A generalised, spontaneous, constant and at times dull throbbing pain from/around the affected tooth
                                            </li>
                                            <li>
                                                The pain is usually stimulated by hot and cold and can linger for a few minutes and even up to a few hours.
                                            </li>
                                            <li>
                                                Sleep may become disturbed 
                                            </li>
                                            <li>
                                                Painkillers begin to have little to no effect
                                            </li>
                                            <li>
                                                The pain becomes more localised as the infection starts to spread to the tissues surrounding the apex of the tooth. 
                                            </li> 
                                            <li>
                                                Tooth becomes painful to bite on.
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
                                           <span>Short term: </span> A dentist can open the roof of the nerve chamber, releasing the pressure as well as removing some of the infected nerve tissue and place a dressing to temporarily reduce the inflammation and resolve the pain. This is known as <span>extirpation</span>
                                        </li>
                                        <li>
                                        <span>Long term: </span>The source of the infection (i.e the infected nerve tissue) needs to be removed. There are two to achieve this
                                            <ul>
                                                <li><span>Root canal treatment</span>-which involves the complete removal of the nerve and the disinfection of the canal(s) that the infected nerve tissues were once in; with the addition of a cap on the tooth (a crown) to protect the tooth from breaking in the majority of cases. </li>
                                                <li><span>Removal of the tooth </span></li>
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
    )
}

export default Reversible