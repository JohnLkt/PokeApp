import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

function BagPage() {
  const pokemonBag = useSelector((state) => state.pokemonBag.value);
  return (
    <div>
      {pokemonBag.length > 0 ? (
        <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-2xl mb-4">
          {pokemonBag.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon}></PokemonCard>
          ))}
        </div>
      ) : (
        <InfoBox
          heading={"No Pokémon Has Been Caught Yet."}
          text={"Go back to the previous page and catch some Pokémon!"}
        />
      )}
    </div>
  );
}

export default BagPage;
