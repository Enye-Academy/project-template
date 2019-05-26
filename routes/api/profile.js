const express = require('express');

const router = express.Router();

const Profile = require('../../models/profile.model');

const validateInput = require('../../validation/profile');

// Create a new Profile
router.post('/new', async (req, res) => {
    const {
        city, country, email, firstName, lastName,
    } = req.body;

    // Validate request
    const { errors, isValid } = validateInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // check if user profile exists

    const user = await Profile.findOne({ email });

    if (user) {
        return res.status(400).json({ message: `${email} already exist` });
    }
    // create new profile
    const profile = new Profile({
        city,
        country,
        email,
        firstName,
        lastName,
    });
    // Save Profile in the database
    try {
        const newProfile = await profile.save();
        return res.json({
            message: 'profile successfully created',
            profile: newProfile,
        });
    } catch (err) {
        return err;
    }
});

// Retrieve all profiles
router.get('/all', async (req, res) => {
    try {
        const profiles = await Profile.find();
        if (!profiles) {
            return res.status(404).json({
                message: 'No Profile found',
            });
        }
        return res.json(profiles);
    } catch (err) {
        return err;
    }
});

// Retrieve a single Profile with profileId
router.get('/:profileId', async (req, res) => {
    const { profileId } = req.params;
    try {
        const profile = await Profile.findById(profileId);
        if (!profile) {
            return res.status(404).json({
                message: `Profile not found with id ${profileId}`,
            });
        }
        return res.json(profile);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.json({
                message: `Profile not found with id ${profileId}`,
            });
        }
    }
    return null;
});

// Update a Profile with profileId
router.put('/:profileId', async (req, res) => {
    const {
        city, country, email, firstName, lastName,
    } = req.body;
    const { profileId } = req.params;

    // Validate request
    const { errors, isValid } = validateInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const profile = new Profile({
        city,
        country,
        email,
        firstName,
        lastName,
    });
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(profileId, profile, { new: true });
        if (!updatedProfile) {
            return res.json({
                message: `Profile not found with id ${profileId}`,
            });
        }
        return res.json(updatedProfile);
    } catch (err) {
        return res.status(500).json({
            message: `Error updating profile with id ${profileId}`,
        });
    }
});

// Delete a Profile with profileId
router.delete('/:profileId', async (req, res) => {
    const { profileId } = req.params;
    try {
        const profile = await Profile.findByIdAndDelete(profileId);
        if (!profile) {
            return res.json({
                message: `Profile not found with id ${profileId}`,
            });
        }
        return res.json({ message: 'Profile deleted successfully!' });
    } catch (err) {
        return err;
    }
});

module.exports = router;
