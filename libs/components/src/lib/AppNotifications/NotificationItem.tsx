import React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, ListItem, Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';

const NotificationItem: React.FC<any> = ({ item }) => {
  const truncateMessage = (message: string, maxLength: number) => {
    if (message.length <= maxLength) {
      return message;
    }
    const truncated = message.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return lastSpaceIndex === -1
      ? truncated
      : truncated.substring(0, lastSpaceIndex) + '...';
  };

  const truncatedMessage = truncateMessage(item.message, 45);

  return (
    <ListItem
      sx={{
        padding: '0px 0px',
      }}
      className="item-hover"
    >
      <ListItemAvatar
        sx={{
          minWidth: 0,
          mr: 4,
        }}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
          }}
          alt="Remy Sharp"
          src={item.imageUrl ?? ''}
        />
      </ListItemAvatar>
      <Box
        sx={{
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        <Typography sx={{ fontSize: '12px' }}>
          <Box
            component="span"
            sx={{
              fontWeight: Fonts.MEDIUM,
              color: (theme) => theme.palette.text.primary,
              display: 'inline-block',
            }}
          >
            {item.fromUserName}
          </Box>
          <Typography sx={{ fontSize: '12px' }}>{truncatedMessage}</Typography>
        </Typography>
      </Box>
    </ListItem>
  );
};

export default NotificationItem;
