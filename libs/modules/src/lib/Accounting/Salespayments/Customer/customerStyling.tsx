
import {  Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { Button, Grid } from "@mui/material";
export const StyledMenu = styled(Menu)`
  width: 20ch;
`;
export const StyledMenuItem = styled(MenuItem)`
  font-size: 12px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const StyledStack =styled(Stack)`
padding-right:5px;
`;
export const customStepStyle = {
    fontSize: '20px',
  };
export  const CancelSave = styled(Grid)`
  margin-left: 0px;
  margin-top: 2%;
  justify-content: center;
`;
export const CancelbtnGrid = styled(Grid)`
  display: flex;
  justify-content: end;
`;
export const AddCustomerCancel = styled(Button)`
  border-radius: 8px;
`;
export const AddCustomerSave = styled(Button)`
  min-width: 78px;
  border-radius: 8px;
`;

export const Container = styled(Box)`
display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CustomHR = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
  width: 100%;
`;
export const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DialogTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 3%;
`;