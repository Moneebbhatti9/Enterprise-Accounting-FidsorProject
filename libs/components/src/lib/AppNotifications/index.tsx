import React, { useEffect, useState } from 'react';
import { IconButton, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppNotificationContent from './AppNotificationContent';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppTooltip from '../AppTooltip';
import { alpha } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Badge from '@mui/material/Badge';
import { NotificationCount } from './AppNotificationContent';
import { getAllUnreadNotifications } from 'libs/services/UnreadNotificationService/UnreadNotificationService';
import IntlMessages from '@crema/helpers/IntlMessages';

type AppNotificationsProps = {
  drawerPosition?: 'left' | 'top' | 'right' | 'bottom';
  tooltipPosition?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  isMenu?: boolean;
  sxNotificationContentStyle?: SxProps<Theme>;
};

const AppNotifications: React.FC<AppNotificationsProps> = ({
  drawerPosition = 'right',
  tooltipPosition = 'bottom',
  isMenu = false,
  sxNotificationContentStyle = {},
}) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationsData, setNotificationsData] = useState<
    NotificationCount | undefined
  >();

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

  // Conditionally render the badge based on totalCount
  const badgeContent =
    notificationsData?.totalCount !== undefined &&
    notificationsData.totalCount > 0
      ? notificationsData.totalCount > 99
        ? '99+'
        : notificationsData.totalCount.toString()
      : null;

  return (
    <>
      {isMenu ? (
        <Box component="span" onClick={() => setShowNotification(true)}>
          <IntlMessages id="eCommerce.notifications" />
        </Box>
      ) : (
        <AppTooltip title="eCommerce.notifications" placement={tooltipPosition}>
          {badgeContent ? (
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent={badgeContent}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#fb4f67',
                },
              }}
            >
              <IconButton
                className="icon-btn"
                sx={{
                  borderRadius: '50%',
                  width: 30,
                  height: 30,
                  color: 'rgba(255, 255, 255, 0.7)',
                  backgroundColor: '#313541',
                  border: 1,
                  borderColor: 'transparent',
                  '&:hover, &:focus': {
                    color: (theme) => theme.palette.text.primary,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.background.default, 0.9),
                    borderColor: (theme) =>
                      alpha(theme.palette.text.secondary, 0.25),
                  },
                }}
                onClick={() => setShowNotification(true)}
                size="large"
              >
                <NotificationsNoneIcon sx={{ fontSize: '16px' }} />
              </IconButton>
            </Badge>
          ) : (
            <IconButton
              className="icon-btn"
              sx={{
                borderRadius: '50%',
                width: 30,
                height: 30,
                color: 'rgba(255, 255, 255, 0.7)',
                backgroundColor: '#313541',
                border: 1,
                borderColor: 'transparent',
                '&:hover, &:focus': {
                  color: (theme) => theme.palette.text.primary,
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.default, 0.9),
                  borderColor: (theme) =>
                    alpha(theme.palette.text.secondary, 0.25),
                },
              }}
              onClick={() => setShowNotification(true)}
              size="large"
            >
              <NotificationsNoneIcon sx={{ fontSize: '16px' }} />
            </IconButton>
          )}
        </AppTooltip>
      )}

      <Drawer
        anchor={drawerPosition}
        open={showNotification}
        onClose={() => {
          setShowNotification(false);
          fetchNotifications();
        }}
      >
        <AppNotificationContent
          sxStyle={sxNotificationContentStyle}
          onClose={() => setShowNotification(false)}
        />
      </Drawer>
    </>
  );
};

export default AppNotifications;
