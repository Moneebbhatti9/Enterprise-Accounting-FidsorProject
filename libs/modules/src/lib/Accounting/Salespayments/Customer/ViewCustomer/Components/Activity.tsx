import { Grid, Typography, Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import { UpdateReport1 } from '../../../../../Reports/FinancialStatements/ProfitLoss/styles/ProfitLossStyles';
// import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
// import { styled } from '@mui/material/styles';
import noCommunication from './img/communication.svg';

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

const Activity = () => {
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
            src={noCommunication}
          />
        </Grid>
        <Grid item xs={12} sm={6} marginBottom={'8px'}>
          <Typography
            fontSize={'16px'}
            fontWeight={700}
            display={'flex'}
            justifyContent={'center'}
          >
            No recent customer communication
          </Typography>
          <Typography
            fontSize={'12px'}
            display={'flex'}
            justifyContent={'center'}
          >
            Invoices, reminders, receipts or statements sent to your customer
            will appear here
          </Typography>
        </Grid>
      </Grid>
    </UpdateReport1>
  );
};

export default Activity;
