import { Router as router } from 'express';

const Profile = require('../models/profile');

router.post('/create', (req, res) => {
    const profile = new Profile({
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
    });
    Profile.createProfile(profile, err => {
        if (err) throw err;
        res.status(200).json('Profile saved');
    });
});

router.post('/update', (req, res) => {
    const profile = new Profile({
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
    });
    Profile.updateProfile(profile, err => {
        if (err) throw err;
        res.status(200).json('Profile Updated');
    });
});

module.exports = router;
