import { Request, Response } from "express"

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