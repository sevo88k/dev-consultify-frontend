import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";


const BookingSettings = () => {
    return (
        <MyAcoountLayout DidYouKnow={true}>
            <div className="col-lg-8">
                <div className="booking_right">
                    <div className="toggle_main">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="left">
                                    <h3>Authorised Bookings Only</h3>
                                    <p>Require admin to accept new booking requests.
                                        If turned off, clients can book directly for their chosen time.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
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
                    <div className="toggle_main">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="left">
                                    <h3>Authorised Bookings Only</h3>
                                    <p>Require admin to accept new booking requests.
                                        If turned off, clients can book directly for their chosen time.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
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
                    <div className="toggle_main">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="left">
                                    <h3>Authorised Bookings Only</h3>
                                    <p>Require admin to accept new booking requests.
                                        If turned off, clients can book directly for their chosen time.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="right">
                                    <img src={require('../assets/img/Expand_left.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="submit-btn m-auto">
                    <Link to="/contact_preferences" class="btn mb-3">Save</Link>
                </div>
            </div>

            
               
            
        </MyAcoountLayout>
    )


}
export default BookingSettings;