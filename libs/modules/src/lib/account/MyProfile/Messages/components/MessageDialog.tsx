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
import { Message } from '../index';

interface MessageDialogProps {
  open: boolean;
  onClose: () => void;
  selectedMessage: Message | null;
  messages: Message[];
}

const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageDialog: React.FC<MessageDialogProps> = ({
  open,
  onClose,
  selectedMessage,
  messages,
}) => {
  if (!selectedMessage) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <CustomTitleBox sx={{ backgroundColor: '#0A8FDC', color: '#FFF' }}>
        <DialogTitle style={{ color: 'white' }}>Messages</DialogTitle>
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
            src={selectedMessage.imageUrl || 'placeholder.jpg'}
            alt={selectedMessage.fromUserName}
          />
          <Stack direction={'column'}>
            <Typography variant="h6" component="div">
              {selectedMessage.fromUserName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedMessage.message}
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
            backgroundColor: '#0A8FDC',
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

export default MessageDialog;
