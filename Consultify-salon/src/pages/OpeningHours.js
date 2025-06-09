import React, { useEffect, useRef, useState } from "react";
import MyAcoountLayout from "../components/Layout/MyAcoountLayout";
import useTimePicker from "../Hooks/timePicker";
import { FieldArray, Form, Formik } from "formik";
import {
  createOpeningHours,
  fetchOpeningHours,
  updateOpeningHours,
} from "../Redux/Actions/user/salon";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { openingHoursData } from "../utils/rawData";

const OpeningHours = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const { timeRanges } = useTimePicker();
  const openingHourSelector = useSelector(
    (state) => state.myaccount.opening_hours
  );

  //console.log(openingHourSelector, "openingHourSelector")

  useEffect(() => {
    dispatch(fetchOpeningHours());
  }, []);

  return (
    <MyAcoountLayout>
      <div className="account_form buisness_hours">
        <Formik
          // enableReinitialize: true
          innerRef={formRef}
          initialValues={{
            opening_hours:
              openingHourSelector?.opening_hours || openingHoursData,
          }}
          onSubmit={(values) => {
            console.log(values, "formik");
            if (openingHourSelector?.opening_hours) {
              dispatch(updateOpeningHours(values)).then((data) => {
                if (data?.payload?.success) {
                  toast.success(data?.payload?.message);
                }
              });
            } else {
              dispatch(createOpeningHours(values)).then((data) => {
                if (data?.payload?.success) {
                  toast.success(data?.payload?.message);
                }
              });
            }
          }}
          render={({ values, handleChange, setFieldValue }) => (
            <Form>
              <FieldArray
                name="opening_hours"
                render={(arrayHelpers) => (
                  <>
                    <h2>Business Hours</h2>
                    <div className="row">
                      {values?.opening_hours?.map((item, itemIndex) => {
                        return (
                          <>
                            <FieldArray name={`opening_hours.${itemIndex}.arr`}>
                              {(subArrayHelpers) => (
                                <div index={itemIndex} className="col-lg-12">
                                  <div className="buisness_form_fields">
                                    <div className="left-main">
                                      {itemIndex == 0 && (
                                        <img
                                          className="time-copy"
                                          src={require("../assets/img/copy.png")}
                                          onClick={() => {
                                            // Copy functionality

                                            const copyFromDay =
                                              values.opening_hours[itemIndex]
                                                .arr;
                                            values.opening_hours.forEach(
                                              (day, index) => {
                                                console.log(day, "daydayday");

                                                if (
                                                  index !== itemIndex &&
                                                  day.open_close != 0
                                                ) {
                                                  setFieldValue(
                                                    `opening_hours.${index}.arr`,
                                                    copyFromDay
                                                  );
                                                }
                                              }
                                            );
                                          }}
                                        />
                                      )}

                                      <p className="first-sec-p">{item?.day}</p>
                                    </div>
                                    {item?.day == "Saturday" ||
                                    item?.day == "Sunday" ? (
                                      <>
                                        {item?.arr?.map((data, i) => {
                                          return (
                                            <>
                                              {i != 0 && <p></p>}
                                              <input
                                                type="text"
                                                placeholder="Unavailable"
                                                name={`opening_hours.${itemIndex}.arr.${i}.reason`}
                                                value={
                                                  values.opening_hours[
                                                    itemIndex
                                                  ].arr[i].reason
                                                }
                                                onChange={handleChange}
                                              />
                                              <div className="edit_btns">
                                                {i != 0 && (
                                                  <button type="button">
                                                    <img
                                                      onClick={() =>
                                                        subArrayHelpers.remove(
                                                          i
                                                        )
                                                      }
                                                      src={require("../assets/img/Delete.png")}
                                                      alt=""
                                                    />
                                                  </button>
                                                )}

                                                <img
                                                  onClick={() =>
                                                    subArrayHelpers.push({
                                                      reason: "",
                                                    })
                                                  }
                                                  src={require("../assets/img/add.png")}
                                                  alt=""
                                                />
                                              </div>
                                            </>
                                          );
                                        })}
                                      </>
                                    ) : (
                                      item?.arr?.map((data, i) => {
                                        return (
                                          <>
                                            {i != 0 && (
                                              <div className="onadd-sec"></div>
                                            )}
                                            {data?.reason ? (
                                              <>
                                                <input
                                                  type="text"
                                                  placeholder="Unavailable"
                                                  name={`opening_hours.${itemIndex}.arr.${i}.reason`}
                                                  value={
                                                    values.opening_hours[
                                                      itemIndex
                                                    ].arr[i].reason
                                                  }
                                                  onChange={handleChange}
                                                />
                                                <div className="edit_btns">
                                                  {i != 0 && (
                                                    <button type="button">
                                                      <img
                                                        onClick={() =>
                                                          subArrayHelpers.remove(
                                                            i
                                                          )
                                                        }
                                                        src={require("../assets/img/Delete.png")}
                                                        alt=""
                                                      />
                                                    </button>
                                                  )}

                                                  <img
                                                    onClick={() => {
                                                      subArrayHelpers.remove(0);
                                                      subArrayHelpers.push({
                                                        start: "08:00 am",
                                                        end: "09:00 pm",
                                                      });
                                                    }}
                                                    src={require("../assets/img/add.png")}
                                                    alt=""
                                                  />
                                                </div>
                                              </>
                                            ) : (
                                              <>
                                                <select
                                                  key={i}
                                                  class="form-select add_width"
                                                  aria-label="Default select example"
                                                  name={`opening_hours.${itemIndex}.arr.${i}.start`}
                                                  value={
                                                    values.opening_hours[
                                                      itemIndex
                                                    ].arr[i].start
                                                  }
                                                  onChange={handleChange}
                                                >
                                                  {timeRanges?.map((time) => (
                                                    <option value={time}>
                                                      {time}
                                                    </option>
                                                  ))}
                                                </select>
                                                <select
                                                  class="form-select add_width"
                                                  aria-label="Default select example"
                                                  name={`opening_hours.${itemIndex}.arr.${i}.end`}
                                                  value={
                                                    values.opening_hours[
                                                      itemIndex
                                                    ].arr[i].end
                                                  }
                                                  onChange={handleChange}
                                                >
                                                  {timeRanges?.map((time) => (
                                                    <option value={time}>
                                                      {time}
                                                    </option>
                                                  ))}
                                                </select>
                                                <div className="edit_btns">
                                                  {
                                                    <button type="button">
                                                      <img
                                                        onClick={() => {
                                                          subArrayHelpers.remove(
                                                            i
                                                          );
                                                          if (
                                                            item?.arr?.length <
                                                            2
                                                          ) {
                                                            subArrayHelpers.push(
                                                              {
                                                                reason:
                                                                  "Unavailable",
                                                              }
                                                            );
                                                          }
                                                        }}
                                                        src={require("../assets/img/Delete.png")}
                                                        alt=""
                                                      />
                                                    </button>
                                                  }

                                                  <button type="button">
                                                    <img
                                                      onClick={() =>
                                                        subArrayHelpers.push({
                                                          start: "08:00 am",
                                                          end: "09:00 pm",
                                                        })
                                                      }
                                                      src={require("../assets/img/add.png")}
                                                      alt=""
                                                    />
                                                  </button>
                                                </div>
                                              </>
                                            )}
                                          </>
                                        );
                                      })
                                    )}
                                  </div>
                                </div>
                              )}
                            </FieldArray>
                          </>
                        );
                      })}

                      <div className="submit-btn">
                        <button type="submit" class="btn mb-3">
                          {openingHourSelector?.opening_hours
                            ? "Update"
                            : "Save"}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              />
            </Form>
          )}
          enableReinitialize={true}
        />
      </div>
    </MyAcoountLayout>
  );
};

export default OpeningHours;
