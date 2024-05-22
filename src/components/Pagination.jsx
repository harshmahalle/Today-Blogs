import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-3 border-t-2 border-gray-300 shadow-md">
      <div className="flex items-center justify-between w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md hover:bg-gray-200"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md hover:bg-gray-200"
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold text-gray-700 ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

