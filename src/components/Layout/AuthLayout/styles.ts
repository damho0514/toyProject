import styled, { css } from "styled-components";

export const ResponsiveBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftBlock = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212b44;
`;

export const RightBlock = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ParaGraphBlock = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

export const TitleParaGraph = styled.p`
  color: #fff;
  font-size: 50px;
`;

export const DescParaGraph = styled.p`
  color: #fff;
  opacity: 0.6;
  word-break: keep-all;
  font-size: 20px;
`;

export const AuthHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AuthFooter = styled.div``;

export const SelectLngWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  margin-top: 48px;
  margin-right: 48px;
  width: 88px;
`;

export const SelectLngDivider = styled.div`
  color: #00000066;
`;

export const SelectLng = styled.div<{ isActive: boolean }>`
  ${(props) =>
    !props.isActive &&
    css`
      color: #00000066;
    `};
  ${(props) =>
    props.isActive &&
    css`
      font-weight: 700;
      color: #000000;
    `};
  cursor: pointer;
`;
