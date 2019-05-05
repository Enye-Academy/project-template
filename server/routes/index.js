import express from 'express';
import aidController from '../controllers/aidControllers';
import reportController from '../controllers/reportControllers';

const router = express.Router();

// aid route
// Create a new Aid
router.post('/aid', aidController.create);

// Retrieve all Aids
router.get('/aids', aidController.findAll);

// Retrieve a single Aid with aidId
router.get('/aids/:aidId', aidController.findOne);

// Update a Aid with aidId
router.put('/aids/:aidId', aidController.update);

// Delete a Aid with aidId
router.delete('/aids/:aidId', aidController.delete);

// report route
// Create a new Report
router.post('/report', reportController.create);

// Retrieve all reports
router.get('/reports', reportController.findAll);

// Retrieve a single Report with reportId
router.get('/reports/:reportId', reportController.findOne);

// Delete a Report with reportId
router.delete('/reports/:reportId', reportController.delete);

export default router;