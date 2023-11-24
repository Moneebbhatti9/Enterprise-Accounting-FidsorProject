import styled from 'styled-components';
import { Button, Typography, Box } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';

export const SaveButton = styled(Button)`
  position: relative;
  min-width: 100px;
`;

export const EnableButton = styled(Button)`
  position: relative;
  min-width: 100;
  margin-top: 3;
`;

export const SecureText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
`;
export const ChangePasswordHeading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const ButtonDisplay = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconStyle = styled(BeenhereIcon)`
  font-size: 30px;
  color: #2196f3;
  margin-right: 3px;
`;
export const IconBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;
export const SaveButtonBox = styled(Box)`
  display: flex;
  justify-content: start;
`;
export const TwoFactorBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #e1f0fc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 5px;
`;
