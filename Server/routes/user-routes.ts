import { Router } from "express";

import * as usersController from "../controllers/user.controller"

export default (router: Router) => {
    router.get("/users", usersController.getUsers);
    router.post("/add-user", usersController.addUser);
    router.delete("/user/:userId", usersController.deleteUser)
    router.put("/update-user/:userId", usersController.updateUser)
};