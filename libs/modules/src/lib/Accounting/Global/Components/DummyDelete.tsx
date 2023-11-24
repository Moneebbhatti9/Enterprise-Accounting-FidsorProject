import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface DummyDeleteProps {
  open: boolean;
  onClose: () => void;
}

const DummyDelete: React.FC<DummyDeleteProps> = ({ open, onClose }) => {
  useEffect(() => {}, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle sx={{ backgroundColor: '#0A8FDC', color: '#FFF' }}>
        gfhfgh
      </DialogTitle>
      <DialogContent>fghfghfh</DialogContent>
      <DialogActions sx={{ padding: '2%' }}>
        <Link to="comingsoon">
          <Button variant="contained">View All</Button>
        </Link>
        <IconButton edge="end" color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};
export default DummyDelete;
