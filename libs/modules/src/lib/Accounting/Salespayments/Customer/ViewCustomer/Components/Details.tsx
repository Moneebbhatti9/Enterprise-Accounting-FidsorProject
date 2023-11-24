import React, { useState } from 'react';
import { Grid, Link, Typography, Stack, Button, Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import {
  UpdateReport,
  UpdateReport1,
} from '../../../../../Reports/FinancialStatements/ProfitLoss/styles/ProfitLossStyles';
// import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Tooltip from '@mui/material/Tooltip';
// import { styled } from '@mui/material/styles';
import emptyImage from './img/empty-folder.png';
import creditCards from './img/credit-cards.png';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

// const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: '#fff',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 230,
//     fontSize: theme.typography.pxToRem(12),
//     border: '1px solid #dadde9',
//   },
// }));

const DateRangeCon = () => {
  // const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType | undefined>(
    undefined
  );

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <UpdateReport marginBottom={'24px'}>
        <Grid container rowSpacing={2} columnSpacing={5}>
          <Grid item xs={12} sm={4}>
            <Stack
              direction={{ xs: 'column' }}
              alignItems={{ xs: 'start' }}
              justifyContent={'space-between'}
              spacing={2}
            >
              <Box width={'100%'}>
                <Typography fontWeight={700}>
                  {/* <IntlMessages id="reports.daterange" /> */}
                  Paid last 12 months
                </Typography>
              </Box>
              <Typography>$0.00 USD</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack
              direction={{ xs: 'column' }}
              alignItems={{ xs: 'start' }}
              justifyContent={'space-between'}
              spacing={2}
            >
              <Box width={'100%'}>
                <Typography fontWeight={700}>
                  {/* <IntlMessages id="reports.daterange" /> */}
                  Total unpaid
                </Typography>
              </Box>
              <Typography>$0.00 USD</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack
              direction={{ xs: 'column' }}
              alignItems={{ xs: 'start' }}
              justifyContent={'space-between'}
              spacing={2}
            >
              <Box width={'100%'}>
                <Typography fontWeight={700}>
                  {/* <IntlMessages id="reports.daterange" /> */}
                  Last item sent
                </Typography>
              </Box>
              <Tooltip
                title="The last item sent to your customer"
                arrow
                placement="right-start"
              >
                <Link component="button" onClick={handleClick('bottom')}>
                  What's this?
                </Link>
              </Tooltip>
              <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
                sx={{ maxWidth: '340px' }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper sx={{ padding: '24px' }}>
                      <CloseIcon onClick={handleClose} />
                      <Stack direction="column" alignItems={'center'}>
                        <Typography
                          marginBottom={'4px'}
                          color={'#9453e4'}
                          fontWeight={'bold'}
                        >
                          NEW!
                        </Typography>
                        <Typography
                          marginBottom={'16px'}
                          marginTop={'4px'}
                          fontWeight={700}
                        >
                          View recent customer communication
                        </Typography>
                        <Typography marginBottom={'16px'} textAlign={'center'}>
                          See the last item (invoice, reminder, or statement)
                          sent to your customer.
                        </Typography>
                        <UpdateReport>
                          <Typography
                            marginBottom={'12px'}
                            textAlign={'center'}
                          >
                            Beginning July 14, items you send will show up here.
                          </Typography>
                        </UpdateReport>
                      </Stack>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Stack>
          </Grid>
        </Grid>
      </UpdateReport>
      <UpdateReport1 marginBottom={'24px'}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={5}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Grid item xs={12} marginBottom={'24px'}>
            <Box
              component="img"
              sx={{
                height: { xs: 'auto', sm: 233 },
                width: { xs: '100%' },
              }}
              src={emptyImage}
            />
          </Grid>
          <Grid item xs={12} sm={6} marginBottom={'8px'}>
            <Typography
              fontSize={'16px'}
              fontWeight={700}
              display={'flex'}
              justifyContent={'center'}
            >
              No unpaid invoices
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="primary">
              Create new Invoice
            </Button>
          </Grid>
        </Grid>
      </UpdateReport1>
      <UpdateReport1 marginBottom={'24px'}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={5}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Grid item xs={12} marginBottom={'24px'}>
            <Box
              component="img"
              sx={{
                height: { xs: 'auto', sm: 233 },
                width: { xs: '100%' },
              }}
              src={creditCards}
            />
          </Grid>
          <Grid item xs={12} sm={6} marginBottom={'8px'}>
            <Typography
              fontSize={'16px'}
              fontWeight={700}
              display={'flex'}
              justifyContent={'center'}
            >
              Accept credit cards and get paid up to 3x faster
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="primary">
              Turn on Payments
            </Button>
          </Grid>
        </Grid>
      </UpdateReport1>
    </>
  );
};

export default DateRangeCon;
