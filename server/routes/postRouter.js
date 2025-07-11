import { Router } from 'express';
import { getPosts, createPost } from '../controllers/postControllers.js';
import requireAuth from '../middleware/requireAuth.js';

const router = Router();

router.get('/', getPosts);
router.post('/', requireAuth, createPost);

export default router;
