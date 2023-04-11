import styled, { css } from 'styled-components';

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
  left: 10%;
  background-color: pink;
`;

export const RightBlock = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ParaGraphBlock = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 50px;
  z-index: 3;
`;

export const TitleParaGraph = styled.p`
  color: #ffffff;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 20px;
`;

export const DescParaGraph = styled.p`
  color: #ffffff;
  opacity: 0.6;
  word-break: keep-all;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 40px;
`;

export const Triangle = styled.div`
  position: absolute;
  right: calc(40% + 1px);
  bottom: 0;
  z-index: 1;
  width: 27.44%;
  height: 69.11%;
  background: linear-gradient(
    to bottom right,
    transparent 0%,
    transparent 50%,
    #111d38 50%,
    #111d38 100%
  );
`;

export const BackgroundImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 2;
  width: 60%;
  height: auto;
`;

export const AuthHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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

export const FooterBlock = styled.div`
  width: 70%;
  margin: 0 auto;
`;
