import '../styles/header.css';

export default function Header({ currentScore, highScore }) {
    return (
        <div className="header">
            <div className="title">
                <h1>Pokemon Memory Game</h1>
                <h2>Avoid Clicking The Same Pokemon Twice!</h2>
            </div>
            <div className="scoreBoard">
                <h2>Current Score: {currentScore}</h2>
                <h2>High Score: {highScore}</h2>
            </div>
        </div>
    );
}