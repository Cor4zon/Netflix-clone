import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Register from '@/pages/Register/Register';
import SignIn from '@/pages/SignIn/SignIn';
import PageNotFound from '@/pages/PageNotFound/PageNotFound';
import Watch from '@/components/pages/watch/Watch';
import MyList from '@/pages/MyList/MyList';
import SignOut from '@/pages/SignOut/SignOut';
import Movies from '@/pages/Movies/Movies';
import Series from '@/pages/Series/Series';
import SearchPage from '@/pages/SearchPage/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/series',
        element: <Series />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/my-list',
        element: <MyList />,
      },
    ],
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
    path: '/signout',
    element: <SignOut />,
  },
]);
