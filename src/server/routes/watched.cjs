const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


const WATCHED_FILE = path.join(__dirname, '../../data/', 'watched.json');

// Helper to read watched from JSON file
function readWatched() {
    return new Promise((resolve, reject) => {
        fs.readFile(WATCHED_FILE, 'utf-8', (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}

// Helper to write watched to JSON file
function writeWatched(movies) {
    return new Promise((resolve, reject) => {
        fs.writeFile(WATCHED_FILE, JSON.stringify(movies, null, 2), (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// adds new movie to the watched.json file
router.post('/add-watched', async (req, res) => {
    try {
        const newMovie = req.body;
        const watched = await readWatched();

        if (watched.find((movie) => movie.id === newMovie.id)) {
            return res.status(400).json({ results: watched, message: 'Movie already in watched.' });
        }

        watched.push(newMovie);
        await writeWatched(watched);
        return res.status(200).json({ results: watched, message: 'Successfully added movie to watched.json.' });
    } catch (error) {
        return res.status(400).json({ message: 'Error: Failed to add movie to watched movies.' });
    }
})

// returns all the movies in the watched.json file
router.get('/get-watched', async (req, res) => {
   try {
        let watched = await readWatched();
        watched = watched.filter(movie => movie && typeof movie === 'object')
        return res.status(200).json({ results: watched, message: 'Successfully fetched all watched movies from JSON.' });
   } catch (error) {
        return res.status(500).json({ message: 'Error: Failed to fetch watched movies from JSON file.' });
   }
})

// removes the movie from the watched.json file
router.delete('/remove-watched/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        console.log('Error: Missing movie id.');
        return;
    }

    try {
        const watched = await readWatched();
        const newWatched = watched.filter((movie) => movie.id !== id);
        await writeWatched(newWatched);

        return res.status(200).json({ results: newWatched, message: 'Successfully removed movie from watched.JSON.' });
    } catch (error) {
        return res.status(500).json({ message: 'Error: Failed to removed movie from watched JSON file.' });
    }
})

module.exports = router;