import styled from 'styled-components';
import { Box } from '@mui/material';

export const Body = styled(Box)`
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;
