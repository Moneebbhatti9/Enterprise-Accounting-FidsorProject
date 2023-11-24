import React from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Form } from 'formik';
import AppTextField from '@crema/components/AppTextField';
import { CustomAsterik } from '../../../Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';

const ContactUsForm = () => {
  return (
    <Form autoComplete="off">
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1">
            <IntlMessages id="common.fullName" />
            <CustomAsterik>*</CustomAsterik>
          </Typography>
          <AppTextField name="fullName" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1">
            <IntlMessages id="common.email" />
            <CustomAsterik>*</CustomAsterik>
          </Typography>
          <AppTextField name="email" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1">
            <IntlMessages id="common.messageHere" />
            <CustomAsterik>*</CustomAsterik>
          </Typography>
          <AppTextField
            fullWidth
            multiline
            name="message"
            rows="3"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            sx={{
              position: 'relative',
              minWidth: 100,
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            <IntlMessages id="common.submit" />
          </Button>
        </Grid>
      </AppGridContainer>
    </Form>
  );
};

export default ContactUsForm;
