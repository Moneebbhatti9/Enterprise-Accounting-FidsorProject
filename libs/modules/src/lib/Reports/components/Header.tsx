import React, { useState } from 'react';
import { Stack, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IntlMessageTypography from './IntlMessage';
import IntlMessages from '@crema/helpers/IntlMessages';

interface HeaderProps {
  redirectLink: string;
  messageId: string;
}

const Header: React.FC<HeaderProps> = ({ redirectLink, messageId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack
      direction={'row'}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mb={'10px'}
      pb={'5px'}
      style={{ borderBottom: '1px solid #ECF0F3' }}
    >
      <Link
        to={redirectLink}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={2}
          sx={{
            '&:hover': {
              color: '#0a8fdc',
            },
          }}
        >
          <ArrowBackIosNewOutlinedIcon
            fontSize="small"
            style={{ marginTop: '4px' }}
          />
          <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
            <IntlMessageTypography messageId={messageId} />
          </Typography>
        </Stack>
      </Link>
      <Stack direction={'row'} spacing={4} alignItems={'baseline'}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <IntlMessages id="reports.exportbuttoncsv" />
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <IntlMessages id="reports.exportbuttonpdf" />
          </MenuItem>
        </Menu>
        <Link
          to={redirectLink}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#0a8fdc';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'inherit';
          }}
        >
          <CloseIcon />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Header;
