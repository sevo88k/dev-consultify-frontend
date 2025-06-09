import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../Redux/Actions/user/userAll";
import { useNavigate, useParams } from "react-router-dom";

const ContactDetail = ({ userData }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState();
  const [contact, setContact] = useState();

  const { from } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setUserInfo(userData);
      setContact({ phnNumber: userData?.phnNumber, email: userData?.email });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUpdate = () => {
    const responseObj = { ...userInfo, ...contact };
    dispatch(updateProfile({ personalInfo: responseObj })).then((res) => {
      const personalInfoObject = res.payload.user.data;
      const checkList = {
        phnNumber: "",
        age: "",
        address: "",
      };
      checkList.phnNumber = personalInfoObject?.phnNumber
        ? personalInfoObject?.phnNumber == null
          ? false
          : true
        : false;
      checkList.age = personalInfoObject?.age
        ? personalInfoObject?.age == null
          ? false
          : true
        : false;

      const checkAdd = (obj) => {
        var count = 0;
        for (let key in obj) {
          if (key != "secondLine") {
            if (obj[key] == "") {
              count = count + 1;
            }
          }
        }
        return count >= 1 ? false : true;
      };

      checkList.address =
        Object.keys(personalInfoObject.address).length < 4
          ? false
          : checkAdd(personalInfoObject.address);

      if (checkList.phnNumber && checkList.age && checkList.address) {
        if (from == "fromnewcons") {
          navigate("/new-consultation");
        }
      }
    });
  };

  return (
    <div className="card">
      <div className="card-header accordian_head" id="heading4">
        <h5 className="mb-0">
          <div
            className=" d-flex personal_inner_sec dropdown_arrow collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="true"
            aria-controls="collapse4"
            type="button"
          >
            <h6 className="mb-0 ">Contact Details</h6>
          </div>
        </h5>
      </div>
      <div
        id="collapse4"
        className="collapse"
        aria-labelledby="heading4"
        data-parent="#accordion"
      >
        <div className="card-body inner_padding personal_info_inner">
          <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
            <h6 className="mb-0">Email Address</h6>
            <div className="options_part questions_options">
              <ul className="mb-0 d-flex p-0">
                <li>
                  <input
                    className="select_option_btn width_200 box_shadow"
                    placeholder="email@gmail.com"
                    value={contact?.email}
                    name="email"
                    disabled
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center peronal-content-detail">
            <h6 className="mb-0">Phone</h6>
            <div className="options_part questions_options">
              <ul className="mb-0 d-flex p-0">
                <li>
                  <input
                    onChange={handleChange}
                    className="select_option_btn width_200 box_shadow"
                    placeholder="Phone Number"
                    value={contact?.phnNumber}
                    type="number"
                    name="phnNumber"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="add-more-btn mt-4">
            <button
              onClick={handleUpdate}
              className="d-flex justify-content-center dark_btn"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
