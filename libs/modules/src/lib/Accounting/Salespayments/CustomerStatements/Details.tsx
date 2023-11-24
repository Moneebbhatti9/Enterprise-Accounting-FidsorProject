import { Box, Typography } from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import InvoiceItems from './Items';
import {
  BillShipBox,
  BillShipText,
  Body,
  CustomStack,
  EstimateDetailStack,
  EstimateInfoBox,
  FlexColumnStart,
} from '../../../Accounting/Salespayments/Estimates/Actions/ViewEstimate/StyledComponent/InvoiceDetailStyle';

const InvoiceDetails = () => {
  return (
    <AppAnimate animation="transition.slideRightIn" delay={300}>
      <Box className="account-tabs-content">
        <Body>
          <Box style={{ padding: '40px', float: 'right', textAlign: 'end' }}>
            <h1>Statement of Account</h1>
            <h3>Account Activity</h3>
          </Box>
          <EstimateInfoBox>
            <Typography variant="subtitle1">Fidsor</Typography>
            <Typography variant="subtitle1">United States</Typography>
          </EstimateInfoBox>
        </Body>
        <hr />
        <EstimateDetailStack>
          <BillShipBox>
            <Box>
              <BillShipText variant="h3">Bill To</BillShipText>
            </Box>
            <Box>
              <Typography>
                <strong>shinza </strong>
              </Typography>
              <Typography>kinza gul</Typography>
              <Typography>Customer Address</Typography>
              <Typography>
                53-C/25 St#25, Chamanabad, Misrial Road Rawalpindi
              </Typography>
              <Typography>Rawalpindi 46000</Typography>
            </Box>
          </BillShipBox>
          {/* <BillShipBox>
              <Box>
                <BillShipText variant="h3">Ship To</BillShipText>
              </Box>
              <Box>
                <Typography>
                  <strong>Product Name</strong>
                </Typography>
                <Typography>Buyer Address</Typography>
                <Typography>State/Province</Typography>
                <Typography>Country</Typography>
                <Typography marginTop={2}>Customer Number</Typography>
                <Typography>Customer Email</Typography>
              </Box>
            </BillShipBox> */}
          <CustomStack direction="row">
            <FlexColumnStart>
              <Typography>From</Typography>
              <Typography>To</Typography>
              <Typography>Opening balance on Oct 3, 2018 (CAD)</Typography>
              <Typography>Invoiced</Typography>
              <Typography>Paid</Typography>
              <Typography>Refunded</Typography>
            </FlexColumnStart>
            <FlexColumnStart>
              <Typography>Oct 3, 2018</Typography>
              <Typography>Oct 3, 2018</Typography>
              <Typography>$0.00</Typography>
              <Typography>$0.00</Typography>
              <Typography>$0.00</Typography>
              <Typography>$0.00</Typography>
            </FlexColumnStart>
          </CustomStack>
        </EstimateDetailStack>
        <InvoiceItems />
      </Box>
    </AppAnimate>
  );
};

export default InvoiceDetails;
