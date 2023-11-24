import React from 'react';
import {
  Grid,
  Button,
  MenuItem,
  Typography,
  useMediaQuery,
  Stack,
  Box,
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
} from '../styles/IncomeByCustomerStyles';
import { datePickerStyles } from '../../../../Accounting/Global/Styling';

const DateRangeCon = () => {
  const dateStyle = datePickerStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [year, setYear] = React.useState('');

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
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
            <Typography>Date Range</Typography>
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
              Update Report
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </UpdateReport>
  );
};

export default DateRangeCon;
