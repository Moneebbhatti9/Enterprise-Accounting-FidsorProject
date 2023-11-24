import React, { useEffect, useState } from 'react';
import { IconButton, Theme } from '@mui/material';
import AppTooltip from '../AppTooltip';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Drawer from '@mui/material/Drawer';
import AppMessageContent from './AppMessageContent';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import Badge from '@mui/material/Badge';
import { MessageCount } from './AppMessageContent';
import { getAllUnreadMessages } from 'libs/services/UnreadMessageService/UnreadMessageService';
import IntlMessages from '@crema/helpers/IntlMessages';

type AppMessagesProps = {
  sxMessageContentStyle?: SxProps<Theme>;
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
};

const AppMessages: React.FC<AppMessagesProps> = ({
  drawerPosition = 'right',
  tooltipPosition = 'bottom',
  isMenu = false,
  sxMessageContentStyle = {},
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [messagesData, setMessagesData] = useState<MessageCount | undefined>();

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

  const badgeContent =
    messagesData?.totalCount !== undefined && messagesData.totalCount > 0
      ? messagesData.totalCount > 99
        ? '99+'
        : messagesData.totalCount.toString()
      : null;

  return (
    <>
      {isMenu ? (
        <Box component="span" onClick={() => setShowMessage(true)}>
          <IntlMessages id="common.messages" />
        </Box>
      ) : (
        <AppTooltip title="common.messages" placement={tooltipPosition}>
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
                onClick={() => setShowMessage(true)}
                size="large"
              >
                <EmailOutlinedIcon className="icon" sx={{ fontSize: '16px' }} />
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
              onClick={() => setShowMessage(true)}
              size="large"
            >
              <EmailOutlinedIcon className="icon" sx={{ fontSize: '16px' }} />
            </IconButton>
          )}
        </AppTooltip>
      )}

      <Drawer
        anchor={drawerPosition}
        open={showMessage}
        onClose={() => {
          setShowMessage(false);
          fetchMessages();
        }}
      >
        <AppMessageContent
          sxStyle={sxMessageContentStyle}
          onClose={() => setShowMessage(false)}
        />
      </Drawer>
    </>
  );
};

export default AppMessages;
