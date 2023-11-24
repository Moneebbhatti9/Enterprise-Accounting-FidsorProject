import { Grid, Button, Typography, useMediaQuery, Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles';
import {
  UpdateReport,
  DatePickerContainer,
  ButtonContainer,
} from '../styles/AgedPayablesStyles';
import { datePickerStyles } from '../../../../Accounting/Global/Styling';

const DateRangeCon = () => {
  const dateStyle = datePickerStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <UpdateReport>
      <Grid container rowSpacing={2} columnSpacing={5}>
        <Grid item xs={12} sm={4}>
          <Stack
            spacing={8}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'start', sm: 'center' }}
          >
            <Typography>As of</Typography>
            <DatePickerContainer className={dateStyle.pickerInput}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </DatePickerContainer>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
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
