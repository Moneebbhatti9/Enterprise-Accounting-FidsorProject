import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export const Body = styled(Box)`
  padding: 2% 2%;
  border-radius: 10px;
  background-color: #fff;
`;
export const Header = styled(Stack)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Heading = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
`;
export const CreateButton = styled(Button)`
  font-size: 12px;
  border-color: #57b8c9;
  color: #57b8c9;
  &:hover {
    border-color: #57b8c9;
    color: #57b8c9;
  }
`;
export const Container = styled(Box)`
  width: 100%;

  margin-top: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: aliceblue;
`;
export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItemStack = styled(Stack)`
  justify-content: center;
  align-items: start;
`;
export const Title = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  color: #808080;
`;
export const Figure = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  color: #606060;
`;
export const Currency = styled.span`
  font-size: 14px;
  color: #808080;
`;
