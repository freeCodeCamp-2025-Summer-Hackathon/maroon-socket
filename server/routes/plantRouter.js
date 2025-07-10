import express from 'express';
import { getAllPLants, createPlant } from '../controllers/plantsControllers.js';
import requireAuth from '../middleware/requireAuth.js';
import upload from '../middleware/upload.js';
const router = express.Router();

router.use(requireAuth);

router.get('/', getAllPLants);
router.post('/', upload.single('image'), createPlant);

export default router;
