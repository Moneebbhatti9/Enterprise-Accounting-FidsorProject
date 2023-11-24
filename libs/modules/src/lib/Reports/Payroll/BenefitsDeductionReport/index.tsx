import { useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { Body, DatePickerContainer } from './styles/BenefitsDeductionStyle';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const BenefitsDeductionReport = () => {
  const [customDateRangeSelected, setCustomDateRangeSelected] = useState(false);

  const handlePeriodChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as number;
    setCustomDateRangeSelected(selectedValue === 6);
  };

  return (
    <Body>
      <Stack
        direction={'row'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={'10px'}
      >
        <Link
          to="/reports/payroll"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={2}
            sx={{
              '&:hover': {
                color: '#0a8fdc',
              },
            }}
          >
            <ArrowBackIosNewOutlinedIcon
              fontSize="small"
              style={{ marginTop: '4px' }}
            />
            <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>
              Payroll Benefits and Deduction Report
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Box width="30%">
        <Box>
          <Typography variant="subtitle1">
            See benefit and deduction details for all employees. Use this report
            with Wage & Tax Report to reconcile employee wage and tax ammounts.
          </Typography>
        </Box>
        <Stack mt="25px" direction="column" spacing={3}>
          <Typography variant="h3" fontWeight="bold" fontSize="17 px">
            Get Report
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: '#818589' }}
          >
            Period (based on payday dates)
          </Typography>
          <Box width="90%">
            <FormControl fullWidth>
              <Select
                defaultValue=""
                id="grouped-select"
                onChange={handlePeriodChange as any}
              >
                <ListSubheader>By Quarter</ListSubheader>
                <MenuItem value={1}>
                  Current Quarter (July - September)
                </MenuItem>
                <MenuItem value={2}>Q2 2023 (April - June)</MenuItem>
                <MenuItem value={3}>Q2 2023 (April - June)</MenuItem>
                <ListSubheader>By Year</ListSubheader>
                <MenuItem value={4}>Current Year</MenuItem>
                <MenuItem value={5}>Previous Year</MenuItem>
                <ListSubheader>Date Range</ListSubheader>
                <MenuItem value={6}>Custom Date Range</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {customDateRangeSelected && (
            <>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ color: '#818589' }}
              >
                Date Range
                <span style={{ color: '#f50057' }}>*</span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <DatePickerContainer>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </DatePickerContainer>
                <DatePickerContainer>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </DatePickerContainer>
              </Stack>
            </>
          )}
          <Typography variant="caption">
            Report creation may take a few seconds, Your download will start
            automatically when the report is ready.
          </Typography>
          <Box>
            <Button variant="contained">Generate and download pdf</Button>
          </Box>
        </Stack>
      </Box>
    </Body>
  );
};

export default BenefitsDeductionReport;
