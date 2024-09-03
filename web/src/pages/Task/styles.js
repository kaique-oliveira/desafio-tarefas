import { Grid2, Stack } from '@mui/material';
import styled from 'styled-components';

export const WrapperPage = styled(Stack)`
  width: 100vw;
  height: 100vh;

  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.BACKGOUND};
  box-sizing: border-box;
`;

export const WrapperPanel = styled(Grid2)`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
`;

export const PanelTask = styled(Grid2)`
  /* width: 100%;
  height: 100%; */

  background-color: pink;
`;
