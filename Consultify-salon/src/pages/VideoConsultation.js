import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import VideoCall from "../components/Video/VideoCall";
import { io } from "socket.io-client";
import {
  fetchAppointmentById,
  fetchClientById,
} from "../Redux/Actions/user/salon";
import { Decryptedid } from "../utils/BcruptEncyptid";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBannerLayout from "../components/Layout/LargeBannerLayout";
import moment from "moment";

const VideoConsultation = () => {
  const dispatch = useDispatch();
  const { id, cid } = useParams();
  const idValue = Decryptedid(atob(id));
  const clientId = Decryptedid(atob(cid));
  const [scroll, setScroll] = useState(false);
  const BASE_URL = process.env.REACT_APP_HOST_NAME;
  const [socket, setSocket] = useState();
  const socketRef = useRef();
  const [me, setMe] = useState("");
  const [onlineUsers, setOnlineUsers] = useState();

  const { appointmentDetail, clientDetail } = useSelector((state) => ({
    appointmentDetail: state.myaccount.appointmentDetail,
    clientDetail: state.myaccount.clientDetail,
  }));

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    //dispatch(startstopLoading(true));
    socketRef.current = io.connect(BASE_URL);
    socketRef.current.emit("video-user-add", "salon");
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
    dispatch(fetchClientById(clientId));
  }, [clientId]);

  console.log(appointmentDetail, "appointmentDetail");

  return (
    <LargeBannerLayout>
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
                      <a href={`/client_view/${cid}`} >
                        Back to search results
                      </a>
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
                          {clientDetail?.first_name +
                            " " +
                            clientDetail?.last_name}
                        </h2>
                        <p>
                          {clientDetail?.first_line_address}
                          {clientDetail?.second_line_address} <br />
                          {clientDetail?.city}
                          <br />
                          {clientDetail?.pin_code}
                        </p>
                        <p>{clientDetail?.email}</p>
                        <p>+44 {clientDetail?.phone_number}</p>
                        <p>Age: 36 (23/07/1986)</p>
                      </div>
                    </div>
                  </div>

                  <div className="tests bod_cmn">
                    <h2 className="client_cmn_heading">Appointment Details</h2>
                    <div class="table-responsive">
                      <table>
                        <tr>
                          <td className="text-left">
                            {appointmentDetail?.description}
                          </td>
                          <td className="text-left">
                            {moment(appointmentDetail?.date).format(
                              "DD/MM/YYYY"
                            )}
                          </td>
                          <td className="text-left">
                            {appointmentDetail?.time}
                          </td>
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
                        clientId={clientId}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LargeBannerLayout>
  );
};
export default VideoConsultation;
