import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Message } from '../index';
import { Avatar } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography, IconButton, Stack, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

interface SendMessageDialogProps {
  open: boolean;
  onClose: () => void;
  recipients: Message[]; // Add recipients prop
}

const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SendMessageDialog: React.FC<SendMessageDialogProps> = ({
  open,
  onClose,
  recipients,
}) => {
  const [message, setMessage] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState<Message | null>(
    null
  );

  const handleClose = () => {
    setMessage('');
    setSelectedRecipient(null);
    onClose();
  };

  const handleSendMessage = () => {
    if (selectedRecipient) {
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <CustomTitleBox sx={{ backgroundColor: '#0A8FDC', color: '#FFF' }}>
        <DialogTitle style={{ color: 'white' }}>Send Message</DialogTitle>
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
        <Autocomplete
          options={recipients}
          getOptionLabel={(recipient) => recipient.fromUserName}
          value={selectedRecipient}
          onChange={(event, newValue) => setSelectedRecipient(newValue)}
          filterOptions={(options, state) => {
            const inputValue = state.inputValue.toLowerCase();

            return options.filter((option) =>
              option.fromUserName.toLowerCase().includes(inputValue)
            );
          }}
          renderInput={(params) => (
            <Stack>
              <Typography fontSize={'12px'} mb={1}>
                Select User
              </Typography>
              <TextField {...params} fullWidth variant="outlined" />
            </Stack>
          )}
          renderOption={(props, option) => (
            <li {...props}>
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  sx={{
                    width: '24px',
                    height: '24px',
                    marginRight: '8px',
                    borderRadius: '50%',
                    fontSize: '1rem',
                  }}
                  src={option.imageUrl || 'placeholder.jpg'}
                  alt={option.fromUserName}
                />
                <Typography fontSize={'12px'}>{option.fromUserName}</Typography>
              </Box>
            </li>
          )}
        />

        <Stack marginTop={'10px'}>
          <Typography fontSize={'12px'} mb={1}>
            Message
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
          />
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
            borderColor: '#ccc',

            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
              borderColor: '#ccc',
            },
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: 'capitalize',
            marginTop: 'auto',
            fontSize: '12px',
            backgroundColor: '#0A8FDC',
            borderColor: '#ccc',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
              borderColor: '#ccc',
            },
          }}
          onClick={onClose}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SendMessageDialog;
