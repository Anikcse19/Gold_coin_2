import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ForgetPass from '../pages/ForgetPass';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import { useViewerModeStore } from '../stores/viewermode';
import Manage from '../pages/Manage/index';

const RouteSwitcher = () => {
  const { viewMode } = useViewerModeStore();

  if (viewMode === 'candidate') {
    return <Login />;
  } else {
    return '';
  }
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <RouteSwitcher />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'manage',
        element: <Manage />,
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
  // {
  //   path: 'login',
  //   element: <Login />,
  // },
]);

export default routes;
