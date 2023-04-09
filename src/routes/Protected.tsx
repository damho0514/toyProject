import { MainLayout } from "@/components/Layout/MainLayout";
import { Home } from "@/features/home";
import { Spin } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Protected() {
  return (
    <MainLayout>
      <Suspense fallback={<Spin size="small" />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export const protectedRoutes = [
  {
    path: "/home", // TODO: path 설정 필요
    element: <Protected />,
    children: [
      // Home
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
