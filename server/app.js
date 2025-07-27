import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './lib/scheduler.js';
import './lib/telegram/bot.js';

import authRouter from './routes/authRouter.js';
import plantRouter from './routes/plantRouter.js';
import postRouter from './routes/postRouter.js';
import commentRouter from './routes/commentRouter.js';
import userRouter from './routes/userRouter.js';
import profileRouter from './routes/profileRouter.js';
import errorHandler from './errors/errorHandler.js';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the API for Maroon Socket');
});

app.get('/api/status', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is up and running'
    });
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/plant', plantRouter);
app.use('/api/post', postRouter);
app.use('/api/post/:id/comment', commentRouter);
app.use('/api/profile', profileRouter);

//global error handler
app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`Server is listening on port: ${PORT} at host: ${HOST}`)
);
