import styled from 'styled-components';
import { Button } from '@mui/material';
import { CustomDivider } from '../../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageFooterWithButtons = ({
  // urlCancel,
  onSaveClick,
}: {
  // urlCancel: string;
  onSaveClick: () => void;
}) => {
  return (
    <>
      <CustomDivider />
      <Container
        style={{
          flexDirection: 'row-reverse', // Change to 'row' to place buttons in the same line
          paddingTop: '10px',
          paddingBottom: '8px',
        }}
      >
        {/* <Link
          to={urlCancel}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            marginLeft: '8px',
          }}
        >
          <Button variant="contained" size="medium">
            {' '}
            Cancel{' '}
          </Button>
        </Link> */}
        <Button
          variant="contained"
          size="medium"
          onClick={onSaveClick}
          sx={{
            backgroundColor: '#57b8c9',
            '&:hover': {
              backgroundColor: '#57b8c9',
            },
          }}
        >
          Save
        </Button>
      </Container>
    </>
  );
};

export default PageFooterWithButtons;
