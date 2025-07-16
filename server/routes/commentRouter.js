import { Router } from 'express';
import {
    getAllComments,
    createComment
} from '../controllers/commentControllers.js';

import requireAuth from '../middleware/requireAuth.js';

const router = Router({ mergeParams: true });

router.get('/', getAllComments);

router.post('/', requireAuth, createComment);

export default router;
