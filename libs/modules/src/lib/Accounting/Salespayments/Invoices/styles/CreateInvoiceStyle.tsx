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
  padding: 40px 10px;

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
export const SelectCustomer = styled(Stack)`
  width: 70%;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;
export const CustomerDetails = styled(Stack)`
  width: 90%;
  padding: 0px 12px 12px 12px;

  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }
`;
export const BusinessDetails = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 15px 0px;

  @media (min-width: 768px) {
    width: 60%;
    justify-content: end;
    padding: 0px;
  }

  @media (min-width: 1024px) {
    width: 60%;
    justify-content: end;
    padding: 0px;
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
export const AddProduct = styled(Stack)`
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Totaling = styled(Stack)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 35px;
  @media (min-width: 768px) {
    width: 50%;
    justify-content: end;
    margin-top: 0px;
  }

  @media (min-width: 1024px) {
    justify-content: end;
    margin-top: 0px;
  }
`;
