import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelSubscriptionAction,
  getProfileById,
  getSubscriptionById,
  updateProfile,
} from "../Redux/Actions/user/salon";
import { editProfile } from "../Redux/Actions/user/auth";
import { toast } from "react-hot-toast";
import { Modal, ModalHeader } from "react-bootstrap";

const MySubscription = () => {
  const dispatch = useDispatch();
  const [delModalShow, setDelModalShow] = React.useState(false);
  const userProfile = useSelector((state) => state?.myaccount?.userInfo);
  const subscrtiption_data = useSelector(
    (state) => state?.myaccount?.subscription_data
  );

  const submitSubscription = (value) => {
    dispatch(updateProfile({ subscription: value })).then((data) => {
      if (data?.payload?.success) {
        //-> toast.success(data?.payload?.message)
      }
    });
  };

  useEffect(() => {
    dispatch(getProfileById());
    dispatch(getSubscriptionById(localStorage.getItem("userid")));
  }, []);

  const handlePayment = async (price, type) => {
    // Replace 'your_price_id' with the actual Stripe price ID for the selected subscription tier
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/other/createSubscription`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          priceId: price,
          subscriptionType: type,
        }),
      }
    );

    const result = await response.json();

    if (result?.session?.url) {
      window.location.href = result?.session?.url;
      //submitSubscription(1)
    } else {
      toast.error(result?.msg);
    }

    console.log(result, "handlePayment");
  };

  return (
    <MyAcoountLayout DidYouKnow={true}>
      <div className="row justify-content-center">
        <div className="col-lg-6">
        <div className="setting-titles"> <h1>Subscription</h1></div> 
          <div
            className={`subscription-content ${
              subscrtiption_data?.subscriptionType == 1 && "highlight_border"
            } standard-plan`}
          >
            <div className="subscription-type">
              <div className="subscription-img">
                <img
                  src={require("../assets/img/subscription-img.svg").default}
                  alt="img"
                />
              </div>
              <div className="plan-type-name">
                <h3>Standard</h3>
                <h3>£14.99 per month</h3>
              </div>
            </div>
            <ul className="plan-features">
              <li>
                <img
                  src={require("../assets/img/drk-tick.svg").default}
                  alt="img"
                />
                <h3>Dedicated Account Manager</h3>
              </li>
              <li>
                <img
                  src={require("../assets/img/drk-tick.svg").default}
                  alt="img"
                />
                <h3>Unlimited Consultations</h3>
              </li>
              <li>
                <img
                  src={require("../assets/img/drk-tick.svg").default}
                  alt="img"
                />
                <h3>Unlimited Clients</h3>
              </li>
              <li>
                <img
                  src={require("../assets/img/drk-tick.svg").default}
                  alt="img"
                />
                <h3>Cancel Anytime</h3>
              </li>
            </ul>
            {/* <div className="submit-btn ">
              <div
                onClick={() => {
                  handlePayment(process.env.REACT_APP_PRICE_KEY, 1);
                }}
                type="submit"
                className="lg-btn col-md-3"
              >
                {(userProfile?.subscription === 1  && userProfile.hasOwnProperty("canceldate"))
                  ? "Your Current Plan"
                  : "Manage Subscription Plan"}
              </div>
            </div> */}
            <div className="submit-btn ">
              <div
                type="submit"
                className="lg-btn col-md-3"
                onClick={() => {
                  if (!userProfile.hasOwnProperty("canceldate")) {
                    setDelModalShow(true);
                  }
                }}
              >
                Cancel Subscription
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={delModalShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader
          onClick={function () {
            setDelModalShow(false);
          }}
          closeButton
        ></ModalHeader>
        <Modal.Body>
          <div className="delete-modal">
            <p>Are You Sure?</p>
            <div className="d-flex">
              <button
                className="delete-yes"
                onClick={() => {
                  dispatch(cancelSubscriptionAction()).then(function () {
                    setDelModalShow(false);
                    toast.success("Your Subscription has been cancelled");
                  });
                }}
              >
                Yes
              </button>
              <button
                className="delete-cancel"
                onClick={function () {
                  setDelModalShow(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </MyAcoountLayout>
  );
};
export default MySubscription;
