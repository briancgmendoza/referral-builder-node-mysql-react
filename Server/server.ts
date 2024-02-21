import express, { Express, Router } from "express";
import bodyParser from "body-parser";

import { createDatabasePool, pool } from './controllers/db.controller';
import config from "./config"
import routes from "./routes/user-routes";

const app: Express = express();
const router: Router = Router();

routes(router)
app.use(bodyParser.json());

const startServer = async () => {
    if(!pool) {
        await createDatabasePool()
    }

    app.listen(config.PORT, () => {
        console.log(`Server is running @ PORT ${config.PORT}`);
    });

    app.use(router)
};

startServer();