import React from "react";
import { Modal } from "react-bootstrap";

export default function ConsultationModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <div className="client_consulation">
                    <div className="container">
                        <form>
                            <h2>New Video Consultation</h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Client</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-lg-12">
                                    <input className="form-control" placeholder="Give your Consultation a Description" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="Date: dd/mm/yyyy" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="Time: --:--" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="£ Invoice Amount (Optional)" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="% Tax Amount (Optional)" />
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" class="btn mb-3">Schedule Video Consultation</button>
                                </div>
                                <div className="cancel-btn">
                                    <button type="submit" class="btn mb-3">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}