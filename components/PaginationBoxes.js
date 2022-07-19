import React from "react";
import { eventsFetcher } from "../utils/api";
import { useEffect } from "react";


function PaginationBoxes() {
  // const { pagination } = useSelector((state) => state.events);
  // const dispatch = useDispatch();

  const setNewPage = (increment) => {

    // const newPagination = {
    //   totalPages: pagination.totalPages,
    //   currentPage: pagination.currentPage + increment
    // }

    // // console.log(newPagination);

    // dispatch(setPagination(newPagination));
  }


  const getPaginationBoxes = () => {
    console.log(pagination);
    const output = [];

    for (let i = 0; i < pagination.totalPages; i++) {
      output.push(
        <a
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

      {/* {pagination.currentPage !== 1 && ( */}
        <div>
          <a
            onClick={() => setNewPage(-1)}
            href="#"
            className="no-underline w-20 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
          >
            Prev
          </a>
        </div>
      {/* )} */}

      <div className="flex-1 flex flex-wrap item-center justify-center">
        <a
          href="#"
          className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
        >
          1
        </a>
        {/* {getPaginationBoxes()} */}
        <a
          href="#"
          className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-600 rounded-sm transition-colors duration-200 ease font-medium"
        >
          2
        </a>
        <a
          href="#"
          className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
        >
          3
        </a>
        <a
          href="#"
          className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
        >
          4
        </a>
        <a
          href="#"
          className="no-underline w-10 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
        >
          5
        </a>
      </div>
      {/* {pagination.currentPage !== pagination.totalPages && ( */}

      <div>

        <a
          href="#"
          onClick={() => setNewPage(1)}
          className="no-underline w-20 h-12 mx-2 my-2 sm:my-0 flex justify-center items-center border border-gray-300 rounded-sm transition-colors duration-200 ease hover:border-gray-400 hover:text-blue-400"
        >
          Next
        </a>
      </div>
            {/* )} */}

    </div>
  );
}

export default PaginationBoxes;
