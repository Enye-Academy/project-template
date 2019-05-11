const express = require('express');

const Router = express.Router();

const Profile = require('./routes/profile');

Router.use('/profile', Profile);

module.exports = Router;
