import React from "react";
import MomentFunc from "../../../utils/MomentDateTime";

const ConsultationNotes = React.forwardRef(
  ({ handleNotesPrint, handleNotesClose, notesData }, ref) => {
    return (
      <div
        ref={ref}
        className="prescription_popup consultation_notes_content consult_pres_bg top0"
      >
        <div className="card mb-4">
          <div className="consulatation_card ">
            <div onClick={handleNotesClose} className="closeBtn cursor-pointer">
              <i className="bx bx-x"></i>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <h3 className="common_title pb-0">Consultation Notes</h3>
              <h3 className="common_title pb-0">
                {MomentFunc.Date(notesData?.date)}
              </h3>
            </div>
            <div className="upcoming_con_title mb-2">
              <p>Notes for Doctor</p>
            </div>
            <div className="notes prescription_info">
              <ul className="mb-0 p-0">
                <li className="d-flex justify-content-between w-400">
                  <p>{notesData?.fromUser}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="consulatation_card h-320 ">
            <div className="upcoming_con_title ">
              <p>From Dr. James Pearlman</p>
            </div>
            <div className="notes prescription_info d-flex justify-content-between flex-column">
              <p className="mb-3 h-20">{notesData?.fromDoctor}</p>

              <div className="h-20">
                <div onClick={handleNotesPrint} className="print_btn">
                  {(notesData.fromDoctor || notesData?.fromUser) && (
                    <button type="submit" class="btn cre_new">
                      Print
                    </button>
                  )}
                  {/* {(constNotes.fromDoctor || constNotes?.fromUser) && (
                    <button className="btn small_dark_btn">Print</button>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ConsultationNotes;
