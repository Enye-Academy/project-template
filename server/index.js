const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('../routes/api/profile');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');

const api = require('./api');

// Configure DB
const db = require('../config/keys').mongoURI;

<<<<<<< HEAD
<<<<<<< HEAD
// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then()
    .catch();
=======
mongoose.connect(db, { useNewUrlParser: true });
>>>>>>> b3ad535... refactored code
=======
mongoose.connect(db, { useNewUrlParser: true });
>>>>>>> b3ad535... refactored code

nextApp.prepare().then(() => {
    // express code here
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
<<<<<<< HEAD
    app.use('/api', api);

=======
=======
>>>>>>> b3ad535... refactored code
    // Routes middleware
    app.use('/api/profile', api);

    // next should handle all other routes except the ones specified.
>>>>>>> b3ad535... refactored code
    app.get(
        '*',
        // eslint-disable-next-line max-len
        (req, res) => handle(req, res) // next should handle all other routes except the ones specified.
    );
    app.listen(PORT, err => {
        if (err) throw err;
    });
});
