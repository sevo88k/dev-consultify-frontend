import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { informationdeleteAction, informationlistAction } from "../Redux/Action/ManageconsultationAction";
import { sortFaqOrder } from "../Redux/Action/AdminAuthAction";
import { useEffect } from "react";

const FAQTable = ({ faqOrder, setFaqOrder }) => {
  const dispatch = useDispatch();

  const location = useLocation()

  const queryParams = new URLSearchParams(location.search);
  const ids = queryParams.get("categoryId");

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newFaqOrder = Array.from(faqOrder);
    const [movedItem] = newFaqOrder.splice(result.source.index, 1);
    newFaqOrder.splice(result.destination.index, 0, movedItem);

    setFaqOrder(newFaqOrder);

    const updatedOrder = {ids: newFaqOrder.map((faq) => faq._id),};

    dispatch(sortFaqOrder(updatedOrder))
  };


  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="faqlist" direction="vertical">
        {(provided) => {
          return (
            <table className="table dt-responsive dealers_table nowrap w-100">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Assigned To</th>
                  <th>Actions</th>
                  <th>Arrange Order</th>
                </tr>
              </thead>
              <tbody
                ref={provided.innerRef}
                {...provided.droppableProps}
                class="td_color"
              >
                {faqOrder?.length > 0 ? (
                  faqOrder?.map((object, i) => (
                    <Draggable
                      key={object._id}
                      draggableId={object._id}
                      index={i}
                    >
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <td>{i + 1}</td>
                          <td>{object?.question}</td>
                          <td>{object?.usertype}</td>
                          <td className="custom-btn-ps">
                            <Link
                              to={`/edit-faq/${object._id}?categoryId=${ids}`}
                              className="button edit"
                            >
                              Edit
                            </Link>
                            <button
                              className="button delete"
                              onClick={() => {
                                dispatch(
                                  informationdeleteAction({
                                    id: object?._id,
                                  })
                                ).then(function () {
                                  dispatch(informationlistAction());
                                });
                              }}
                            >
                              Delete
                            </button>
                          </td>
                          <td
                            {...provided.dragHandleProps}
                            style={{ cursor: "grab" }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 7H19"
                                stroke="#979699"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M5 12H19"
                                stroke="#979699"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M5 17H19"
                                stroke="#979699"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <tr class="td_color">
                    <td colSpan="5">No FAQs available.</td>
                  </tr>
                )}
                {provided.placeholder}
              </tbody>
            </table>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default FAQTable;