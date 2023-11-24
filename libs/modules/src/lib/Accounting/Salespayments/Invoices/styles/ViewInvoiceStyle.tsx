import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

export const Body = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 2% 2%;
  border-radius: 10px;
  background-color: #fff;
`;
export const InvBody = styled(Box)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px 10%;
  }

  @media (min-width: 1024px) {
    padding: 40px 10%;
  }
`;
export const InfoStack = styled(Stack)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const InvoiceInfo = styled(Stack)`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CustomerInfo = styled(Stack)`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;
export const BusinessInfo = styled(Stack)`
  width: 100%;
  display: flex;
  justify-content: start;

  @media (min-width: 768px) {
    width: 50%;
    align-items: end;
  }

  @media (min-width: 1024px) {
    align-items: end;
  }
`;

export const InvoiceStack = styled(Stack)`
  width: 100%;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }

  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;
export const Totaling = styled(Box)`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: end;
  }

  @media (min-width: 1024px) {
    justify-content: end;
  }
`;
