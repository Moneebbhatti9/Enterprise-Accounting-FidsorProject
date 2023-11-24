import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DialogTitle, CustomTitleBox, CustomHR } from '../Styling';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import {
  deleteVendor,
  getAllVendors,
} from 'libs/services/VendorService/VendorService';
import { deleteEstimates } from 'libs/services/EstimateService/EstimateService';
import Snackbar from '@mui/material/Snackbar';
import { deleteInvoices } from 'libs/services/InvoiceService/InvoiceService';
import { deleteBills } from 'libs/services/BillsService/BillService';
import { deleteProductServices } from 'libs/services/PurchasesProductServices/ProductServices';
import { deleteEmployee } from 'libs/services/EmployeeService/EmployeeService';
import { deleteBusiness } from 'libs/services/BusinessService/BusinessService';
import {
  deleteAccount,
  archiveAccount,
} from 'libs/services/AccountsService/AccountsService';
import { useVendorContext } from '../../Purchases/Vendors/AllVendors/VendorContext';
interface DeliveryInstructionsModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  titleBackground: string;
  footerBg: string;
  yesColor: string;
  id: string;
  url: string;
  name: string;
}
const useStyles = makeStyles((theme) => ({
  smallLabel: {
    '@media (max-width: 399px)': {
      fontSize: '8px',
    },
    '@media (min-width: 400px) and (max-width: 510px)': {
      fontSize: '10px',
    },
  },
  closeButton: {
    '@media (max-width: 510px)': {
      marginRight: '10px',
    },
  },
}));
const Delete: React.FC<DeliveryInstructionsModalProps> = ({
  open,
  onClose,
  title,
  text,
  titleBackground,
  footerBg,
  yesColor,
  id,
  url,
  name,
}) => {
  const classes = useStyles();
  const [accountData, setAccountData] = useState([]);
  const { fetchAccounts } = useVendorContext();
  const [openn, setOpenn] = React.useState(false);
  const handleDelete = () => {
    if (name === 'Vendor') {
      handleDeleteVendor(id);
    } else if (name === 'Quotations') {
      handleDeleteQuotations(id);
    } else if (name === 'Invoices') {
      handleDeleteInvoices(id);
    } else if (name === 'Bills') {
      handleDeleteBills(id);
    } else if (name === 'Products & Services (Purchases)') {
      handleDeleteProductService(id);
    } else if (name === 'Employee') {
      handleDeleteEmployee(id);
    } else if (name === 'Businesses') {
      handleDeleteBusiness(id);
    } else if (name === 'All Account' && title !== 'Archive Account') {
      handleDeleteAccount(id);
    } else if (name === 'All Account' && title === 'Archive Account') {
      handleArchiveAccount(id);
    } else {
      onClose();
    }
  };
  const handleDeleteVendor = async (vendorId: string) => {
    try {
      await deleteVendor(vendorId);
      console.log('Vendor deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };
  const handleDeleteQuotations = async (estimateId: string) => {
    try {
      await deleteEstimates(estimateId);
      console.log('Quotation deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting quotation:', error);
    }
  };
  const handleDeleteInvoices = async (invoiceId: string) => {
    try {
      await deleteInvoices(invoiceId);
      console.log('Invoice deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  };
  const handleDeleteBills = async (billId: string) => {
    try {
      await deleteBills(billId);
      console.log('Bill deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting bill:', error);
    }
  };
  const handleDeleteProductService = async (productId: string) => {
    try {
      await deleteProductServices(productId);
      console.log('Product & Services deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting Product & Services:', error);
    }
  };
  const handleDeleteEmployee = async (employeeId: string) => {
    try {
      await deleteEmployee(employeeId);
      console.log('Employee deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  const handleDeleteBusiness = async (businessId: string) => {
    try {
      await deleteBusiness(businessId);
      console.log('Business deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting business:', error);
    }
  };
  const handleDeleteAccount = async (accountId: string) => {
    try {
      await deleteAccount(accountId);
      console.log('Account deleted successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };
  const handleArchiveAccount = async (accountId: string) => {
    try {
      await archiveAccount(accountId);
      console.log('Account archived successfully');
      setOpenn(true);
      window.location.reload();
    } catch (error) {
      console.error('Error archiving account:', error);
    }
  };
  const handleCancel = () => {
    onClose();
  };
  const handleClose = () => {
    setOpenn(false);
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <CustomTitleBox sx={{ background: titleBackground }}>
        <DialogTitle style={{ color: 'white' }}>{title}</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCancel}
          sx={{ mr: 6 }}
          className={classes.closeButton}
        >
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <Box sx={{ padding: '4% 2%' }}>
        <DialogContent>
          <Typography fontSize={'12px'}>{text}</Typography>
        </DialogContent>
      </Box>
      <CustomHR />
      <DialogActions sx={{ padding: '2%', background: footerBg }}>
        <Button
          onClick={handleDelete}
          variant="outlined"
          size="medium"
          sx={{
            textTransform: 'capitalize',
            marginTop: 'auto',
            fontSize: '12px',
            backgroundColor: yesColor,
            color: 'white',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
              borderColor: '#ccc',
            },
            borderColor: '#ccc',
          }}
        >
          Yes
        </Button>

        <Button
          onClick={onClose}
          color="primary"
          variant="outlined"
          size="medium"
          sx={{
            textTransform: 'capitalize',
            marginTop: 'auto',
            fontSize: '12px',
            color: 'black',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
              borderColor: '#ccc',
            },
            borderColor: '#ccc',
          }}
        >
          No
        </Button>
      </DialogActions>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={openn}
        onClose={handleClose}
        message="Record deleted successfully!"
      />
    </Dialog>
  );
};
export default Delete;
