import { Box, Stack, Typography, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IntlMessages from '@crema/helpers/IntlMessages';

const ReportsScreen = () => {
  return (
    <Box
      width={{ xl: '1008px' }}
      padding={'24px'}
      display={'flex'}
      flexDirection={'column'}
      alignSelf={'center'}
    >
      <Box
        sx={{
          p: '24px',
          border: '1px solid #ccc',
          borderRadius: 2,
          my: '24px',
        }}
      >
        <Stack direction={{ sm: 'column', md: 'row' }} width="100%">
          <Stack
            direction="column"
            width={{ sm: '100%', md: '45%' }}
            paddingRight="5%"
          >
            <Typography variant="h3" fontSize={24} fontWeight="600">
              <IntlMessages id="sidebar.reports.financialstatements" />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#909090' }}>
              <IntlMessages id="common.hr.reports.FS.subheading" />
            </Typography>
          </Stack>
          <Stack direction="column" width={{ sm: '100%', md: '50%' }}>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.FS.sectionHeading" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.FS.sectionHeading.subHeading" />
              </Typography>
            </Link>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.FS.sectionHeading1" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.FS.sectionHeading2.subHeading" />
              </Typography>
            </Link>
            <Link href="#" marginBottom="20px" underline="none">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.FS.sectionHeading3" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.FS.sectionHeading3.subHeading" />
              </Typography>
            </Link>
          </Stack>
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
        <Stack direction={{ sm: 'column', md: 'row' }} width="100%">
          <Stack
            direction="column"
            width={{ sm: '100%', md: '45%' }}
            paddingRight="5%"
          >
            <Typography variant="h3" fontSize={24} fontWeight="600">
              <IntlMessages id="common.hr.reports.Taxes.mainHeading" />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#909090' }}>
              <IntlMessages id="common.hr.reports.Taxes.subheading" />
            </Typography>
          </Stack>
          <Stack direction="column" width={{ sm: '100%', md: '50%' }}>
            <Link href="#" marginBottom="20px" underline="none">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Taxes.sectionHeading" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.Taxes.sectionHeading.subHeading" />
              </Typography>
            </Link>
          </Stack>
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
        <Stack direction={{ sm: 'column', md: 'row' }} width="100%">
          <Stack
            direction="column"
            width={{ sm: '100%', md: '45%' }}
            paddingRight="5%"
          >
            <Typography variant="h3" fontSize={24} fontWeight="600">
              <IntlMessages id="sidebar.payroll" />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#909090' }}>
              <IntlMessages id="common.hr.reports.Payroll.subheading" />
            </Typography>
          </Stack>
          <Stack direction="column" width={{ sm: '100%', md: '50%' }}>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Payroll.sectionHeading" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.Payroll.sectionHeading.subHeading" />
              </Typography>
            </Link>
            <Link href="#" marginBottom="20px" underline="none">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Payroll.sectionHeading1" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.Payroll.sectionHeading1.subHeading" />
              </Typography>
            </Link>
          </Stack>
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
        <Stack direction={{ sm: 'column', md: 'row' }} width="100%">
          <Stack
            direction="column"
            width={{ sm: '100%', md: '45%' }}
            paddingRight="5%"
          >
            <Typography variant="h3" fontSize={24} fontWeight="600">
              <IntlMessages id="sidebar.ecommerce.customers" />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#909090' }}>
              <IntlMessages id="common.hr.reports.Customers.subheading" />
            </Typography>
          </Stack>
          <Stack direction="column" width={{ sm: '100%', md: '50%' }}>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Customers.sectionHeading" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.Customers.sectionHeading.subHeading" />
              </Typography>
            </Link>
            <Link href="#" marginBottom="20px" underline="none">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Customers.sectionHeading1" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.Customers.sectionHeading1.subHeading" />
              </Typography>
            </Link>
          </Stack>
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
        <Stack direction={{ sm: 'column', md: 'row' }} width="100%">
          <Stack
            direction="column"
            width={{ sm: '100%', md: '45%' }}
            paddingRight="5%"
          >
            <Typography variant="h3" fontSize={24} fontWeight="600">
              <IntlMessages id="sidebar.ecommerce.customers" />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#909090' }}>
              <IntlMessages id="common.hr.reports.Vendors.subheading" />
            </Typography>
          </Stack>
          <Stack direction="column" width={{ sm: '100%', md: '50%' }}>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Vendors.sectionHeading" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.Vendors.sectionHeading.subHeading" />
              </Typography>
            </Link>
            <Link href="#" marginBottom="20px" underline="none">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.Vendors.sectionHeading1" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="Unpaid and overdue bills for the last 30, 60, and 90+ days." />
              </Typography>
            </Link>
          </Stack>
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
        <Stack direction={{ sm: 'column', md: 'row' }} width="100%">
          <Stack
            direction="column"
            width={{ sm: '100%', md: '45%' }}
            paddingRight="5%"
          >
            <Typography variant="h3" fontSize={24} fontWeight="600">
              <IntlMessages id="common.hr.reports.DR.mainHeading" />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#909090' }}>
              <IntlMessages id="common.hr.reports.DR.subheading" />
            </Typography>
          </Stack>
          <Stack direction="column" width={{ sm: '100%', md: '50%' }}>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.DR.sectionHeading" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.DR.sectionHeading.subHeading" />
              </Typography>
            </Link>
            <Link
              href="#"
              marginBottom="20px"
              paddingBottom="20px"
              borderBottom="1px solid #d4dde3"
              underline="none"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.DR.sectionHeading1" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.DR.sectionHeading1.subHeading." />
              </Typography>
            </Link>
            <Link href="#" marginBottom="20px" underline="none">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    '&:hover': {
                      textDecoration: 'underline', // Add underline on hover
                    },
                    fontSize: '22px',
                  }}
                >
                  <IntlMessages id="common.hr.reports.DR.sectionHeading2" />
                </Typography>
                <ArrowForwardIosIcon sx={{ fontSize: '22px' }} />
              </Stack>
              <Typography
                variant="subtitle1"
                marginTop="8px"
                sx={{ color: '#909090' }}
              >
                <IntlMessages id="common.hr.reports.DR.sectionHeading2.subHeading" />
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ReportsScreen;
