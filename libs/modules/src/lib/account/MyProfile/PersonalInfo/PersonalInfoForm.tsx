import React from 'react';
import { alpha, Autocomplete, Box, TextField, Typography } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useDropzone } from 'react-dropzone';
import { Form } from 'formik';
import AppTextField from '@crema/components/AppTextField';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';
import { DatePicker } from '@mui/x-date-pickers';
import { countries } from '@crema/fakedb/data';
import { CountryType } from '@crema/models/account/countries';
import { useIntl } from 'react-intl';
import {
  AvatarBox,
  AvatarStyle,
  FormCheckBox,
  FullNameBox,
  ProfileHeading,
} from './ProfileStyledComponent';
import { SaveButtonBox, SaveButton } from './../ChangePassword/StyledComponent';

const languages = [
  { language: 'English' },
  { language: 'Catalan' },
  { language: 'Arabic' },
  { language: 'Pashto' },
  { language: 'Albanian' },
  { language: 'Armenian' },
  { language: 'Portuguese' },
  { language: 'Various' },
  { language: 'Spanish' },
  { language: 'German' },
  { language: 'Dutch' },
  { language: 'Swedish' },
  { language: 'Azerbaijani' },
  { language: 'Serbian' },
  { language: 'Bengali' },
  { language: 'French' },
  { language: 'Bulgarian' },
  { language: 'Arabic' },
  { language: 'French' },
  { language: 'French' },
  { language: 'Malay' },
  { language: 'Spanish, Quechua' },
  { language: 'Portuguese' },
  { language: 'English' },
  { language: 'Dzongkha' },
  { language: 'Uninhabited' },
  { language: 'Setswana' },
  { language: 'French' },
  { language: 'Niuean' },
  { language: 'Maori' },
  { language: 'Arabic' },
  { language: 'Spanish' },
];

const timezones = [
  {
    timezone: 'Pacific/Pago_Pago',
    offset: '-11:00',
    label: '(GMT-11:00) Pacific/Pago_Pago',
  },
  {
    timezone: 'Pacific/Midway',
    offset: '-11:00',
    label: '(GMT-11:00) Pacific/Midway',
  },
  {
    timezone: 'Pacific/Honolulu',
    offset: '-10:00',
    label: '(GMT-10:00) Pacific/Honolulu',
  },
  {
    timezone: 'America/Juneau',
    offset: '-09:00',
    label: '(GMT-09:00) America/Juneau',
  },
  {
    timezone: 'America/Los_Angeles',
    offset: '-08:00',
    label: '(GMT-08:00) America/Los_Angeles',
  },
  {
    timezone: 'America/Denver',
    offset: '-07:00',
    label: '(GMT-07:00) America/Denver',
  },
  {
    timezone: 'America/Phoenix',
    offset: '-07:00',
    label: '(GMT-07:00) America/Phoenix',
  },
  {
    timezone: 'America/Chicago',
    offset: '-06:00',
    label: '(GMT-06:00) America/Chicago',
  },
  {
    timezone: 'America/New_York',
    offset: '-05:00',
    label: '(GMT-05:00) America/New_York',
  },
];

const currencies = [
  {
    code: 'USD',
    name: 'United States Dollar',
  },
  {
    code: 'EUR',
    name: 'Euro',
  },
  {
    code: 'GBP',
    name: 'British Pound Sterling',
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar',
  },
  {
    code: 'AUD',
    name: 'Australian Dollar',
  },
  {
    code: 'CHF',
    name: 'Swiss Franc',
  },
  {
    code: 'CNY',
    name: 'Chinese Yuan',
  },
  {
    code: 'INR',
    name: 'Indian Rupee',
  },
  {
    code: 'RUB',
    name: 'Russian Ruble',
  },
];

const AvatarViewWrapper = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    cursor: 'pointer',
    '& .edit-icon': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 1,
      border: `solid 2px ${theme.palette.background.paper}`,
      backgroundColor: alpha(theme.palette.primary.main, 0.7),
      color: theme.palette.primary.contrastText,
      borderRadius: '50%',
      width: 26,
      height: 26,
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },
    '&.dropzone': {
      outline: 0,
      '&:hover .edit-icon, &:focus .edit-icon': {
        display: 'flex',
      },
    },
  };
});

type PersonalInfoFormProps = {
  setFieldValue: (field: string, data: any) => void;
  values: any;
};

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  values,
  setFieldValue,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue('photoURL', URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const { messages } = useIntl();
  return (
    <Form noValidate autoComplete="off">
      <ProfileHeading>
        <IntlMessages id="common.personalInfo" />
      </ProfileHeading>
      <AvatarBox>
        <AvatarViewWrapper {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <label htmlFor="icon-button-file">
            <AvatarStyle src={values.photoURL} />
            <Box className="edit-icon">
              <EditIcon />
            </Box>
          </label>
        </AvatarViewWrapper>
        <FullNameBox>
          <Typography
            sx={{
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {values.fullName}
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {values.email}
          </Typography>
        </FullNameBox>
      </AvatarBox>
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={6}>
          <AppTextField
            name="fullName"
            fullWidth
            label={<IntlMessages id="common.fullName" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppTextField
            name="email"
            fullWidth
            label={<IntlMessages id="common.email" />}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppTextField
            fullWidth
            name="phone"
            label={<IntlMessages id="common.phoneNumber" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              '& .MuiTextField-root': {
                width: '100%',
              },
            }}
          >
            <DatePicker
              label={<IntlMessages id="common.birthDate" />}
              value={values.dob}
              onChange={(newValue) => {
                setFieldValue('dob', newValue);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <AppTextField
            fullWidth
            name="company_name"
            label={<IntlMessages id="common.company" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppTextField
            name="website"
            fullWidth
            label={<IntlMessages id="common.website" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            id="country-select-demo"
            fullWidth
            options={countries}
            autoHighlight
            onChange={(_, newValue) => {
              setFieldValue('country', newValue);
            }}
            getOptionLabel={(option: CountryType) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<IntlMessages id="common.country" />}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            id="language-select"
            fullWidth
            options={languages}
            autoHighlight
            value={values.language}
            onChange={(_, newValue) => {
              setFieldValue('language', newValue);
            }}
            getOptionLabel={(option) => option.language}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<IntlMessages id="common.language" />}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Autocomplete
            id="timezone-select-demo"
            fullWidth
            options={timezones}
            autoHighlight
            onChange={(_, newValue) => {
              setFieldValue('timezone', newValue);
            }}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<IntlMessages id="common.timezone" />}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            id="currency-select-demo"
            fullWidth
            options={currencies}
            autoHighlight
            defaultValue={values.currency}
            onChange={(_, newValue) => {
              setFieldValue('currency', newValue);
            }}
            getOptionLabel={(option) => option.code}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<IntlMessages id="common.currency" />}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <AppTextField
            multiline
            name="bio"
            rows={3}
            fullWidth
            label={<IntlMessages id="common.yourBioDataHere" />}
          />
        </Grid>
        <Grid item xs={12} md={6} container alignItems="center">
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            <span id="communication">
              <IntlMessages id="common.communication" />
              <span style={{ color: 'red' }}>*</span>
            </span>
          </Typography>
          <FormCheckBox ml={2}>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Email"
              />
              <FormControlLabel control={<Checkbox />} label="Phone" />
            </FormGroup>
          </FormCheckBox>
        </Grid>

        <Grid item xs={12} md={12}>
          <SaveButtonBox>
            <SaveButton color="primary" variant="contained" type="submit">
              <IntlMessages id="common.saveChanges" />
            </SaveButton>
          </SaveButtonBox>
        </Grid>
      </AppGridContainer>
    </Form>
  );
};

export default PersonalInfoForm;
