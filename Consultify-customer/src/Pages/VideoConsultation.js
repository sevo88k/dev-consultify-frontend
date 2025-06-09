import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import VideoCall from "../components/Video/VideoCall";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Decryptedid } from "../utils/BcruptEncyptid";
import { io } from "socket.io-client";
import {
  customerDashboardDetails,
  fetchAppointmentById,
} from "../Redux/Action/CustomerRestAction";
import { jwtDecode } from "jwt-decode";

const VideoConsultation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const idValue = Decryptedid(atob(id));
  const [scroll, setScroll] = useState(false);
  const BASE_URL = process.env.REACT_APP_HOST_NAME;
  const [socket, setSocket] = useState();
  const socketRef = useRef();
  const [me, setMe] = useState("");
  const [onlineUsers, setOnlineUsers] = useState();

  const { appointmentDetail, customerDetail } = useSelector((state) => ({
    appointmentDetail: state.customer?.appointmentDetail,
    customerDetail: state.customer.userInfo?.customerDetail,
  }));

  useEffect(() => {
    //dispatch(startstopLoading(true));

    socketRef.current = io.connect(BASE_URL);
    console.log(jwtDecode(localStorage.getItem("accessToken")), "accessToken");
    socketRef.current.emit(
      "video-user-add",
      jwtDecode(localStorage.getItem("accessToken"))?.data?._id
    );
    socketRef.current.on("me", (myId) => setMe(myId));
    setSocket(socketRef.current);
    dispatch(fetchAppointmentById(idValue)).then((res) => {
      if (res?.payload?.success == true || res?.payload?.success == false) {
        // dispatch(startstopLoading(false));
      }
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    socketRef.current.on("video-users", (users) => {
      setOnlineUsers(users);
    });
  }, [socketRef.current]);

  useEffect(() => {
    dispatch(customerDashboardDetails());
  }, []);

  return (
    <Layout>
      <div className="result_view">
        <section className="product_view">
          <div className="container custom">
            <div className="productmain_wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="prev_main">
                    <img
                      src={
                        require("../../src/assets/img/right-arrow.svg").default
                      }
                      alt="arrow"
                      className="arrow-next-green"
                    />
                    <a class="prev_result" href="#">
                      <NavLink to="/client_view">Back to Dashboard</NavLink>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="user_info bod_cmn">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <img
                          // src={require("../assets/img/logo-circle.png")}
                          src={require("../assets/img/circlelogo.svg").default}
                          alt="arrow"
                          className="logo-main"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h2 className="client_cmn_heading">
                          {customerDetail?.first_name +
                            " " +
                            customerDetail?.last_name}
                        </h2>
                        <p>
                          {customerDetail?.first_line_address}
                          {customerDetail?.second_line_address}
                          <br />
                          {customerDetail?.city}
                          <br />
                          {customerDetail?.pin_code}
                        </p>
                        <p>{customerDetail?.email}</p>
                        {customerDetail?.phone_number && (
                          <p>{`+44 ` + customerDetail?.phone_number}</p>
                        )}

                        {/* <p>Age: 36   (23/07/1986)</p> */}
                      </div>
                      ``
                    </div>
                  </div>

                  <div className="tests bod_cmn">
                    <h2 className="client_cmn_heading">Appointment Details</h2>
                    <div class="table-responsive">
                      <table>
                        <tr>
                          <td className="text-left">Eyebrow Tinting</td>
                          <td className="text-left">01/02/2024</td>
                          <td className="text-left">09:00am</td>
                        </tr>
                      </table>
                      <div className="mt-4 d-flex justify-content-center">
                        <button className="submit_big_button">
                          Reschedule?
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="video_sec">
                    {socket && me && appointmentDetail && (
                      <VideoCall
                        me={me}
                        consInfo={appointmentDetail}
                        socket={socket}
                        onlineUsers={onlineUsers}
                      />
                    )}
                  </div>
                  {/* <div className="mt-4 d-flex justify-content-center">
                                       <button className="submit_big_button">Start</button>
                                       </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default VideoConsultation;
