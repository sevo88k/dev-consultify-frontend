import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateConsNotes,
  uploadConsNotesImage,
} from "../../../Redux/Actions/user/userAll";
import { updateNotes } from "../../../Redux/Reducers/user/ConsultationSlice";

const UpCommingNotes = ({ upcomingCons }) => {
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();
  const getNotes = useSelector((state) => state?.consultaions?.notes);
  console.log(upcomingCons, "upcomingCons");
  const [previewImg, setPreviewImg] = useState();
  const [xrayMultiImage, setXrayMultiImage] = useState();
  useEffect(() => {
    upcomingCons && dispatch(updateNotes(upcomingCons[0]?.fromUser));
    console.log(upcomingCons);
    upcomingCons?.length > 0 &&
      upcomingCons[0]?.consNotesImage?.length > 0 &&
      setPreviewImg((prev) => {
        const arr = upcomingCons[0]?.consNotesImage?.map(
          (str) => HOST_NAME + "public/uploads/" + str
        );
        return arr;
      });
  }, [upcomingCons]);
  console.log(previewImg);
  useEffect(() => {
    if (getNotes) {
      setNotes(getNotes);
    }
  }, [getNotes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notes && upcomingCons) {
      const responseObject = {
        consId: upcomingCons[0]?._id,
        notes: {
          fromUser: notes,
        },
      };
      dispatch(updateConsNotes(responseObject));
    }
  };

  const handleImgUpload = (e) => {
    const selectedFiles = [];
    [...e.target.files].map((file) => {
      selectedFiles.push(URL.createObjectURL(file));
    });
    setXrayMultiImage(e.target.files);
    setPreviewImg(selectedFiles);
    const formData = new FormData();
    formData.append("consId", upcomingCons[0]?._id);
    for (let i = 0; i < [...e.target.files].length; i++) {
      formData.append("consImage", [...e.target.files][i]);
    }
    upcomingCons?.length > 0 && dispatch(uploadConsNotesImage(formData));
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body p-0">
          <div className="consulatation_card">
            <div className="upcoming_con_title">
              <h3 className="common_title">Upcoming Consultation Notes</h3>
              <p>Notes for Doctor</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="notes h-185">
                <textarea
                  onChange={(e) => setNotes(e.target.value)}
                  name="notes"
                  style={{ resize: "none" }}
                  className="form-control upConsNotes"
                  placeholder="Type here..."
                  value={notes}
                  onKeyDown={keyPress}
                ></textarea>
              </div>
              <label className="xray_label">Upload XRay or other image</label>
              <div className="">
                {previewImg?.length > 0 ? (
                  previewImg?.map((item, i) => {
                    return <img className="xray_image" src={item} />;
                  })
                ) : (
                  <img
                    className="xray_image"
                    src={require("../../../assets/images/image_placehodler.png")}
                  />
                )}
                <input
                  className="img-upload-input-xray"
                  onChange={handleImgUpload}
                  multiple
                  type="file"
                  accept="image/*"
                  // className="img-upload-input"
                />
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpCommingNotes;
