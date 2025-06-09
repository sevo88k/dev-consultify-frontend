import React from "react";
import MomentFunc from "../../../utils/MomentDateTime";
const ViewPrescription = React.forwardRef(
  ({ viewPresData,handlePresPrint,handleClose },ref) => {
    const { date, medication, notes } = viewPresData;
    return (
      <div className="col-xl-12 viewPresHome" ref={ref}>
        <div className="prescription_popup">
          <div className="card mb-4">
            <div className="consulatation_card">
              <div onClick={handleClose} className="closeBtn cursor-pointer">
                <i class="bx bx-x"></i>
              </div>
              <div className="d-flex justify-content-between mb-2 margin_top">
                <h3 className="common_title pb-0">Prescription</h3>
                <h3 className="common_title pb-0">{MomentFunc.Date(date)}</h3>
              </div>
              <div className="upcoming_con_title mb-2">
                <p>Items</p>
              </div>
              <div className="notes prescription_info">
                <ul className="mb-0 p-0">
                  {medication.map((medi) => {
                    return (
                      <li className="d-flex justify-content-between w-400">
                        <p>{medi.meds}</p>
                        <span className="w-100">{medi.quantity}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="consulatation_card h-288-old">
              <div className="upcoming_con_title ">
                <p>Usage Notes</p>
              </div>
              <div className="notes prescription_info">
                <p className="mb-3">{notes}</p>
              </div>
            </div>

            <div className="print_btn">
              <button
                onClick={handlePresPrint}
                type="submit"
                className="btn cre_new"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ViewPrescription;
