import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import {
  Box,
  TextField,
  Button,
  Typography,
  alpha,
  MenuItem,
  Select,
  Grid,
} from '@mui/material';
import axios from 'axios';
import { AvatarBox, AvatarStyle, FullNameBox } from './ProfileStyledComponent';
import { useDropzone } from 'react-dropzone';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const countries = [
  { id: 1, name: 'Country 1' },
  { id: 2, name: 'Country 2' },
  { id: 3, name: 'Country 3' },
  // Add more countries here with id and name
];
const languages = [
  { id: 1, name: 'Language 1' },
  { id: 2, name: 'Language 2' },
  { id: 3, name: 'Language 3' },
  // Add more countries here with id and name
];
const timezones = [
  { id: 1, name: 'Time Zone 1' },
  { id: 2, name: 'Time Zone 2' },
  { id: 3, name: 'Time Zone 3' },
  // Add more countries here with id and name
];
const currencies = [
  { id: 1, name: 'Currency 1' },
  { id: 2, name: 'Currency 2' },
  { id: 3, name: 'Currency 3' },
  // Add more countries here with id and name
];
interface UserData {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  //dob: Date;
  webSite: string;
  company: string;
  country: string;
  language: string;
  timeZone: string;
  currency: string;
  description: string;
  profileImage: string;
  // Add other fields with their types here
}

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

const PersonalInfo = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setImageFile(acceptedFiles[0]);
    },
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'https://admin.accountsdash.com/api/User/account',
          {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userResponse: UserData = response.data;
        setUserData(userResponse);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: 550,
      }}
    >
      {userData ? (
        <Formik
          initialValues={userData}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) =>
            handleFormSubmit(values, imageFile, setSubmitting)
          }
        >
          {({ values, setFieldValue }) => (
            <Form>
              <AvatarBox>
                <AvatarViewWrapper {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <label htmlFor="icon-button-file">
                    <AvatarStyle src={values.profileImage} />
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
              <Grid container spacing={2} sx={{ mb: 4 }} alignItems={'center'}>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="fullName"
                    fullWidth
                    label="Full Name"
                    value={values.fullName}
                    onChange={(e) => setFieldValue('fullName', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="email"
                    fullWidth
                    label="Email"
                    value={values.email}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="phoneNumber"
                    fullWidth
                    label="Phone Number"
                    value={values.phoneNumber}
                    onChange={(e) =>
                      setFieldValue('phoneNumber', e.target.value)
                    }
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
                    <DatePicker label="Date of Birth" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="webSite"
                    fullWidth
                    label="Website"
                    value={values.webSite}
                    onChange={(e) => setFieldValue('webSite', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="company"
                    fullWidth
                    label="Company"
                    value={values.company}
                    onChange={(e) => setFieldValue('company', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    name="country"
                    value={values.country}
                    onChange={(e) => setFieldValue('country', e.target.value)}
                  >
                    <MenuItem key={0} disabled>
                      Please Select a Country
                    </MenuItem>
                    {countries.map((country) => (
                      <MenuItem key={country.id} value={country.name}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    name="language"
                    value={values.language}
                    onChange={(e) => setFieldValue('language', e.target.value)}
                  >
                    <MenuItem key={0} disabled>
                      Please Select a Language
                    </MenuItem>
                    {languages.map((language) => (
                      <MenuItem key={language.id} value={language.name}>
                        {language.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    name="timeZone"
                    value={values.timeZone}
                    onChange={(e) => setFieldValue('timeZone', e.target.value)}
                  >
                    <MenuItem key={0} disabled>
                      Please Select a Time Zone
                    </MenuItem>
                    {timezones.map((timezone) => (
                      <MenuItem key={timezone.id} value={timezone.name}>
                        {timezone.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    name="currency"
                    value={values.currency}
                    onChange={(e) => setFieldValue('currency', e.target.value)}
                  >
                    <MenuItem key={0} disabled>
                      Please Select a Currency
                    </MenuItem>
                    {currencies.map((currency) => (
                      <MenuItem key={currency.id} value={currency.name}>
                        {currency.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Description"
                    value={'Description'}
                    multiline
                    rows={4}
                    // label={<IntlMessages id="common.phoneNumber" />}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => {
                    const selectedFile = e.target.files && e.target.files[0];
                    if (selectedFile) {
                      setImageFile(selectedFile);
                    }
                  }}
                />
              </Grid>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      ) : (
        <div>Loading user data...</div>
      )}
    </Box>
  );
};

const handleFormSubmit = (
  data: UserData,
  imageFile: File | null,
  setSubmitting: (isSubmitting: boolean) => void
) => {
  setSubmitting(true);

  const formData = new FormData();
  if (imageFile) {
    formData.append('ProfileImage', imageFile);
  }
  formData.append('Id', data.id);
  formData.append('Username', data.email);
  formData.append('Email', data.email);
  formData.append('PhoneNumber', data.phoneNumber);
  //formData.append('BirthDay', data.dob.toISOString());
  formData.append('Website', data.webSite);
  // formData.append('Company', data.company);
  // formData.append('Country', data.country);
  formData.append('FullName', data.fullName);
  formData.append('Language', data.language);
  formData.append('TimeZone', data.timeZone);
  formData.append('Currency', data.currency);
  // formData.append('Description', data.description);

  // Append other form fields to formData
  // eslint-disable-next-line no-debugger
  debugger;

  const token = localStorage.getItem('token');
  axios
    .put('https://admin.accountsdash.com/api/User/account', formData, {
      headers: {
        accept: '*/*',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log('User data updated:', response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.error('Error updating user data:', error.response.data);
      } else {
        console.error('Network error:', error.message);
      }
    })
    .finally(() => {
      setSubmitting(false);
    });
};

export default PersonalInfo;
