import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import SignUp from '@/pages/SignUp/SignUp';
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
    element: <SignUp />,
  },
]);
