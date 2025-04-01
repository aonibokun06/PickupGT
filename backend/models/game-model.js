const mongoose = require('mongoose');

//Defines the structure of the data
const gameSchema = new mongoose.Schema({
    sport: {
        type: String, 
        required: true 
    },  
    datetime: { 
        type: Date, 
        required: true 
    },        
        
    location: { 
        type: String, 
        required: true
    },  
    description: {
        type: String, 
        required: true 
    }
    

});

// creates a mongoose model
const Game = mongoose.model("Game", gameSchema);


module.exports = Game;