import Grid from '@mui/material/Grid';
import { Container, Label } from '../../Invoices/styles/FilterStyle';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FaSearch } from 'react-icons/fa';
import SearchBar from '../../Invoices/components/SearchBar';
import { CreateButton } from '../../Invoices/styles/InvoiceStyle';
import { useState } from 'react';
import { Box } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
const Filter = () => {
  const [selectedValue, setSelectedValue] = useState(0); // Initialize with a default number

  const handleSelectChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(isNaN(value) ? 0 : value); // Use a default value if parsing fails
  };
  const menuItems = [
    { value: 1, label: 'Ibrahim Hassan' },
    { value: 2, label: 'Abdul Wahab' },
    { value: 3, label: 'Sadia Saeed' },
    { value: 5, label: 'Shinza Gul' },
    { value: 5, label: 'Muntaha Tahir' },
  ];
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={2}>
          <Stack width={'100%'}>
            <Label>Customer</Label>
            <FormControl sx={{ minWidth: 120 }} fullWidth size="small">
              <Select
                value={selectedValue.toString()}
                onChange={handleSelectChange}
                defaultValue=""
                id="grouped-select"
              >
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
        <Grid item xs={12} md={6} lg={2}>
          <Stack width={'100%'}>
            <Label>Status</Label>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <Select defaultValue="" id="grouped-select">
                <ListSubheader
                  sx={{
                    fontSize: '12px',
                    color: '#808080',
                    fontWeight: 'bold',
                    lineHeight: '30px',
                  }}
                >
                  Draft
                </ListSubheader>
                <MenuItem value={1}>Unsent</MenuItem>
                <MenuItem value={2}>Sent</MenuItem>
                <MenuItem value={3}>Viewed</MenuItem>
                <MenuItem value={4}>Partial</MenuItem>
                <ListSubheader
                  sx={{
                    fontSize: '12px',
                    color: '#808080',
                    fontWeight: 'bold',
                    lineHeight: '30px',
                  }}
                >
                  Paid
                </ListSubheader>
                <MenuItem value={5}>Overdue</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <Stack width={'100%'}>
            <Label>Invoice Date</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ backgroundColor: 'white' }} />
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <Stack width={'100%'}>
            <Label>Due Date</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ backgroundColor: 'white' }} />
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <Stack width={'100%'}>
            <Label>Invoice #</Label>
            <SearchBar />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          <Stack style={{ fontSize: '12px', paddingTop: '18px' }}>
            <CreateButton
              variant="outlined"
              startIcon={<FaSearch style={{ fontSize: '10px' }} />}
              style={{ fontSize: '12px' }}
            >
              Search
            </CreateButton>
          </Stack>
        </Grid>
      </Grid>
      {selectedValue !== 0 && (
        <Box style={{ paddingTop: '20px' }}>
          <Box
            sx={{
              width: '100%',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid rgba(128, 128, 128, 0.24)',
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  <PersonIcon />
                </Avatar>
                {menuItems.find((item) => item.value === selectedValue)
                  ?.label || 'Select a value'}
              </Grid>
              <Grid container item xs={6}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    Total Unpaid
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    Overdue
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    Paid Last 12 months
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    Last item sent
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    $ 0.00 USD
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    $ 0.00 USD
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    $ 0.00 USD
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    Invoice on sep
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Filter;
