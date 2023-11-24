import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { datePickerStyles } from '../../Accounting/Global/Styling';
import Statement from './Statement';
const Container = styled(Box)`
  width: 100%;
  padding: 1%;
  margin-top: 15px;
`;
const Label = styled(Typography)`
  font-size: 12px;
`;
const Filter = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isAccountActivitySelected, setIsAccountActivitySelected] =
    useState(false);
  const handleSelectChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(isNaN(value) ? 0 : value);
    setIsAccountActivitySelected(value === 2);
  };
  const dateStyle = datePickerStyles()
  const menuItems = [
    { value: 1, label: 'Ibrahim Hassan' },
    { value: 2, label: 'Abdul Wahab' },
    { value: 3, label: 'Sadia Saeed' },
    { value: 5, label: 'Shinza Gul' },
    { value: 5, label: 'Muntaha Tahir' },
  ];
  // const handleCreateStatementClick = () => {
  //   if (!selectedValue || !customerName || !isAccountActivitySelected) {
  //     return;
  //   }
  //   console.log('Statement created successfully!');
  // };
  const [showStatement, setShowStatement] = useState(false);

  const handleCreateStatement = () => {
    setShowStatement(true);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={3}>
            <Stack width={'100%'}>
              <Label>Customer Name</Label>
              <FormControl sx={{ minWidth: 120 }} fullWidth size="small">
                <Select defaultValue="" id="grouped-select">
                  <ListSubheader
                    sx={{
                      fontSize: '12px',
                      color: '#000',
                      fontWeight: 'bold',
                      lineHeight: '30px',
                    }}
                  >
                    Developer
                  </ListSubheader>
                  {menuItems
                    .filter((item) => item.value < 4)
                    .map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  <ListSubheader
                    sx={{
                      fontSize: '12px',
                      color: '#000',
                      fontWeight: 'bold',
                      lineHeight: '30px',
                    }}
                  >
                    BA
                  </ListSubheader>
                  {menuItems
                    .filter((item) => item.value === 5)
                    .map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  <ListSubheader
                    sx={{
                      fontSize: '12px',
                      color: '#000',
                      fontWeight: 'bold',
                      lineHeight: '30px',
                    }}
                  >
                    QA
                  </ListSubheader>
                  {menuItems
                    .filter((item) => item.value === 5)
                    .map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <Stack width={'100%'}>
              <Label>Type</Label>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <Select
                  value={selectedValue.toString()}
                  onChange={handleSelectChange}
                  defaultValue=""
                  id="grouped-select"
                >
                  <MenuItem value={1}>Outstanding Invoices</MenuItem>
                  <MenuItem value={2}>Account Activity</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          {isAccountActivitySelected && (
            <>
              <Grid item xs={12} md={12} lg={3}>
                <Stack width={'100%'}>
                  <Label>From</Label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{ backgroundColor: 'white' }}
                     className={dateStyle.pickerInput}/>
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <Stack width={'100%'}>
                  <Label>To</Label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{ backgroundColor: 'white' }} 
                              className={dateStyle.pickerInput}/>
                  </LocalizationProvider>
                </Stack>
              </Grid>
            </>
          )}
        </Grid>
        <Grid container justifyContent="center" style={{ paddingTop: '20px' }}>
          <Button variant="outlined" onClick={handleCreateStatement}>
            Create Statement
          </Button>
        </Grid>
      </Container>
      {showStatement && <Statement />}
    </>
  );
};
export default Filter;
