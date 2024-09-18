import { Request, Response } from 'express';
import { query } from '../../config/connection';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await query('SELECT * FROM users;', []);

    res.json({ users: users.rows });
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
};

export const newUser = async (req: Request, res: Response) => {
  try {
    const user = await query(
      'INSERT INTO users (name, handles) VALUES ($1, $2);',
      [req.body.name, req.body.handles],
    );

    res.json({ newUser: user.rows });
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
};

export const updateUsers = async (req: Request, res: Response) => {
  try {
    const user = await query('UPDATE users SET name = $1 WHERE user_id = $2;', [
      req.body.name,
      req.params.userId,
    ]);

    res.status(200).json({ affectedRows: user.rowCount });
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
};

export const deleteUsers = async (req: Request, res: Response) => {
  try {
    const user = await query('DELETE FROM users WHERE user_id = $1;', [
      req.params.userId,
    ]);

    res.status(200).json({ affectedRows: user.rowCount });
  } catch (e) {
    console.error(e);
    res.status(400).json(e);
  }
};
