const express = require('express');

const router = express.Router();

const Profile = require('../../models/profile.model');

const validateInput = require('../../validation/profile');

// Create a new Profile
router.post('/', async (req, res) => {
    const {
        bio, city, country, email, firstName, lastName,
    } = req.body;

    // Validate request
    const { errors, isValid } = validateInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.json({
            message: errors,
            status: 'error',
        });
    }

    // check if user profile exists

    const user = await Profile.findOne({ email });

    if (user) {
        return res.json({
            message: `${email} already exist`,
            status: 'error',
        });
    }
    // create new profile
    const profile = new Profile({
        bio,
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
            data: newProfile,
            status: 'success',
        });
    } catch (err) {
        return err;
    }
});

// Retrieve all profiles
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find();
        if (!profiles) {
            return res.json({
                message: 'No Profile found',
                status: 'error',
            });
        }
        return res.json({
            data: profiles,
            status: 'success',
        });
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
            return res.json({
                message: `Profile not found with id ${profileId}`,
                status: 'error',
            });
        }
        return res.json(profile);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.json({
                message: `Profile not found with id ${profileId}`,
                status: 'error',
            });
        }
    }
    return null;
});

// Update a Profile with profileId
router.put('/:profileId', async (req, res) => {
    const {
        bio, city, country, email, firstName, lastName,
    } = req.body;
    const { profileId } = req.params;

    // Validate request
    const { errors, isValid } = validateInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.json({
            message: errors,
            status: 'error',
        });
    }
    const profile = new Profile({
        bio,
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
                status: 'error',
            });
        }
        return res.json(updatedProfile);
    } catch (err) {
        return res.json({
            message: `Error updating profile with id ${profileId}`,
            status: 'error',
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
                status: 'error',
            });
        }
        return res.json({
            data: null,
            status: 'success',
        });
    } catch (err) {
        return err;
    }
});

module.exports = router;
