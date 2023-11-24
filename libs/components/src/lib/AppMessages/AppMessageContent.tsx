import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import MessageItem from './MessageItem';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AppScrollbar from '../AppScrollbar';
import IntlMessages from '@crema/helpers/IntlMessages';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { SxProps } from '@mui/system';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {
  getAllUnreadMessages,
  updateMessageStatus,
} from '../../../../../libs/services/UnreadMessageService/UnreadMessageService';
import { BiChat } from 'react-icons/bi';
import styled from 'styled-components';

type AppMessageContentProps = {
  onClose: () => void;
  sxStyle: SxProps<Theme>;
};

export type MessageCount = {
  totalCount: number;
  data: Message[];
};

type Message = {
  id: string;
  message: string;
  fromUserName: string;
  imageUrl?: string | null;
  status: string;
};

const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppMessageContent: React.FC<AppMessageContentProps> = ({
  onClose,
  sxStyle,
}) => {
  const [selectedMessage, setSelectedMessage] = useState<Message | undefined>(
    undefined
  );
  const [messagesData, setMessagesData] = useState<MessageCount | undefined>();

  const handleItemClick = async (message: Message) => {
    setSelectedMessage(message);
  };

  const handleClosePopup = () => {
    setSelectedMessage(undefined);
  };

  const handleViewAllClick = () => {
    handleClosePopup();
  };

  async function fetchMessages(): Promise<void> {
    try {
      const data = await getAllUnreadMessages();

      setMessagesData(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  const markMessageAsRead = async (id: string): Promise<void> => {
    try {
      const updatedMessages = (messagesData?.data || []).map((message) => {
        if (message.id === id) {
          return {
            ...message,
            status: 'Read',
          };
        }
        return message;
      });

      await setMessagesData((prevMessagesData) => ({
        ...(prevMessagesData as MessageCount),
        messages: updatedMessages,
      }));

      await updateMessageStatus(id);

      await fetchMessages();
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 280,
        height: '100%',
        ...sxStyle,
      }}
    >
      <Box
        sx={{
          padding: '5px 20px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: 1,
          borderBottomColor: (theme) => theme.palette.divider,
          minHeight: { xs: 56, sm: 70 },
        }}
      >
        <Typography component="h3">
          <IntlMessages id="dashboard.messages" />
          {messagesData && messagesData.totalCount
            ? ` (${messagesData.totalCount})`
            : ''}
        </Typography>
        <IconButton
          sx={{
            height: 40,
            width: 40,
            ml: 'auto',
            color: 'text.secondary',
          }}
          onClick={onClose}
          size="large"
        >
          <CancelOutlinedIcon />
        </IconButton>
      </Box>
      <AppScrollbar
        sx={{
          height: { xs: 'calc(100% - 96px)', sm: 'calc(100% - 110px)' },
          position: 'relative',
        }}
      >
        {messagesData?.data?.length === 0 ? (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
            }}
          >
            <Stack
              direction={'column'}
              width={'100%'}
              spacing={4}
              alignItems={'center'}
              padding={'5px'}
            >
              <BiChat fontSize={'70px'} color="#6b7280" />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                <IntlMessages id="messages.noMessages.Heading" />
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                <IntlMessages id="messages.noMessages.subHeading" />
              </Typography>
            </Stack>
          </Box>
        ) : (
          <List sx={{ py: 0 }}>
            {messagesData?.data.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => {
                  handleItemClick(item);
                  markMessageAsRead(item.id);
                }}
              >
                <MessageItem item={item} />
              </ListItem>
            ))}
          </List>
        )}
      </AppScrollbar>
      {selectedMessage !== null && selectedMessage !== undefined && (
        <Dialog
          open={selectedMessage !== undefined}
          onClose={handleClosePopup}
          fullWidth
        >
          <CustomTitleBox sx={{ backgroundColor: '#0A8FDC', color: '#FFF' }}>
            <DialogTitle style={{ color: 'white' }}>Messages</DialogTitle>
            <IconButton
              edge="end"
              color="inherit"
              sx={{ mr: 6 }}
              onClick={onClose}
            >
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
            <Stack
              direction={'row'}
              spacing={2}
              alignItems={'center'}
              key={selectedMessage?.id ?? ''}
            >
              <Avatar
                sx={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                }}
                src={selectedMessage?.imageUrl || 'placeholder.jpg'}
                alt={selectedMessage?.fromUserName}
              />
              <Stack direction={'column'}>
                <Typography variant="h6" component="div">
                  {selectedMessage.fromUserName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedMessage?.message}
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
            <Link to="/myprofile/messages">
              <Button
                onClick={handleViewAllClick}
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
              >
                View All
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      )}
      <Link to="/myprofile/messages">
        <Button
          sx={{
            borderRadius: 0,
            width: '100%',
            textTransform: 'capitalize',
            marginTop: 'auto',
            height: 40,
            fontSize: '12px',
            backgroundColor: '#313541',
            '&:hover': {
              backgroundColor: '#f1f1f1',
              color: '#313541',
            },
          }}
          variant="contained"
          onClick={handleClosePopup}
        >
          <IntlMessages id="common.viewAll" />
        </Button>
      </Link>
    </Box>
  );
};
export default AppMessageContent;
