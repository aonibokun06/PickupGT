const express = require("express");
const router = express.Router();
const Game = require('../models/game-model'); // Adjust the path if necessary

// POST route for scheduling games
router.post("/", async (req, res) => {
    const { sport, datetime, location, description } = req.body;
    try {
        const game = new Game({ sport, datetime: new Date(datetime), location, description });
        await game.save();
        console.log("Received Game data");
        const gameCount = await Game.countDocuments();
        console.log(gameCount);

        // Send a success response back to the client
        res.json({ message: 'Game scheduled successfully!' });
    } catch (error) {
        console.error('Error saving game:', error);
        res.status(500).json({ error: 'Error saving game' });
    }
});

// GET route for fetching games
router.get("/", async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.status(400).json({ error: "Error getting games" });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGame = await Game.findByIdAndDelete(id);
        if (!deletedGame) {
            return res.status(404).json({ message: 'Game not found' });
        }

        res.json({ message: 'Game deleted successfully', deletedGame });
    } catch (error) {
        console.error('Error deleting game:', error);
        res.status(500).json({ message: 'Error deleting game' });
    }
});

module.exports = router;