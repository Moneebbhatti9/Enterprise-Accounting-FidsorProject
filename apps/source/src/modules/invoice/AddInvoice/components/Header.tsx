import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

interface HeaderProps {
  redirectLink: string;
}

const Header: React.FC<HeaderProps> = ({ redirectLink }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
            Create Invoice
          </Typography>
        </Stack>
      </Link>
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
  );
};

export default Header;
