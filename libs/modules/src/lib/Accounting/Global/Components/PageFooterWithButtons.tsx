import styled from 'styled-components';
import { Button } from '@mui/material';
import { CustomDivider } from '../../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PageFooterWithButtons = ({ url }: { [key: string]: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <CustomDivider />
      <Container
        style={{
          flexDirection: 'column-reverse',
          paddingTop: '10px',
          paddingBottom: '8px',
          display: 'flex',
          msFlexDirection: 'column',
        }}
      >
        {/* <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}> */}
        <Button variant="contained" size="medium" onClick={() => navigate(-1)}>
          {' '}
          Cancel{' '}
        </Button>
        {/* </Link> */}
      </Container>
    </>
  );
};
export default PageFooterWithButtons;
