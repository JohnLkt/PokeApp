import typeBg from "../assets/typeBackgrounds";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../store/slices/pokemonBagSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const { id, name, sprite, types, height, stats } = pokemon;

  return (
    <div className="w-68 bg-white border-2 border-gray-200 rounded-lg shadow">
      <div className="w-full flex flex-wrap justify-start text-sm font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50">
        <span className="w-full p-2 flex justify-between">
          <span>
            <span className="inline-block me-2 py-1 px-2 rounded-md bg-slate-200 w-16">
              #{id}
            </span>
            {types.map((type, index) => (
              <span
                key={index}
                className={`capitalize inline-block me-2 py-1 px-2 rounded-md text-white ${typeBg[type]}`}
              >
                {type}
              </span>
            ))}
          </span>
          <button
            className="bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 p-1 rounded-md text-white w-7 h-7"
            onClick={() => dispatch(deletePokemon(id))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
      </div>
      <div>
        <img
          src={sprite}
          className="h-36 mx-auto border rounded-lg my-2"
          alt={name}
        ></img>
        <div className="w-3/4 mx-auto mb-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b ">
                <th className="p-1">Name</th>
                <td className="capitalize p-1">{name}</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b ">
                <th className="p-1">Height</th>
                <td className="p-1">{height / 10} m</td>
              </tr>
            </tbody>
          </table>
          <div className="rounded-b-lg overflow-hidden">
            <table className="w-full text-sm text-middle">
              <thead>
                <tr>
                  <th className="bg-green-200 w-1/2 pt-1">Hp</th>
                  <th className="bg-blue-200 w-1/2 pt-1">Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  {stats.hp > 50 ? (
                    <td className="text-center pb-1 bg-green-200">
                      {stats.hp}
                    </td>
                  ) : (
                    <td className="text-red-500 pb-1 font-bold text-center bg-green-200">
                      {stats.hp}
                    </td>
                  )}
                  <td className="text-center pb-1 bg-blue-200">
                    {stats.speed}
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th className="bg-red-200 pt-1">Attack</th>
                  <th className="bg-yellow-200 pt-1">Defense</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="text-center pb-1 bg-red-200">{stats.atk}</td>
                  <td className="text-center pb-1 bg-yellow-200">
                    {stats.def}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
