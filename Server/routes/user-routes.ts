import { Router } from "express";

import * as usersController from "../controllers/user.controller"

export default (router: Router) => {
    router.get("/users", usersController.getUsers);
};