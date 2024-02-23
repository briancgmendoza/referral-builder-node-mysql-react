import { Router } from "express";
import multer from "multer"

import * as usersController from "../controllers/user.controller"
import { storage } from "../config/upload.image"

const upload = multer({ storage })

export default (router: Router) => {
    router.get("/users", usersController.getUsers);
    router.get("/user/:userId", usersController.getUser)
    router.post("/add-user", upload.single("avatar_image"), usersController.addUser);
    router.delete("/user/:userId", usersController.deleteUser)
    router.put("/update-user/:userId", upload.single("avatar_image"), usersController.updateUser)
};