import React, { useState, useRef } from 'react';
import {
  Grid,
  Button,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import {
  Body,
  TopBar,
  ExportDropDown,
  UpdateReport,
  URGridItem1,
  URGridItem2,
  URGridItem3,
  YearDateRow,
  YearSelector,
  YearSelectorContainer,
  DatePickerContainer,
  ReportContainer,
  ReportSelector,
  ButtonContainer,
} from './styles/TrialBalanceStyles';
import UnstyledTabsIntroduction from './components/TrialBalanceGrid';
import Header from '../../components/Header';
import { datePickerStyles } from '../../../Accounting/Global/Styling';

const TrialBalance: React.FC = () => {
  const dateStyle = datePickerStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleMenuClose = () => {
    setOpen(false);
  };
  const [year, setYear] = React.useState('');
  const [reportType, setReportType] = React.useState('');

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  const handleReportType = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
  };

  return (
    <Body>
      <Header
        redirectLink="/reports/detailed-reporting"
        messageId="reports.detailedreporting.trialbalance"
      />
      <TopBar>
        <Menu
          id="dropdown-menu"
          anchorEl={anchorRef.current}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ExportDropDown>
            <MenuItem onClick={handleMenuClose}>CSV</MenuItem>
            <MenuItem onClick={handleMenuClose}>PDF</MenuItem>
          </ExportDropDown>
        </Menu>
      </TopBar>
      <UpdateReport>
        <Grid container columnSpacing={10} rowSpacing={3}>
          <URGridItem1 item xs={12} sm={4} isSmallScreen={isSmallScreen}>
            <Typography variant="subtitle2">As of</Typography>
          </URGridItem1>
          <URGridItem2 item xs={12} sm={4}>
            <Typography variant="subtitle2">Report Type</Typography>
          </URGridItem2>
          <URGridItem2 item xs={12} sm={4}></URGridItem2>
          <URGridItem3 item xs={12} sm={4}>
            <YearDateRow>
              <YearSelectorContainer>
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
              </YearSelectorContainer>
              <DatePickerContainer className={dateStyle.pickerInput}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </DatePickerContainer>
            </YearDateRow>
          </URGridItem3>
          <Grid item xs={12} sm={4} sx={{ order: isSmallScreen ? 4 : 0 }}>
            <ReportContainer>
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
            </ReportContainer>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ order: isSmallScreen ? 6 : 0 }}>
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
      <UnstyledTabsIntroduction />
    </Body>
  );
};

export default TrialBalance;
