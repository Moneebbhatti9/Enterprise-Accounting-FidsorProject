import { useEffect } from 'react';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams, useNavigate } from 'react-router-dom';
import AppAnimate from '@crema/components/AppAnimate';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';
import { Link } from 'react-router-dom';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';

const ActivationEmail = () => {
  const navigate = useNavigate();
  const { key } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://admin.accountsdash.com/api/Authentication/verify?key=${key}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data);
          navigate('/signin');
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (key) {
      fetchData();
    }
  }, [key]);

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box
        sx={{
          pb: 6,
          py: { xl: 8 },
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            maxWidth: 576,
            width: '100%',
            textAlign: 'center',
            padding: { xs: 8, lg: 12, xl: '48px 64px' },
            overflow: 'hidden',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{ mb: { xs: 8, xl: 10 } }}>
            <Box
              sx={{
                mb: { xs: 3, xl: 4 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  '.logo': {
                    height: 24,
                  },
                }}
              >
                <img
                  className="logo"
                  src={'/assets/images/digiturnal.png'}
                  alt="EnterpriseConnect"
                  title="EnterpriseConnect"
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              />
              <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
            </Box>
            <Typography
              sx={{
                pt: 3,
                fontSize: 20,
                color: 'grey.500',
              }}
            >
              <span style={{ marginRight: 4 }}>
                Congratulations your account created successfully.
              </span>
            </Typography>
            <br></br>
            <Box
              component="span"
              sx={{
                fontWeight: Fonts.MEDIUM,
                '& a': {
                  color: (theme) => theme.palette.primary.main,
                  textDecoration: 'none',
                },
                fontSize: 20,
              }}
            >
              <Link to="/signIn">
                <IntlMessages id="common.signIn" />
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default ActivationEmail;
