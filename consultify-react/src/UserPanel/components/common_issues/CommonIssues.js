import React from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import Pericoronitis from "./Pericoronitis";
import TMD from "./TMD";
import MouthUlcers from "./MouthUlcers";
import DryInfectedSocket from "./DryInfectedSocket";
import Sensitivity from "./Sensitivity";
import Cavity from "./Cavity";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";
import Reversible from "./Reversible";
import Abscess from "./Abscess";
import Dentine from "./Dentine";
import CracketTooth from "./CracketTooth";
import PulpalNecrosis from "./PulpalNecrosis";
import LateralAbscess from "./LateralAbscess";
import OcclusalOverload from "./OcclusalOverload";
import GumDisease from "./GumDisease";
import PeriodontalDisease from "./PeriodontalDisease";
const CommonIssues = () => {
  const [currentTab, setCurrentTab] = useState("Pericoronitis");

  let list = [
    {
      data: "Pericoronitis",
    },
    {
      data: "TMD",
    },
    {
      data: "Mouth Ulcers",
    },
    {
      data: "Dry/Infected socket",
    },
    {
      data: "Post-operative sensitivity",
    },
    {
      data: "Dentine Hypersensitivity",
    },
    {
      data: "Cavity",
    },
    {
      data: "Reversible/Irreversible Pulpits",
    },

    {
      data: "Cracked tooth",
    },
    { data: "Pulpal Necrosis with periapical periodontitis" },
    {
      data: "Dental Abscess",
    },
    { data: "Lateral periodontal abscess" },
    { data: "Occlusal Overload" },
    { data: "Gum Disease" },
    { data: "Periodontal Disease" },
  ];

  const handleClick = (id) => {
    setCurrentTab(id);
  };

  return (
    <Layout>
      <>
        <div className="col-lg-10">
          <div className="desc_area ">
            <div className="row">
              <div className="col-xl-2 col-lg-3">
                <div className="overflow_prop overflowScrollProp">
                  <ul className="problem_tabs p-0 mb-0 tab_scroll">
                    {list.map((item) => {
                      return (
                        <li>
                          <a
                            onClick={() => handleClick(item.data)}
                            className={
                              item.data == currentTab
                                ? "active_main cursor-pointer"
                                : "cursor-pointer"
                            }
                          >
                            {item.data}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {currentTab == "Pericoronitis" && <Pericoronitis />}
              {currentTab == "TMD" && <TMD />}
              {currentTab == "Mouth Ulcers" && <MouthUlcers />}
              {currentTab == "Dry/Infected socket" && <DryInfectedSocket />}
              {currentTab == "Post-operative sensitivity" && <Sensitivity />}
              {currentTab == "Cavity" && <Cavity />}
              {currentTab == "Reversible/Irreversible Pulpits" && (
                <Reversible />
              )}
              {currentTab == "Dental Abscess" && <Abscess />}
              {currentTab == "Dentine Hypersensitivity" && <Dentine />}
              {currentTab == "Cracked tooth" && <CracketTooth />}

              {currentTab ==
                "Pulpal Necrosis with periapical periodontitis" && (
                <PulpalNecrosis />
              )}
              {currentTab == "Lateral periodontal abscess" && (
                <LateralAbscess />
              )}
              {currentTab == "Occlusal Overload" && <OcclusalOverload />}
              {currentTab == "Gum Disease" && <GumDisease />}
              {currentTab == "Periodontal Disease" && <PeriodontalDisease />}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default CommonIssues;
