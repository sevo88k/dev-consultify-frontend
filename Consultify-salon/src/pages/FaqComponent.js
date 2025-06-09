import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, InputGroup, Navbar, Row, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { informationlistAction } from '../Redux/Actions/user/salon';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Layout from '../components/Layout/Layout';
import { Decryptedid } from '../utils/BcruptEncyptid';

const FaqComponent = () => {

    const { id, path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const ids = queryParams.get("categoryId");
    const categoryId = ids ? Decryptedid(atob(ids)) : null;
    const [isLoading, setIsLoading] = useState(true); 

    const faqlist = useSelector((state) => state.myaccount?.faqlist);

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (!categoryId) {
            navigate('/faqs-category');
            return;
        }
        setIsLoading(true);
        dispatch(informationlistAction({ Faq_category_id: categoryId }))
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
    }, [dispatch, categoryId, navigate])

    const filteredFaqs = faqlist?.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    const categoryTitle = faqlist?.length > 0 ? faqlist[0]?.Faq_category_id?.title : null;
    const formattedCategoryTitle = categoryTitle?.charAt(0)?.toUpperCase() + categoryTitle?.slice(1);
    

    return (
        <>

            <div className="consulation_form three pt-4">
                {/* Header Start */}
                <Navbar expand="lg" className="bg-body-tertiary header-blck">
                    <Container>
                        <Navbar.Brand as={Link} to="/dashboard">
                            <img
                                className="main-logo"
                                src={require("../../src/assets/img/consultify-black-logo.svg").default}
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
                                <div className="prev_main faq-back-btn ">
                                    <img
                                        src={
                                            require("../../src/assets/img/right-arrow.svg").default
                                        }
                                        alt="arrow"
                                        className="arrow-next-green"
                                    />
                                    <NavLink
                                        onClick={()=>navigate(-1)} 
                                        class="prev_result">
                                        Back
                                    </NavLink>
                                </div>
                            {formattedCategoryTitle ?   <div className="setting-titles"> <h1>{formattedCategoryTitle} - FAQs</h1></div> : 
                             <div className="setting-titles"> <h1>FAQs</h1></div>
                            }

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
                                        filteredFaqs?.map((object, i) => {
                                            if (object?.usertype === "Salon") {
                                                return (
                                                    <div >
                                                        <Accordion.Item eventKey={i} key={i}>
                                                            <Accordion.Header>{object?.question}</Accordion.Header>
                                                            <Accordion.Body>
                                                                {(() => {
                                                                    try {
                                                                        const contentState = convertFromRaw(JSON.parse(object?.answer));
                                                                        const html = stateToHTML(contentState);

                                                                        return <div className="mt-2 image-fix" dangerouslySetInnerHTML={{ __html: html }} />;
                                                                    } catch (error) {
                                                                        console.error("Error parsing FAQ answer:", error);
                                                                        return <p>Error displaying content</p>;
                                                                    }
                                                                })()}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })
                                    )}
                                </Accordion>
)}
                            </div>
                        </div>
                    </div>
                </Layout>

            </div>
        </>
    )
}

export default FaqComponent




// import React, { useEffect, useState } from 'react'
// import { Accordion, Col, Container, InputGroup, Navbar, Row, Form, Spinner } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
// import { informationlistAction } from '../Redux/Actions/user/salon';
// import { convertFromRaw } from 'draft-js';
// import { stateToHTML } from 'draft-js-export-html';
// import Layout from '../components/Layout/Layout';
// import { Decryptedid } from '../utils/BcruptEncyptid';

// const FaqComponent = () => {
//     const { id, path } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const ids = queryParams.get("categoryId");
//     const categoryId = Decryptedid(atob(ids));

//     const faqlist = useSelector((state) => state.myaccount?.faqlist);
//     const [isLoading, setIsLoading] = useState(true); // Add loading state
//     const [search, setSearch] = useState('');

//     useEffect(() => {
//         setIsLoading(true);
//         dispatch(informationlistAction({ Faq_category_id: categoryId }))
//             .then(() => setIsLoading(false))
//             .catch(() => setIsLoading(false));
//     }, [dispatch, categoryId]);

//     const filteredFaqs = faqlist?.filter((faq) =>
//         faq.question.toLowerCase().includes(search.toLowerCase())
//     );

//     const categoryTitle = faqlist?.length > 0 ? faqlist[0]?.Faq_category_id?.title : null;
//     const formattedCategoryTitle = categoryTitle?.charAt(0)?.toUpperCase() + categoryTitle?.slice(1);

//     return (
//         <div className="consulation_form three pt-4">
//             <Navbar expand="lg" className="bg-body-tertiary header-blck">
//                 <Container>
//                     <Navbar.Brand as={Link} to="/dashboard">
//                         <img
//                             className="main-logo"
//                             src={require("../assets/img/consultify-black-logo.svg").default}
//                             alt="logo"
//                         />
//                     </Navbar.Brand>
//                     <NavLink className="exit_btn" to={"/" + path}>
//                         Exit
//                     </NavLink>
//                 </Container>
//             </Navbar>

//             <Layout>
//                 <div className="col-lg-12">
//                     <div className="col-lg-12 mx-auto">
//                         <div className="customer-faqs">
//                             <div className="prev_main faq-back-btn">
//                                 <img
//                                     src={require("../assets/img/right-arrow.svg").default}
//                                     alt="arrow"
//                                     className="arrow-next-green"
//                                 />
//                                 <NavLink
//                                     onClick={() => navigate(-1)}
//                                     className="prev_result"
//                                 >
//                                     Back
//                                 </NavLink>
//                             </div>
//                             {formattedCategoryTitle ? 
//                                 <div className="setting-titles"> <h1>{formattedCategoryTitle} - FAQs</h1></div> : 
//                                 <div className="setting-titles"> <h1>FAQs</h1></div>
//                             }

//                             <Col xs={12} md={4}>
//                                 <div className="search-input pt-3 pb-3 w-100">
//                                     <InputGroup className="mb-3 w-100">
//                                         <Form.Control
//                                             onChange={(e) => setSearch(e.target.value)}
//                                             placeholder="Search"
//                                         />
//                                         <InputGroup.Text className="group-box-search">
//                                             <img
//                                                 src={require("../assets/img/search.svg").default}
//                                                 alt="search"
//                                             />
//                                         </InputGroup.Text>
//                                     </InputGroup>
//                                 </div>
//                             </Col>

//                             {isLoading ? (
//                                 <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
//                                     <Spinner animation="border" role="status" variant="primary">
//                                         <span className="visually-hidden">Loading...</span>
//                                     </Spinner>
//                                 </div>
//                             ) : (
//                                 <Accordion defaultActiveKey="0">
//                                     {filteredFaqs?.length === 0 ? (
//                                         <div className="faqs-wrapper">
//                                             <p>No FAQs Available</p>
//                                         </div>
//                                     ) : (
//                                         filteredFaqs?.map((object, i) => {
//                                             if (object?.usertype === "Salon") {
//                                                 return (
//                                                     <Accordion.Item eventKey={i} key={i}>
//                                                         <Accordion.Header>{object?.question}</Accordion.Header>
//                                                         <Accordion.Body>
//                                                             {(() => {
//                                                                 try {
//                                                                     const contentState = convertFromRaw(JSON.parse(object?.answer));
//                                                                     const html = stateToHTML(contentState);
//                                                                     return <div className="mt-2 image-fix" dangerouslySetInnerHTML={{ __html: html }} />;
//                                                                 } catch (error) {
//                                                                     console.error("Error parsing FAQ answer:", error);
//                                                                     return <p>Error displaying content</p>;
//                                                                 }
//                                                             })()}
//                                                         </Accordion.Body>
//                                                     </Accordion.Item>
//                                                 );
//                                             }
//                                             return null;
//                                         })
//                                     )}
//                                 </Accordion>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//         </div>
//     );
// };

// export default FaqComponent;