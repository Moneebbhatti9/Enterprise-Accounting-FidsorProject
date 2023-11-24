import React from 'react';
import {
  Grid,
  Button,
  MenuItem,
  Typography,
  useMediaQuery,
  Stack,
  Box,
  IconButton,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import {
  UpdateReport,
  YearSelector,
  DatePickerContainer,
  ReportSelector,
  ButtonContainer,
} from '../styles/AccountTransactionStyles';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { datePickerStyles } from '../../../../Accounting/Global/Styling';

const DateRangeCon = () => {
  const dateStyle = datePickerStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [year, setYear] = React.useState('');
  const [reportType, setReportType] = React.useState('');
  const [accountType, setAccountType] = React.useState('');
  const [contactType, setContactType] = React.useState('');

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  const handleReportType = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
  };
  const handleAccountType = (event: SelectChangeEvent) => {
    setAccountType(event.target.value as string);
  };
  const handleContactType = (event: SelectChangeEvent) => {
    setContactType(event.target.value as string);
  };

  return (
    <UpdateReport>
      <Grid container rowSpacing={2} columnSpacing={5}>
        <Grid item xs={12} sm={4}>
          <Stack spacing={2} direction="column" alignItems="start">
            <Typography>Account</Typography>
            <Box sx={{ width: { xs: '93%', sm: '100%' } }}>
              <FormControl fullWidth>
                <ReportSelector
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={accountType}
                  onChange={handleAccountType}
                >
                  <MenuItem value={10}>Account Type A</MenuItem>
                  <MenuItem value={20}>Account Type B</MenuItem>
                </ReportSelector>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Stack spacing={2} direction="column" alignItems="start">
            <Typography>Date Range</Typography>
            <Stack spacing={2} direction="row">
              <FormControl fullWidth>
                <YearSelector
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  onChange={handleYearChange}
                >
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                </YearSelector>
              </FormControl>
              <DatePickerContainer className={dateStyle.pickerInput}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </DatePickerContainer>
              <DatePickerContainer className={dateStyle.pickerInput}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </DatePickerContainer>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Stack spacing={2} direction="column" alignItems="start">
            <Stack direction="row" alignItems={'center'}>
              <Typography>Report Type</Typography>
              <IconButton
                color="primary"
                aria-label="info"
                sx={{ paddingTop: '11px' }}
              >
                <HelpOutlineOutlinedIcon />
              </IconButton>
            </Stack>

            <Box sx={{ width: { xs: '93%', sm: '100%' } }}>
              <FormControl fullWidth>
                <ReportSelector
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={reportType}
                  onChange={handleReportType}
                >
                  <MenuItem value={10}>Accrual (Paid & Unpaid)</MenuItem>
                  <MenuItem value={20}>Cash Basis (Paid)</MenuItem>
                </ReportSelector>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack spacing={2} direction="column" alignItems="start">
            <Typography
              sx={{
                marginTop: '8px !important',
                marginBottom: '8px !important',
              }}
            >
              Contacts
            </Typography>
            <Box sx={{ width: { xs: '93%', sm: '100%' } }}>
              <FormControl fullWidth>
                <ReportSelector
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={contactType}
                  onChange={handleContactType}
                >
                  <MenuItem value={10}>Contact Type A</MenuItem>
                  <MenuItem value={20}>Contact Type B</MenuItem>
                </ReportSelector>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ButtonContainer>
            <Button variant="contained" size="large">
              Update Report
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </UpdateReport>
  );
};

export default DateRangeCon;
