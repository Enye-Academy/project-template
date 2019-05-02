const assert = require('assert');
const User = require('../models/User');
// Describe tests
describe('Finding records', () => {
    // before each test, run this hook so that we can have data in db
    let newUser;
    beforeEach(done => {
        // Create a new instance of 'Clients' model or record
        newUser = new User({
            name: 'Rooney',
            email: 'rud@gmail.com',
            password: 'pass123',
        });

        newUser.save().then(() => {
            assert(newUser.isNew === false);
            // done after the asynchronous req is complete
            done();
        });
    });
    // Create tests
    it('Finds one record in the database', done => {
        User.findOne({ name: 'Rooney' }).then(result => {
            assert(result.name === 'Rooney');
            done();
        });
    });

    // Find by id
    it('Finds record by id in the database', done => {
        User.findOne({ _id: newUser._id }).then(result => {
            assert(result._id.toString() === newUser._id.toString());
            done();
        });
    });
});
