import React, { useState, useEffect } from "react";

const ConsNotes = ({ socket, userConsInfo }) => {
  const [doctorNotes, setDocNotes] = useState();
  const [notes, setNotes] = useState();
  const [convoId, setConvoId] = useState();
  useEffect(() => {
    socket.on("recv_notes", (notesObject) => {
      setDocNotes(notesObject?.fromDoctor);
    });
  }, [socket]);

  useEffect(() => {
    const userNotes = userConsInfo?.cons?.fromUser;
    setNotes(userNotes);
    const docNotes = userConsInfo?.cons?.fromDoctor;
    setDocNotes(docNotes);
    if (userConsInfo?.chat?.conversationId) {
      const convo = userConsInfo?.chat?.conversationId;
      setConvoId(convo);
      (async () => await socket.emit("join_room", convo))();
    }
  }, []);

  const sendNotes = (e) => {
    if (e.key === "Enter") {
      const notesObject = {
        convoId: convoId,
        consId: userConsInfo?.cons?._id,
        fromUser: notes,
      };
      try {
        socket.emit("add_notes", notesObject);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="col-lg-5">
      <div className=" upcoming_consultation join_call_notes">
        <div className="card">
          <div className="card-body">
            <div className="consulatation_card">
              <div className="upcoming_con_title">
                <h3 className="common_title">Consultation Notes</h3>
                <p> From Doctor</p>
              </div>
              <div className="notes prescription_info ">
                {/* <textarea readOnly value={doctorNotes}></textarea> */}
                <p className="mb-3 overflow-auto cons_notes_height">
                  {doctorNotes}
                </p>
              </div>
            </div>
            <div className="consulatation_card ">
              <div className="upcoming_con_title ">
                <p> Notes for Doctor</p>
              </div>
              <form>
                <div className="notes notes_input ">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    onKeyDown={sendNotes}
                    className="form-control"
                    placeholder="Type Here..."
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsNotes;
