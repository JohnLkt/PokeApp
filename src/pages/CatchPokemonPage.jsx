import { useState } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import PokemonWindow from "../components/PokemonWindow";
import { useSelector, useDispatch } from "react-redux";
import { setSearchWarning } from "../store/slices/pokemonSearchSlice";
import InfoBox from "../components/InfoBox";

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
      dispatch(setSearchWarning("Failed to obtain Pokémon data from server!"));
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
          <InfoBox
            heading={"No Pokémon Has Appeared Yet."}
            text={
              "Type their name or Pokédex ID into the search bar and press enter"
            }
          />
        )}
      </div>
    </div>
  );
}

export default CatchPokemonPage;
