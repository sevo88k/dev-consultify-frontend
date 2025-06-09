import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function InvoiceModal(props) {
    const dispatch = useDispatch();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <div className="client_consulation">

                    <form>
                        <h2>Create New Invoice</h2>
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
                                <label for="exampleFormControlInput1" className="form-label">Invoice Description</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div className="col-lg-12">
                                <input className="form-control wset" placeholder="£ Invoice Amount (Optional)" />
                            </div>
                            <div className="col-lg-12">
                                <input className="form-control wset" placeholder="% Tax Amount (Optional)" />
                            </div>
                            <div className="submit-btn">
                                <button type="submit" class="btn mb-3">Send Invoice</button>
                            </div>
                            <div className="cancel-btn">
                                <button type="submit" class="btn mb-3">Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </Modal.Body>
        </Modal>
    );
}