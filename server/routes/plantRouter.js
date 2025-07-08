import express from 'express';
import { getAllPLants, createPlant } from '../controllers/plantsControllers.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', getAllPLants);
router.post('/', createPlant);

export default router;
