import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbpages, getPrevPage, getNextPage } = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>PREV</button>
        <p>
          {page + 1} of {nbpages}
        </p>
        <button onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;
