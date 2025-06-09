import React, { useEffect, useState } from "react";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getProfileById, updateProfile } from "../Redux/Actions/user/salon";
import { toast } from "react-hot-toast";

const ContactPreferences = () => {
  const dispatch = useDispatch();
  const [validateValue, setValidateValue] = useState(false);
  const userProfile = useSelector((state) => state?.myaccount?.userInfo);

  useEffect(() => {
    dispatch(getProfileById());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contact_pref_notify: userProfile?.contact_pref_notify || false,
      promotionaloffers: userProfile?.promotionaloffers || false,
      
    },
    validateOnChange: validateValue,
    onSubmit: (values) => {
      setValidateValue(true);
      console.log(values.contact_pref_notify, "contact_pref_notify");
      dispatch(updateProfile(values)).then((data) => {
        if (data?.payload?.success) {
          //resetForm();
          toast.success(data?.payload?.message);
        }
      });
    },
  });

  return (
    <MyAcoountLayout DidYouKnow={true}>
      <div className="col-lg-8 mx-auto">
        <div className="setting-titles"> <h1>Contact Preferences</h1></div> 
        <div className="contact_prefer">
          <form onSubmit={formik.handleSubmit}>
            <div>
              {/* <h2>Contact Preferences</h2> */}
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
                    I'd like to receive promotional offers and information from
                    Consultify.
                  </p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="promotionaloffers"
                      id="flexRadioDefault3"
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
                      id="flexRadioDefault4"
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

            <div className="submit-btn c-prefer">
              <button type="submit" class="btn mb-3">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </MyAcoountLayout>
  );
};
export default ContactPreferences;
