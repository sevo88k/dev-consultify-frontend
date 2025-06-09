import { useEffect } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnquiryChat,
  getEnquiryDetails,
} from "../../redux/Action/AdminAction";
import { useParams } from "react-router-dom";
import moment from "moment";
const EnquiryDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const enquiryDetails = useSelector(
    (state) => state?.adminReducer?.enquiryDetails
  );
  const enquiryChat = useSelector((state) => state?.adminReducer?.chatData);
  useEffect(() => {
    dispatch(getEnquiryDetails(id));
    dispatch(getEnquiryChat(id));
  }, []);

  return (
    <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box1 d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Users</span>
                    <h4 className="mb-sm-0 font-size-28 bold-name-heading">
                      {enquiryDetails?.userId?.firstName.concat(
                        " ",
                        enquiryDetails?.userId?.lastName
                      )}
                    </h4>
                  </div>
                  <div className="page-title-right">
                    {/* <!-- App Search--> */}
                    {/* <form className="app-search d-none d-lg-block ">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative w-100">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <span className="bx bx-search"></span>                                                       
                                    </div>
                                </div>
                               
                            </form> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="row mb-3 mt-2">
              <div className="col-md-6">
                <h4 className="mb-sm-0 font-size-28 sub-heading-text-header">
                  Joined:
                  {moment(enquiryDetails?.userId?.createdAt).format(
                    "DD/MM/YYYY"
                  )}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tbl_user_info">
                        <div className="card">
                          <div className="chat box_shadow_new">
                            <div className="chat-title">
                              <h3>
                                Conversation
                                <span>
                                  Started{" "}
                                  {enquiryChat&& moment(enquiryChat[0]?.time).format(
                                    "DD/MM/YYYY hh:mm a"
                                  )}{" "}
                                </span>
                              </h3>
                            </div>
                            <div className="chat_inner">
                              {enquiryChat?.length > 0 ? (
                                enquiryChat?.map((msg) => {
                                  return (
                                    <>
                                      {msg?.sender == "trader" && (
                                        <div className="chat_left">
                                          <h4>
                                            {
                                              enquiryDetails?.tradeId
                                                ?.company_name
                                            }
                                          </h4>
                                          <p className="text_limit">{msg?.message}</p>
                                          {/* <p>
                                            Can you send some photos of the
                                            issue?
                                          </p>
                                          <p>
                                            I have availability this afternoon
                                          </p> */}
                                          <div className="text-end chat-time">
                                            <h5>
                                              {moment(msg?.time).format(
                                                "DD/MM/YYYY"
                                              )}
                                            </h5>
                                            <h5>
                                              {moment(msg?.time).format(
                                                "hh:mm a"
                                              )}
                                            </h5>
                                          </div>
                                        </div>
                                      )}
                                      {msg?.sender == "user" && (
                                        <div className="chat_right">
                                          <p className="text_limit">{msg?.message}</p>
                                          {/* <p>
                                            Sure, I’ll get some over to you!
                                          </p> */}

                                          {/* <p>Cheers!</p> */}
                                          <div className="text-end chat-time">
                                            <h5>
                                              {moment(msg?.time).format(
                                                "DD/MM/YYYY"
                                              )}
                                            </h5>
                                            <h5>
                                              {moment(msg?.time).format(
                                                "hh:mm a"
                                              )}
                                            </h5>
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  );
                                })
                              ) : (
                                
                                <p className="no_content_table_chat">No chat yet</p>
                            
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="user_profile enquiry_details">
                    <h4>Enquiry Details</h4>
                    <ul>
                      <li>
                        <p>Service:</p>
                        <span>
                          {enquiryDetails?.serviceId?.category_id?.category}
                        </span>
                      </li>
                      <li>
                        <p>Category:</p>
                        <span>{enquiryDetails?.serviceId?.service}</span>
                      </li>
                      <li>
                        <p>Required:</p>
                        <span>Urgent</span>
                      </li>
                    </ul>
                  </div>
                  <div className="user_profile enquiry_details customer_details">
                    <h4>Customer Details</h4>
                    <h5>
                      {enquiryDetails?.userId?.firstName.concat(
                        " ",
                        enquiryDetails?.userId?.lastName
                      )}
                    </h5>
                    <ul>
                      {enquiryDetails?.userId?.address
                        ?.split(",")
                        ?.map((address, i) => {
                          return <li>{address}</li>;
                        })}
                    </ul>
                    <h5 className="mt-2">
                      Email: {enquiryDetails?.userId?.email}
                    </h5>
                    <h5>Phone: {enquiryDetails?.userId?.phone_no}</h5>
                  </div>
                  <div className="user_profile enquiry_details customer_details">
                    <h4>Tradesperson Details</h4>
                    <h5>{enquiryDetails?.tradeId?.company_name}</h5>
                    <ul>
                      {enquiryDetails?.tradeId?.address
                        ?.split(",")
                        ?.map((address, i) => {
                          return <li>{address}</li>;
                        })}
                    </ul>
                    <h5 className="mt-2">
                      Email: {enquiryDetails?.tradeId?.email}
                    </h5>
                    <h5>Phone: {enquiryDetails?.tradeId?.mobile}</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}
        </div>
        {/* <!-- end main content--> */}
      </div>
    </Layout>
  );
};

export default EnquiryDetail;
