import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';
import Checkbox from '@mui/material/Checkbox';

const DeactivateAccount = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 5 },
        }}
      >
        <IntlMessages id="common.deactivateAccount" />
      </Typography>
      <AppGridContainer spacing={4}>
        <Box
          sx={{
            width: 800,
            height: 100,
            backgroundColor: '#fff9c4',
            borderRadius: '10px',
            marginLeft: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: '20px',
          }}
        >
          <InfoRoundedIcon sx={{ fontSize: 60, color: '#fff176' }} />

          <Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: 16,
                fontWeight: Fonts.BOLD,
                mb: { xs: 3, lg: 5 },
              }}
            >
              You Are Deactivating Your Account
            </Typography>
            For extra security, this requires you to confirm your email or phone
            number when you reset your password.
            <a href="#">Learn more</a>
          </Typography>
        </Box>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              mt: 2,
            }}
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Typography>
              <IntlMessages id="text.deactivatecheck" />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end', // Add this line to align the button to the right
            }}
          >
            <Button
              sx={{
                position: 'relative',
                minWidth: 100,
              }}
              color="error"
              variant="contained"
              type="submit"
            >
              <IntlMessages id="common.deactivateAccount" />
            </Button>
          </Box>
        </Grid>
      </AppGridContainer>
    </div>
  );
};

export default DeactivateAccount;
