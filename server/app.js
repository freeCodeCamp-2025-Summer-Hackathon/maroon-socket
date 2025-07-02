import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const app = express();

app.listen(PORT, () =>
    console.log(`Server is listening on port: ${PORT} at host: ${HOST}`)
);
