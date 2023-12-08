import { useDispatch, useSelector } from "react-redux";
import {
  setPokemonSearch,
  setSearchWarning,
  resetSearchWarning,
} from "../store/slices/pokemonSearchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar({ getPokemonData }) {
  const pokemonSearch = useSelector((state) => state.pokemonSearch.value);
  const searchWarning = useSelector((state) => state.pokemonSearch.warning);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (pokemonSearch === undefined || pokemonSearch === "") {
      dispatch(setSearchWarning("Search bar cannot be empty!"));
    } else {
      getPokemonData();
      dispatch(resetSearchWarning());
    }
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex justify-center mb-10"
    >
      <div className="w-80 flex flex-col align-middle h-16">
        <div className="relative">
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Input Name/ID"
            onChange={(e) => dispatch(setPokemonSearch(e.target.value))}
            value={pokemonSearch}
          ></input>
          <button
            type="submit"
            className="text-white absolute end-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-3"
          >
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>
        <span className="mx-auto text-red-500">{searchWarning}</span>
      </div>
    </form>
  );
}

export default Searchbar;
