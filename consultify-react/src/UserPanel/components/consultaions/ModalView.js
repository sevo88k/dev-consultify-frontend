import React from "react";
import Modal from "react-bootstrap/Modal";
const ModalView = ({ viewVal, setShowVal }) => {
  const handleCloseModal = () => {
    setShowVal(false);
  };
  return (

    <Modal
      show={viewVal}
      onHide={handleCloseModal}
     // fullscreen="sm-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup provisional-popup detailed_popup videoPopup"
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
         <p className="mb-0"> Please rotate your device to landscape during live calls
          This is to help our dentists get a clearer look at your smile.</p>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <div className="d-flex flex-column">
          <div className="btn_submit mb-3">

          </div>
          <div className="btn_submit ">
          </div>
        </div>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalView;
