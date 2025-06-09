import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const AllEnquiries = ({userEnquiries }) => {
 
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="tbl_user_info">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                <h4 className="title_text">All Enquiries</h4>
              </div>

              <div className="table-responsive height-fix-table">
                <table className="table  vehicles_table  w-100 small-table-font">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Tradesperson</th>
                      <th>Category</th>
                      <th>Location</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody className="td_color">
                    {userEnquiries?.length > 0 ? (
                      userEnquiries?.map((enquiry) => {
                        return (
                          <tr valign="middle">
                            <td>
                              {moment(enquiry?.createdAt).format("DD/MM/YYYY")}
                            </td>
                            <td>{enquiry?.best_time_to_contact}</td>
                            <td>{enquiry?.company_name}</td>
                            <td>{enquiry?.serviceId?.category_id?.category}</td>
                            <td>{enquiry?.enquiry_address?.address}</td>
                            <td>
                              <Link
                                to="/all-users/member-details/view-enquiry-details"
                                className="blue_text"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                     <td colspan="6"> <p className="no_content_table" >No enquiries yet</p></td>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEnquiries;
