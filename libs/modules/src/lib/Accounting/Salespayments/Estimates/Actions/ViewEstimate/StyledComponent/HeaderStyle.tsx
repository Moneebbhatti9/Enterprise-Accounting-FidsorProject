import styled from 'styled-components';
import { List, Box, Button, Stack } from '@mui/material';

export const Heading = styled.h1`
  font-size: 20px;
`;

export const ExportDropDown = styled(List)`
  min-width: 100px;
`;

export const SaveText = styled.button`
  font-size: 14px;
  color: #ffffff;
  background-color: #839299;
  border: none;
  padding: 10px 12px;
  border-radius: 30px;
`;

export const SendLink = styled.a`
  font-size: 14px;
  color: blue;
  text-decoration: none;
  margin-left: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled(Box)`
  display: flex;
  flex: 1;
`;

export const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowBox = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 490px) {
    align-items: center;
    flex-direction: column;
    gap: 10px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const RowBox2 = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0px;

  @media (max-width: 405px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SendText = styled.p`
  margin-left: 10px;
`;

export const StyledStack = styled(Stack)`
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
