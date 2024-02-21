import { Request, Response } from "express";

import { getUsersService } from './../service/user.service';

export const getUsers = async(req: Request, res: Response) => {
  try {
    const data = await getUsersService()
    res.status(200).json(data)
  } catch (error) {
    console.log("Error [app.get(/users)]: ", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}