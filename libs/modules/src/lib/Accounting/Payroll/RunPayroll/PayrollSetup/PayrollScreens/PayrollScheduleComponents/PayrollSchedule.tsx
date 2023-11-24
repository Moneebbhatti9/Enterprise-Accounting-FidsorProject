import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Box, Button, Divider } from '@mui/material';
import { MdNavigateNext } from 'react-icons/md';
import { BsDot } from 'react-icons/bs';
import { textFieldStyles } from 'libs/modules/src/lib/Accounting/Global/Styling';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: '#57b8c9',
    color: '#57b8c9',
    '&:hover': {
      borderColor: '#57b8c9',
    },
  },
}));

const PayrollScheduleFields = () => {
  const classes = useStyles();
  const [frequency, setFrequency] = React.useState('eWeek');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency((event.target as HTMLInputElement).value);
  };

  const [days, setDays] = React.useState('');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setDays(event.target.value as string);
  };
  const textFieldStyle = textFieldStyles();
  return (
    <Grid container columnSpacing={4} rowSpacing={4}>
      <Grid
        item
        sm={6}
        display={'flex'}
        justifyContent={'end'}
        width={'fit-content'}
      >
        <Typography
          fontSize={'14px'}
          fontWeight={'500'}
          color={'#68757d'}
          pt={'10px'}
        >
          Choose your payroll frequency
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={frequency}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="eWeek"
              control={<Radio />}
              label="Every week"
            />
            <FormControlLabel
              value="eOWeek"
              control={<Radio />}
              label="Every other week"
            />
            <FormControlLabel
              value="tMonth"
              control={<Radio />}
              label="Twice a month"
            />
            <FormControlLabel
              value="oMonth"
              control={<Radio />}
              label="Once a month"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item sm={6} display={'flex'} justifyContent={'end'}>
        <Typography fontSize={'14px'} fontWeight={'500'} color={'#68757d'}>
          Day of the week your payroll period starts
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <FormControl style={{ width: '190px' }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={days}
            onChange={handleSelectChange}
          >
            <MenuItem value={1}>Monday</MenuItem>
            <MenuItem value={2}>Tuesday</MenuItem>
            <MenuItem value={3}>Wednesday</MenuItem>
            <MenuItem value={4}>Thursday</MenuItem>
            <MenuItem value={5}>Friday</MenuItem>
            <MenuItem value={6}>Saturday</MenuItem>
            <MenuItem value={7}>Sunday</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={6} display={'flex'} justifyContent={'end'}>
        <Typography fontSize={'14px'} fontWeight={'500'} color={'#68757d'}>
          Default payday to
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <TextField
            variant="outlined"
            sx={{ width: '190px' }}
            InputProps={{
              classes: {
                root: textFieldStyle.customTextField,
              },
            }}
          />
          <Typography fontSize={'12px'} fontWeight={'400'}>
            days after payroll period ends
          </Typography>
        </Stack>
        <Typography fontSize={'12px'} fontWeight={'400'} color={'#68757d'}>
          7 days
        </Typography>
      </Grid>
      <Grid item sm={6}></Grid>
      <Grid item sm={6}>
        <Divider sx={{ my: '10px' }} />
        <Typography fontSize={'12px'} fontWeight={'500'} color={'#909090'}>
          Here's an example of how your payroll schedule would look based on the
          settings above
        </Typography>
        <Stack direction={'row'} my={'15px'} alignItems={'center'} spacing={2}>
          <Box
            width={'fit-content'}
            border={'1px solid #b4c2cb'}
            borderRadius={'5px'}
          >
            <Typography
              fontSize={'14px'}
              fontWeight={'600'}
              bgcolor={'#2cb5e2'}
              color={'#fff'}
              textAlign={'center'}
              borderRadius={'4px 4px 0px 0px'}
              py={1}
            >
              START
            </Typography>
            <Stack alignItems={'center'} spacing={1}>
              <Typography fontSize={'12px'}>Mon Oct</Typography>
              <Typography fontSize={'30px'} fontWeight={600} px={'30px'}>
                9
              </Typography>
              <Typography fontSize={'12px'}>2023</Typography>
            </Stack>
          </Box>
          <MdNavigateNext />
          <Box
            width={'fit-content'}
            border={'1px solid #b4c2cb'}
            borderRadius={'5px'}
          >
            <Typography
              fontSize={'14px'}
              fontWeight={'600'}
              bgcolor={'#2cb5e2'}
              color={'#fff'}
              textAlign={'center'}
              borderRadius={'4px 4px 0px 0px'}
              py={1}
            >
              Finish
            </Typography>
            <Stack alignItems={'center'} spacing={1}>
              <Typography fontSize={'12px'}>Mon Oct</Typography>
              <Typography fontSize={'30px'} fontWeight={600} px={'30px'}>
                9
              </Typography>
              <Typography fontSize={'12px'}>2023</Typography>
            </Stack>
          </Box>
          <BsDot />
          <Box
            width={'fit-content'}
            border={'1px solid #b4c2cb'}
            borderRadius={'5px'}
          >
            <Typography
              fontSize={'14px'}
              fontWeight={'600'}
              bgcolor={'#23c770'}
              color={'#fff'}
              textAlign={'center'}
              borderRadius={'4px 4px 0px 0px'}
              py={1}
            >
              Payday
            </Typography>
            <Stack alignItems={'center'} spacing={1}>
              <Typography fontSize={'12px'}>Mon Oct</Typography>
              <Typography fontSize={'30px'} fontWeight={600} px={'30px'}>
                9
              </Typography>
              <Typography fontSize={'12px'}>2023</Typography>
            </Stack>
          </Box>
          <Button variant="outlined" className={classes.button}>
            Export to calender
          </Button>
        </Stack>
        <Button variant="outlined" className={classes.button}>
          Save and continue
        </Button>
      </Grid>
    </Grid>
  );
};

export default PayrollScheduleFields;
