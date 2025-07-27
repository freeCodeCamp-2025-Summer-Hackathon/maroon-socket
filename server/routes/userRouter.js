import { Router } from 'express';
import { getUser } from '../controllers/userControllers.js';
import requireAuth from '../middleware/requireAuth.js';

const userRouter = Router();

userRouter.get('/', requireAuth, getUser);

export default userRouter;
