import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Register from '@/pages/Register/Register';
import SignIn from '@/pages/SignIn/SignIn';
import PageNotFound from '@/pages/PageNotFound/PageNotFound';
import Watch from '@/components/pages/watch/Watch';
import MyList from '@/pages/MyList/MyList';

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
  {
    path: '/watch',
    element: <Watch />,
  },
  {
    path: '/my-list',
    element: <MyList />,
  },
]);
