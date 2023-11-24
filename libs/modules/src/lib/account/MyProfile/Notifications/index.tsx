import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import NotificationDialog from './components/NotificationDialog';
import NotificationTable from './components/NotificationDataTable';
import { getAllNotifications } from '../../../../../../services/NotificationService/NotificationService';
import { AiOutlineBell } from 'react-icons/ai';
import IntlMessages from '@crema/helpers/IntlMessages';

export interface AnchorElMap {
  [key: string]: HTMLElement | null;
}

export interface Notification {
  id: string;
  fromUserName: string;
  message: string;
  imageUrl?: string | null;
  status: string;
}

export type NotificationCount = {
  totalCount: number;
  data: Notification[];
};

const Notifications: React.FC = () => {
  const [anchorElMap, setAnchorElMap] = useState<AnchorElMap>({});
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [notificationsData, setNotificationsData] = useState<
    NotificationCount | undefined
  >();

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    notificationId: string
  ) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [notificationId]: event.currentTarget,
    }));
  };

  const handleMenuClose = (notificationId: string) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [notificationId]: null,
    }));
  };

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const data = await getAllNotifications();

        setNotificationsData(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }

    fetchNotifications();
  }, []);

  const isMenuOpen = (notificationId: string) =>
    Boolean(anchorElMap[notificationId]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleRowClick = (notificationId: string) => {
  //   setSelectedNotificationId(notificationId);
  //   setOpenPopup(true);
  //   handleMenuClose(notificationId);
  // };
  const handleRowClick = (messageId: string) => {
    const message = notificationsData?.data.find(
      (message) => message.id === messageId
    );
    if (message) {
      setSelectedNotification(message);
      setOpenPopup(true);
      handleMenuClose(messageId);
    }
  };

  const handleClosePopup = () => {
    setSelectedNotification(null);
    setOpenPopup(false);
  };

  const handleSearchChange = (searchText: string) => {
    setSearchText(searchText);
  };

  const filteredNotifications = notificationsData?.data.filter((notification) =>
    notification.fromUserName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Typography fontSize={'18px'} fontWeight={'bold'} mb={'2%'}>
        Notifications
      </Typography>
      {notificationsData?.data.length === 0 ? (
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
        <NotificationTable
          notificationData={notificationsData?.data as Notification[]}
          searchText={searchText}
          onSearchChange={handleSearchChange}
          onSelectNotification={handleRowClick}
          anchorElMap={anchorElMap}
          isMenuOpen={isMenuOpen}
          handleMenuClick={handleMenuClick}
          handleMenuClose={handleMenuClose}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
      {selectedNotification !== null && (
        <NotificationDialog
          open={openPopup}
          onClose={handleClosePopup}
          selectedNotification={selectedNotification}
          notifications={filteredNotifications as Notification[]}
        />
      )}
    </Box>
  );
};

export default Notifications;
