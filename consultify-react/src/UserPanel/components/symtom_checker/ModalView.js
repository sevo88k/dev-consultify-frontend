import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
const ModalView = ({viewModal,setShowModal,setSp}) => {
    const handleClose = () => {
        setShowModal(false);
      };
  return (
    <Modal
    show={viewModal}
    onHide={handleClose}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="admin-popup provisional-popup detailed_popup"
  >
    <Modal.Header
      closeButton
      onClick={() => {
        // setHeadQues(scFlow[2].Headaches[5]),
         handleClose();
      }}
    >
      <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="table-responsive table-defaut-design text_inner">
        <h4>More details required</h4>
        According to your answers so far, we recommend completing our Dental
        Pain questions.
      </div>
    </Modal.Body>
    <Modal.Footer>
      <div className="d-flex flex-column">
        <div className="btn_submit mb-3">
          <button
            onClick={() => {
                setSp(true)
             handleClose();
            }}
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
          >
            Okay
          </button>
        </div>
        <div className="btn_submit ">
          <button
            onClick={() => {
            //   setHeadQues(scFlow[2].Headaches[5]), 
            handleClose();
            }}
            className="btn btn-primary cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalView;