const assert = require('assert');
const User = require('../models/User');

// Describe tests
describe('Updating records', () => {
    // before each test, run this hook so that we can hv a data in db
    let newUser;
    beforeEach(done => {
        // Create a new instance of 'User' model or record
        newUser = new User({
            name: 'Clem',
            email: 'cle@gmail.com',
            password: 'pass123',
        });
        newUser.save().then(() => {
            // done after the asynchronous req is complete
            done();
        });
    });
    // Create tests
    it('Updates one record in the database', done => {
        // find frm the 'User' coll and update where name='Ekpenyong'
        // the 2nd argument is what we want to update to
        User.findOneAndUpdate({ name: 'Clem' }, { name: 'Rooney' }).then(() => {
            // find frm d User coll an 'id supplied by mongo' == a particular record's id
            User.findOne({ _id: newUser._id }).then(res => {
                assert(res.name === 'Rooney');
                done();
            });
        });
    });
});
