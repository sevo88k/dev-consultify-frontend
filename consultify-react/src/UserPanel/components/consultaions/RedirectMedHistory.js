import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const RedirectMedHistory = ({ viewVal, setShowVal }) => {
  const handleClose = () => {
    setShowVal(false);
  };
  const navigate = useNavigate();
  return (
    <Modal
      show={viewVal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup provisional-popup detailed_popup"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive table-defaut-design text_inner">
          <h4> More details required</h4>
          You must complete our health questionnaire before booking a
          consultation. This helps our consultants understand your medical
          history so they can advise you more accurately.
        </div>
      </Modal.Body>

      <Modal.Footer>
      <div className="d-flex flex-column">
      <div className="btn_submit mb-3">
          <button
            onClick={() => navigate("/my-account/med-history")}
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
          >
            Complete Questionnaire
          </button>
        </div>
        <div className="btn_submit ">
          <button
            onClick={handleClose}
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

export default RedirectMedHistory;
