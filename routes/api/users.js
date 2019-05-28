const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const dotenv = require('dotenv');
const util = require('util');
const { URL } = require('url');
const querystring = require('querystring');

dotenv.config();
const router = express.Router();

// Bring in the User Model
const User = require('../../models/User');

// User Registration Route
router.post('/register', async (req, res, next) => {
    try {
        const { email, name, password } = req.body;
        // Check if the email coming in matches what is in the DB
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: `${email} already exist` });
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

// Perform the login, after login Auth0 will redirect to callback
router.get(
    '/login',
    passport.authenticate('auth0', {
        scope: 'openid email profile',
    }),
    (req, res) => {
        res.redirect('/');
    }
);

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => passport.authenticate('auth0', (err, user) => {
    // eslint-disable-next-line no-unused-vars

    // console.log(info);

    if (err) {
        return next(err);
    }

    if (!user) {
        return res.redirect('/login');
    }

    return req.logIn(user, error => {
        if (error) {
            return next(error);
        }

        const { returnTo } = req.session;
        delete req.session.returnTo;
        return res.redirect(returnTo || '/user');
    });
})(req, res, next));

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
    req.logout();

    let returnTo = `${req.protocol}://${req.hostname}`;
    const port = req.connection.localPort;

    if (port !== undefined && port !== 80 && port !== 443) {
        returnTo += `:${port}`;
    }

    const { AUTH0_CLIENT_ID, AUTH0_DOMAIN } = process.env;
    const logoutURL = new URL(util.format('https://%s/logout', AUTH0_DOMAIN));
    const searchString = querystring.stringify({
        client_id: AUTH0_CLIENT_ID,
        returnTo,
    });
    logoutURL.search = searchString;

    res.redirect(logoutURL);
});

module.exports = router;
