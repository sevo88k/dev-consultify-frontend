import { ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { consultationFormDelete } from '../../Redux/Actions/user/salon';
import { useDispatch } from 'react-redux';
function MyVerticallyCenteredModal(props) {

    const dispatch = useDispatch()


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader closeButton>

            </ModalHeader>
            <Modal.Body >
                <div className='delete-modal'>
                    <p>Are You Sure?</p>
                    <div className='d-flex'>
                        <button className='delete-yes' onClick={function () {
                            if(props?.cunsultationId){
                                dispatch(consultationFormDelete(props?.cunsultationId));
                            }else{
                               props?.dropFun(props?.trashIndex)
                            }
                            
                            props.onHide()
                        }} >Delete</button>
                        <button className='delete-cancel' onClick={function () {
                            props.onHide()
                        }}>Cancel</button>
                    </div>

                </div>
            </Modal.Body>

        </Modal>
    );
}

export default function DeletePopup({ dropFun,trashIndex, setDelModalShow, delModalShow, cunsultationId }) {


    return (
        <>

            <MyVerticallyCenteredModal
                show={delModalShow}
                onHide={() => setDelModalShow(false)}
                setDelModalShow={setDelModalShow}
                cunsultationId={cunsultationId}
                trashIndex={trashIndex}
                dropFun={dropFun}
            />
        </>
    );
}