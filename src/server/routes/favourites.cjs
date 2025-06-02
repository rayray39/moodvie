const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


const FAVOURITES_FILE = path.join(__dirname, '../../data/', 'favourites.json');

// Helper to read favourites from JSON file
function readFavourites() {
    return new Promise((resolve, reject) => {
        fs.readFile(FAVOURITES_FILE, 'utf-8', (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}

// Helper to write favourites to JSON file
function writeFavourites(movies) {
    return new Promise((resolve, reject) => {
        fs.writeFile(FAVOURITES_FILE, JSON.stringify(movies, null, 2), (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// returns all the movies in the favourites.json file
router.get('/get-favourites', async (req, res) => {
    try {
        let favs = await readFavourites();
        favs = favs.filter(movie => movie && typeof movie === 'object')
        return res.status(200).json({ results: favs, message: 'Successfully fetched all fav movies from JSON.' });
    } catch (error) {
        return res.status(500).json({ message: 'Error: Failed to fetch fav movies from JSON file.' });
    }
})

// adds a new movie to the favourites.json file
router.post('/add-favourites', async (req, res) => {
    try {
        const newMovie = req.body;
        const favs = await readFavourites();

        // Avoid duplicates
        if (favs.find((movie) => movie.id === newMovie.id)) {
            return res.status(400).json({ result:favs, message: 'Movie already in favourites.' });
        }

        favs.push(newMovie);
        await writeFavourites(favs);
        return res.status(200).json({ result: favs, message: 'Successfully added movie to favourites.JSON.' });
    } catch (error) {
        return res.status(500).json({ message: 'Error: Failed to add movie to favourites JSON file.' });
    }
})

// removes the movie, with the matching id, from the favourites.json file
router.delete('/remove-favourites/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        console.log('Error: Missing movie id.');
        return;
    }

    try {
        const favs = await readFavourites();

        const newFavs = favs.filter((movie) => movie.id !== id);
        await writeFavourites(newFavs);
        return res.status(200).json({ result: newFavs, message: 'Successfully removied movie from favourites.JSON.' });
    } catch (error) {
        return res.status(500).json({ message: 'Error: Failed to removed movie from favourites JSON file.' });
    }
})

module.exports = router;