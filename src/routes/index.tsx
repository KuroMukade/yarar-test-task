import { useRoutes } from 'react-router-dom';

import Main from '../pages/Main';
import MainMap from '../pages/MainMap';

const AppRoutes = () =>
  useRoutes([
    { path: '/', element: <Main /> },
    { path: '/map', element: <MainMap /> },
  ]);

export default AppRoutes;
