import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { useViewerModeStore } from '../stores/viewermode';
import ForgetPass from '../pages/ForgetPass';
import Register from '../pages/Register';

const RouteSwitcher = () => {
  const { viewMode } = useViewerModeStore();

  if (viewMode === 'candidate') {
    return <Home />;
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
