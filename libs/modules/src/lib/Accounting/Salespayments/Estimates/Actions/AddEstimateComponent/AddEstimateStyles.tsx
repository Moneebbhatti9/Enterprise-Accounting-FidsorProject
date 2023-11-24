import { Typography, TextField, Box, Divider, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const StyledContainer = styled('div')`
  padding: 20px;
`;
export const StyledGrid = styled(Grid)`
  padding: 20px;
`;

export const CustomDivider = styled(Divider)`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0px;
  margin-right: 0px;
`;

export const DetailTextField = styled(TextField)`
  margin-top: 20px;
`;

export const GridContainer = styled('div')`
  margin-top: 30px;
`;

export const StyledButton = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const LabelStyle = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  width: 62%;
`;

export const ButtonStack = styled(Box)`
  width: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    .text {
      color: #0a8fdc;
    }
    .icon {
      color: #0a8fdc;
    }
  }
`;

export const StyledHeading = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;
