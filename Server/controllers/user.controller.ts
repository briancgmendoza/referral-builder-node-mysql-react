import { Request, Response } from "express";

import {
  getUsersService,
  addUserService,
  deleteUserService
} from './../service/user.service';

export const getUsers = async(req: Request, res: Response) => {
  try {
    const data = await getUsersService()
    res.status(200).json(data)
  } catch (error) {
    console.log("Error [app.get(/users)]: ", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const addUser = async(req: Request, res: Response) => {
  try {
    /**
     * TODO: Add existingUser function here later
     * Currently, when adding a user with the same email address,
     * it would return an error.
     */
    const data = await addUserService(req, res)
    res.status(200).json(data)
  } catch (error) {
    console.log("Error [app.post(/add-user)]: ", error)
    res.status(500).json({ error: "Internal Server Error. Please try again later." })
  }
}

export const deleteUser = async(req: Request, res: Response) => {
  try {
    const deletedUser = await deleteUserService(req, res)
    res.status(200).json(deletedUser)
  } catch (error) {
    console.log("Error [app.post(/course/:courseId)]: ", error)
    res.status(500).json({ error: "Internal Server Error. Please try again later." })
  }
}