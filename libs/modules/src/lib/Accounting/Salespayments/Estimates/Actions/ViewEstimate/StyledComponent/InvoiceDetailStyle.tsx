import styled from 'styled-components';
import { Box, Typography, Stack } from '@mui/material';

export const Wrapper = styled(Box)`
  .account-tabs-content {
    /* Add any common styles here */
  }
`;

export const EstimateInfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Body = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (max-width: 490px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 410px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  /* Add any styles for the image here */
`;

export const HeaderTypography = styled(Typography)`
  font-size: 48px;
  margin-bottom: 20px;
`;
export const EstimateDetailStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;

  @media (max-width: 710px) {
    flex-wrap: wrap;
  }

  @media (max-width: 425px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const BillShipBox = styled(Box)`
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    gap: 45px;
  }
`;
export const BillShipText = styled(Typography)`
  color: #8c959a;
`;

export const CustomStack = styled(Stack)``;

export const FlexColumnStart = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;

  @media (max-width: 667px) {
    margin-top: 15px;
  }

  @media (max-width: 425px) {
    margin-right: 12px;
  }
`;
