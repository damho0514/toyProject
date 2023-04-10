import React from "react";

import {
  ResponsiveBlock,
  LeftBlock,
  RightBlock,
  TitleParaGraph,
  ParaGraphBlock,
  Triangle,
} from "./styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <ResponsiveBlock>
      <LeftBlock>
        <ParaGraphBlock>
          <TitleParaGraph>Welcome to</TitleParaGraph>
        </ParaGraphBlock>
        <Triangle />
      </LeftBlock>
      <RightBlock>
        <div>{children}</div>
        {/* <FooterBlock>
          <Footer isPrivate={false} />
        </FooterBlock> */}
      </RightBlock>
    </ResponsiveBlock>
  );
}
