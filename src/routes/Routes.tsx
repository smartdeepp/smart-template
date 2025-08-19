import { RouterProvider } from 'react-router';

import { router } from './routes.config';

const Routes = () => {
  return <RouterProvider router={router} />;
};

export { Routes };
