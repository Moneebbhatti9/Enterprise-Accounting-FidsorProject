import React from 'react';
import { Body } from '../../../Global/Styling';
import HeaderwithDialog from '../../../Global/Components/ReusableHeaderwithDialog';
import DataTable from '../../..//Global/Components/DataGrid';
import jsonData from '../../../Global/DummyData/VendorType.json';
const VendorTypes = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isCurrencyDialogOpen, setIsCurrencyDialogOpen] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCurrencyClick = () => {
    if (!isCurrencyDialogOpen) {
      setIsCurrencyDialogOpen(true);
    }
    handleClose();
  };
  const columns = ['id', 'vendorType', 'view', 'status', 'actions'];
  return (
    <Body>
      <HeaderwithDialog
        title={'Notifications'}
        intlMessage="notification.addNotification"
      />

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
