import React from 'react';
import { Button } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import ProfileConnection from './ProfileConnection';
import { Form } from 'formik';
import AppTextField from '@crema/components/AppTextField';
import { MemberType } from '@crema/models/account';

type SocialFormProps = {
  social: MemberType[];
};

const ConnectedAccountForm: React.FC<SocialFormProps> = ({ social }) => {
  return (
    <Form autoComplete="off">
      <AppGridContainer spacing={4}>
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: 550,
            }}
          >
            <AppGridContainer spacing={4}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  name="facebook"
                  fullWidth
                  label={<IntlMessages id="common.facebook" />}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  name="google"
                  fullWidth
                  label={<IntlMessages id="common.google" />}
                />
              </Grid>
            </AppGridContainer>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              mx: -5,
              mt: 3,
              px: 5,
              pt: 5,
              borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
            }}
          >
            <ProfileConnection profileConnection={social} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
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
        </Grid>
      </AppGridContainer>
    </Form>
  );
};

export default ConnectedAccountForm;
