import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button, Stack, Link } from '@mui/material';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { getAllBusinesses } from '../../../../../../services/BusinessService/BusinessService';
import { useState, useEffect } from 'react';
import { string } from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px;
`;

const truncateText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) {
    return text;
  } else {
    const truncatedText = text?.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
      return truncatedText + '...';
    } else {
      return truncatedText.slice(0, lastSpaceIndex) + '...';
    }
  }
};

export default function AppLogo() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [switchBusiness, setSwitchBusiness] = React.useState(false); // Track switch business action
  const [selectedBusiness, setSelectedBusiness] = React.useState<string | null>(
    null
  ); // Track selected business
  const open = Boolean(anchorEl);
  const [businessData, setBusinessData] = useState<
    { id: number; name: string }[]
  >([]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSwitchBusiness(false);
  };

  const handleBusinessSettings = () => {
    navigate('/settings');
    handleClose();
  };

  const handleSwitchBusiness = () => {
    setSwitchBusiness(true);
  };

  const handleSwitchBack = () => {
    setSwitchBusiness(false);
  };

  const handleCreateNewBusiness = () => {
    navigate('/settings/businesses/add');
    handleClose();
  };

  const handleBusinessItemClick = (
    businessName: string,
    businessId: number
  ) => {
    setSelectedBusiness(businessName);
    handleClose();
    localStorage.setItem(
      'selectedBusiness',
      JSON.stringify({ name: businessName, id: businessId })
    );

    window.location.reload();
  };

  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const data = await getAllBusinesses();
        console.log(data);

        if (Array.isArray(data) && data.length > 0) {
          const storedBusiness = localStorage.getItem('selectedBusiness');
          if (storedBusiness) {
            const { name, id } = JSON.parse(storedBusiness);
            setSelectedBusiness(name);
          } else {
            setSelectedBusiness(data[0].name);
            localStorage.setItem(
              'selectedBusiness',
              JSON.stringify({ name: data[0].name, id: data[0].id })
            );
          }

          setBusinessData(data);
        } else {
          console.log('No business data found.');
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    }

    fetchBusinesses();
  }, []);

  return (
    <>
      <Box
        sx={{
          py: 3,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        className="user-info-view"
      >
        <Button
          onClick={handleClick}
          size="small"
          sx={{
            width: '100%',
            background: '#313541',
            fontSize: '12px',
            color: '#ffffff',
            borderRadius: '10px',
            paddingRight: '9px',
            paddingLeft: '9px',
            '&:hover': {
              color: '#111827',
              background: 'rgb(244, 247, 254)',
            },
          }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={'100%'}
          >
            <Stack direction="row" alignItems={'center'}>
              <DomainOutlinedIcon
                className="icon"
                // sx={{
                //   marginRight: { sm: '5px', xl: '20px' },
                //   marginLeft: { sm: '5px', xl: '20px' },
                // }}
              />
              <Typography
                fontSize={'14px'}
                sx={{
                  marginRight: { sm: '5px', xl: '25px' },
                  marginLeft: { sm: '5px', xl: '25px' },
                }}
              >
                {truncateText(selectedBusiness || '', 12)}
              </Typography>
            </Stack>
            <ExpandMoreOutlinedIcon />
          </Stack>
        </Button>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {switchBusiness ? (
          // Render new menu items when switchBusiness is true
          <>
            <Container>
              <Link
                color="#111827"
                underline="none"
                onClick={handleSwitchBack}
                sx={{ display: 'flex', alignItems: 'center' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#0a8fdc';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'inherit';
                }}
              >
                <ArrowBackOutlinedIcon style={{ marginRight: '5px' }} />
                <Typography fontSize="12px">
                  <IntlMessages id="business.switchBackBusiness" />
                </Typography>
              </Link>
            </Container>
            <Divider />
            <Box>
              {/* Map over the fetched business data */}
              {businessData.map((business) => (
                <MenuItem
                  key={business.id} // Use a unique key for each MenuItem
                  onClick={() =>
                    handleBusinessItemClick(business.name, business.id)
                  }
                  sx={{
                    backgroundColor:
                      selectedBusiness === business.name
                        ? '#e6f3ff'
                        : 'inherit',
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    width="100%"
                  >
                    <Typography
                      fontSize="12px"
                      sx={{ marginLeft: '21px', marginRight: '21px' }}
                    >
                      {business.name}
                    </Typography>
                    {selectedBusiness === business.name && (
                      <CheckOutlinedIcon sx={{ color: 'green' }} />
                    )}
                  </Stack>
                </MenuItem>
              ))}
            </Box>
            <Divider />
          </>
        ) : (
          // Render default menu items
          <>
            {/* Business Information */}
            <Stack
              direction={'row'}
              marginTop="14px"
              marginBottom="14px"
              marginRight="8px"
              marginLeft="8px"
              alignItems={'center'}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                  marginLeft: '8px',
                  borderRadius: '50%',
                  width: 30,
                  height: 30,
                  color: 'rgba(255, 255, 255, 0.7)',
                  backgroundColor: '#313541',
                  border: 1,
                  borderColor: 'transparent',
                }}
              >
                <DomainOutlinedIcon
                  className="icon"
                  style={{ fontSize: '16px' }}
                />
              </div>

              <Stack direction={'column'}>
                <Typography gutterBottom variant="h5" fontSize="16px">
                  {selectedBusiness}
                </Typography>
              </Stack>
            </Stack>
            <Divider />
            <Box>
              <MenuItem onClick={handleBusinessSettings}>
                <Typography
                  fontSize="12px"
                  sx={{ marginLeft: '30px', marginRight: '30px' }}
                >
                  <IntlMessages id="business.businessSetting" />
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleSwitchBusiness}>
                <Typography
                  fontSize="12px"
                  sx={{ marginLeft: '30px', marginRight: '30px' }}
                >
                  <IntlMessages id="business.switchBusiness" />
                </Typography>
              </MenuItem>
            </Box>
          </>
        )}
        {switchBusiness ? (
          <Box>
            <MenuItem onClick={handleCreateNewBusiness}>
              <Typography fontSize="12px">
                <IntlMessages id="business.businessSetting" />
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography fontSize="12px">
                <IntlMessages id="business.switchBusiness" />
              </Typography>
            </MenuItem>
          </Box>
        ) : null}
      </Menu>
    </>
  );
}
