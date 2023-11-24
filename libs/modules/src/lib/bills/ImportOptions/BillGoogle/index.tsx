import {
  Container,
  Heading,
} from '../../../chartsOfAccounts/AllAccount/ImportAccount/ImportAccountStyling';
import IntlMessages from '@crema/helpers/IntlMessages';
import Button from '@mui/material/Button';
export default function ImportCustomer() {
  return (
    <>
      <Container>
        <Heading>
          <IntlMessages id="vendors.importVendorsGoogle" />
        </Heading>
        <p style={{ paddingBottom: '40px' }}>
          <IntlMessages id="vendor.importVendorGoogle" />
        </p>
        <Button variant="outlined">Import Vendors from Google Accounts</Button>
      </Container>
    </>
  );
}
