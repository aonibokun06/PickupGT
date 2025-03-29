require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const gameRoutes = require('./routes/gameRoutes'); // Import the routes

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pickupGames')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));



// Use the game routes
app.use('/api', gameRoutes); 

app.listen(3000, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
    console.log("Server: http://localhost:3000");
});