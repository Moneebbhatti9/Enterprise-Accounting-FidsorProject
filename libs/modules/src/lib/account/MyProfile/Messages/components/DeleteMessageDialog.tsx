import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CustomHR = styled.hr`
  height: 1px;
  border: none;
  background-color: #ccc;
  width: 100%;
`;

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <CustomTitleBox sx={{ background: '#a52a2a' }}>
        <DialogTitle style={{ color: 'white' }}>Delete Message</DialogTitle>
        <IconButton edge="end" color="inherit" sx={{ mr: 6 }} onClick={onClose}>
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <Box sx={{ padding: '4% 2%' }}>
        <DialogContent>
          <Typography fontSize={'12px'}>
            Are you sure you want to delete this item?
          </Typography>
        </DialogContent>
      </Box>
      <CustomHR />
      <DialogActions sx={{ padding: '2%' }}>
        <Button
          onClick={onClose}
          variant="outlined"
          size="medium"
          sx={{
            textTransform: 'capitalize',
            marginTop: 'auto',
            fontSize: '12px',
            backgroundColor: 'brown',
            color: 'white',
            borderColor: '#ccc',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
              borderColor: '#ccc',
            },
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
            backgroundColor: '#FFF',
            color: 'black',
            borderColor: '#ccc',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
              borderColor: '#ccc',
            },
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
