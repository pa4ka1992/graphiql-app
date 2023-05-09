import { FC, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from 'processes';
import { ROUTE } from './constants';

const About = lazy(() => import('pages').then((component) => ({ default: component.About })));
const PlayGround = lazy(() => import('pages').then((component) => ({ default: component.PlayGround })));
const LogIn = lazy(() => import('pages').then((component) => ({ default: component.LogIn })));
const NotFound = lazy(() => import('pages').then((component) => ({ default: component.NotFound })));

export const routes = [
  {
    path: ROUTE.about,
    element: <Layout />,
    id: 'Layout',
    children: [
      {
        index: true,
        element: <About />,
        id: 'About'
      },
      {
        path: ROUTE.playground,
        element: <PlayGround />,
        id: 'playground'
      }
    ]
  },
  {
    path: ROUTE.login,
    element: <LogIn />,
    id: 'LogIn'
  },
  {
    path: ROUTE.notFound,
    element: <NotFound />,
    id: 'NotFound'
  }
];

const router = createBrowserRouter(routes);

export const Router: FC = () => <RouterProvider router={router} />;
