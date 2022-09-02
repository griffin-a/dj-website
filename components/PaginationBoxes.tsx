import React from "react";
// import { eventsFetcher } from "../utils/api";
// import { useEffect } from "react";

type PaginationProps = {
  totalPages?: number,
  page?: number,
  setPage?: (page: number) => void
}

function PaginationBoxes({ totalPages = 1, page = 1, setPage }: PaginationProps) {
  const getPaginationBoxes = () => {
    const output = [];

    for (let i = 0; i < totalPages; i++) {
      output.push(
        <a
          onClick={() => setPage(i + 1)}
          href="#"
          key={i}
          className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
        >
          {i + 1}
        </a>
      );
    }

    return output;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center pb-10">
      
        <div>
        {page !== 1 && (
          <a
            onClick={() => setPage(page - 1)}
            href="#"
            className="no-underline w-20 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            Prev
          </a>
          )}
        </div>
      

      <div className="flex-1 flex flex-wrap item-center justify-center">
        {getPaginationBoxes()}
      </div>
      
        <div>
        {page !== totalPages && (
          <a
            href="#"
            onClick={() => setPage(page + 1)}
            className="no-underline w-20 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            Next
          </a>
          )}
        </div>
      
    </div>
  );
}

export default PaginationBoxes;
