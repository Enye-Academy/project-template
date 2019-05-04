import { Router } from 'express';

const Profile = require('./routes/profile');

Router.use('/profile', Profile);

module.exports = Router;
