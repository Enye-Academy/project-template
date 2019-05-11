const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const { MongoClient } = require('mongodb');
const api = require('./api');

// Configure DB
const uri = require('../config/keys').mongoURI;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
    }
    console.log('Connected...');
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    client.close();
});

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
