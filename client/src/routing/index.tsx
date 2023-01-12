import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Register from '@/pages/Register/Register';
import SignIn from '@/pages/SignIn/SignIn';
import PageNotFound from '@/pages/PageNotFound/PageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
    errorElement: <PageNotFound />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
