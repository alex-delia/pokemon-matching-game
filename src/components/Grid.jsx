import Card from "./Card";
import '../styles/grid.css';

export default function Grid({ pokemonList, handleClick }) {
    return (
        <div className="grid">
            {pokemonList.map((pokemon) => (
                <Card key={pokemon.id} id={pokemon.id} pokemon={pokemon.name} handleClick={handleClick} />
            ))}
        </div>
    );
}