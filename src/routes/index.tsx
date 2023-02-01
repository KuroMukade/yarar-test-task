import { useRoutes } from 'react-router-dom';

import Main from '../pages/Main';
import EventsMap from '../pages/EventsMap';

const AppRoutes = () =>
  useRoutes([
    { path: '/', element: <Main /> },
    { path: '/map', element: <EventsMap /> },
  ]);

export default AppRoutes;
