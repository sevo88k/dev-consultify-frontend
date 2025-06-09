import React from "react";
import Layout from "../../Layout/Layout";
import { getPresriptions } from "../../../Redux/Actions/user/userAll";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import MomentFunc from "../../../utils/MomentDateTime";
import Knowpage from "./Knowpage";
import PriscriptionNotes from "./PriscriptionNotes";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";
export default function Prescriptions() {
  const [viewP, setViewP] = useState();
  const [view, setView] = useState();
  const pricriptions = useSelector(
    (state) =>
      state?.consultaions?.pricriptions?.user?.message?.currentPrescriptions
  );

  const PrescriptionRef = useRef();
  const handlePresPrint = useReactToPrint({
    content: () => PrescriptionRef.current,
  });

  const pastPricriptions = useSelector(
    (state) =>
      state?.consultaions?.pricriptions?.user?.message?.pastPrescriptions
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startstopLoading(true));
    dispatch(getPresriptions()).then((res) => {
      if (res?.payload) {
        dispatch(startstopLoading(false));
      }
    });
  }, []);
  const viewPrescription = (pp) => {
    setView(<Knowpage />);
    setViewP(pp);
  };

  const handleClose = () => {
    setView(null);
  };

  return (
    <Layout>
      <div className="col-lg-10">
        <div className="desc_area pb-4">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-7 col-md-9 col-12">
              <div className="card  mb-4">
                <div className="pres_card_body card-body height-330">
                  <div className="consulatation_card">
                    <div>
                      <h3 className="common_title">Current Prescriptions</h3>
                    </div>

                    <div
                      className={
                        pricriptions?.length > 0
                          ? "overflow_table pres_table past_pres"
                          : "overflow_table pres_table past_pres scroll-hide"
                      }
                    >
                      <table className="table admin-prescription prescription_lg_table">
                        <thead>
                          <tr>
                            <th className="border-b-c">Issue Date</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr className="box_prop mb-2"> */}

                          {pricriptions?.length > 0 ? (
                            pricriptions?.map((item, i) => {
                              return (
                                <tr key={i} className="box_prop mb-2">
                                  <td>
                                    <p>{MomentFunc.Date(item.date)}</p>
                                  </td>
                                  <td className="med-td">
                                    {item?.medication?.map((med) => {
                                      return <p>{med.meds}</p>;
                                    })}
                                  </td>
                                  <td>
                                    <p>
                                      {item?.medication?.map((med) => {
                                        return <p>{med.quantity}</p>;
                                      })}
                                    </p>
                                  </td>
                                  <td>
                                    <p>
                                      <a
                                        onClick={() => viewPrescription(item)}
                                        className="view_btn cursor-pointer"
                                      >
                                        View
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5 ">
                              No current prescriptions yet
                            </div>
                          )}
                        </tbody>
                        {/* <tbody>
                          {pricriptions?.length > 0 ? (
                            pricriptions?.map((item, i) => {
                              return (
                                <div key={i}>
                                  <tr className="box_prop">
                                    <td>
                                      <p>{MomentFunc.Date(item.date)}</p>
                                    </td>
                                    <td className="">
                                      <p>{item?.medication[0]?.meds}</p>
                                    </td>
                                    <td>
                                      <p>
                                        {item?.medication[0]?.quantity} tablets
                                      </p>
                                    </td>
                                    <td>
                                      <p>
                                        <a
                                          onClick={() => viewPrescription(item)}
                                          className="view_btn cursor-pointer"
                                        >
                                          View
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                </div>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5">
                              
                              No current prescriptions yet
                            </div>
                          )}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="pres_card_body card-body height-330">
                  <div className="consulatation_card">
                    <div>
                      <h3 className="common_title">Past Prescriptions</h3>
                    </div>

                    <div
                      className={
                        pastPricriptions?.length > 0
                          ? "overflow_table pres_table past_pres"
                          : "overflow_table pres_table past_pres scroll-hide"
                      }
                    >
                      <table className="table admin-prescription prescription_lg_table">
                        <thead>
                          <tr>
                            <th className="border-b-c">Issue Date</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr className="box_prop mb-2"> */}

                          {pastPricriptions?.length > 0 ? (
                            pastPricriptions?.map((item, i) => {
                              return (
                                <tr key={i} className="box_prop mb-2">
                                  <td>
                                    <p>{MomentFunc.Date(item.date)}</p>
                                  </td>
                                  <td className="med-td">
                                    {item?.medication?.map((med) => {
                                      return <p>{med.meds}</p>;
                                    })}
                                  </td>
                                  <td>
                                    <p>
                                      {item?.medication?.map((med) => {
                                        return <p>{med.quantity}</p>;
                                      })}
                                    </p>
                                  </td>
                                  <td>
                                    <p>
                                      <a
                                        onClick={() => viewPrescription(item)}
                                        className="view_btn cursor-pointer"
                                      >
                                        View
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5 ">
                              No current prescriptions yet
                            </div>
                          )}
                        </tbody>
                        {/* <tbody>
                          {pastPricriptions?.length > 0 ? (
                            pastPricriptions?.map((item, i) => {
                              return (
                                <div key={i}>
                                  <tr className="box_prop">
                                    <td>
                                      <p>{MomentFunc.Date(item.date)}</p>
                                    </td>
                                    <td className="">
                                      <p>{item?.medication[0]?.meds}</p>
                                    </td>
                                    <td>
                                      <p>
                                        {item?.medication[0]?.quantity} tablets
                                      </p>
                                    </td>
                                    <td>
                                      <p>
                                        <a
                                          onClick={() => viewPrescription(item)}
                                          className="view_btn cursor-pointer"
                                        >
                                          View
                                        </a>
                                      </p>
                                    </td>
                                  </tr>
                                </div>
                              );
                            })
                          ) : (
                            <div className="d-flex justify-content-center mt-5 ">
                              No  yet
                            </div>
                          )}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ad-sidebar d-flex justify-content-between flex-column">
          {view ? (
            <PriscriptionNotes
              ref={PrescriptionRef}
              viewPresData={viewP}
              handlePrint={handlePresPrint}
              handleClose={handleClose}
            />
          ) : (
            <Knowpage />
          )}
        </div>

        {/* <!-- Modal --> */}
        {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div> */}
      </div>
    </Layout>
  );
}
