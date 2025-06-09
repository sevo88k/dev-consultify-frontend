import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageClick, pageCounttotal }) {
  // console.log(pageCounttotal, "pageCountpageCountpageCount");
  // return (
  //   <ReactPaginate
  //     className="pagination_custom"
  //     breakLabel="..."
  //     nextLabel="next >"
  //     onPageChange={handlePageClick}
  //     pageRangeDisplayed={3}
  //     pageCount={pageCounttotal}
  //     previousLabel="<previous"
  //     renderOnZeroPageCount={null}
  //   />
  // );

  return (
    <ReactPaginate
      className="pagination_custom"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCounttotal}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
