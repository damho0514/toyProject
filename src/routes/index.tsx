import { useUser } from '@/lib/auth';
import { Navigate, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './Protected';
import { publicRoutes } from './Public';

export const MainRoutes = () => {
  const user = useUser();

  const redirect = [{ path: '/', element: <Navigate to="/login" /> }];
  const routes = user.data ? publicRoutes : protectedRoutes;

  const element = useRoutes([...routes, ...redirect]);
  return <>{element}</>;
};
