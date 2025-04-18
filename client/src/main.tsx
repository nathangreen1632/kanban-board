import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Board from './pages/Board.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import EditTicket from './pages/EditTicket.tsx';
import CreateTicket from './pages/CreateTicket.tsx';
import Login from './pages/Login.tsx';
import { UserProvider } from './context/UserProvider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Board /> },
      { path: 'edit', element: <EditTicket /> },
      { path: 'create', element: <CreateTicket /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
