import { Avatar } from 'antd';
import styled from 'styled-components';

export const StyledHeaderWrapper = styled.header`
  border: 1px solid red;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const CustomAvatar = styled(Avatar)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Name = styled.span`
  margin-right: 8px;
`;

export const InnerBlock = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% + 16px);
  column-gap: 5px;
`;
