import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ProfiledetailsHeader from "./ProfiledetailsHeader";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  customerdetailsAction,
  updateProfileDetailAction,
} from "../Redux/Action/CustomerAuthAction";
import toast from "react-hot-toast";

export default function ContactPreferences() {
  const dispatch = useDispatch();
  const [validateValue, setValidateValue] = useState(false);

  const [customerdetails, setCustomerdetails] = useState();

  useEffect(() => {
    dispatch(customerdetailsAction()).then(function (data) {
      setCustomerdetails(data.payload);

      formik.setFieldValue(
        "contact_pref_notify",
        data?.payload?.contact_pref_notify
      );
      formik.setFieldValue(
        "promotionaloffers",
        data?.payload?.promotionaloffers
      );
      
    });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contact_pref_notify: customerdetails?.contact_pref_notify || false,
      promotionaloffers: customerdetails?.promotionaloffers || false,
    },
    validateOnChange: validateValue,
    onSubmit: (values) => {
      setValidateValue(true);
      console.log(values.promotionaloffers, "contact_pref_notify");
      dispatch(updateProfileDetailAction(values)).then((data) => {
        if (data?.payload?.success) {
          //resetForm();
          toast.success(data?.payload?.message);
        }
      });
    },
  });

  console.log(customerdetails, "customerdetails");
  return (
    <MyAcoountLayout>
      <div className="col-lg-8 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="contact_prefer">
            <div>
              <h2>Contact Preferences</h2>
              <ul className="yes_no_main">
                <li>
                  <p>Yes</p>
                </li>
                <li>
                  <p>No</p>
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <p>
                    I want to receive notifications for new offers and
                    promotions{" "}
                  </p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="contact_pref_notify"
                      id="flexRadioDefault1"
                      checked={formik.values.contact_pref_notify ? true : false}
                      value={formik.values.contact_pref_notify}
                      onChange={() =>
                        formik.setFieldValue("contact_pref_notify", true)
                      }
                    />
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="contact_pref_notify"
                      id="flexRadioDefault2"
                      checked={
                        formik.values.contact_pref_notify == false
                          ? true
                          : false
                      }
                      value={formik.values.contact_pref_notify}
                      onChange={() =>
                        formik.setFieldValue("contact_pref_notify", false)
                      }
                    />
                  </div>
                </li>
                <li>
                  {" "}
                  <p>
                    I want to receive notifications for new offers and
                    promotions{" "}
                  </p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="promotionaloffers"
                      id="flexRadioDefault1"
                      checked={formik.values.promotionaloffers ? true : false}
                      value={formik.values.promotionaloffers}
                      onChange={() =>
                        formik.setFieldValue("promotionaloffers", true)
                      }
                    />
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="promotionaloffers"
                      id="flexRadioDefault2"
                      checked={
                        formik.values.promotionaloffers == false
                          ? true
                          : false
                      }
                      value={formik.values.promotionaloffers}
                      onChange={() =>
                        formik.setFieldValue("promotionaloffers", false)
                      }
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className="submit-btn">
              <button type="submit" class="btn mb-3">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </MyAcoountLayout>
  );
}
