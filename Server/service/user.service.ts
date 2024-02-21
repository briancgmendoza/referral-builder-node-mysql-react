import { Request, Response } from "express"
import { FieldPacket, ResultSetHeader } from "mysql2/promise";

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

    res.status(201).json({ message: 'User added successfully' });
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

    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM UserProfile WHERE user_id = ?', [userId]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: `User with ID ${userId} not found.` });
      return;
    }

    res.status(200).json({ message: `User with ID ${userId} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};