import { useState, useEffect } from "react";
import '../styles/card.css';

export default function Card({ pokemon, handleClick, id }) {
    const [pokeData, setPokeData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await response.json();
                setPokeData(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [pokemon]);

    if (!pokeData) {
        return;
    }

    const name = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
    const imgUrl = pokeData.sprites.other['official-artwork'].front_default;

    return (
        <div className="card" onClick={() => handleClick(id)}>
            <h3>{name}</h3>
            <div className="imgContainer">
                <img src={imgUrl} alt="" />
            </div>
        </div>
    );
}