const gamesGrid = document.querySelector(".game-grid");

projectPopup = document.querySelector('.popUpGameHide');


//display pickup games

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const games = await displayGames();

    // Check if games exist
    if (games && games.length > 0) {
        games.forEach((game) => {
            const gameItem = document.createElement("div");
            
            const imgHolder = document.createElement("div");
            const sportImg= document.createElement("img");
            const sportName = document.createElement("h4");
            const gameLocation = document.createElement("h5");
            const gameDatetime = document.createElement("p");
            //const findGamePopupContainer = document.getElementById('findGamePopupContainer');

            
            sportImg.src= "/images/logo.png";
            sportName.textContent = game.sport;
            gameLocation.textContent = game.location;
            gameDatetime.textContent= new Date(game.datetime).toLocaleString();

            

            gameItem.classList.add("game-div");
            
            imgHolder.classList.add("img-holder");
            sportImg.classList.add("sport-img")
            sportName.classList.add("sport-name");
            
            gameLocation.classList.add("sport-location");
            gameDatetime.classList.add("sport-datetime");
            

            imgHolder.appendChild(sportImg);
            gameItem.appendChild(imgHolder);
            gameItem.appendChild(sportName);
            gameItem.appendChild(gameLocation);
            gameItem.appendChild(gameDatetime);
            gamesGrid.appendChild(gameItem);

            gameItem.setAttribute("data-id", game._id);

            gameItem.addEventListener('click', function(){
              projectPopup.classList.toggle('popUpGame');
              document.querySelector(".popUpGameUpper").innerHTML = 
              `<h2>Sport: ${game.sport}</h2>
              <h2>Location: ${game.location}</h2>
              <h2>Date/Time: ${new Date(game.datetime).toLocaleString()}</h2>
              <h2>Description: ${game.description}</h2>`

          });

          
            
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
  const response = await fetch("gameRoutes");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

/* closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', function(){
  projectPopup.classList.toggle('popUpGame');

}); */



/* const gameId = gameItem.getAttribute("data-id");
console.log(`Attempting to delete game with ID: ${gameId}`);
const deleteButton = projectPopup.querySelector(".deleteButton");
deleteButton.replaceWith(deleteButton.cloneNode(true));
deleteButton.addEventListener("click", async () => {
  try {
      const response = await fetch(`/gameRoutes/${gameId}`, {
          method: 'DELETE',
      });

      const result = await response.json();
      if (response.ok) {
          alert(result.message);
          gameItem.remove(); // Remove the game from the DOM
          projectPopup.classList.remove('popUpGame');
      } else {
          alert(result.message);
      }
  } catch (error) {
      console.error('Error deleting game:', error);
  }
}); */