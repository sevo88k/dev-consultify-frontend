import React from "react";
import Form from 'react-bootstrap/Form';
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";

const TreatementAvailability = () => {
    return (
        <MyAcoountLayout>
            <div className="col-lg-9">
                <div className="treatment_available_main">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="treatment_tab">
                                <div className="treatement_inner">
                                    <h3>Allow staff to manage treatment availabiltity?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum est leo, at pharetra libero pulvinar sed. Nullam nec erat et enim dictum fringilla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 d-flex justify-content-end">
                            <div className="right">
                                <Form>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="treatment_form">
                            <div className="treatement_form_header">
                                <h2>Category - Treatment</h2>
                                <div className="right_head">
                                    <p>Same as Salon Opening Hours</p>
                                    <Form>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Form>
                                </div>
                            </div>
                            <form className="treat_form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Monday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Tuesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Wednesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Thursday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p></p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Friday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Saturday</p>
                                            <input type="text" placeholder="Unavailable" />

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Sunday</p>
                                            <input type="text" placeholder="Unavailable" />
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="submit-btn">
                                        <button type="submit" class="btn mb-3">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="treatment_form">
                            <div className="treatement_form_header">
                                <h2>Category - Treatment</h2>
                                <div className="right_head">
                                    <p>Same as Salon Opening Hours</p>
                                    <Form>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Form>
                                </div>
                            </div>
                            <form className="treat_form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Monday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Tuesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Wednesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Thursday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p></p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Friday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Saturday</p>
                                            <input type="text" placeholder="Unavailable" />

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Sunday</p>
                                            <input type="text" placeholder="Unavailable" />
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="submit-btn">
                                        <button type="submit" class="btn mb-3">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="treatment_form">
                            <div className="treatement_form_header">
                                <h2>Category - Treatment</h2>
                                <div className="right_head">
                                    <p>Same as Salon Opening Hours</p>
                                    <Form>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch"
                                        />
                                    </Form>
                                </div>
                            </div>
                            <form className="treat_form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Monday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Tuesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Wednesday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Thursday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p></p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Friday</p>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>8:00am</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>18:00pm</option>
                                                <option value="1">8:00am</option>
                                                <option value="2">8:00am</option>
                                                <option value="3">8:00am</option>
                                            </select>
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Saturday</p>
                                            <input type="text" placeholder="Unavailable" />

                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="buisness_form_fields">
                                            <p>Sunday</p>
                                            <input type="text" placeholder="Unavailable" />
                                            <div className="edit_btns">
                                                <button><img src={require('../assets/img/Delete.png')} alt='' /></button>
                                                <button><img src={require('../assets/img/add.png')} alt='' /></button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="submit-btn">
                                        <button type="submit" class="btn mb-3">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </MyAcoountLayout>
    )
}


export default TreatementAvailability;