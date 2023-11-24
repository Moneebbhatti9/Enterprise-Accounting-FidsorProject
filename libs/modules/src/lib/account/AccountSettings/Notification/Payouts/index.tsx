import React from 'react';
import { Box, Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { PayoutsType } from '@crema/models/account';

type ActivityProps = {
  payouts: PayoutsType[];
};

const Payouts: React.FC<ActivityProps> = ({ payouts }) => {
  return (
    <Box sx={{ mb: { xs: 5, lg: 6 } }}>
      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 4 },
        }}
      >
        <IntlMessages id="extraPages.payouts" />
      </Typography>

      {payouts.map((data, index) => (
        <Box key={index} sx={{ mb: 1.5 }}>
          <FormControlLabel control={<Switch />} label={data.title} />
        </Box>
      ))}
    </Box>
  );
};

export default Payouts;
