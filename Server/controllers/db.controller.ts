import { createPool, Pool } from 'mysql2/promise';
import config from '../config';

export let pool: Pool;

export const createDatabasePool = async (): Promise<void> => {
  try {
    pool = createPool({
      host: config.DB_HOST,
      port: +config.DB_PORT,
      user: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    await pool.getConnection();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};