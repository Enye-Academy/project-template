import express from 'express';
import aidController from '../controllers/aidControllers';
import reportController from '../controllers/reportControllers';

const router = express.Router();

// aid route
// Create a new Aid
router.post('/aid', aidController.create);

// Retrieve all Aids
router.get('/aids', aidController.getAll);

// Retrieve a single Aid with id
router.get('/aids/:id', aidController.getOne);

// Update a Aid with id
router.put('/aids/:id', aidController.updateAid);

// Delete a Aid with id
router.delete('/aids/:id', aidController.deleteAid);

// report route
// Create a new Report
router.post('/report', reportController.create);

// Retrieve all reports
router.get('/reports', reportController.getAll);

// Retrieve a single Report with id
router.get('/reports/:id', reportController.getOne);

// Delete a Report with id
router.delete('/reports/:id', reportController.deleteReport);
export default router;
