import { useState } from 'react';
import { Button, Box, Typography, Stack } from '@mui/material';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import BusinessIcon from '@mui/icons-material/Business';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import { makeStyles } from '@mui/styles';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: '#57b8c9',
    color: '#57b8c9',
    '&:hover': {
      borderColor: '#57b8c9',
    },
  },
}));

const RunPayrollScreen = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // const handleButtonClick = (incrementValue: number) => {
  //   // Update progress by incrementValue
  //   setProgress((prevProgress) => prevProgress + incrementValue);
  // };
  const handleAddEmployee = (incrementValue: number) => {
    navigate('/hr/setup/employees/add');
    // setProgress((prevProgress) => prevProgress + incrementValue);
  };
  const handleAddContractor = (incrementValue: number) => {
    navigate('/purchases/vendors/add');
    // setProgress((prevProgress) => prevProgress + incrementValue);
  };
  const handleAddEmployeeBusiness = (incrementValue: number) => {
    navigate('/hr/setup/business-details');
    // setProgress((prevProgress) => prevProgress + incrementValue);
  };
  const handlePaySchedule = (incrementValue: number) => {
    navigate('/hr/setup/payroll-frequency');
    // setProgress((prevProgress) => prevProgress + incrementValue);
  };
  const handleCompanySignatory = (incrementValue: number) => {
    navigate('/hr/setup/company-signatory');
    // setProgress((prevProgress) => prevProgress + incrementValue);
  };

  return (
    <Box
      width={{ xs: '100%', lg: '90%' }}
      // width={'100%'}
      // padding={'24px'}
      padding={{ xs: '12px', sm: '24px' }}
      // display={'flex'}
      flexDirection={'column'}
      alignSelf={'center'}
    >
      <Stack
        direction="column"
        sx={{ mb: 3, p: '20px', background: 'rgb(244, 247, 254)' }}
        borderRadius={2}
      >
        <LinearProgressWithLabel value={progress} />
        <Typography
          variant="h3"
          fontSize={14}
          fontWeight="normal"
          color="#68757d"
        >
          {progress}% - <IntlMessages id="common.payrollProgress" />
        </Typography>
      </Stack>
      <Box
        sx={{
          p: '24px',
          border: '1px solid #ccc',
          borderRadius: 2,
          my: '24px',
        }}
      >
        <Stack direction="row" alignItems="center">
          <Groups2OutlinedIcon
            sx={{ mr: '0.3em', fontSize: '3.1875rem', color: ' #0A8FDC' }}
          />
          <Typography
            variant="h3"
            fontSize={24}
            fontWeight="normal"
            color="#68757d"
          >
            <IntlMessages id="common.team" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ mb: 3, p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="common.Employee" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              onClick={() => handleAddEmployee(10)}
              className={classes.button}
            >
              <IntlMessages id="employee.addEmployee" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.runpayroll.employee.subheading" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="addVendor.Contractor" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              onClick={() => handleAddContractor(10)}
              className={classes.button}
            >
              <IntlMessages id="common.addContractor" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.runpayroll.contractor.subheading" />
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          p: '24px',
          border: '1px solid #ccc',
          borderRadius: 2,
          my: '24px',
        }}
      >
        <Stack direction="row" alignItems="center">
          <BusinessIcon
            sx={{ mr: '0.3em', fontSize: '3.1875rem', color: ' #0A8FDC' }}
          />
          <Typography
            variant="h3"
            fontSize={24}
            fontWeight="normal"
            color="#68757d"
          >
            <IntlMessages id="common.business" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ mb: 3, p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="common.business" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              onClick={() => handleAddEmployeeBusiness(10)}
              className={classes.button}
            >
              <IntlMessages id="common.addDetails" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.runpayroll.business.subheading" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="common.paySchedule" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              onClick={() => handlePaySchedule(10)}
              className={classes.button}
            >
              <IntlMessages id="common.setSchedule" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.runpayroll.paySchedule.subheading" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="common.companySignatory" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              onClick={() => handleCompanySignatory(10)}
              className={classes.button}
            >
              <IntlMessages id="common.addSignatory" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.runpayroll.addSignatory.subheading" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="common.fundingAccount" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              disabled
              className={classes.button}
            >
              <IntlMessages id="COA.addAccount" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.runpayroll.fundingAccount.subheading" />
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          p: '24px',
          border: '1px solid #ccc',
          borderRadius: 2,
          my: '24px',
        }}
      >
        <Stack direction="row" alignItems="center">
          <TipsAndUpdatesOutlinedIcon
            sx={{ mr: '0.3em', fontSize: '3.1875rem', color: ' #0A8FDC' }}
          />
          <Typography
            variant="h3"
            fontSize={24}
            fontWeight="normal"
            color="#68757d"
          >
            <IntlMessages id="common.simplifyPayroll" />
          </Typography>
        </Stack>
        <Stack direction="column" sx={{ mb: 3, p: { xs: '0px', sm: '20px' } }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={20} fontWeight={600}>
              <IntlMessages id="common.simplifyPayroll.subheading1" />
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '150px' }}
              disabled
              className={classes.button}
            >
              <IntlMessages id="common.simplifyPayroll.authorize" />
            </Button>
          </Stack>
          <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
            <IntlMessages id="common.simplifyPayroll.subheading2" />
          </Typography>
        </Stack>
      </Box>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2, width: 'fit-content' }}
        className={classes.button}
      >
        <IntlMessages id="common.payroll.back" />
      </Button>
    </Box>
  );
};

export default RunPayrollScreen;
