import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Browse() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/games")
          .then((res) => res.json())
          .then((data) => setGames(data))
          .catch((error) => console.error("Error fetching games:", error));
      }, []);

    return (
        <>
            <h1 class="findGame-title">Available Pickup Games</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
            <div className="game-grid" id="game">
                {games.length > 0 ? (
                    games.map((game) => (
                        <div key={game.id}> 
                            <h2>{game.sport}</h2>
                            <p>Location: {game.location}</p>
                            <p>Description: {game.description}</p>
                            <p>Date/Time: {game.datetime}</p>
                        </div>
                    ))
                ) : (<p>No games available</p>)
                }
            </div>
         </>

    ) 
}


