import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  DialogTitle,
  CustomTitleBox,
  CustomHR,
} from '../../../../Accounting/Accounts/chartsOfAccounts/Components/StyledComponents';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { useIntl } from 'react-intl';

interface DeliveryInstructionsModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  titleBackground: string;
  footerBg: string;
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

const DeliveryInstructionsModal: React.FC<DeliveryInstructionsModalProps> = ({
  open,
  onClose,
  title,
  text,
  titleBackground,
  footerBg,
}) => {
  const classes = useStyles();
  const { messages } = useIntl();
  const handleCancel = () => {
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <CustomTitleBox sx={{ background: titleBackground }}>
        <DialogTitle>{title}</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCancel}
          sx={{ mr: 6 }}
          className={classes.closeButton}
        >
          <CloseIcon />
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
          onClick={onClose}
          color="primary"
          variant="outlined"
          size="medium"
          sx={{ borderRadius: '8px', background: '#fff' }}
        >
          {messages['COA.Cancel'] as string}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeliveryInstructionsModal;
