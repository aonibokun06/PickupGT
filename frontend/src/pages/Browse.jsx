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
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">Available Pickup Games</h1>
            <Link to="/" className="block mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Home</button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {games.length > 0 ? (
                    games.map((game) => (
                        <div key={game.id} className="border p-4 rounded shadow">
                            <img src={`/${game.sport}-icon.png`} alt={`${game.sport} icon`} />
                            <h2 className="text-xl font-bold">{game.sport}</h2>
                            <p>Location: {game.location}</p>
                            <p>Description: {game.description}</p>
                            <p>Date/Time: {new Date(game.datetime).toLocaleString()}</p>
                        </div>
                    ))
                ) : (<p className="text-center">No games available</p>)
                }
            </div>
        </div>
    ) 
}


