import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { NavLink } from "react-router-dom";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import AddMembersModal from "../components/Modals/AddMembersModal";
import { fetchStaffMembers } from "../Redux/Actions/user/salon";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { FormControl } from "react-bootstrap";

const StaffOverview = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const staffMemberSelector = useSelector(
    (state) => state?.myaccount?.staff_members
  );
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    dispatch(fetchStaffMembers());
  }, []);

  useEffect(() => {
    setSearchData(staffMemberSelector);
  }, [staffMemberSelector]);

  //console.log(search, "search")

  return (
    <MyAcoountLayout>
      <div className="col-lg-12 mx-auto">
        <div className="staff_over">
          <div className="top_bar_staff">
            <div className="row">
              <div className="col-lg-6">
                <div className="search-input">
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="group-box-search">
                      <img
                        src={require("../assets/img/search.svg").default}
                        alt="search"
                      />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Search here"
                      aria-label="Character Name"
                      aria-describedby="basic-addon1"
                      onChange={(event) => {
                        const data = staffMemberSelector?.filter((item) =>
                          item?.fullname
                            ?.toLowerCase()
                            .includes(event.target.value?.toLowerCase())
                        );
                        setSearchData(data);
                      }}
                      // value={search}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <div onClick={() => setModalShow(true)} className="green-btn">
                  Add
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {searchData?.map((item, i) => {
              return (
                <>
                  <div className="col-lg-12">
                    <NavLink to={`/addedit_staff/${item?._id}`}>
                      <div className="staff_profile">
                        <div className="profile_left">
                          <img
                            src={require("../assets/img/circle.png")}
                            alt=""
                          />
                          <div className="staff_data">
                            <h3>{item?.fullname}</h3>
                            <p>
                              Created:{" "}
                              {moment(item?.createdAt).format("DD/MM/YYYY")}
                            </p>
                          </div>
                        </div>
                        <img src={require("../assets/img/Expand_left.png")} />
                      </div>
                    </NavLink>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <AddMembersModal modalShow={modalShow} setModalShow={setModalShow} />
    </MyAcoountLayout>
  );
};

export default StaffOverview;
