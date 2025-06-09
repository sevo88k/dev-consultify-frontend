import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
const ModalViewUlcers = ({ modalShow, setModalShow, handleUlcerClick }) => {
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const navigate = useNavigate();
  const handleNoClick = (val) => {
    if (val) {
      toastInfo("We recommend booking a consultation for video assessment");
      navigate("/consultations");
      handleCloseModal();
    } else {
      toastInfo("We recommend booking a consultation for video assessment");
      navigate("/userlogin");
    }
  };
  return (
    <Modal
      show={modalShow}
      onHide={handleCloseModal}
      fullscreen="sm-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup provisional-popup detailed_popup"
    >
      <Modal.Header
        closeButton
        onClick={() => {
          // setHeadQues(scFlow[2].Headaches[5]),
          //  handleClose();
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive table-defaut-design text_inner pb-4">
          {/* <h4>More details required</h4> */}
          <p className="mb-0">
            {" "}
            {
              "Has this ulcer been present for over 2 weeks with no obvious cause?"
            }
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex flex-column">
          <div className="btn_submit mb-3">
            <button
              onClick={() => {
                handleNoClick("true");
               
              }}
              className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
            >
              Yes
            </button>
          </div>
          <div className="btn_submit mb-3">
            <button
              // to="/mouthulcers/pd"
              onClick={() => {
                handleCloseModal();
                //   handleImgClick(indexVal)
                handleUlcerClick();
              }}
              // to="/diagnosis/#Acute-apical-abscess"
              className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
            >
              No
            </button>
          </div>
          <div className="btn_submit ">
            <button
              onClick={() => {
                handleCloseModal();
              }}
              className="btn btn-primary cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalViewUlcers;
