import styled from 'styled-components';
import { Box, Grid, Button, List, Typography } from '@mui/material';

export const Body = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
`;
export const DatePickerContainer = styled(Box)`
  background-color: white;
  border-radius: 8px;
  width: 45%;

  & .MuiInputBase-root {
    border-radius: 8px;
    overflow: hidden;
    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ccc;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ccc;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #ccc;
    }
  }
`;
