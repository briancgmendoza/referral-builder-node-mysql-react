import { FieldPacket } from "mysql2/promise";
import { RowDataPacket } from "mysql2";

import { pool } from "../controllers/db.controller";

export const findByEmail = async (email: string): Promise<boolean> => {
  try {
    if (email === undefined) {
      throw new Error("Email is required.")
    }

    const [rows]: [RowDataPacket[], FieldPacket[]]  = await pool.query("SELECT COUNT(*) AS count FROM UserProfile WHERE email = ?", [email]);
    return rows[0].count > 0;
  } catch (error) {
    console.log("Error in checking existing user via email: ", error)
    throw error
  }
};

export const findById = async (userId: number): Promise<boolean> => {
  try {
    if (userId === undefined) {
      throw new Error("UserId is required.")
    }

    const [rows]: [RowDataPacket[], FieldPacket[]]  = await pool.query("SELECT COUNT(*) AS count FROM UserProfile WHERE user_id = ?", [userId]);
    return rows[0].count > 0;
  } catch (error) {
    console.log("Error in checking existing user via id: ", error)
    throw error
  }
};