import styled from "styled-components";

export const ResponsiveBlock = styled.div`
  width: 100%;
  background-color: #f9fbff;

  ${({ theme }) => theme.media.desktop`
    `}
  ${({ theme }) => theme.media.tablet`
	`}
	${({ theme }) => theme.media.mobile`
	`}
`;

export const Container = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  max-width: 1400px;
`;

export const AdminMain = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 115px);
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 160px);
`;

export const RowBlock = styled.div`
  display: flex;
`;
