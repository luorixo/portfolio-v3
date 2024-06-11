import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/Main.page';
import Layout from '../pages/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
