import React, { useRef, useEffect, useState } from "react";
import Signature from "signature_pad";
import _ from "lodash";
import { FaSignature } from "react-icons/fa";
import { imagesaveAction } from "../Redux/Actions/user/salon";
import { useDispatch } from "react-redux";

export default function SignatureComponentSIgned({ formik, index, isCompleted }) {
  const dispatch = useDispatch();
  const [signaturePad, setSignaturePad] = useState();
  const [savedSignature, setSavedSignature] = useState("");
  const canvasRef = useRef();

  const readyPad = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.scale(1, 1);
    const tempSignaturePad = new Signature(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
    });

    setSignaturePad(tempSignaturePad);
  };

  const handleSave = () => {
    dispatch(imagesaveAction({ base64: signaturePad.toDataURL() })).then(
      (data) => {
        if (data.payload) {
          formik.setFieldValue(`signature${index + 1}`, data.payload);
          setSavedSignature(signaturePad.toDataURL());
        }
      }
    );
  };

  const handleUndo = () => {
    let signatureData = signaturePad.toData();
    if (signatureData.length > 0) {
      signatureData.pop();
      signaturePad.fromData(signatureData);
    }
  };

  const handleClear = () => {
    signaturePad.clear();
  };

  useEffect(() => {
    readyPad();
  }, [index]);

  // If signature is completed, don't show the canvas or buttons
  if (isCompleted) {
    return (
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
        ) : formik.values[`signature${index + 1}`] ? (
          <img
            className="signature-image"
            alt="saved-signature"
            src={
              process.env.REACT_APP_HOST_NAME +
              "Adminquestionimage/" +
              formik.values[`signature${index + 1}`]
            }
          />
        ) : (
          <p>Your Signature Completed</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="main-signature-canvas">
        <div id={`signature-pad${index}`} className="signature-pad">
          <canvas ref={canvasRef} className="signature-canvas" width="1000"></canvas>
          <div className="d-flex">
            <div className="signature-click" onClick={handleSave}>
              Save
            </div>
            <div className="signature-click" onClick={handleUndo}>
              Undo
            </div>
            <div className="signature-click" onClick={handleClear}>
              Clear
            </div>
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
        ) : formik.values[`signature${index + 1}`] ? (
          <img
            className="signature-image"
            alt="saved-signature"
            src={
              process.env.REACT_APP_HOST_NAME +
              "Adminquestionimage/" +
              formik.values[`signature${index + 1}`]
            }
          />
        ) : null}
      </div>
    </div>
  );
}