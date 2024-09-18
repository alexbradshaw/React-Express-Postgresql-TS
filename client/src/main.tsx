import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import AllUsers from './views/AllUsers.tsx';
import AddUsers from './views/AddUsers.tsx';

const routes = [
  { index: true, element: <AllUsers /> },
  { path: 'add', element: <AddUsers /> },
  { path: 'update', element: <>Nothing Yet</> },
  { path: 'delete', element: <>Nothing Yet</> },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
