import { Request, Response } from "express"
import { FieldPacket } from "mysql2/promise";
import { RowDataPacket } from "mysql2";

import { pool } from "../controllers/db.controller"
import { TUsers, TUserProfile } from './../types/index';


export const getUsersService = async (): Promise<TUsers[]> => {
  try {
    const [rows] = await pool.query('SELECT * FROM UserProfile');
    return rows as TUsers[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const addUserService = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      given_name,
      surname,
      email,
      phone,
      house_no,
      street,
      suburb,
      state,
      postcode,
      country
    }: TUserProfile = req.body;


    const requiredFields = [
      'given_name',
      'surname',
      'email',
      'phone',
      'house_no',
      'street',
      'suburb',
      'state',
      'postcode',
      'country'
    ];

    if (requiredFields.some(field => !req.body[field])) {
      res.status(400).json({ error: 'Missing field. Please check your input.' });
      return;
    }

    const query = `
      INSERT INTO UserProfile (given_name, surname, email, phone, house_no, street, suburb, state, postcode, country)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.query(query, [
      given_name,
      surname,
      email,
      phone,
      house_no,
      street,
      suburb,
      state,
      postcode,
      country
    ]);

    const addedUser: TUserProfile = {
      given_name,
      surname,
      email,
      phone,
      house_no,
      street,
      suburb,
      state,
      postcode,
      country,
      avatar_image: null
    } 

    res.status(201).json({ message: 'User added successfully', data: addedUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(400).json({ error: 'Invalid data provided. Please check your input.' });
  }
};

export const deleteUserService = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      res.status(400).json({ error: 'User ID is required.' });
      return;
    }

    await pool.query('DELETE FROM UserProfile WHERE user_id = ?', [userId]);

    res.status(200).json({ message: `User with ID ${userId} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUserService = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId: number = +req.params.userId;

    const {
      given_name,
      surname,
      email,
      phone,
      house_no,
      street,
      suburb,
      state,
      postcode,
      country,
      avatar_image
    }: TUserProfile = req.body

    if (!userId) {
      res.status(400).json({ error: 'User ID is required.' });
      return;
    }

    const updateQuery = `
      UPDATE UserProfile
      SET
        given_name = COALESCE(?, given_name),
        surname = COALESCE(?, surname),
        email = COALESCE(?, email),
        phone = COALESCE(?, phone),
        house_no = COALESCE(?, house_no),
        street = COALESCE(?, street),
        suburb = COALESCE(?, suburb),
        state = COALESCE(?, state),
        postcode = COALESCE(?, postcode),
        country = COALESCE(?, country),
        avatar_image = COALESCE(?, avatar_image)
      WHERE user_id = ?;
    `

    await pool.query(updateQuery, [
      given_name,
      surname,
      email,
      phone,
      house_no,
      street,
      suburb,
      state,
      postcode,
      country,
      avatar_image,
      userId
    ])

    const updatedUser: TUserProfile = {
      given_name,
      surname,
      email,
      phone,
      house_no,
      street,
      suburb,
      state,
      postcode,
      country,
      avatar_image
    }

    res.status(200).json({ message: `User with ID ${userId} updated successfully.`, data: updatedUser })
  } catch (error: any) {
    console.log("Error updating user profile: ", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const getUserService = async (req: Request, res: Response): Promise<TUserProfile | null> => {
  try {
    const userId = +req.params.userId;
    
    const [rows]: [RowDataPacket[], FieldPacket[]]  = await pool.query("SELECT * FROM UserProfile WHERE user_id = ?", [userId]);
    return rows[0] as TUserProfile
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};