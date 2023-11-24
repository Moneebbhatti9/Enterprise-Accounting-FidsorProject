import React, { useState } from 'react';
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
  ButtonContainer,
} from '../styles/CashFlowStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import IntlMessages from '@crema/helpers/IntlMessages';
import { datePickerStyles } from '../../../../Accounting/Global/Styling';

const DateRangeCon = () => {
  const dateStyle = datePickerStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [year, setYear] = React.useState('');
  const [year1, setYear1] = React.useState('');
  const [year2, setYear2] = React.useState('');
  const [date1Range2, setDate1Range2] = useState(null);
  const [date2Range2, setDate2Range2] = useState(null);

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  // const handleYear1Change = (event: SelectChangeEvent) => {
  //   setYear1(event.target.value as string);
  // };
  const handleYear2Change = (event: SelectChangeEvent) => {
    setYear2(event.target.value as string);
  };
  const handleDeleteClick = () => {
    console.log('Delete Clicked');
    setShowAdditionalItem(false);
  };
  const [showAdditionalItem, setShowAdditionalItem] = useState(false);
  const handleClick = () => {
    console.log('Clicked');
    setShowAdditionalItem(true);
  };

  return (
    <UpdateReport>
      <Grid container rowSpacing={2} columnSpacing={5}>
        <Grid item xs={12} sm={4}>
          <Stack
            spacing={8}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'start', sm: 'center' }}
          >
            <Typography>
              <IntlMessages id="reports.daterange" />
            </Typography>
            <Box sx={{ width: { xs: '93%', sm: '60%' } }}>
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
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack
            spacing={2}
            direction={{ xs: 'row', sm: 'row' }}
            alignItems={{ xs: 'start', sm: 'center' }}
          >
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
        </Grid>
        <Grid item xs={12} sm={4} sx={{ order: isSmallScreen ? 3 : 0 }}>
          <ButtonContainer>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: isSmallScreen ? 2 : 0 }}
            >
              <IntlMessages id="reports.updatereport" />
            </Button>
          </ButtonContainer>
        </Grid>
        {!showAdditionalItem && (
          <Grid item xs={12} sm={12}>
            <Button onClick={handleClick} sx={{ fontWeight: 'bold' }}>
              <IntlMessages id="reports.compareperiod" />
            </Button>
          </Grid>
        )}
        {showAdditionalItem && (
          <>
            <Grid item xs={12} sm={4}>
              <Stack
                spacing={6}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'start', sm: 'center' }}
              >
                <Typography>
                  <IntlMessages id="reports.daterange2" />
                </Typography>

                <Box sx={{ width: { xs: '93%', sm: '60%' } }}>
                  <FormControl fullWidth>
                    <YearSelector
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={year2}
                      onChange={handleYear2Change}
                    >
                      <MenuItem value="2021">2021</MenuItem>
                      <MenuItem value="2022">2022</MenuItem>
                      <MenuItem value="2023">2023</MenuItem>
                    </YearSelector>
                  </FormControl>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack
                spacing={2}
                direction={{ xs: 'row', sm: 'row' }}
                alignItems="center"
              >
                <DatePickerContainer className={dateStyle.pickerInput}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date1Range2}
                      onChange={(newDate) => setDate1Range2(newDate)}
                    />
                  </LocalizationProvider>
                </DatePickerContainer>
                <DatePickerContainer className={dateStyle.pickerInput}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date2Range2}
                      onChange={(newDate) => setDate2Range2(newDate)}
                    />
                  </LocalizationProvider>
                </DatePickerContainer>
                <IconButton
                  onClick={handleDeleteClick}
                  color="primary"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item></Grid>
          </>
        )}
      </Grid>
    </UpdateReport>
  );
};

export default DateRangeCon;
