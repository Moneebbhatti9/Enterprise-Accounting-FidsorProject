import { Body } from '../../../Global/Styling';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
import EditFieldsVendors from './EditVendor';
import { useParams } from 'react-router-dom';

const EditVendor = () => {
  const { id } = useParams<{ id?: string }>();
  const vendorId = id || '';
  return (
    <Body>
      <PageHeaderWithBack title={'Edit Vendor'} url="/purchases/vendors" />
      <EditFieldsVendors id={vendorId} />
    </Body>
  );
};
export default EditVendor;
