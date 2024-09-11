import { Router } from 'express';

import users from './users.js';

const api = Router();

api.use('/users', users);

export default api;
