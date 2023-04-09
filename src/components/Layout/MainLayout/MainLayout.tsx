import { useLocation } from "react-router-dom";
// import { Header, Footer, HeaderMenu, SideBar } from '@/components';
import { Main, ResponsiveBlock, RowBlock, AdminMain } from "./styles";

type TMainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: TMainLayoutProps) {
  const location = useLocation();
  const { pathname } = location;
  const isAdmin = pathname.includes("/admin");
  const splited = pathname.split("/")[1];

  return (
    <ResponsiveBlock>
      {/* <Header pathName={splited} path={pathname} /> */}
      {isAdmin ? (
        <RowBlock>
          {/* <SideBar /> */}
          <AdminMain>{children}</AdminMain>
        </RowBlock>
      ) : (
        <>
          {/* <HeaderMenu /> */}
          <Main>{children}</Main>
        </>
      )}
      {/* <Footer /> */}
    </ResponsiveBlock>
  );
}
