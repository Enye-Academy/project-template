import express from 'express';
import aidController from '../controllers/aidControllers';
import reportController from '../controllers/reportControllers';

const router = express.Router();

// aid route
// Create a new Aid
router.post('/aid', aidController.create);

// Retrieve all Aids
router.get('/aids', aidController.getAll);

// Retrieve a single Aid with aidId
router.get('/aids/:aidId', aidController.getOne);

// Update a Aid with aidId
router.put('/aids/:aidId', aidController.updateAid);

// Delete a Aid with aidId
router.delete('/aids/:aidId', aidController.deleteAid);

// report route
// Create a new Report
router.post('/report', reportController.create);

// Retrieve all reports
router.get('/reports', reportController.getAll);

// Retrieve a single Report with reportId
router.get('/reports/:reportId', reportController.getOne);

// Delete a Report with reportId
router.delete('/reports/:reportId', reportController.deleteReport);
export default router;