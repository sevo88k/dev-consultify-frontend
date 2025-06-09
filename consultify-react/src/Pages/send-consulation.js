import React from "react";



const sendconsultation = () => {
    return (
<>
        <div className="client_consulation">
            <div className="container">
                <form>
                    <h2>Send Consultation to Client</h2>
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
                            <label for="exampleFormControlInput1" className="form-label">Add a Message for your client (optional)</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="col-lg-12">
                            <input className="form-control wset" placeholder="£ Invoice Amount (Optional)" />
                        </div>
                        <div className="col-lg-12">
                            <input className="form-control wset" placeholder="% Tax Amount (Optional)" />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" class="btn mb-3">Send Consultation</button>
                        </div>
                        <div className="cancel-btn">
                            <button type="submit" class="btn mb-3">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

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
            
              <div className="client_consulation">
            <div className="container">
                <form>
                    <h2>New Appointment</h2>
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
                            <button type="submit" class="btn mb-3">Schedule Appointment</button>
                        </div>
                        <div className="cancel-btn">
                            <button type="submit" class="btn mb-3">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </>

    )
}
export default sendconsultation;