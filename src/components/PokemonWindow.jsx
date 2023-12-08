import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../store/slices/pokemonBagSlice";
import typeBg from "../assets/typeBackgrounds";
import {
  setWarningState,
  resetWarningState,
} from "../store/slices/pokemonBagSlice";
import { resetPokemonSearch } from "../store/slices/pokemonSearchSlice";

function PokemonWindow({ pokemon, setNewPokemon }) {
  const pokemonWarning = useSelector((state) => state.pokemonBag.warning);
  const pokemonBag = useSelector((state) => state.pokemonBag.value);
  const dispatch = useDispatch();

  const {
    id = "-",
    name = "-",
    sprite = "-",
    types = ["-"],
    height = "-",
    stats = {},
  } = pokemon;

  function HandleRun() {
    dispatch(setWarningState("You ran away!"));
    dispatch(resetPokemonSearch());

    setTimeout(() => {
      setNewPokemon(null);
    }, 1500);
  }

  function handleCatch(pokemon) {
    if (pokemonBag.length < 6) {
      const isDuplicate = pokemonBag.some(
        (bagPokemon) => bagPokemon.id === pokemon.id
      );

      if (!isDuplicate) {
        dispatch(addPokemon(pokemon));

        setTimeout(() => {
          setNewPokemon(null);
        }, 1500);
      } else {
        dispatch(setWarningState("This Pokemon is already in your bag!"));
      }
    } else {
      dispatch(setWarningState("Bag is full!"));
    }
  }

  return (
    <div className="w-80 md:w-8/12 lg:max-w-screen-md bg-white border-2 border-gray-200 rounded-lg shadow mx-auto">
      <h5 className="flex flex-wrap justify-center md:justify-start text-sm font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50">
        <span className="p-3 text-lg md:text-xl">
          New Pokemon Has Appeared!
        </span>
      </h5>
      <div className="p-3 rounded-b-md md:p-6 bg-forest bg-cover bg-center">
        <div className="flex flex-wrap md:flex-nowrap justify-between">
          <div className="w-full md:w-60 rounded-lg overflow-hidden">
            <table className="w-full text-md md:text-lg lg:text-xl text-left rtl:text-right text-gray-500">
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50 border-b">
                  <th className="border-r py-2 px-2">ID</th>
                  <td className="py-2 px-2">#{id}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b">
                  <th className="border-r py-2 px-2">Name</th>
                  <td className="capitalize py-2 px-2">{name}</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b py-2 px-2">
                  <th className="border-r py-2 px-2">Type</th>
                  <td className="py-2 px-2">
                    {types.map((type, index) => (
                      <span
                        key={index}
                        className={`capitalize inline-block me-2 py-1 px-2 rounded-md text-sm text-white ${typeBg[type]}`}
                      >
                        {type}
                      </span>
                    ))}
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <th className="border-r py-2 px-2">Height</th>
                  <td className="py-2 px-2">{height / 10} m</td>
                </tr>
              </tbody>
            </table>
            <div className="flex rounded-b-lg overflow-hidden">
              <table className="w-full text-sm md:text-md lg:text-lg text-middle">
                <thead>
                  <tr>
                    <th className="bg-green-200 w-1/2">Hp</th>
                    <th className="bg-blue-200 w-1/2">Speed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    {stats.hp > 50 ? (
                      <td className="text-center bg-green-200">{stats.hp}</td>
                    ) : (
                      <td className="text-red-500 font-bold text-center bg-green-200">
                        {stats.hp}
                      </td>
                    )}
                    <td className="text-center bg-blue-200">{stats.speed}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th className="bg-red-200">Attack</th>
                    <th className="bg-yellow-200">Defense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="text-center bg-red-200">{stats.atk}</td>
                    <td className="text-center bg-yellow-200">{stats.def}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-5">
            <img src={sprite} alt={name} className="w-80"></img>
          </div>
        </div>
        <div className="flex flex-col items-center border rounded-lg p-5 mx-auto md:mt-10 bg-white h-24">
          <div className="flex justify-evenly mx-auto w-full">
            <button
              className="py-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-20 mx-3 text-white text-sm font-medium"
              onClick={HandleRun}
              onMouseEnter={() => {
                dispatch(setWarningState("Run away and leave the Pokemon"));
              }}
              onMouseLeave={() => {
                dispatch(resetWarningState());
              }}
            >
              Run
            </button>
            <button
              className="py-2 rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 w-20 mx-3 text-white text-sm font-medium"
              onClick={() => handleCatch(pokemon)}
              onMouseEnter={() => {
                dispatch(setWarningState("Catch the Pokemon and add to bag"));
              }}
              onMouseLeave={() => {
                dispatch(resetWarningState());
              }}
            >
              Catch
            </button>
          </div>
          <span className="py-2 text-sm md:text-lg">{pokemonWarning}</span>
        </div>
      </div>
    </div>
  );
}

export default PokemonWindow;
