import Aid from '../models/aid'
import validateAidQueryText from '../validation/aid'

// Create and Save a new aid
exports.create = (req, res) => {
    const { errors, isValid } = validateAidQueryText(req.body);

    // Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

    // Create a aid
    const aid = new Aid({
        aidTitle: req.body.aidTitle, 
        aidIntro: req.body.aidIntro,
        aidDescription: req.body.aidDescription,
        imageLink: req.body.imageLink,
        videoLink: req.body.videoLink
    });

    // Save aid in the database
    aid.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the aid."
        });
    });
};

// Retrieve and return the aid list from the database.
exports.findAll = (req, res) => {
    Aid.find()
    .then(aids => {
        res.send(aids);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving aid list."
        });
    });
};

// Find a single aid with a aidId
exports.findOne = (req, res) => {
    Aid.findById(req.params.aidId)
    .then(aid => {
        if(!aid) {
            return res.status(404).send({
                message: "Aid not found with id " + req.params.aidId
            });            
        }
        res.send(aid);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Aid not found with id " + req.params.aidId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving aid with id " + req.params.aidId
        });
    });
};

// Update a aid identified by the aidId in the request
exports.update = (req, res) => {
    // Validate Request
    const { errors, isValid } = validateAidQueryText(req.body);

    // Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

    // Find aid and update it with the request body
    Aid.findByIdAndUpdate(req.params.aidId, {
        aidTitle: req.body.aidTitle, 
        aidIntro: req.body.aidIntro,
        aidDescription: req.body.aidDescription,
        imageLink: req.body.imageLink,
        videoLink: req.body.videoLink
    }, {new: true})
    .then(aid => {
        if(!aid) {
            return res.status(404).send({
                message: "Aid not found with id " + req.params.aidId
            });
        }
        res.send(aid);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Aid not found with id " + req.params.aidId
            });                
        }
        return res.status(500).send({
            message: "Error updating aid with id " + req.params.aidId
        });
    });
};

// Delete a aid with the specified aidId in the request
exports.delete = (req, res) => {
    Aid.findByIdAndRemove(req.params.aidId)
    .then(aid => {
        if(!aid) {
            return res.status(404).send({
                message: "Aid not found with id " + req.params.aidId
            });
        }
        res.send({message: "Aid deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Aid not found with id " + req.params.aidId
            });                
        }
        return res.status(500).send({
            message: "Could not delete aid with id " + req.params.aidId
        });
    });
};