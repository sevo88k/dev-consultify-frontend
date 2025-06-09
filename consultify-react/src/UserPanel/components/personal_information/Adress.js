import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../Redux/Actions/user/userAll";
import { useNavigate, useParams } from "react-router-dom";

export const Adress = ({ userData }) => {
  // console.log(userData,"userData");
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState();
  const [address, setAddress] = useState();
  // console.log(address,"address");
  const { from } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setUserInfo(userData);
      setAddress(userData?.address);
    }
  }, [userData]);

  const handleChange = (e) => {
    // console.log(e.target,"ggggggg");      
    const { name, value } = e.target;
    setAddress((prev) => {
      return {
        ...prev,
        [name]: value,
      };       
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const responseObj = { ...userInfo, address: address };
    dispatch(updateProfile({ personalInfo: responseObj })).then((res) => {
      setAddress((prev) => {
        return {
          ...prev,
          ...res.payload.user.data.address,
        };
      });

      if (from == "fromnewcons") {
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
          navigate("/new-consultation");
        }
      }
    });    
  };
  return (
    <form onSubmit={(e) => handleUpdate(e)}>
      <div className="card mb-2">
        <div className="card-header accordian_head" id="heading3">
          <h5 className="mb-0">
            <div
              className=" d-flex personal_inner_sec dropdown_arrow collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="true"
              aria-controls="collapse3"
              type="button"
            >
              <h6 className="mb-0 ">Address</h6>
            </div>
          </h5>
        </div>
        <div
          id="collapse3"
          className="collapse"
          aria-labelledby="heading3"
          data-parent="#accordion"
        >
          <div className="card-body inner_padding personal_info_inner">
            <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
              <h6 className="mb-0">House No / Name</h6>
              <div className="options_part questions_options">
                <ul className="mb-0 d-flex p-0">
                  <li>
                    <input
                      onChange={handleChange}
                      className="select_option_btn width_200 box_shadow"
                      placeholder="House No."
                      value={address?.houseNo}
                      name="houseNo"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
              <h6 className="mb-0">Street</h6>
              <div className="options_part questions_options">
                <ul className="mb-0 d-flex p-0">
                  <li>
                    <input
                      onChange={handleChange}
                      className="select_option_btn width_200 box_shadow"
                      placeholder="Street"
                      value={address?.street}
                      name="street"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
              <h6 className="mb-0">Second Line (Optional)</h6>
              <div className="options_part questions_options">
                <ul className="mb-0 d-flex p-0">
                  <li>
                    <input
                      onChange={handleChange}
                      className="select_option_btn width_200 box_shadow"
                      placeholder="Optional"
                      value={address?.secondLine}
                      name="secondLine"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 peronal-content-detail">
              <h6 className="mb-0">Town / City</h6>
              <div className="options_part questions_options">
                <ul className="mb-0 d-flex p-0">
                  <li>
                    <input
                      onChange={handleChange}
                      className="select_option_btn width_200 box_shadow"
                      placeholder="Town/City"
                      value={address?.townCity}
                      name="townCity"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center peronal-content-detail">
              <h6 className="mb-0">Post Code</h6>
              <div className="options_part questions_options">
                <ul className="mb-0 d-flex p-0">
                  <li>
                    <input
                      onChange={handleChange}
                      className="select_option_btn width_200 box_shadow"
                      placeholder="Post Code"
                      value={address?.postCode}
                      name="postCode"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="add-more-btn mt-4">
              <button
                type="submit"
                className="d-flex justify-content-center dark_btn"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
