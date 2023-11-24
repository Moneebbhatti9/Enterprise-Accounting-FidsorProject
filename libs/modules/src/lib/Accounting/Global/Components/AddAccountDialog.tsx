import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
interface YourDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddAccountDialog: React.FC<YourDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <p>Dialog Content Here</p>
      </DialogContent>
    </Dialog>
  );
};

export default AddAccountDialog;
