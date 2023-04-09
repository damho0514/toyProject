import { Navigate, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./Protected";
import { publicRoutes } from "./Public";

export const MainRoutes = () => {
  const redirect = [{ path: "/", element: <Navigate to="/login" /> }];

  const element = useRoutes([...publicRoutes, ...protectedRoutes, ...redirect]);
  return <>{element}</>;
};
