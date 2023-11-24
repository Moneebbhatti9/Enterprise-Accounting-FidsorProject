import React from 'react';
import { alpha, Box, Button, Paper, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useDropzone } from 'react-dropzone';
import { Form } from 'formik';
import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BillingForm = () => {
  return (
    <div>
      <Form noValidate autoComplete="off">
        <Typography
          component="h3"
          sx={{
            fontSize: 16,
            fontWeight: Fonts.BOLD,
            mb: { xs: 3, lg: 4 },
          }}
        >
          <IntlMessages id="common.billing" />
        </Typography>
      </Form>
      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 5 },
        }}
      >
        <IntlMessages id="common.myCards" />
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            1<Typography>Marcus Morris</Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default BillingForm;
