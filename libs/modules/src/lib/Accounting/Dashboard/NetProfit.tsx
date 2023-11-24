import { useIntl } from 'react-intl';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import AppSelect from '@crema/components/AppSelect';
import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import AppCircularProgress from '@crema/components/AppCircularProgress';

import { SalesStateType } from '@crema/models/dashboards/Analytics';
const FooterActionItem = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    paddingBottom: 2,
    '&:not(:first-of-type)': {
      marginLeft: 16,
      paddingLeft: 16,
      borderLeft: `solid 1px ${alpha(theme.palette.text.secondary, 0.2)}`,
    },
    '& .footer-title': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      lineHeight: 1,
    },
    '& .footer-dot': {
      height: 10,
      width: 10,
      minWidth: 10,
      marginRight: 4,
      marginTop: 3,
      borderRadius: '50%',
    },
  };
});
type SalesChartDaumType = {
  name: string;
  CB: number;
  Rec: number;
  Paid: number;
};
type Props = {
  salesState: SalesStateType[];
  chartData: SalesChartDaumType[];
};
const NetProfit = () => {
  const { messages } = useIntl();
  const defaultMenuValueType = messages['dashboard.thisMonth'];
  const theme = useTheme();
  const handleSelectionType = (data: SalesStateType) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      sxStyle={{ height: 1, fontSize: '16px' }}
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      title={messages['dashboard.netProfitLoss'] as string}
      action={
        <>
          <AppSelect
            menus={[
              messages['dashboard.thisMonth'],
              messages['dashboard.lastMonth'],
              messages['dashboard.3months'],
              messages['dashboard.6months'],
              messages['dashboard.9months'],
              messages['dashboard.thisYear'],
              messages['dashboard.lastYear'],
            ]}
            defaultValue={defaultMenuValueType}
            onChange={handleSelectionType}
          />
        </>
      }
      footerPosition="center"
      footerStyle={{ paddingBottom: 7.5, paddingTop: 0 }}
      footer={
        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
            color: theme.palette.text.secondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FooterActionItem>
            <Box
              className="footer-dot"
              sx={{
                backgroundColor: 'green',
                fontSize: '12px',
              }}
            />
            <span className="footer-title" style={{ fontSize: '12px' }}>
              {messages['chartOfAccountApp.income'] as string}
            </span>
          </FooterActionItem>
          <FooterActionItem>
            <Box
              className="footer-dot"
              sx={{
                backgroundColor: 'rgb(10, 143, 220)',
                fontSize: '12px',
              }}
            />
            <span className="footer-title" style={{ fontSize: '12px' }}>
              {messages['chartOfAccountApp.expenses'] as string}
            </span>
          </FooterActionItem>
        </Box>
      }
    >
      <AppCircularProgress
        activeColor="green"
        pathColor="rgb(10, 143, 220)"
        value={70}
        hidePercentage
        thickness={2}
        maxWidth={176}
        minWidth={170}
        centerNode={
          <Box
            sx={{
              textAlign: 'center',
              color: theme.palette.text.secondary,
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: Fonts.SEMI_BOLD,
                fontSize: '16px',
              }}
            >
              $1,000
              {/* <FormattedNumber
                value={1000}
                maximumFractionDigits={0}
                style='currency'
                currency='USD'
              /> */}
            </Typography>
            <Typography>{messages['dashboard.profit'] as string}</Typography>
          </Box>
        }
      />
    </AppCard>
  );
};

export default NetProfit;
