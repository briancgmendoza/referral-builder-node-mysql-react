import { FieldPacket } from "mysql2/promise";
import { RowDataPacket } from "mysql2";


import { pool } from "../controllers/db.controller";

export const existingUser = async (email: string): Promise<boolean> => {
  const [rows]: [RowDataPacket[], FieldPacket[]]  = await pool.query('SELECT COUNT(*) AS count FROM UserProfile WHERE email = ?', [email]);
  return rows[0].count > 0;
};