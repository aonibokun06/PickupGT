import { useState } from "react";

export default function ScheduleGame() {
    const [sport, setSport] = useState("");
    const [datetime, setDatetime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    async function handleSubmit(event) {
        
        event.preventDefault();
        const gameData= {
            sport, 
            datetime, 
            location,
            description
        }  
        
        console.log("submitting, ", gameData)
        try {
            gameData.datetime = new Date(gameData.datetime);
            console.log("submitting")
            const response = await fetch('http://localhost:3000/api/games', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(gameData),
              mode: "cors"
              
            });
            console.log("tried")
            const result = await response.json();
            console.log(result.message); 
          } catch (error) {
            console.error('Error scheduling game:', error);
            alert('Error scheduling game. Please try again.');
          }
    }


    return (
        <form id="game-form" onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
            <label htmlFor="sport" className="font-medium">Sport:</label>
            <select id="sport" name="sport" value={sport} onChange={(e) => setSport(e.target.value)} className="border rounded p-2">
                <option value="Basketball">Basketball</option>
                <option value="Soccer">Soccer</option>
                <option value="Tennis">Tennis</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Pickleball">Pickleball</option>
            </select>

            <label htmlFor="datetime" className="font-medium">Date/Time:</label>
            <input type="datetime-local" id="datetime" name="datetime" value={datetime} onChange={(e) => setDatetime(e.target.value)} className="border rounded p-2" />

            <label htmlFor="location" className="font-medium">Location:</label>
            <select id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="border rounded p-2">
                <option value="Stadium">Stadium</option>
                <option value="Gym">Gym</option>
                <option value="Stamps">Stamps Field</option>
                <option value="CRC">CRC</option>
                <option value="Park">Park</option>
                <option value="Other">Other</option>
            </select>

            <label htmlFor="description" className="font-medium">Description:</label>
            <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                placeholder="Provide extra details about your event..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded p-2"
            ></textarea>

            <button id="submit-button" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Schedule Game</button>
        </form>
    )
}