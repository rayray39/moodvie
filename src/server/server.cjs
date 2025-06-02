const express = require('express');
const cors = require('cors');
const favouritesRoutes = require('./routes/favourites.cjs');
const watchedRoutes = require('./routes/watched.cjs');

// Set up Express app and port number
const app = express();
const PORT = 5000;

// Define middlware
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/', favouritesRoutes);
app.use('/', watchedRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});