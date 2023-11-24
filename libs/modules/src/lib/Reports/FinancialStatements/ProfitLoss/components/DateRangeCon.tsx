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
  ReportSelector,
  ButtonContainer,
} from '../styles/ProfitLossStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import IntlMessages from '@crema/helpers/IntlMessages';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { datePickerStyles } from '../../../../Accounting/Global/Styling';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 230,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const DateRangeCon = () => {
  const dateStyle = datePickerStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [year, setYear] = React.useState('');
  const [year1, setYear1] = React.useState('');
  const [year2, setYear2] = React.useState('');
  const [reportType, setReportType] = React.useState('');
  // const [date1Range2, setDate1Range2] = useState(null);
  // const [date2Range2, setDate2Range2] = useState(null);

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  const handleYear1Change = (event: SelectChangeEvent) => {
    setYear1(event.target.value as string);
  };
  const handleYear2Change = (event: SelectChangeEvent) => {
    setYear2(event.target.value as string);
  };
  const handleReportType = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
  };
  const [showAdditionalItem, setShowAdditionalItem] = useState(false);
  const handleClick = () => {
    console.log('Clicked');
    setShowAdditionalItem(true);
  };
  const handleDeleteClick = () => {
    console.log('Delete Clicked');
    setShowAdditionalItem(false);
  };

  return (
    <UpdateReport>
      <Grid container rowSpacing={2} columnSpacing={5}>
        <Grid item xs={12} sm={4}>
          {!showAdditionalItem ? (
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'start', sm: 'center' }}
              justifyContent={'space-between'}
            >
              <Box width={'30%'}>
                <Typography>
                  <IntlMessages id="reports.daterange" />
                </Typography>
              </Box>

              <FormControl sx={{ width: '65%' }}>
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
            </Stack>
          ) : (
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'start', sm: 'center' }}
              justifyContent={'space-between'}
            >
              <Box width={'30%'}>
                <Typography>
                  <IntlMessages id="reports.daterange1" />
                </Typography>
              </Box>
              <FormControl sx={{ width: '65%' }}>
                <YearSelector
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year1}
                  onChange={handleYear1Change}
                >
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                </YearSelector>
              </FormControl>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack
            direction={{ xs: 'row', sm: 'row' }}
            alignItems={{ xs: 'start', sm: 'center' }}
            justifyContent={'space-around'}
            width={'91%'}
            className={dateStyle.pickerInput}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </LocalizationProvider>
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
            <Button
              onClick={handleClick}
              sx={{ fontWeight: 'bold', paddingLeft: '0px' }}
            >
              <IntlMessages id="reports.compareperiod" />
            </Button>
          </Grid>
        )}
        {showAdditionalItem && (
          <>
            <Grid item xs={12} sm={4}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'start', sm: 'center' }}
                justifyContent={'space-between'}
              >
                <Box width={'30%'}>
                  <Typography>
                    <IntlMessages id="reports.daterange2" />
                  </Typography>
                </Box>

                <FormControl sx={{ width: '65%' }}>
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
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack
                direction={{ xs: 'row', sm: 'row' }}
                alignItems={{ xs: 'start', sm: 'center' }}
                justifyContent={'space-around'}
                className={dateStyle.pickerInput}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ backgroundColor: 'white', borderRadius: '8px' }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ backgroundColor: 'white', borderRadius: '8px' }}
                  />
                </LocalizationProvider>
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
        <Grid item xs={12} sm={4}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'start', sm: 'center' }}
            justifyContent={'space-between'}
          >
            <Stack direction="row" alignItems={'center'} width={'30%'}>
              <Typography>
                <IntlMessages id="reports.reporttype" />
              </Typography>
              <HtmlTooltip
                title={
                  <Stack direction={'column'} spacing={4} width={'100%'}>
                    <Box>
                      <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                        Accrual (Paid & Unpaid)
                      </Typography>
                      <Typography sx={{ fontSize: '12px' }}>
                        Reflects all transactions, including unpaid invoices and
                        bills.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                        Cash Basis (Paid)
                      </Typography>
                      <Typography sx={{ fontSize: '12px' }}>
                        Reflects all transactions except unpaid invoices and
                        bills.
                      </Typography>
                    </Box>
                  </Stack>
                }
              >
                <IconButton
                  color="primary"
                  aria-label="info"
                  sx={{ paddingTop: '11px' }}
                >
                  <HelpOutlineOutlinedIcon />
                </IconButton>
              </HtmlTooltip>
            </Stack>

            <FormControl sx={{ width: '65%' }}>
              <ReportSelector
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={reportType}
                onChange={handleReportType}
              >
                <MenuItem value={10}>
                  <IntlMessages id="reports.reporttypeitem1" />
                </MenuItem>
                <MenuItem value={20}>
                  <IntlMessages id="reports.reporttypeitem2" />
                </MenuItem>
              </ReportSelector>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </UpdateReport>
  );
};

export default DateRangeCon;
