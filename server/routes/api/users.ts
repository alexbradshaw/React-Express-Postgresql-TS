import { Router } from 'express';
import {
  deleteUsers,
  getUsers,
  newUser,
  updateUsers,
} from '../../controllers/index.js';

const users = Router();

// GET
users.get('/', getUsers);

// POST
users.post('/new', newUser);

// PUT
users.put('/update/:userId', updateUsers);

// DELETE
users.delete('/delete/:userId', deleteUsers);

export default users;
