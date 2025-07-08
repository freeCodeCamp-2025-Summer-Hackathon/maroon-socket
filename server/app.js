import 'dotenv/config';
import express from 'express';
import authRouter from './routes/authRouter.js';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const app = express();

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

app.listen(PORT, () =>
    console.log(`Server is listening on port: ${PORT} at host: ${HOST}`)
);
