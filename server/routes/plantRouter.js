import express from 'express';
import {
    getAllPLants,
    createPlant,
    logWatering
} from '../controllers/plantsControllers.js';
import requireAuth from '../middleware/requireAuth.js';
import upload from '../middleware/upload.js';
import { validate } from '../middleware/validation.js';
import { plantSchema } from 'shared/schemas/index.js';
const router = express.Router();

router.use(requireAuth);

router.get('/', getAllPLants);
router.post('/', upload.single('image'), validate(plantSchema), createPlant);

router.post('/:plantId/water', logWatering);

export default router;
