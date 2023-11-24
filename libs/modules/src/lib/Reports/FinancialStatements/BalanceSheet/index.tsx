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
} from './styles/BalanceSheetStyles';
import UnstyledTabsIntroduction from './components/Tabs';
import CalcGrid from './components/CalcGrid';
import IntlMessages from '@crema/helpers/IntlMessages';
import Header from '../../components/Header';
import { datePickerStyles } from '../../../Accounting/Global/Styling';

const BalanceSheet: React.FC = () => {
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
        redirectLink="/reports/financial-statements"
        messageId="reports.financialstatements.balancesheet"
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
            <MenuItem onClick={handleMenuClose}>
              <IntlMessages id="reports.exportbuttoncsv" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <IntlMessages id="reports.exportbuttonpdf" />
            </MenuItem>
          </ExportDropDown>
        </Menu>
      </TopBar>
      <UpdateReport>
        <Grid container columnSpacing={10} rowSpacing={3}>
          <URGridItem1 item xs={12} sm={4} isSmallScreen={isSmallScreen}>
            <Typography variant="subtitle2">
              <IntlMessages id="reports.asof" />
            </Typography>
          </URGridItem1>
          <URGridItem2 item xs={12} sm={4}>
            <Typography variant="subtitle2">
              <IntlMessages id="reports.reporttype" />
            </Typography>
          </URGridItem2>
          <URGridItem2 item xs={12} sm={4}></URGridItem2>
          <URGridItem3 item xs={12} sm={4}>
            <YearDateRow className={dateStyle.pickerInput}>
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
              <DatePickerContainer>
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
                  <MenuItem value={10}>
                    <IntlMessages id="reports.reporttypeitem1" />
                  </MenuItem>
                  <MenuItem value={20}>
                    <IntlMessages id="reports.reporttypeitem2" />
                  </MenuItem>
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
                <IntlMessages id="reports.updatereport" />
              </Button>
            </ButtonContainer>
          </Grid>
        </Grid>
      </UpdateReport>
      <CalcGrid />
      <UnstyledTabsIntroduction />
    </Body>
  );
};

export default BalanceSheet;
