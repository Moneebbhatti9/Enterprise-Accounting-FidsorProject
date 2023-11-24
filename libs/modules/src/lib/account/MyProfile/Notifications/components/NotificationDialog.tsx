import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Stack,
  Box,
  Avatar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { Notification } from '../index';

interface NotificationDialogProps {
  open: boolean;
  onClose: () => void;
  selectedNotification: Notification | null;
  notifications: Notification[];
}

const NotificationDialog: React.FC<NotificationDialogProps> = ({
  open,
  onClose,
  selectedNotification,
  notifications,
}) => {
  if (!selectedNotification) {
    return null;
  }

  const CustomTitleBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <CustomTitleBox sx={{ backgroundColor: '#313541', color: '#FFF' }}>
        <DialogTitle style={{ color: 'white' }}>Notifications</DialogTitle>
        <IconButton edge="end" color="inherit" sx={{ mr: 6 }} onClick={onClose}>
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
      </CustomTitleBox>
      <hr
        style={{
          height: '1px',
          border: 'none',
          backgroundColor: '#ccc',
          width: '100%',
        }}
      />
      <DialogContent>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Avatar
            sx={{
              width: '45px',
              height: '45px',
              fontSize: '1rem',
              borderRadius: '50%',
            }}
            src={selectedNotification.imageUrl || 'placeholder.jpg'}
            alt={selectedNotification.fromUserName}
          />

          <Stack direction={'column'}>
            <Typography variant="h6" component="div">
              {selectedNotification.fromUserName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedNotification.message}
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
      <hr
        style={{
          height: '1px',
          border: 'none',
          backgroundColor: '#ccc',
          width: '100%',
        }}
      />
      <DialogActions sx={{ padding: '2%' }}>
        <Button
          variant="contained"
          sx={{
            textTransform: 'capitalize',
            marginTop: 'auto',
            fontSize: '12px',
            backgroundColor: '#313541',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
            },
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotificationDialog;
