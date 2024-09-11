import 'dotenv/config';

import express, { Express, Request, Response } from 'express';
const app: Express = express();

import session, { Store } from 'express-session';

import connectPg from 'connect-pg-simple';
const pgStore = connectPg(session);

import router from './routes/index.js';
import { pool } from './config/connection.js';
const PORT: string | number = process.env.PORT || 3001;
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(
  session({
    secret: process.env.SECRET || 'secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      sameSite: 'strict',
    },
    store: new pgStore({
      pool: pool,
      tableName: 'user_sessions',
      createTableIfMissing: true,
    }),
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

if (process.env.NODE_ENV == 'production' || true) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

try {
  app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
} catch (e) {
  console.error(e);
}
