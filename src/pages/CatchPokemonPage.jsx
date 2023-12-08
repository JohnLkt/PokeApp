import { useState } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import PokemonWindow from "../components/PokemonWindow";
import { useSelector, useDispatch } from "react-redux";
import {
  resetPokemonSearch,
  setSearchWarning,
} from "../store/slices/pokemonSearchSlice";

function CatchPokemonPage() {
  const pokemonSearch = useSelector((state) => state.pokemonSearch.value);

  const dispatch = useDispatch();
  const [newPokemon, setNewPokemon] = useState(null);

  async function getPokemonData() {
    try {
      let cleanedPokemonSearch = pokemonSearch;
      const url = `https://pokeapi.co/api/v2/pokemon/${cleanedPokemonSearch
        .trim()
        .toLowerCase()
        .replace(/\s/g, "-")}`;

      console.log(url);
      const response = await axios.get(url);

      const { id, name, sprites, types, height, stats } = response.data;
      const rawStats = stats.map((stat) => stat.base_stat);
      const relevantStats = {
        hp: rawStats[0],
        atk: rawStats[1],
        def: rawStats[2],
        speed: rawStats[5],
      };

      const pokemon = {
        id,
        name,
        sprite: sprites.front_default,
        types: types.map((type) => type.type.name),
        height,
        stats: relevantStats,
      };

      setNewPokemon(pokemon);
    } catch (error) {
      console.error(error);
      dispatch(setSearchWarning("Failed to obtain data from server!"));
      return null;
    }
  }

  function handleSetNewPokemon(pokemon) {
    setNewPokemon(pokemon);
  }

  return (
    <div className="mb-4">
      <Searchbar getPokemonData={getPokemonData} />
      <div>
        {newPokemon ? (
          <PokemonWindow
            setNewPokemon={handleSetNewPokemon}
            pokemon={newPokemon}
          />
        ) : (
          <div className="w-80 bg-white border border-gray-200 rounded-lg shadow mx-auto p-5 text-center">
            <p className="font-semibold">No Pokemon Has Appeared Yet.</p>
            <p>
              Type their name or Pokedex ID into the search bar and press enter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CatchPokemonPage;

// note:
// theme is wild pokemon battle, capture throw pokeball feature
// use pokemon emerald UI
