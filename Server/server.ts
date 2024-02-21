import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const PORT = 8080


const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server is running @ PORT ${PORT}`);
    });
};

startServer();