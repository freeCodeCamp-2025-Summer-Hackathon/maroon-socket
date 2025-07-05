import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the API for Maroon Socket');
});

app.get('/api/status', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is up and running'
    });
});

app.listen(PORT, () =>
    console.log(`Server is listening on port: ${PORT} at host: ${HOST}`)
);
