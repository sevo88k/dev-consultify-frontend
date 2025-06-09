import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const RedirecPersonalInfo = ({ personalViewVal, setPersonalShowVal }) => {
  const handleClose = () => {
    setPersonalShowVal(false);
  };
  const navigate = useNavigate();
  return (
    <Modal
      show={personalViewVal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup provisional-popup detailed_popup"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive table-defaut-design text_inner">
          <h4> Personal Info required</h4>
          You must fill in your personal information before booking a
          consultation. This helps our consultants so they can advise you more
          accurately.
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex flex-column">
          <div className="btn_submit mb-3">
            <button
              onClick={() => navigate("/personal-information/fromnewcons")}
              className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn "
            >
              Provide Details
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

export default RedirecPersonalInfo;
