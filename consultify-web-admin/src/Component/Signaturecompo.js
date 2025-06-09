import React from "react";
import Signature from "signature_pad";
import _ from "lodash";
import {  FaSignature } from "react-icons/fa";
import { useEffect } from "react";
export default function Signaturecompo({ formik, index }) {



  return (
    <div>
   
      <div className="saved-signature">
       
        {
          formik.values[`signature${index + 1}`] &&
          <img
            className="signature-image"
            alt="saved-signature"
            src={
              process.env.REACT_APP_IMAGE_URL +
              "/Adminquestionimage/" +
              formik.values[`signature${index + 1}`]
            }
          />
        }
      </div>
    </div>
  );
}
