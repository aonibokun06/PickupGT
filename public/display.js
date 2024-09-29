const gamesGrid = document.querySelector(".game-grid");




//display pickup games

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const games = await displayGames();

    // Check if games exist
    if (games && games.length > 0) {
        games.forEach((game) => {
            const gameItem = document.createElement("div");
            const sportName = document.createElement("h4");
            sportName.textContent = game.sport;

            gameItem.classList.add("game-div");
            sportName.classList.add("sport-name");
            gameItem.appendChild(sportName);
            gamesGrid.appendChild(gameItem);
        });
    } else {
        gamesGrid.innerHTML = "<p>No games found.</p>"; // Handle empty state
    }
} catch (error) {
    console.error('Error fetching games:', error);
    gamesGrid.innerHTML = "<p>Error fetching games. Please try again later.</p>"; // Handle fetch error
}
});


async function displayGames() {
  const response = await fetch("/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
