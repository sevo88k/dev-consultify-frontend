import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTraderEnquiries } from "../../redux/Action/AdminAction";
import { useParams } from "react-router-dom";
import moment from "moment";

const AllEnquiries = () => {
  const dispatch = useDispatch();
  const traderEnquiries = useSelector(
    (state) => state.adminReducer.traderEnquiries
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTraderEnquiries(id));
  }, []);

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
                <table className="table  vehicles_table  w-100 ">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Customer</th>
                      <th>Category</th>
                      <th>Location</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody className="td_color">
                    {traderEnquiries?.length > 0 ? (
                      traderEnquiries?.map((traderEnquiry) => {
                        return (
                          <tr valign="middle">
                            <td>
                              {moment(traderEnquiry?.createdAt).format(
                                "DD/MM/YYYY"
                              )}
                            </td>
                            <td>{traderEnquiry?.best_time_to_contact}</td>
                            <td>
                              <a href="#" className="blue_text">
                                {traderEnquiry?.userId.firstName.concat(
                                  " ",
                                  traderEnquiry?.userId.firstName
                                )}
                              </a>
                            </td>
                            <td>
                              {traderEnquiry?.serviceId?.category_id?.category}
                            </td>
                            <td>{traderEnquiry?.userId?.address}</td>
                            <td>
                              <a href="#" className="blue_text">
                                View
                              </a>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <td colspan="6">
                        <p className="no_content_table">No enquiries yet</p>
                      </td>
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
