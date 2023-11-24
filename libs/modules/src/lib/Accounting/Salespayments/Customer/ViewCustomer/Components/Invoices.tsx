import { Grid, Typography, Button, Box } from '@mui/material';
import { UpdateReport1 } from '../../../../../Reports/FinancialStatements/ProfitLoss/styles/ProfitLossStyles';
import invoices from './img/invoice.png';

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

const Invoices = () => {
  return (
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
            src={invoices}
          />
        </Grid>
        <Grid item xs={12} sm={6} marginBottom={'8px'}>
          <Typography
            fontSize={'16px'}
            fontWeight={700}
            display={'flex'}
            justifyContent={'center'}
          >
            Get paid for your work
          </Typography>
          <Typography
            fontSize={'12px'}
            display={'flex'}
            justifyContent={'center'}
          >
            Send your customer their first invoice
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary">
            Create invoice
          </Button>
        </Grid>
      </Grid>
    </UpdateReport1>
  );
};

export default Invoices;
