import Profile from '../models/profile.model';

// Create and Save a new Profile
// eslint-disable-next-line consistent-return
exports.create = (req, res) => {
    // Validate request
    if (!req.body.city || !req.body.country || !req.body.email || !req.body.first_name || !req.body.last_name) {
        return res.status(400).send({
            message: 'Please ensure you fill all fields',
        });
    }

    // Create a Profile
    const profile = new Profile({
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
    });

    // Save Profile in the database
    profile.save()
        .then(data => {
            res.status(200).send({
                message: 'profile successfully created',
                profile: data,
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Profile.',
            });
        });
};

// Find a single profile with a profileId
exports.findOne = (req, res) => {
    Profile.findById(req.params.profileId)
        .then(profile => {
            if (!profile) {
                return res.status(404).send({
                    message: `Profile not found with id ${req.params.profileId}`,
                });
            }
            res.send(profile);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Profile not found with id ${req.params.profileId}`,
                });
            }
        });
};

// Retrieve and return all profiles from the database.
exports.findAll = (req, res) => {
    Profile.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving profiles.',
            });
        });
};

// Update a profile identified by the profileId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.city || !req.body.country || !req.body.email || !req.body.first_name || !req.body.last_name) {
        return res.status(400).send({
            message: 'Details cannot be empty',
        });
    }

    // Find Profile and update it with the request body
    Profile.findByIdAndUpdate(req.params.profileId, {
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
    }, { new: true })
        .then(profile => {
            if (!profile) {
                return res.status(404).send({
                    message: `Profile not found with id ${req.params.profileId}`,
                });
            }
            res.send(profile);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Profile not found with id ${req.params.profileId}`,
                });
            }
            return res.status(500).send({
                message: `Error updating profile with id ${req.params.profileId}`,
            });
        });
};

// Delete a profile with the specified profileId in the request
exports.delete = (req, res) => {
    Profile.findByIdAndRemove(req.params.profileId)
        .then(profile => {
            if (!profile) {
                return res.status(404).send({
                    message: `Profile not found with id ${req.params.profileId}`,
                });
            }
            res.send({ message: 'Profile deleted successfully!' });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: `Profile not found with id ${req.params.profileId}`,
                });
            }
            return res.status(500).send({
                message: `Could not delete profile with id ${req.params.profileId}`,
            });
        });
};
