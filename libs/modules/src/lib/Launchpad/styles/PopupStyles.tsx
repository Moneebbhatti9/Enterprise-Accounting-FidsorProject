// StyledPopup.tsx
import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

export const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 660px;
  background-color: #fff;
  box-shadow: 24px;
  outline: none;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const StyledContentWrapper = styled(Box)`
  padding: 5%;
  padding-top: 3%;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const StyledContentContainer = styled(Box)`
  background-color: #edf1f2;
  padding: 5%;
`;

export const StyledHeading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;

export const StyledDescription = styled(Typography)`
  font-size: 13px;
  margin-bottom: 15px;
`;

export const StyledActionButton = styled(Button)`
  border-radius: 20px;
  font-size: 12px;
  color: #fff;
  transition: none;
`;

export const StyledSubHeading = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const StyledListItem = styled.li`
  font-size: 13px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
