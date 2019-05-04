const assert = require('assert');
const User = require('../models/User');

// Describe tests
describe('Saving records', () => {
    // Create tests
    it('Saves a record to the database', done => {
        // Create a new instance of 'Clients' model or record
        const newUser = new User({
            name: 'Rod',
            email: 'gaby@gmail.com',
            password: 'pass123',
        });
        newUser.save().then(() => {
            // 'isNew' returns a Boolean, if it returns true it means the data has not been saved to the db
            assert(newUser.isNew === false);
            // done after the asynchronous req is complete
            done();
        });
    });
});
