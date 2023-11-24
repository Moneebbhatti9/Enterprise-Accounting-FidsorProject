import Steps from './Steps';
import {
  Container,
  Heading,
} from '../../../../Accounts/chartsOfAccounts/AllAccount/ImportAccount/ImportAccountStyling';
import IntlMessages from '@crema/helpers/IntlMessages';
export default function ImportCustomer() {
  return (
    <Container>
      <Heading>
        <IntlMessages id="vendors.importVendors" />
      </Heading>
      <Steps />
    </Container>
  );
}
