// DialogComponent.js

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';import Button from '@mui/material/Button';
import React from 'react';
interface DialogProps {
    open: boolean;
    onClose: () => void;
  }
  
  const MergeTranasaction: React.FC<DialogProps> = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="dialog">
     
     
      <Dialog open={open} onClose={handleClose} style={{ fontSize: '12px' }}>
        <DialogTitle style={{ fontSize: '12px' }}>Merge Item</DialogTitle>
        <DialogContent style={{ fontSize: '12px' }}>
          <DialogContentText style={{ fontSize: '12px' }}>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ fontSize: '12px' }}>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ fontSize: '12px' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            style={{ fontSize: '12px' }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MergeTranasaction;
