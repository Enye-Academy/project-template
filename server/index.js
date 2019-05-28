const express = require('express');
const mongoose = require('mongoose');
const next = require('next');
const dotenv = require('dotenv');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const users = require('../routes/api/users');
const profile = require('../routes/api/profile');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Load Environment variables
dotenv.config();
require('../config/passport');

// i need to comment the db declaration below else lint will not pass my code,
// i don't want to delete it as i am not the one who coded it comment by @justiceotuya

// Configure DB
const db = require('../config/keys').mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true });

nextApp.prepare().then(() => {
    // express code here
    const app = express();
    // bodyParser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // config express-session
    const sess = {
        cookie: {},
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
    };

    if (app.get('env') === 'production') {
        sess.cookie.secure = true; // serve secure cookies, requires https
    }
    // Tell express app to use passport & session
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session(sess));

    // Routes Middleware
    app.use('/api/users', users);
    app.use('/api/profile', profile);

    // next should handle all other routes except the ones specified.
    app.get('*', (req, res) => handle(req, res));

    app.listen(PORT, err => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`Server ready at http://localhost:${PORT}`);
    });
});
