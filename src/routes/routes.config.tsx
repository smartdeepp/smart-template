import { createBrowserRouter, type RouteObject } from 'react-router';

import { Routes } from '@app/constants/route.constant';

const appRoutes: RouteObject[] = [
  {
    path: Routes.Root,
    // element: <AuthProvider /> ,
    // errorElement: <ErrorBoundary />,
    children: [
      // { index: true, element: <Navigate to={} /> }
      // { path: '*', element: <div>404 not found component goes here</div> },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

export { router };
