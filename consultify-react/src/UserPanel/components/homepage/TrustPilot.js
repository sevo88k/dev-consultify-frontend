import React from "react";
import { Link } from "react-router-dom";

const TrustPilot = ( ) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // console.log(window?.Trustpilot.Modules.WidgetManagement.document);
    if (window?.Trustpilot?.loadFromElement) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
  
    <div
      ref={ref}  
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="643d295b6e11ee74b0505347"
      data-style-height="100%"
      data-style-width="100%"
      data-theme="light"
      data-min-review-count="10"
      data-without-reviews-preferred-string-id="1"
      data-style-alignment="center"
      
    >
    {/* <span className="tp-widget-empty-horizontal__title"><span className="text"></span></span> */}
        <a
          href="https://uk.trustpilot.com/review/toothaid.co"
          target="_blank"
          rel="noopener"
        >
          {" "}
          Trustpilot
        </a>
     
    </div>
  );
};

export default TrustPilot;
