import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [pageState, setPageState] = useState(false);

  function togglePageState() {
    setPageState(!pageState);
  }

  return (
    <div className="flex justify-center mb-8">
      {pageState ? (
        <div className="my-2">
          <span className="text-2xl font-semibold p-3 bg-white border-b border-l border-r border-gray-200 rounded-b-lg shadow">
            Pokémon In Bag
          </span>
          <Link to="/">
            <button
              className="absolute top-0 end-0 p-3 bg-gray-50 border-b border-l border-gray-200 rounded-bl-lg w-16 font-medium"
              onClick={togglePageState}
            >
              Back
            </button>
          </Link>
        </div>
      ) : (
        <div className="my-2">
          <span className="text-2xl font-semibold p-3 bg-white border-b border-l border-r border-gray-200 rounded-b-lg shadow">
            Search For Pokémon
          </span>
          <Link to="/bag">
            <button
              className="absolute top-0 end-0 p-3 bg-gray-50 border-b border-l border-gray-200 rounded-bl-lg w-16 font-medium"
              onClick={togglePageState}
            >
              Bag
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
