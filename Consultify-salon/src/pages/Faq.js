import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { informationlistAction } from '../Redux/Actions/user/salon';
import MyAcoountLayout from '../components/Layout/MyAcoountLayout';
import { Accordion } from 'react-bootstrap';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

export default function Faq() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(informationlistAction())
  }, [])
  const faqlist = useSelector(
    (state) => state.myaccount?.faqlist
  );

  return (
    <MyAcoountLayout DidYouKnow={true}>

      {/* <div className="col-lg-10 mx-auto">
        <div className="customer-faqs">
        <div className="setting-titles"> <h1>FAQs</h1></div> 
          <Accordion defaultActiveKey="0">
            {faqlist?.length === 0 ? (
              <div className="faqs-wrapper">
                <p>No FAQs Available</p>
              </div>
            ) : (
              faqlist?.map((object, i) => {
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
        </div>
      </div> */}

    </MyAcoountLayout>
  )
}
