import express, { Express } from "express";

import { createDatabasePool, pool } from './controllers/db.controller';
import config from "./config"

const app: Express = express();

const startServer = async () => {
    if(!pool) {
        await createDatabasePool()
    }

    app.listen(config.PORT, () => {
        console.log(`Server is running @ PORT ${config.PORT}`);
    });
};

startServer();