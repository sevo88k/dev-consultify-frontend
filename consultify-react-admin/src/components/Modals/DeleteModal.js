import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { modalTitle,modalBody } from './ModalData';
import { deleteCategory, deleteServiceCategory, deleteTradePeople, deleteUser } from '../../redux/Action/AdminAction';
import { useNavigate } from 'react-router-dom';
const DeleteModal = ({showModal,setShowModal,id,modalName}) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

    const handleClose = () => {
        setShowModal(false)
    };
    const handleDelete = () => {
      switch (modalName) {
        case "deleteCategory":
          dispatch(deleteCategory(id));
          setShowModal(false);
          break;
        case "deleteServiceCategory":
          dispatch(deleteServiceCategory(id));
          setShowModal(false);
          break;
        case "deleteTradePeople":
          dispatch(deleteTradePeople(id,navigate));
          setShowModal(false);
          break;
        case "deleteUser":
            dispatch(deleteUser(id,navigate));
            setShowModal(false);
            break;  
      }
    };
  return (
    <Modal
    show={showModal}
    onHide={handleClose}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="delete_admin_modal"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {modalTitle[modalName]}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4 className="text-center mb-0 delete_content">
        {modalBody[modalName]}
      </h4>
    </Modal.Body>
    <Modal.Footer className="d-flex justify-content-between">
      <button
        onClick={handleDelete}
        type="submit"
        className="btn btn-primary btn-custom btn-lg  submit_btn confirmation_btn"
      >
        Yes
      </button>
      <button
        onClick={handleClose}
        type="submit"
        className="btn btn-primary btn-custom btn-lg submit_btn confirmation_btn"
      >
        No
      </button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal