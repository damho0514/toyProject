import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, MenuTheme } from 'antd';
import { useState } from 'react';
import { Switch } from '../Switch';

import { CustomSider, StyledWrapper } from './styles';

const items: MenuProps['items'] = [
  {
    label: '메일 관리',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: '사용자 관리',
    key: 'users',
    // icon: <MailOutlined />,
  },
  {
    label: 'Options1',
    key: 'Options1',
    // icon: <MailOutlined />,
  },
  {
    label: '메일 관리',
    key: 'mail',
    icon: <MailOutlined />,
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: '그룹 관리',
            key: 'users/manage',
          },
          {
            label: '하위 그룹',
            key: 'users/delete',
          },
        ],
      },
    ],
  },
  {
    label: '메일 관리',
    key: 'mail',
    icon: <MailOutlined />,
  },
];

export default function Sider() {
  const [mode, setMode] = useState<MenuTheme>('light');

  const onSwitch = (mode: boolean) => {
    setMode(mode ? 'dark' : 'light');
  };

  return (
    <StyledWrapper>
      <Switch onSwitch={onSwitch} />
      <CustomSider items={items} theme={mode}></CustomSider>
    </StyledWrapper>
  );
}
