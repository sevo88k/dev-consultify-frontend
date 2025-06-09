import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/Action/AdminAction";
import moment from "moment";
import { CSVLink } from "react-csv";
const AllUsers = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state?.adminReducer?.all_users);
  const totalUser = useSelector((state) => state?.adminReducer?.totalUsers);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const data = allUsers?.map((item, i) => {
    return {
      "Serial No": i + 1,
      Name: item?.firstName + " " + item?.surname,
      "Joining date": moment(item?.createdAt).format("DD/MM/YYYY"),
      "Email Address": item?.email,
      "Salon Name": item?.salon_name,
    };
  });
  return (
    <Layout>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Consultify</span>
                    <h4 className="mb-sm-0 font-size-28">
                      All Users
                      <span className="green-top-text">{totalUser}</span>
                    </h4>
                  </div>

                  <div className="page-title-right"></div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-xl-12">
                <div className="members_tbl">
                  <div className="card">
                    <div className="card-body height_fix">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                        <h4 className="title_text">All Users</h4>
                        <span className="d-flex">
                          {allUsers && (
                            <CSVLink
                              data={data}
                              className="btn-custom  btn cre_new"
                            >
                              Download CSV
                            </CSVLink>
                          )}
                        </span>
                      </div>
                      <div className="table-responsive height-fix-table">
                        <table
                          id="datatable"
                          className="table dt-responsive dealers_table nowrap w-100"
                        >
                          <thead>
                            <tr>
                              <th>Sr No.</th>
                              <th>Name</th>
                              <th>Joining Date</th>
                              <th>Email Address</th>
                              <th>Salon Name</th>
                            </tr>
                          </thead>

                          <tbody className="td_color">
                            {allUsers?.length > 0 ? (
                              allUsers?.map((item, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>
                                      {item?.firstName + " " + item?.surname}
                                    </td>
                                    <td>
                                      {moment(item?.createdAt).format(
                                        "DD/MM/YYYY"
                                      )}
                                    </td>
                                    <td>{item?.email}</td>
                                    <td>{item?.salon_name}</td>
                                  </tr>
                                );
                              })
                            ) : (
                              <td colspan="10">
                                <p className="no_content_table">No users yet</p>
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
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}
      </div>
    </Layout>
  );
};

export default AllUsers;
