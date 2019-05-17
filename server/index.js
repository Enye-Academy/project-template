const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// i need to comment the db declaration below else lint will not pass my code,
// i don't want to delete it as i am not the one who coded it comment by @justiceotuya

// Configure DB
// const db = require('../config/keys').mongoURI;

nextApp.prepare().then(() => {
    // express code here
    const app = express();
    // bodyParser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // next should handle all other routes except the ones specified.
    app.get(
        '*',
        (req, res) => handle(req, res)
    );
    app.listen(PORT, err => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`Server ready at http://localhost:${PORT}`);
    });
});
