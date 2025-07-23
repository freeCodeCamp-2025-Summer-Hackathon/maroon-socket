import { Router } from 'express';
import { setChatId } from '../controllers/profileController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = Router();

router.use(requireAuth);

router.post('/', setChatId);

export default router;
