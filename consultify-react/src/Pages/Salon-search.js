import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";



const salonsearch = () => {
    return (

        <>
              <Navbar expand="lg" className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand href="/Search">
                        <img src={require('../assets/img/logo.svg').default} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="green-menu">
                            <Nav.Link href="/Myaccount" className="green-btn-header">Log in / Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section className="banner_saloon">
                <div className="container">
                <div className="banner_inner">
                    <h2>Book your next treatment</h2>
                   
                        <form>
                    <div className="row">
                        <div className="col-lg-4 px-0">
                        <input type="text" className="form-control" placeholder="Business Name or Location"/>
                        </div>
                        <div className="col-lg-4 px-0">
                        <input type="text" className="form-control" placeholder="Search Services and Classes"/>
                            </div>
                            <div className="col-lg-3 px-0">
                        <input type="text" className="form-control" placeholder="Anytime"/>
                            </div>
                             <div className="col-lg-1 px-0">
                        <button type="submit" class="btn btn-primary">Search</button>
                                </div>
                                <div className="col-lg-12">
                                    <div className="select_list">
                                        <ul>
                                            <li>Hair</li>
                                            <li>Spa</li>
                                            <li>Yoga</li>
                                            <li>Nail</li>
                                            <li>Barber</li>

                                            <li>Massage</li>
                                            <li>Pilates</li>
                                            <li>Personal Trainer</li>
                                            <li>Cycling</li>
                                            <li>More...</li>
                                        </ul>
                                    </div>
                                </div>
                    </div>
                    </form>
                    </div>
                </div>
            </section>
            <div className="container">
               <div className="salon_bottom">
                        <div className="salon_search_tab">
                        <h3>Popular in your area</h3>
                        <Link to="#">See all <img src={require('../assets/img/Expand_left.png')} alt='' /></Link>
                        </div>
                        <div className="d-flex flex-wrap">
                           
                                <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg.png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Athena Nail Boutique</h3>
                                        <p>Ann Arbor, MI <span>1 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(1).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Salon 401</h3>
                                        <p>Saline, MI <span>7 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                                    </div>
                                </div>
                        
                       
                                <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(2).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Salon Omnia</h3>
                                        <p>Plymouth, MI <span>13 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(3).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Tranquility House Salon &</h3>
                                        <p>Plymouth, MI<span>14 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                        </div>
                              <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(4).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>My Wax Room</h3>
                                        <p>Plymouth, MI <span>14 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                            </div>
                          <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(5).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Stay Lifted Skin Spa</h3>
                                        <p>Plymouth, MI <span>14 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                        </div>
                          <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(6).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Leila's Hair Studio</h3>
                                        <p>Northville, MI <span>15 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                        </div>
                          <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(7).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Braids Brows & Beneath LLC</h3>
                                        <p>Westland, MI <span>15 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                        </div>
                          <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(8).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Element 36 Spa</h3>
                                        <p>Pinckney, MI<span>15 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                        </div>
                          <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(9).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Salon Cattitude</h3>
                                        <p>Livonia, MI <span>16 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                        </div>
                          <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(10).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Kiss My Lash Beauty</h3>
                                        <p>Northville, MI<span>16 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                            </div>
                              <div className="saloon_card">
                                    <img className="card_logo" src={require('../assets/img/div.card-bgimg(11).png')} alt='' />
                                    <div className="salon_card_desc">
                                        <h3><span className="add_show">Ad</span>Opal Salon</h3>
                                        <p>Northville, MI<span>16 mi</span></p>
                                        <div className="rating">
                                            <img src={require('../assets/img/rate.png')} alt='' /><span>(8)</span>
                                        </div>
                            </div>
                            </div>
                        
                        </div>
                </div>
                </div>
  </>        
    )
}

export default salonsearch;