import { createBrowserRouter } from 'react-router-dom';
import CoinInfo from '../pages/CoinInfo';
import ForgetPass from '../pages/ForgetPass';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Manage from '../pages/Manage/index';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';

// const RouteSwitcher = () => {
//   const { viewMode } = useViewerModeStore();

//   if (viewMode === 'candidate') {
//     return <Login />;
//   } else {
//     return '';
//   }
// };

const routes = createBrowserRouter([
  {
    path: '/',
    // element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: 'home',
      //   element: <Home />,
      // },
      {
        path: 'manage',
        element: <Manage />,
      },
      {
        path: 'info',
        element: <CoinInfo />,
      },
      {
        path: 'forget-password',
        element: <ForgetPass />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default routes;
