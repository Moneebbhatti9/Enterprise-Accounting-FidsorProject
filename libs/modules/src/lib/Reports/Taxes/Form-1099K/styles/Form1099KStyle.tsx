import styled from 'styled-components';
import { Box, Link } from '@mui/material';

export const Body = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
`;
export const Info = styled(Box)`
  width: 30%;
`;
export const Note = styled(Box)`
  background-color: #edf7fe;
  padding: 12px;
  margin-top: 12px;
  border-left: 4px solid #007bff;
  border-radius: 8px;
  width: 40%;
`;
export const Links = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;
