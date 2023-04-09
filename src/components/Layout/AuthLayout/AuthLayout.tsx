import React from "react";

import {
  ResponsiveBlock,
  LeftBlock,
  RightBlock,
  TitleParaGraph,
  DescParaGraph,
  ParaGraphBlock,
  SelectLngWrapper,
  SelectLng,
  AuthFooter,
  AuthHeader,
  SelectLngDivider,
} from "./styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  // const { isKO, isEN, changeLng } = useLanguage();

  return (
    <ResponsiveBlock>
      <LeftBlock>
        <ParaGraphBlock>
          <DescParaGraph>상세</DescParaGraph>
        </ParaGraphBlock>
      </LeftBlock>
      <RightBlock>
        <div>{children}</div>
        <AuthFooter>footer</AuthFooter>
      </RightBlock>
    </ResponsiveBlock>
  );
}
