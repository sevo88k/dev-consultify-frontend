import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const detailscreen = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])
    return (

        <div className="result_view">
            {/* Header Start */}
            < Navbar expand="lg" className={scroll ? "bg-body-tertiary header-blck active" : "bg-body-tertiary header-blck"} >
                <Container>
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center">
                            <Nav.Link href="/Consultation">Consultations</Nav.Link>
                            <Nav.Link href="#">My Clients</Nav.Link>
                            <Nav.Link href="#">Schedule</Nav.Link>
                            <Nav.Link href="#" className="white-btn">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            {/* Header End */}


            < section className="product_view details" >
                <div className="container">
                    <div className="productmain_wrap detail-screen">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="prev_main">
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="arrow-next-green" />
                                    <a class="prev_result" href="/search_results">
                                        Back to search results
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="top_info">
                                    <h1>PREDNISOLONE</h1>
                                    <span> NHS Website link <NavLink className="link" href="https://www.nhs.uk/medicines/prednisolone/">https://www.nhs.uk/medicines/prednisolone/</NavLink></span><br></br>
                                    <span> Wikipedia link <NavLink className="link" href=" https://en.m.wikipedia.org/wiki/Prednisolone"> https://en.m.wikipedia.org/wiki/Prednisolone</NavLink></span>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="medical_info">
                                    <h2 className="hdngs">Contraindication</h2>
                                    <ul>
                                        <li>
                                            <div className="sub_hdng">Brows - Yes <NavLink className="below_lnk">(see below)</NavLink></div>
                                        </li>
                                        <li>
                                            <div className="sub_hdng">Lashes - Possibly <NavLink className="below_lnk">(see below)</NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="products">
                                    <h2 className="hdngs">What’s it used for?</h2>
                                    <p>Prednisolone is a corticosteroid, a steroid hormone used to treat certain types of allergies, inflammatory conditions, autoimmune disorders, and cancers.</p>
                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="product_ingredient">
                                    <h2 className="hdngs">Side Effects relevant to treatments</h2>
                                    <ul>
                                        <li>
                                            Dermatological effects including reddening of face, bruising / skin discolouration, impaired wound healing, thinning of skin, skin rash, fluid build up and abnormal hair growth
                                        </li>
                                        <li>
                                            Increased risk of infection
                                        </li>
                                        <li>Cataracts(with extended use)</li>
                                        <li>Corneal Thinning(with extended use)</li>
                                        <li> Glaucoma(with extended use)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="contradict">
                                    <h2 className="hdngs">Contraindication Advice</h2>

                                    <h3>BROWS</h3>
                                    <p>It is recommended for clients to be off any kind of steroid medication for at least 3 months prior to any kind or waxing / tinting treatment.
                                        This is due to the the potential thinning of skin that Prednisolone can cause, this puts the client at risk of grazing and at further risk for infection</p>
                                    <h3>LASHES</h3>
                                    <p>If a client is suffering with Cataracts, Corneal Thinning, Glaucoma or any kind of eye sensitivity due to Prednisoline, it is recommended that clients do not have lash extensions or LVLs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div>
    )
}
export default detailscreen;
