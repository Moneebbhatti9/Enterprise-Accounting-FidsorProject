import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DialogTitle, CustomTitleBox, CustomHR } from '../../../Global/Styling';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
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
  fetchData: (value: boolean) => void;
  deleteRecord: (value: boolean) => void;
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
  fetchData,
  deleteRecord
}) => {
  const classes = useStyles();
  const [openn, setOpenn] = React.useState(false);
  const handleDelete = () => {
    fetchData(true);
    deleteRecord(true);
      onClose();
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
