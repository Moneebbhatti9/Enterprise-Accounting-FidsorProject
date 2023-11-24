import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppLngSwitcher from '../../../AppLngSwitcher';
import Box from '@mui/material/Box';
import AppSearchBar from '../../../AppSearchBar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppMessages from '../../../AppMessages';
import AppNotifications from '../../../AppNotifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppTooltip from '../../../AppTooltip';
import { alpha } from '@mui/material/styles';
import AppLogo from '../../components/AppLogo';
import Avatar from '@mui/material/Avatar';
import orange from '@mui/material/colors/orange';
import { useNavigate } from 'react-router-dom';
import { useAuthMethod, useAuthUser } from '@crema/hooks/AuthHooks';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Stack, Typography } from '@mui/material';
import { useSidebarContext } from '@crema/context/SidebarContextProvider';
import { Fonts } from '@crema/constants/AppEnums';
import CustomizedMenus from './Button';
import IntlMessages from '@crema/helpers/IntlMessages';

type Props = {
  toggleNavCollapsed: () => void;
};

const AppHeader = ({ toggleNavCollapsed }: Props) => {
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };
  const { sidebarTextColor } = useSidebarContext();
  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{
        boxShadow: 'none',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
        transition: 'width 0.5s ease',
        width: '100%',
      }}
      className="app-bar"
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: { xs: 56, sm: 70 },
          paddingLeft: { xs: 5 },
          paddingRight: { xs: 5, md: 7.5, xl: 12.5 },
        }}
      >
        <Hidden lgDown>
          <IconButton
            sx={{
              color: 'text.secondary',
            }}
            edge="start"
            className="menu-btn"
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleNavCollapsed()}
            size="large"
          >
            <MenuIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            sx={{
              color: 'text.secondary',
            }}
            edge="start"
            className="menu-btn"
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleNavCollapsed()}
            size="large"
          >
            <MenuIcon
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
        </Hidden>
        <Box
          sx={{
            '& .logo-text': {
              display: { xs: 'none', sm: 'block' },
            },
          }}
        >
          {/* <AppLogo /> */}
          <CustomizedMenus />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
          }}
        />
        <Box
          sx={{
            minHeight: 40,
            position: 'relative',
            '& .searchRoot': {
              position: { xs: 'absolute', sm: 'relative' },
              right: { xs: 0, sm: 'auto' },
              top: { xs: 0, sm: 'auto' },
            },
          }}
        >
          {/* <AppSearchBar iconPosition="right" placeholder="Search…" /> */}
        </Box>

        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
          <Hidden smDown>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AppNotifications />
            </Box>
          </Hidden>
          <Hidden smDown>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AppMessages />
            </Box>
          </Hidden>

          <Hidden smUp>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AppTooltip title="More">
                <IconButton
                  sx={{
                    borderRadius: '50%',
                    width: 30,
                    height: 30,
                    color: (theme) => theme.palette.text.secondary,
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
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
                  onClick={handleClick}
                  size="large"
                >
                  <MoreVertIcon />
                </IconButton>
              </AppTooltip>
            </Box>
          </Hidden>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>
              <AppNotifications isMenu />
            </MenuItem>
            <MenuItem>
              <AppMessages isMenu />
            </MenuItem>
          </Menu>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              onClick={handleAvatarClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              className="user-info-view"
            >
              <Box sx={{ py: 0.5 }}>
                {user.photoURL ? (
                  <Avatar
                    sx={{
                      height: 30,
                      width: 30,
                      fontSize: 16,
                      backgroundColor: orange[500],
                    }}
                    src={user.photoURL}
                  />
                ) : (
                  <Avatar
                    sx={{
                      height: 30,
                      width: 30,
                      fontSize: 16,
                      backgroundColor: orange[500],
                    }}
                  >
                    {getUserAvatar()}
                  </Avatar>
                )}
              </Box>
              {/* <Box
                sx={{
                  width: { xs: 'calc(100% - 62px)', xl: 'calc(100% - 72px)' },
                  ml: 4,
                  // color: color,
                }}
                className="user-info"
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      mb: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      fontSize: 16,
                      // fontWeight: Fonts.MEDIUM,
                      color: 'inherit',
                    }}
                    component="span"
                  >
                    {user.fullName ? user.fullName : 'Admin User '}
                  </Box>
                  <Box
                    sx={{
                      ml: 3,
                      color: 'inherit',
                      display: 'flex',
                    }}
                  >
                    <ExpandMoreIcon />
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: -0.5,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: 'inherit',
                  }}
                ></Box>
              </Box> */}
            </Box>
          </Box>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Stack
              direction="row"
              sx={{
                // backgroundColor: (theme) =>
                //   alpha(theme.palette.common.black, 0.08),
                px: 6,
                py: 3,
              }}
            >
              <Box
                sx={{
                  mr: 3.5,
                }}
              >
                {user.photoURL ? (
                  <Avatar
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                    src={user.photoURL}
                  />
                ) : (
                  <Avatar
                    sx={{
                      height: 40,
                      width: 40,
                      fontSize: 20,
                      backgroundColor: orange[500],
                    }}
                  >
                    {getUserAvatar()}
                  </Avatar>
                )}
              </Box>

              <Box>
                <Box
                  sx={{
                    mb: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 14,
                    fontWeight: Fonts.MEDIUM,
                  }}
                  component="span"
                >
                  {user.fullName ? user.fullName : 'Admin User '}
                </Box>
                <Box
                  sx={{
                    mt: -0.5,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 12,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  System Manager
                </Box>
              </Box>
            </Stack>
            <Divider />
            {/* <Stack
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
                <Typography
                  component="h3"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 16,
                    fontWeight: Fonts.MEDIUM,
                    marginBottom: 0.5,
                    display: 'flex',
                  }}
                >
                  {user.fullName ? user.fullName : 'Admin User '}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    fontSize: 16,
                    fontWeight: Fonts.MEDIUM,
                    marginBottom: 0.5,
                    display: 'flex',
                  }}
                >
                  {user.email ? user.email : 'demo@crema-react.com '}
                </Typography>
              </Stack>
            </Stack> */}
            <MenuItem
              onClick={() => {
                handleClose();
                navigate('/myprofile');
              }}
            >
              <IntlMessages id="appBar.myProfile" />
            </MenuItem>
            {/* <MenuItem
              onClick={() => {
                handleClose();
                navigate('/accountsettings');
              }}
            >
              Account Settings
            </MenuItem> */}
            <MenuItem
              onClick={() => {
                handleClose();
                navigate('/mysubscription');
              }}
            >
              <IntlMessages id="appBar.mySubscription" />
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout} sx={{ color: 'red' }}>
              <IntlMessages id="common.signout" />
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
