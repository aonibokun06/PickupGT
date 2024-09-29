



//form data
const form = document.getElementById("game-form");
const sport = document.getElementById("sport");
const datetime = document.getElementById('datetime');
const gameLocation = document.getElementById('location');
const description = document.getElementById("description");
const submitButton = document.getElementById("submit-button");



submitButton.addEventListener("click", (event) => {
    console.log("Button clicked");
    event.preventDefault()  
    const gameData= {
        sport: sport.value, 
        datetime: datetime.value, 
        location: gameLocation.value,
        description: description.value
        
    }  
    saveGame(gameData);
});

async function saveGame(gameData){
    console.log("submitted")
    try {
        gameData.datetime = new Date(gameData.datetime);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(gameData)
        });
    
        const result = await response.json();
        console.log(result.message); 
        alert('Game scheduled successfully!'); 
      } catch (error) {
        console.error('Error scheduling game:', error);
        alert('Error scheduling game. Please try again.');
      }
}

    


