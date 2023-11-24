import styled from 'styled-components';
import {
  Box,
  Grid,
  Button as MuiButton,
  Button,
  Typography,
} from '@mui/material';
import { AiOutlineSync } from 'react-icons/ai';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses, TabsList, Tabs } from '@mui/base';

export const StyledGrid = styled(Box)`
  border-radius: 2.5px;
  border: 1px solid #ccc;
  padding: 7px;
`;

export const StyledGridContent = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const ItemContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 8px; /* Add margin for spacing between items */
`;
export const Item1 = styled.h4`
  align-items: center;
  justify-content: center;
`;
export const Item2 = styled.h6`
  align-items: center;
  justify-content: center;
`;
export const TitleOverdue = styled.h5`
  margin-bottom: 10px;
`;
export const WrapIconHeading = styled(Grid)`
  display: flex;
  margin-bottom: 10px;
  margin-top: 30px;
  align-items: center;
  justify-content: between;
  color: black;
`;
export const MarginGrid = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 4px;
`;
export const Filter = styled.h5`
  font-size: 10px;
  margin-left: 0.15rem;
`;
export const Loader = styled(AiOutlineSync)`
  margin-left: 0.1rem;
  color: black;
  font-weight: bolder;
`;
export const Count = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  background-color: #3498db; /* Change the background color as needed */
  border-radius: 50%;
  color: white;
  font-size: 10px;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const ButtonInvoiceStyling = styled(MuiButton)`
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 55px;
`;
export const ParentTab = styled(Tabs)`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: grey;
  }
  &:focus {
    color: #fff;
    outline: 1px solid #ccc;
  }

  &.${tabClasses.selected} {
    background-color: grey;
    color: #000;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledTabsList = styled(TabsList)`
  margin-top: 9px;
  min-width: 400px;
  background-color: #fff;

  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px
    ${(props) => (props.dark ? 'grey[700]' : 'grey[100]')};
`;
//extra
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Heading = styled(Typography)`
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 600px) {
    flex: 1;
    text-align: left;
    margin-bottom: 0;
  }
`;

export const StyledButton = styled(Button)`
  text-align: center;
  @media (min-width: 600px) {
    text-align: right;
  }
`;
