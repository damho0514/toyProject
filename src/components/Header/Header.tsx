import { Dropdown, MenuProps } from 'antd';
import React from 'react';
import { CustomAvatar, InnerBlock, Name, StyledHeaderWrapper } from './styles';

export default function Header() {
  const items: MenuProps['items'] = [
    {
      key: 'account',
      label: <div>test1</div>,
    },
    {
      key: 'logout',
      label: <div>test2</div>,
    },
  ];
  return (
    <StyledHeaderWrapper>
      <InnerBlock>
        <Dropdown menu={{ items, selectable: true }}>
          <>
            {/* <CustomAvatar /> */}
            <Name>사용자 1</Name>
          </>
        </Dropdown>
      </InnerBlock>
    </StyledHeaderWrapper>
  );
}
