import { Body } from '../../../Global/Styling';
import HeaderwithDialog from '../../../Global/Components/ReusableHeaderwithDialog';
import DataTable from '../../..//Global/Components/DataGrid';
import jsonData from '../../../Global/DummyData/VendorType.json';
const VendorTypes = () => {
  const columns = ['id', 'vendorType', 'view', 'status', 'actions'];
  return (
    <Body>
      <HeaderwithDialog title={'Messages'} intlMessage="messages.addMessage" />
      <DataTable
        columns={columns}
        jsonData={jsonData}
        link={'/admin/settings/vendor-types'}
        name={'Vendor Types'}
      />
    </Body>
  );
};
export default VendorTypes;
