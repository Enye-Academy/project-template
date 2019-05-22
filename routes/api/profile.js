const express = require('express');

const router = express.Router();
const Profile = require('../../models/profile.model');

// Create a new Profile
router.post('/new', async (req, res) => {
    const {
        city, country, email, firstName, lastName,
    } = req.body;

    // Validate request
    if (!city || !country || !email || !firstName || !lastName) {
        return res.json({
            message: 'Please ensure you fill all fields',
        });
    }
    // create new profile
    const profile = new Profile({
        city,
        country,
        email,
        firstName,
        lastName,
    });
<<<<<<< HEAD
    // Save Profile in the database
=======
        // Save Profile in the database
>>>>>>> d6f70cd4896cdf4d677a3ad9d9788d3063cec6ff
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
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                message: `Profile not found with id ${profileId}`,
            });
        }
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
