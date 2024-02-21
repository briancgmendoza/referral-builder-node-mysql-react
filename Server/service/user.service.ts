import { TUsers } from './../types/index';
import { pool } from "../controllers/db.controller"

export const getUsersService = async (): Promise<TUsers[]> => {
  try {
    const [rows] = await pool.query('SELECT * FROM UserProfile');
    return rows as TUsers[];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};