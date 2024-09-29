require("dotenv").config()

//import
const express = require("express") //imports express module
const mongoose = require("mongoose") // imports mongoose module
const app = express() //express object
const Game = require('./models/game-model');

const router = express.Router()


app.use(express.json()) //middle ware to parse Json
app.use(express.static('public'));

//connect to mongo db database
/*mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error)=> console.error(error))
db.once("open", () => console.log("Connected to Database")) */
mongoose.connect('mongodb://localhost:27017/pickupGames', )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });

router.post("/", async (req, res)  => {
    const { sport, datetime, location, description } = req.body;
    try {
        const game = new Game({ sport, datetime: new Date(datetime), location, description });
        await game.save();
        console.log("Recieved Game data");
        const gameCount = await Game.countDocuments();
        console.log(gameCount)

    // Send a success response back to the client
        res.json({ message: 'Game scheduled successfully!' });
    } catch (error) {
        console.error('Error saving game:', error);
        
    }

    
});

router.get("/", async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(400).json({error: "Error getting games"})
    }
});


app.listen(3000, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
        process.exit(1);  // Exit the process if there's an error
    }
    console.log("Server: http://localhost:3000")
});
app.use('/', router);
module.exports = router;