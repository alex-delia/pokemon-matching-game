import Header from "./Header";
import Grid from "./Grid";
import '../styles/app.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const pokemonList = [
    { name: 'ditto', id: uuidv4() },
    { name: 'pikachu', id: uuidv4() },
    { name: 'charmander', id: uuidv4() },
    { name: 'squirtle', id: uuidv4() },
    { name: 'bulbasaur', id: uuidv4() },
    { name: 'pidgey', id: uuidv4() },
    { name: 'chansey', id: uuidv4() },
    { name: 'zapdos', id: uuidv4() },
    { name: 'lapras', id: uuidv4() },
    { name: 'gengar', id: uuidv4() },
    { name: 'starmie', id: uuidv4() },
    { name: 'eevee', id: uuidv4() },
    { name: 'diglett', id: uuidv4() },
    { name: 'roselia', id: uuidv4() },
    { name: 'jigglypuff', id: uuidv4() },
];


export default function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedIds, setClickedIds] = useState([]);
    const [cards, setCards] = useState(pokemonList);

    function handleClick(id) {
        if (clickedIds.includes(id)) {
            if (currentScore > highScore) {
                setHighScore(currentScore);
            }
            setCurrentScore(0);
            setClickedIds([]);
        } else {
            setCurrentScore(currentScore + 1);
            setClickedIds([...clickedIds, id]);
        }

        const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
    }

    return (
        <div className="container">
            <Header currentScore={currentScore} highScore={highScore} />
            <Grid pokemonList={cards} handleClick={handleClick} />
        </div>
    );
}