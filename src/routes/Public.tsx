import { AuthLayout } from "@/components/Layout/AuthLayout";
import AuthRoutes from "@/features/auth/routes";
import { Spin } from "antd";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Public() {
  return (
    <AuthLayout>
      <Suspense fallback={<Spin />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
}

export const publicRoutes = [
  {
    path: "/login",
    element: <Public />,
    children: [
      {
        path: "*",
        element: <AuthRoutes />,
      },
      {
        // path가 '/auth'일 경우 '/auth/signin'으로 redirect.
        path: "",
        element: <Navigate to="/login" />,
      },
    ],
  },
];
