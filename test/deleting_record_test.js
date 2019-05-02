const assert = require('assert');
const User = require('../models/User');

// Describe tests
describe('Deleting records', () => {
    // before each test, run this hook so that we can hv a data in db
    let newUser;
    beforeEach(done => {
        // Create a new instance of 'User' model or record
        newUser = new User({
            name: 'Ekpenyong',
            email: 'ekpe@gmail.com',
            password: 'pass123',
        });

        newUser.save().then(() => {
            // done after the asynchronous req is complete
            done();
        });
    });
    // Create tests
    it('Delete one record from the database', done => {
        // find frm the 'User' coll where name='Ekpenyong'
        User.findOneAndRemove({ name: 'Ekpenyong' }).then(() => {
            // check if the 'name' is removed & return null as result or response frm promise interface
            User.findOne({ name: 'Ekpenyong' }).then(result => {
                assert(result === null);
                done();
            });
        });
    });
});
