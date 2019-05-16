const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');

const api = require('./api');

// Configure DB
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true }) // Let us remove that nasty deprecation warrning :)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

nextApp.prepare().then(() => {
    // express code here
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', api);

    app.get(
        '*',
        // eslint-disable-next-line max-len
        (req, res) => handle(req, res) // next should handle all other routes except the ones specified.
    );
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`Server ready at http://localhost:${PORT}`);
    });
});
