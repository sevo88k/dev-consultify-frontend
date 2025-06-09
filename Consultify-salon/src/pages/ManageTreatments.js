import React from "react";
import Modal from 'react-bootstrap/Modal';
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
const ManageTreatments = () => {

    const [modalShownewcat, setModalShownewcat] = React.useState(false);
    const [modalShownewtreat, setModalShownewtreat] = React.useState(false);


    function MyVerticallyCenteredModalcat(props) {
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
                                <h2>New Category</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input className="form-control" placeholder="Category Title Here" />
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit" class="btn mb-3">Save</button>
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

    function MyVerticallyCenteredModaltreat(props) {
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
                                <h2>New Treatment</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <input className="form-control" placeholder="Treatment Name" />
                                    </div>
                                    <div className="col-lg-12">
                                       
                                        <input type="text" className="form-control width_set" id="exampleFormControlInput1" placeholder="Give your Treatment a short description" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input className="form-control" placeholder="£ Set a price for this treatment" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input className="form-control" placeholder="£ Set a deposit (optional)" />
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="add_on" type="button"> <img src={require('../assets/img/plus.png')} alt='' />Add-On</button>
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit" class="btn mb-3">Save</button>
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

    return (

        <div className="salon_profile">
            <MyAcoountLayout>
                <div className="col-lg-9">
                    <div className="treatement">
                        <div className="main_medicine">
                            <div className="medi_buttons">
                                <div className="madeicine_inner">
                                    <p>Botox Injections</p>
                                    <img src={require('../assets/img/Expand_left.png')} alt='' />
                                </div>
                                <div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                </div>
                            </div>

                            <ul>

                                <li><div className="medi_symptoms"><p>Frown Lines</p><p>£55.00</p></div><div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                </div>
                                </li>
                                <li><div className="medi_symptoms"><p>Frown Lines</p><p>£55.00</p></div><div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main_medicine">
                            <div className="medi_buttons">
                                <div className="madeicine_inner">
                                    <p>Dental</p>
                                    <img src={require('../assets/img/Expand_left.png')} alt='' />
                                </div>
                                <div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                    <button onClick={() => setModalShownewcat(true)}><img src={require('../assets/img/add.png')} alt='' /></button>
                                </div>
                            </div>

                            <ul>

                                <li><div className="medi_symptoms"><p>Teeth Whitening</p><p>£55.00</p></div><div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                </div>
                                </li>
                                <li><div className="medi_symptoms"><p>Alignment</p><p>£55.00</p></div><div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                </div>
                                </li>
                                <li><div className="medi_symptoms"><p>Alignment</p><p>£55.00</p></div><div className="edit_btns">
                                    <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                    <button><img src={require('../assets/img/edit.png')} alt='' /></button>
                                    <button onClick={() => setModalShownewtreat(true)}><img src={require('../assets/img/add.png')} alt='' /></button>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MyAcoountLayout>

            { /* new category add popup*/}
            <MyVerticallyCenteredModalcat
                show={modalShownewcat}
                onHide={() => setModalShownewcat(false)}
            />
            { /* new treatment popup*/}
            <MyVerticallyCenteredModaltreat
                show={modalShownewtreat}
                onHide={() => setModalShownewtreat(false)}
            />

            { /* new treatment popup addone*/}
            <div className="client_consulation d-none">
                <div className="container">
                    <form>
                        <h2>New Treatment</h2>
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="form-control" placeholder="Frown Lines Treatment" />
                            </div>
                            <div className="col-lg-12">

                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Our non-surgical cosmetic procedure that uses botulinum toxin injections to temporarily smooth and reduce the appearance of fine lines and wrinkles between the eyebrows and on the forehead" />
                            </div>
                            <div className="col-lg-6">
                                <input className="form-control" placeholder="£ 200.00" />
                            </div>
                            <div className="col-lg-6">
                                <input className="form-control" placeholder="£20 deposit" />
                            </div>
                            <hr />
                            <h2 className="mt-2">Add ons</h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <input className="form-control" placeholder="Add on Name" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="£ 200.00" />
                                </div>
                                <div className="col-lg-6">
                                    <input className="form-control" placeholder="£ Set a price for this add on" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button className="add_on" type="button"> <img src={require('../assets/img/plus.png')} alt='' />Add-On</button>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" class="btn mb-3">Save</button>
                            </div>
                            <div className="cancel-btn">
                                <button type="submit" class="btn mb-3">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default ManageTreatments;