import React from 'react';
import { Outlet } from 'react-router';

import { ROUTES } from '@constants/routes';

const Home = React.lazy(() => import('@pages/Home'));
const Breeds = React.lazy(() => import('@pages/Breeds'));
const Breed = React.lazy(() => import('@pages/Breed'));
const Images = React.lazy(() => import('@pages/Images'));
const NotFound = React.lazy(() => import('@pages/NotFound'));

export const routes = [
  {
    path: ROUTES.ROOT,
    element: <Home />,
  },
  {
    path: ROUTES.BREEDS,
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <Breeds />,
      },
      {
        path: ':id',
        element: <Breed />,
      },
    ],
  },
  {
    path: ROUTES.IMAGES,
    element: <Images />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
