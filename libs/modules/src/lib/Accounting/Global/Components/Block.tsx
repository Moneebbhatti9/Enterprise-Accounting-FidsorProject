import React from 'react';
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
import { useIntl } from 'react-intl';
import { useState } from 'react';
import { updateVendors } from 'libs/services/VendorService/VendorService';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';

interface DeliveryInstructionsModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
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
const Block: React.FC<DeliveryInstructionsModalProps> = ({
  open,
  onClose,
  title,
  id,
  text,
  url,
  name,
}) => {
  const classes = useStyles();
  const { messages } = useIntl();
  const [isDeleteSuccessful, setDeleteSuccessful] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const handleDelete = () => {
    try {
      infoViewActionsContext.showMessage(
        messages['error.comingSoonNotification'] as string
      );
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };
  const handleDeleteVendor = async (vendorId: string) => {
    try {
      infoViewActionsContext.showMessage(
        messages['error.comingSoonNotification'] as string
      );
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };
  const handleCancel = () => {
    onClose();
  };
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const fetchUpdatedData = async () => {
    try {
      const updatedData = await updateVendors(id);
    } catch (error) {
      console.error('Error fetching updated data:', error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <CustomTitleBox sx={{ background: '#0A8FDC' }}>
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
      <DialogActions sx={{ padding: '2%', background: 'white' }}>
        <Button
          onClick={handleDelete}
          variant="outlined"
          size="medium"
          sx={{
            textTransform: 'capitalize',
            marginTop: 'auto',
            fontSize: '12px',
            backgroundColor: '#0A8FDC',
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
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Record deleted successfully!
        </MuiAlert>
      </Snackbar>
    </Dialog>
  );
};
export default Block;
