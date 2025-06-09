import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const resultview = () => {
    return (

        <div className="result_view">
            {/* Header Start */}
            < Navbar expand="lg" className="bg-body-tertiary header-blck" >
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


            < section className="product_view" >
                <div className="container">
                    <div className="productmain_wrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="prev_main">
                                    <img src={require('../../src/assets/img/right-arrow.svg').default} alt='arrow' className="arrow-next-green" />
                                    <a class="prev_result" href="#">
                                        Back to search results
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="top_info">
                                    <h1>Botox Injections</h1>
                                    <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="medical_info">
                                    <h2 className="hdngs">Medical Conditions</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                    <ol>
                                        <li>
                                            <div className="sub_hdng">Lorem ipsum dolor</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                        </li>
                                        <li>
                                            <div className="sub_hdng">Lorem ipsum dolor</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="products">
                                    <h2 className="hdngs">Products</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="product_wrap">
                                            <img src={require('../assets/img/product.png')} alt="logo" className="product" />
                                            <div className="product_bottom">
                                                <p className="product_desc">Hydrating Hyaluronic Acid Face Serum for Face 100ml for Women and Men</p>
                                                <h6 className="price">£29.98</h6>
                                                <a className="product_btn" href="#">View on Amazon </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="product_wrap">
                                            <img src={require('../assets/img/product.png')} alt="logo" className="product" />
                                            <div className="product_bottom">
                                                <p className="product_desc">Hydrating Hyaluronic Acid Face Serum for Face 100ml for Women and Men</p>
                                                <h6 className="price">£29.98</h6>
                                                <a className="product_btn" href="#">View on Amazon </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="product_wrap">
                                            <img src={require('../assets/img/product.png')} alt="logo" className="product" />
                                            <div className="product_bottom">
                                                <p className="product_desc">Hydrating Hyaluronic Acid Face Serum for Face 100ml for Women and Men</p>
                                                <h6 className="price">£29.98</h6>
                                                <a className="product_btn" href="#">View on Amazon </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="product_wrap">
                                            <img src={require('../assets/img/product.png')} alt="logo" className="product" />
                                            <div className="product_bottom">
                                                <p className="product_desc">Hydrating Hyaluronic Acid Face Serum for Face 100ml for Women and Men</p>
                                                <h6 className="price">£29.98</h6>
                                                <a className="product_btn" href="#">View on Amazon </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="product_ingredient">
                                    <h2 className="hdngs">Possible Ingredients</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                    <ol>
                                        <li>
                                            <div className="sub_hdng">Lorem ipsum dolor</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                        </li>
                                        <li>
                                            <div className="sub_hdng">Lorem ipsum dolor</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac dolor viverra, varius massa sit amet, pellentesque nulla. Etiam non semper orci, sit amet tincidunt nisl. Cras eget ipsum mi. Curabitur nec diam ut lectus semper ullamcorper. Curabitur blandit risus nisl, quis viverra diam rutrum id. </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div>

    )
}
export default resultview;
