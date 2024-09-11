import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool(
  process.env.CONNECTION_STRING
    ? {
        connectionString: process.env.CONNECTION_STRING,
      }
    : {
        user: 'codehub',
        host: process.env.DATABASE_HOST || 'localhost',
        database: 'codehub',
        password: 'Codehub',
        port: 5432,
      },
);

// eslint-disable-next-line
export const query = (text: string, params?: any[]) => pool.query(text, params);