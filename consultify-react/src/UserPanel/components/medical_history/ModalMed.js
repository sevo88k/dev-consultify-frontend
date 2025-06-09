import React from "react";
import Modal from "react-bootstrap/Modal";
const ModalMed = ({ showModal, setShowModal,onSaveChange }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      fullscreen="sm-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup provisional-popup detailed_popup"
    >
      <Modal.Header
        closeButton
        onClick={() => {
         
          handleCloseModal();
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive table-defaut-design text_inner pb-4">
          {/* <h4>More details required</h4> */}
          <p className="mb-0">Do you want to save Medical History ?</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex flex-column">
          <div className="btn_submit mb-3">
            <button
              onClick={() => {
                  handleCloseModal()
                  onSaveChange()
              }}

              className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
            >
              Yes
            </button>
          </div>
          <div className="btn_submit ">
            <button
              onClick={() => {
                handleCloseModal();
              }}
              className="btn btn-primary cancel-btn"
            >
              No
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMed;
