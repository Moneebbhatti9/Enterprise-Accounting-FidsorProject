import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import { CustomHR, CustomTitleBox, DialogTitle } from '../customerStyling';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
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
interface DeleteProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CustomDialog({ isOpen, onClose }: DeleteProps) {
  const classes = useStyles();

  const handleCancel = () => {
    onClose();
  };

  // const { messages } = useIntl();
  return (
    <Dialog open={isOpen} onClose={handleCancel}>
      <CustomTitleBox>
        <DialogTitle> Delete</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          sx={{ mr: 6 }}
          className={classes.closeButton}
          onClick={handleCancel}
        >
          <CloseIcon />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <Box style={{ padding: '2%', marginRight: '10%' }}>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
      </Box>

      <CustomHR />
      <DialogActions sx={{ padding: '2%' }}>
        <Button
          color="primary"
          variant="outlined"
          size="medium"
          sx={{ borderRadius: '8px' }}
          onClick={handleCancel}
        >
          No
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{ minWidth: '78px', borderRadius: '8px' }}
          onClick={handleCancel}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
