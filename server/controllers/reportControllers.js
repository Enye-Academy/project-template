import Report from '../models/report'


// Create and Save a new report
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name || !req.body.number || !req.body.audio || !req.body.coords) {
        return res.status(400).send({
            message: "name or number or audio or coords content can not be empty"
        });
    }

    // Create a report
    const report = new Report({
        name: req.body.name, 
        number: req.body.number,
        audio: req.body.audio,
        coords: req.body.coords,
        image: req.body.image
    });

    // Save report in the database
    report.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the report."
        });
    });
};

// Retrieve and return the report list from the database.
exports.findAll = (req, res) => {
    Report.find()
    .then(reports => {
        res.send(reports);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving report list."
        });
    });
};

// Find a single report with a reportId
exports.findOne = (req, res) => {
    Report.findById(req.params.reportId)
    .then(report => {
        if(!report) {
            return res.status(404).send({
                message: "Report not found with id " + req.params.reportId
            });            
        }
        res.send(report);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Report not found with id " + req.params.reportId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving report with id " + req.params.reportId
        });
    });
};

// Delete a report with the specified reportId in the request
exports.delete = (req, res) => {
    Report.findByIdAndRemove(req.params.reportId)
    .then(report => {
        if(!report) {
            return res.status(404).send({
                message: "Report not found with id " + req.params.reportId
            });
        }
        res.send({message: "Report deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Report not found with id " + req.params.reportId
            });                
        }
        return res.status(500).send({
            message: "Could not delete report with id " + req.params.reportId
        });
    });
};