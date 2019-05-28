const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Bring in the User Model
const User = require('../../models/User');
// Import Input Validation
const validateRegInput = require('../../validation/register');

// User Registration Route
router.post('/register', async (req, res, next) => {
    try {
        // Validate everything coming the request body
        const { errors, isValid } = validateRegInput(req.body);
        // Check Validation

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const { email, name, password } = req.body;
        // Check if the email coming in matches what is in the DB
        const user = await User.findOne({ email });

        if (user) {
            errors.email = `${email} already exist`;
            return res.status(400).json(errors);
        }

        const avatar = gravatar.url(email, {
            d: 'mm', // Default
            r: 'pg', // Rating
            s: '200', // Size
        });

        const newUser = new User({
            // create new user
            avatar,
            email,
            name,
            password,
        });

        // Hash Password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, hash => {
                if (err) throw err;
                newUser.password = hash;
            });
        });
        const userCreated = await newUser.save();
        return res.json(userCreated);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
