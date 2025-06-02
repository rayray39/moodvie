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



module.exports = router;