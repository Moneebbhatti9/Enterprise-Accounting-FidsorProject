import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import Activity from './Payment';
import { accountData } from '@crema/fakedb/data';
import Payouts from './Payouts';

const EmailPreferences = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Activity payment={accountData.preferences.payment} />
      <Box
        sx={{
          mx: -5,
          px: 5,
          pt: 5,
          borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Payouts payouts={accountData.preferences.payouts} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
          }}
          color="primary"
          variant="contained"
          type="submit"
        >
          <IntlMessages id="common.saveChanges" />
        </Button>
        <Button
          sx={{
            position: 'relative',
            minWidth: 100,
            ml: 2.5,
          }}
          color="primary"
          variant="outlined"
        >
          <IntlMessages id="common.cancel" />
        </Button>
      </Box>
    </Box>
  );
};

export default EmailPreferences;
