import { MenuTheme } from 'antd';
import React, { useState } from 'react';
import { CustomSwitch } from './stylest';

type SwitchProps = {
  onSwitch: (mode: boolean) => void;
};
export default function Switch({ onSwitch }: SwitchProps) {
  return <CustomSwitch onChange={onSwitch} />;
}
