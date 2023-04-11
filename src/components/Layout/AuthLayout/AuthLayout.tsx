import React from 'react';

import {
  ResponsiveBlock,
  LeftBlock,
  RightBlock,
  TitleParaGraph,
  ParaGraphBlock,
  Triangle,
} from './styles';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <ResponsiveBlock>
      <LeftBlock />
      <RightBlock>
        <div>{children}</div>
      </RightBlock>
    </ResponsiveBlock>
  );
}
