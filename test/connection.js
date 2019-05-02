const mongoose = require('mongoose');
// Use es6 global promise to override mongoose promise because of deprecation
mongoose.Promise = global.Promise;
// Connect to the db before tests run
before(done => {
    // connect to db
    const db = require('../config/keys').mongoURI;
    mongoose.connect(db);
    mongoose.connection
        .once('open', () => {
            console.log('Connection made');
            done();
        })
        .on('error', error => {
            console.log('Connection error:', error);
        });
});

// Using Another mocha 'hook' to drop the db before each test
// Drop the users collection before each test
beforeEach(done => {
    // Drop the collection
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});
