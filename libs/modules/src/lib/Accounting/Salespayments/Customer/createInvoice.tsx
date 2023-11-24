// import AppsContainer from '@crema/components/AppsContainer';
// import { Link } from 'react-router-dom';
import { Body } from '../Customer/AddCustomer/Components/AddCustomerStyled';
import PageFooterWithButtons from '../../Global/Components/PageFooterWithButtons';
// import styled from 'styled-components';
// import { Button, Grid } from '@mui/material';
import PageHeaderWithBack from '../../Global/Components/PageHeaderWithBack';

// const CancelSave = styled(Grid)`
//   margin-left: 0px;
//   margin-top: 2%;
//   justify-content: center;
// `;
// const CancelbtnGrid = styled(Grid)`
//   display: flex;
//   justify-content: end;
// `;
// const AddCustomerCancel = styled(Button)`
//   border-radius: 8px;
// `;
// export const AddCustomerSave = styled(Button)`
//   min-width: 78px;
//   border-radius: 8px;
// `;
// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const CreateInvoice = () => {
  return (
    <>
      <Body>
        <PageHeaderWithBack
          title={'Create Invoice'}
          url="/salespayment/customer"
        />
        <PageFooterWithButtons url={'/salespayment/customer'} />{' '}
      </Body>
    </>
  );
};
export default CreateInvoice;
