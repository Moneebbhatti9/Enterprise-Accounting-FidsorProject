import React, { useState } from 'react';
import { Body } from '../../Accounting/Global/Styling';
import SimpleHeader from '../../Accounting/Global/Components/SimpleHeader';
import { RangeFilter, Subheading } from './styles/styles';
import Typography from '@mui/material/Typography';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
} from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import IconButton from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import WeeklyGrid from './components/WeeklyGrid';
import Button from '@mui/material/Button';
import { textFieldStyles } from '../../Accounting/Global/Styling';
import IntlMessages from '@crema/helpers/IntlMessages';
export interface RowData {
  name: string;
  type: string;
  values: number[];
}

const initialRows: RowData[] = [
  {
    name: 'Overtime',
    type: 'Rate x 1.5',
    values: new Array(7).fill(0),
  },
  {
    name: 'Double Time',
    type: 'Rate x 2.0',
    values: new Array(7).fill(0),
  },
  {
    name: 'Vaction',
    type: 'Balance 0.00',
    values: new Array(7).fill(0),
  },
  {
    name: 'Sick Time',
    type: 'Unpaid',
    values: new Array(7).fill(0),
  },
];

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Timesheet = () => {
  const textFieldStyle = textFieldStyles();
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const currentDay = startOfMonth.getDay();
  const daysUntilSunday = currentDay === 0 ? 0 : 7 - currentDay;
  const startOfWeek = new Date(startOfMonth);
  startOfWeek.setDate(startOfMonth.getDate() - daysUntilSunday);

  const [startDate, setStartDate] = useState<Date>(startOfWeek);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [rowData, setRowData] = useState(initialRows);

  const calculateEndDate = (startDate: Date) => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    return endDate;
  };

  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 7);
    setStartDate(newStartDate);
  };

  const handlePreviousWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 7);
    setStartDate(newStartDate);
  };

  const toggleDropdown = (index: number) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  const dateArray = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    dateArray.push(currentDate);
  }

  const employeeData = [
    { name: 'Ibrahim Hassan', hours: 40.0 },
    { name: 'Abdul Wahab', hours: 40.0 },
    { name: 'Sadia Saeed', hours: 40.0 },
  ];

  return (
    <Body>
      <SimpleHeader title="dashboard.crm.timesheet" />
      <Subheading>
        {<IntlMessages id="dashboard.crm.timesheet.subheading" />}
      </Subheading>
      <Typography fontSize={'14px'} fontWeight={'500'} mt={'50px'} mb={'15px'}>
        {<IntlMessages id="dashboard.crm.timesheet.subheading1" />}
      </Typography>
      <Box
        width={'70%'}
        display={'flex'}
        flexDirection={'column'}
        alignSelf={'center'}
      >
        <RangeFilter direction={'row'} alignSelf={'center'}>
          <BootstrapTooltip
            title="Previous Week"
            arrow
            onClick={handlePreviousWeek}
          >
            <IconButton style={{ border: '1px solid #0A8FDC' }}>
              <IoIosArrowBack style={{ fontSize: '30px', color: '#0A8FDC' }} />
            </IconButton>
          </BootstrapTooltip>
          <Stack direction={'row'} spacing={4} alignItems={'center'}>
            <Typography fontSize={'35px'} fontWeight={'500'}>
              {startDate.getDate()}
            </Typography>
            <Stack>
              <Typography fontSize={'14px'} fontWeight={'500'}>
                {startDate.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </Typography>
              <Typography
                fontSize={'12px'}
                fontWeight={'500'}
                color={'#606060'}
              >
                {startDate.toLocaleDateString('en-US', { weekday: 'long' })}
              </Typography>
            </Stack>
          </Stack>
          <IoMdArrowForward style={{ fontSize: '25px', color: '#606060' }} />
          <Stack direction={'row'} spacing={4} alignItems={'center'}>
            <Typography fontSize={'35px'} fontWeight={'500'}>
              {calculateEndDate(startDate).getDate()}
            </Typography>
            <Stack>
              <Typography fontSize={'14px'} fontWeight={'500'}>
                {calculateEndDate(startDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </Typography>
              <Typography
                fontSize={'12px'}
                fontWeight={'500'}
                color={'#606060'}
              >
                {calculateEndDate(startDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                })}
              </Typography>
            </Stack>
          </Stack>
          <BootstrapTooltip title="Next Week" arrow onClick={handleNextWeek}>
            <IconButton style={{ border: '1px solid #0A8FDC' }}>
              <IoIosArrowForward
                style={{ fontSize: '30px', color: '#0A8FDC' }}
              />
            </IconButton>
          </BootstrapTooltip>
        </RangeFilter>
        <Grid
          container
          alignItems={'end'}
          mt={'60px'}
          mb={'15px'}
          rowSpacing={4}
          columnSpacing={2}
        >
          <Grid item sm={3}>
            <Typography fontSize={'14px'} fontWeight={'bold'}>
              <IntlMessages id="common.Employee" />
            </Typography>
          </Grid>
          {dateArray.map((date, index) => (
            <Grid item sm={1} key={index}>
              <Stack alignItems={'center'}>
                <Typography
                  fontSize={'14px'}
                  fontWeight={'500'}
                  color={'#606060'}
                >
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </Typography>
                <Typography fontSize={'14px'} fontWeight={'bold'}>
                  {date.getDate()}
                </Typography>
              </Stack>
            </Grid>
          ))}
          <Grid item sm={2} display={'flex'} justifyContent={'end'}>
            <Typography fontSize={'12px'} fontWeight={'bold'} mr={'20px'}>
              <IntlMessages id="common.estimate.estimateTotal" />
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Divider />
          </Grid>
          {employeeData.map((employee, index) => (
            <React.Fragment key={index}>
              <Grid
                item
                sm={2}
                style={{
                  borderBottom: '1px solid #ccc',
                  paddingBottom: '5px',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
                onClick={() => toggleDropdown(index)}
              >
                <Stack
                  width={'100%'}
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Typography fontSize={'12px'} fontWeight={'500'}>
                    {employee.name}
                  </Typography>
                  <BootstrapTooltip title="Enter additional hours" arrow>
                    <IconButton>
                      <RiArrowDropDownLine
                        style={{ fontSize: '25px', color: '#0A8FDC' }}
                      />
                    </IconButton>
                  </BootstrapTooltip>
                </Stack>
              </Grid>
              <Grid
                item
                sm={8}
                style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}
              ></Grid>
              <Grid
                item
                sm={2}
                display={'flex'}
                justifyContent={'end'}
                style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}
              >
                <TextField
                  placeholder={employee.hours.toFixed(1)}
                  disabled
                  style={{ width: '70px' }}
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
              </Grid>
              {selectedRow === index && (
                <Grid item sm={12}>
                  <Grid item sm={12}>
                    <WeeklyGrid rowData={rowData} onDataChange={setRowData} />
                  </Grid>
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
        <Box width={'100%'} display={'flex'} justifyContent={'end'} my={'10px'}>
          <Stack direction={'row'} spacing={4}>
            <Button
              variant="outlined"
              sx={{
                fontSize: '12px',
                borderColor: '#57b8c9',
                color: '#57b8c9',
                '&:hover': {
                  borderColor: '#57b8c9',
                },
              }}
            >
              <IntlMessages id="common.discardChanges" />
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: '12px',
                borderColor: '#57b8c9',
                color: '#57b8c9',
                '&:hover': {
                  borderColor: '#57b8c9',
                },
              }}
            >
              <IntlMessages id="common.save" />
            </Button>
          </Stack>
        </Box>
      </Box>
    </Body>
  );
};

export default Timesheet;
