import { Body } from '../../../Global/Styling';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
import ViewVendorData from './Components/ViewVendor';

const ViewVendor = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'View Vendor'} url="/purchases/vendors" />
      <ViewVendorData />
    </Body>
  );
};
export default ViewVendor;
