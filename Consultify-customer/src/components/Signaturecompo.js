import React from "react";
import Signature from "signature_pad";
import _ from "lodash";
import { FaSave, FaUndo, FaRedo, FaEraser, FaSignature } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { imagesaveAction } from "../Redux/Action/CustomerRestAction";
export default function Signaturecompo({ formik, index, setSaveSignature }) {
  const dispatch = useDispatch();
  const [signaturePad, setSignaturePad] = useState();
  const [savedSignature, setSavedSignature] = useState("");
  let signatureRedoArray = [];

  const readyPad = () => {
    let wrapper = document.getElementById("signature-pad");
    let canvas = wrapper?.querySelector("canvas");
    canvas.getContext("2d").scale(1, 1);
    let tempSignaturePad = new Signature(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
    });

    console.log(tempSignaturePad, "tempSignaturePad");
    setSignaturePad(tempSignaturePad);
  };

  const handleSave = () => {
    console.log(signaturePad.toDataURL(), "toDataURL", "fdfddddddddddddddddd");

    dispatch(imagesaveAction({ base64: signaturePad.toDataURL() })).then(
      function (data) {
        if (data.payload) {
          formik.setFieldValue(`signature${index + 1}`, data.payload);
        }
      }
    );
    setSaveSignature(true);
    setSavedSignature(signaturePad.toDataURL());
  };

  const handleUndo = () => {
    let signatureRemovedData = [];
    let signatureData = signaturePad.toData();
    let signatureRedoData = _.cloneDeep(signatureData); //original data

    if (signatureData.length > 0) {
      signatureData.pop(); // remove the last dot or line
      signaturePad.fromData(signatureData);
      signatureRemovedData = signatureRedoData[signatureRedoData.length - 1];
      signatureRedoArray.push(signatureRemovedData);
    }
  };

  const handleRedo = () => {
    if (signatureRedoArray.length !== 0) {
      let values = signaturePad.toData();
      let lastValue = signatureRedoArray[signatureRedoArray.length - 1];
      values.push(lastValue);
      signaturePad.fromData(values);
      signatureRedoArray.pop(lastValue); //remove the redo item from array
    }
  };

  const handleClear = () => {
    signaturePad.clear();
  };

  useEffect(() => {
    readyPad();
  }, []);

  return (
    <div>
      {" "}
      <div id="signature-pad">
        <canvas className="signature-canvas" width="1000"></canvas>
        <div className="d-flex">
          <div className="signature-click" onClick={handleSave}>
            <FaSave /> Save
          </div>
          <div className="signature-click" onClick={handleUndo}>
            <FaUndo /> Undo
          </div>
          {/* <div className="signature-click" onClick={handleRedo}>
        <FaRedo /> Redo
      </div className="signature-click"> */}
          <div className="signature-click" onClick={handleClear}>
            <FaEraser /> Clear
          </div>
        </div>
      </div>
      <div className="saved-signature">
        <h3>
          Your Signature <FaSignature />
        </h3>
        {savedSignature ? (
          <img
            className="signature-image"
            alt="saved-signature"
            src={savedSignature}
          />
        ) : (
          formik.values[`signature${index + 1}`] && (
            <img
              className="signature-image"
              alt="saved-signature"
              src={
                process.env.REACT_APP_IMAGE_URL +
                "/Adminquestionimage/" +
                formik.values[`signature${index + 1}`]
              }
            />
          )
        )}
      </div>
    </div>
  );
}
