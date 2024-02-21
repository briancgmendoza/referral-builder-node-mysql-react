import { FieldPacket } from "mysql2/promise";
import { RowDataPacket } from "mysql2";


import { pool } from "../controllers/db.controller";

export const existingUser = async (userId?: number, email?: string): Promise<boolean> => {
  try {
    if (userId === undefined && email === undefined) {
      throw new Error("Either userId or email must be provided.")
    }

    let query = "SELECT COUNT(*) AS count FROM UserProfile WHERE "
    let params: any[] = []

    if (userId !== undefined) {
      query += "user_id = ?"
      params.push(userId)
    } else {
      query += "email = ?"
      params.push(email)
    }

    const [rows]: [RowDataPacket[], FieldPacket[]]  = await pool.query(query, params);
    return rows[0].count > 0;
  } catch (error) {
    console.log("Error in checking existing user: ", error)
    throw error
  }
};