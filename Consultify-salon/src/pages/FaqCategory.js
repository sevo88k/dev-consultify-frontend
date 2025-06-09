// import React, { useEffect, useState } from 'react'
// import { Accordion, Col, Container, InputGroup, Navbar, Row, Form } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
// import { salonCategoryList } from '../Redux/Actions/user/salon';
// import Layout from '../components/Layout/Layout';
// import { Encryptedid } from '../utils/BcruptEncyptid';


// const FaqCategory = () => {

//     const { id, path } = useParams();

//     const dispatch = useDispatch();
//     const navigate = useNavigate()
//     const [search, setSearch] = useState('');

//     const faqCategoryList = useSelector((state) => state.myaccount?.faqCategorylist);

//     useEffect(() => {
//         dispatch(salonCategoryList())
//     }, [])

//     const handleSubCategory = (id) => {
//         navigate(`/faqs?categoryId=${Encryptedid(id)}`)
//     }

//     const filteredFaqs = faqCategoryList?.filter((faq) =>
//         faq.title.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <>

//             <div className="consulation_form three pt-4">
//                 {/* Header Start */}
//                 <Navbar expand="lg" className="bg-body-tertiary header-blck">
//                     <Container>
//                         <Navbar.Brand as={Link} to="/dashboard">
//                             <img
//                                 className="main-logo"
//                                 src={require("../../src/assets/img/consultify-black-logo.svg").default}
//                                 alt="logo"
//                             />
//                         </Navbar.Brand>
//                         <NavLink className="exit_btn" to={"/" + path}>
//                             Exit
//                         </NavLink>
//                     </Container>
//                 </Navbar>


//                 <Layout>

//                     <div className="col-lg-12">

//                         <div className="col-lg-12 mx-auto">
//                             <div className="customer-faqs">
//                                 <div className="prev_main faq-back-btn back-to-setting">
//                                     <img
//                                         src={
//                                             require("../../src/assets/img/right-arrow.svg").default
//                                         }
//                                         alt="arrow"
//                                         className="arrow-next-green"
//                                     />
//                                     <NavLink
//                                         onClick={() => navigate(-1)}
//                                         class="prev_result">
//                                         Back to Settings
//                                     </NavLink>
//                                 </div>
//                                 <div className="setting-titles"> <h1>FAQs</h1></div>

//                                 <Col xs={12} md={4}>
//                                     <div className="search-input pt-3 pb-3 w-100">
//                                         <InputGroup className="mb-3 w-100">
//                                             <Form.Control
//                                                 onChange={(e) => setSearch(e.target.value)}
//                                                 placeholder="Search"
//                                             />
//                                             <InputGroup.Text className="group-box-search">
//                                                 <img
//                                                     src={require("../assets/img/search.svg").default}
//                                                     alt="search"
//                                                 />
//                                             </InputGroup.Text>
//                                         </InputGroup>
//                                     </div>
//                                 </Col>


//                                 <Accordion defaultActiveKey="0">
//                                     {filteredFaqs?.length === 0 ? (
//                                         <div className="faqs-wrapper">
//                                             <p>No FAQs Available</p>
//                                         </div>
//                                     ) : (
//                                         filteredFaqs?.map((object, i) => {
//                                             return (
//                                                 <div
//                                                     key={i}
//                                                     className="faq-item d-flex align-items-center justify-content-between"
//                                                     onClick={() => handleSubCategory(object?._id)}
//                                                     style={{
//                                                         padding: "10px 15px",
//                                                         borderBottom: "1px solid #ddd",
//                                                         cursor: "pointer",
//                                                          border: "1px solid #77b6b6",
//                                                         borderRadius: "50px",
//                                                         margin: "6px 2px",
//                                                         padding: "1rem 1.25rem",
//                                                         color: "#256767",
//                                                         fontWeight: "600"
//                                                     }}
//                                                 >
//                                                     <span>{object?.title}</span>

//                                                     <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <path d="M11.25 7.5L18.75 15L11.25 22.5" stroke="grey" stroke-width="2" />
//                                                     </svg>

//                                                 </div>
//                                             );
//                                         })
//                                     )}
//                                 </Accordion>
//                             </div>
//                         </div>
//                     </div>
//                 </Layout>

//             </div>
//         </>
//     )
// }

// export default FaqCategory


import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, InputGroup, Navbar, Row, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { salonCategoryList } from '../Redux/Actions/user/salon';
import Layout from '../components/Layout/Layout';
import { Encryptedid } from '../utils/BcruptEncyptid';

const FaqCategory = () => {
    const { id, path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const faqCategoryList = useSelector((state) => state.myaccount?.faqCategorylist);

    useEffect(() => {
        setIsLoading(true);
        dispatch(salonCategoryList())
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    }, [dispatch]);

    const handleSubCategory = (id) => {
        navigate(`/faqs?categoryId=${Encryptedid(id)}`);
    };

    const filteredFaqs = faqCategoryList?.filter((faq) =>
        faq.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="consulation_form three pt-4">
            <Navbar expand="lg" className="bg-body-tertiary header-blck">
                <Container>
                    <Navbar.Brand as={Link} to="/dashboard">
                        <img
                            className="main-logo"
                            src={require("../assets/img/consultify-black-logo.svg").default}
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <NavLink className="exit_btn" to={"/" + path}>
                        Exit
                    </NavLink>
                </Container>
            </Navbar>

            <Layout>
                <div className="col-lg-12">
                    <div className="col-lg-12 mx-auto">
                        <div className="customer-faqs">
                            <div className="prev_main faq-back-btn back-to-setting">
                                <img
                                    src={require("../assets/img/right-arrow.svg").default}
                                    alt="arrow"
                                    className="arrow-next-green"
                                />
                                <NavLink
                                    onClick={() => navigate(-1)}
                                    className="prev_result"
                                >
                                    Back to Settings
                                </NavLink>
                            </div>
                            <div className="setting-titles">
                                <h1>FAQs</h1>
                            </div>

                            <Col xs={12} md={4}>
                                <div className="search-input pt-3 pb-3 w-100">
                                    <InputGroup className="mb-3 w-100">
                                        <Form.Control
                                            onChange={(e) => setSearch(e.target.value)}
                                            placeholder="Search"
                                        />
                                        <InputGroup.Text className="group-box-search">
                                            <img
                                                src={require("../assets/img/search.svg").default}
                                                alt="search"
                                            />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </Col>

                            {isLoading ? (
                                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                                    <Spinner animation="border" role="status" variant="primary">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                            ) : (
                                <Accordion defaultActiveKey="0">
                                    {filteredFaqs?.length === 0 ? (
                                        <div className="faqs-wrapper">
                                            <p>No FAQs Available</p>
                                        </div>
                                    ) : (
                                        filteredFaqs?.map((object, i) => (
                                            <div
                                                key={i}
                                                className="faq-item d-flex align-items-center justify-content-between"
                                                onClick={() => handleSubCategory(object?._id)}
                                                style={{
                                                    padding: "10px 15px",
                                                    borderBottom: "1px solid #ddd",
                                                    cursor: "pointer",
                                                    border: "1px solid #77b6b6",
                                                    borderRadius: "50px",
                                                    margin: "6px 2px",
                                                    padding: "1rem 1.25rem",
                                                    color: "#256767",
                                                    fontWeight: "600"
                                                }}
                                            >
                                                <span>{object?.title}</span>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.25 7.5L18.75 15L11.25 22.5" stroke="grey" stroke-width="2" />
                                                </svg>
                                            </div>
                                        ))
                                    )}
                                </Accordion>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default FaqCategory;