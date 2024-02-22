import { Request, Response } from "express";

import { findByEmail, findById } from './../helpers/index';

import {
  getUsersService,
  addUserService,
  deleteUserService,
  updateUserService
} from './../service/user.service';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await getUsersService()
    res.status(200).json(data)
  } catch (error) {
    console.log("Error [app.get(/users)]: ", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const addUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    const userExists = await findByEmail(email)

    if(userExists) {
      res.status(400).json({ error: 'User with the same email already exists.' });
      return;
    }

    await addUserService(req, res)
  } catch (error) {
    console.log("Error [app.post(/add-user)]: ", error)
    res.status(500).json({ error: "Internal Server Error. Please try again later." })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await deleteUserService(req, res)
  } catch (error) {
    console.log("Error [app.delete(/user/:userId)]: ", error)
    res.status(500).json({ error: "Internal Server Error. Please try again later." })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId: number = +req.params.userId;
    const userExists = await findById(userId);

    if (!userExists) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await updateUserService(req, res)
  } catch (error) {
    console.log("Error [app.put(/update-user/:userId)]: ", error)
    res.status(500).json({ error: "Internal Server Error. Please try again later." })
  }
}