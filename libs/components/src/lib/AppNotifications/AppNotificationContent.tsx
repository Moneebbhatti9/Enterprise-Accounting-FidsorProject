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
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AppScrollbar from '../AppScrollbar';
import IntlMessages from '@crema/helpers/IntlMessages';
import NotificationItem from './NotificationItem';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { SxProps } from '@mui/system';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {
  getAllUnreadNotifications,
  updateNotificationStatus,
} from '../../../../../libs/services/UnreadNotificationService/UnreadNotificationService';
import { AiOutlineBell } from 'react-icons/ai';
import styled from 'styled-components';

type AppNotificationContentProps = {
  onClose: () => void;
  sxStyle: SxProps<Theme>;
};

export interface NotificationCount {
  totalCount: number;
  data: Notification[];
}

export interface Notification {
  id: string;
  fromUserName: string;
  message: string;
  imageUrl?: string | null;
  status: string;
}

const CustomTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppNotificationContent: React.FC<AppNotificationContentProps> = ({
  onClose,
  sxStyle,
}) => {
  const [selectedNotification, setSelectedNotification] = useState<
    Notification | undefined
  >(undefined);
  const [notificationsData, setNotificationsData] = useState<
    NotificationCount | undefined
  >();

  const handleItemClick = async (notification: Notification) => {
    setSelectedNotification(notification);
  };

  const handleClosePopup = () => {
    setSelectedNotification(undefined);
  };

  const handleViewAllClick = () => {
    handleClosePopup();
  };

  async function fetchNotifications(): Promise<void> {
    try {
      const data = await getAllUnreadNotifications();

      setNotificationsData(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

  const markNotificationAsRead = async (id: string): Promise<void> => {
    try {
      const updatedMessages = (notificationsData?.data || []).map((message) => {
        if (message.id === id) {
          return {
            ...message,
            status: 'Read',
          };
        }
        return message;
      });

      await setNotificationsData((prevMessagesData) => ({
        ...(prevMessagesData as NotificationCount),
        messages: updatedMessages,
      }));

      await updateNotificationStatus(id);

      await fetchNotifications();
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
          <IntlMessages id="common.notifications" />
          {notificationsData && notificationsData.totalCount
            ? ` (${notificationsData.totalCount})`
            : ''}
        </Typography>
        <IconButton
          sx={{
            height: 40,
            width: 40,
            marginLeft: 'auto',
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
        {notificationsData?.data?.length === 0 ? (
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
              <AiOutlineBell fontSize={'70px'} color="#6b7280" />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                <IntlMessages id="messages.noNotification.Heading" />
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                <IntlMessages id="messages.noNotification.subHeading" />
              </Typography>
            </Stack>
          </Box>
        ) : (
          <List sx={{ py: 0 }}>
            {notificationsData?.data?.map((item) => (
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
                  markNotificationAsRead(item.id);
                }}
              >
                <NotificationItem item={item} />
              </ListItem>
            ))}
          </List>
        )}
      </AppScrollbar>
      {selectedNotification !== null && selectedNotification !== undefined && (
        <Dialog
          open={selectedNotification !== undefined}
          onClose={handleClosePopup}
          fullWidth
        >
          <CustomTitleBox sx={{ backgroundColor: '#313541', color: '#FFF' }}>
            <DialogTitle style={{ color: 'white' }}>Notifications</DialogTitle>
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
              key={selectedNotification?.id ?? ''}
            >
              <Avatar
                sx={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                }}
                src={selectedNotification?.imageUrl ?? ''}
                alt={selectedNotification?.fromUserName}
              />

              <Stack direction={'column'}>
                <Typography variant="h6" component="div">
                  {selectedNotification?.fromUserName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedNotification?.message}
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
            <Link to="/myprofile/notifications">
              <Button
                onClick={handleViewAllClick}
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
              >
                View All
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      )}
      <Link to="/myprofile/notifications">
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
        >
          <IntlMessages id="common.viewAll" />
        </Button>
      </Link>
    </Box>
  );
};

export default AppNotificationContent;
