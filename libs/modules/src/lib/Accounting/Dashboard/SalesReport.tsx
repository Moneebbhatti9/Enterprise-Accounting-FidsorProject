import AppCard from '@crema/components/AppCard';
import SalesChart from './SalesChart';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import { IconButton, Tooltip, alpha, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const DotActionItem = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    lineHeight: 1,
    paddingBottom: 2,
    fontSize: 12,
    color: theme.palette.text.secondary,
    '&:not(:first-of-type)': {
      marginLeft: 16,
      paddingLeft: 16,
      borderLeft: `solid 1px ${alpha(theme.palette.text.secondary, 0.2)}`,
    },
    '& .dot-icon': {
      height: 10,
      width: 10,
      marginRight: 4,
      marginTop: 3,
      borderRadius: '50%',
    },
  };
});
const StyledIconButton = styled(IconButton)`
  && {
    color: grey;
    padding: 8px;

    &:hover {
      color: rgb(10, 143, 220);
    }
  }
`;
const SalesReport = () => {
  const { messages } = useIntl();

  const theme = useTheme();

  const handleSelectionType = () => {};
  const defaultMenuValueType = messages['dashboard.thisMonth'];
  return (
    <AppCard
      sxStyle={{ position: 'relative' }}
      title={messages['dashboard.profitLoss'] as string}
      action={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              flexWrap: 'wrap',
              mr: 2,
            }}
          >
            <DotActionItem>
              <span style={{ backgroundColor: 'green' }} className="dot-icon" />
              {messages['chartOfAccountApp.income'] as string}
            </DotActionItem>
            <DotActionItem>
              <span
                style={{ backgroundColor: theme.palette.primary.main }}
                className="dot-icon"
              />
              {messages['chartOfAccountApp.expenses'] as string}
            </DotActionItem>
          </Box>
          <AppSelect
            // menus={[
            //   'This Month',
            //   'Last Month',
            //   'Last 3 Months',
            //   'Last 6 Months',
            //   'Last 9 Months',
            //   'This Year',
            //   'Last Year',
            // ]}
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
          <Tooltip title="Reports">
            <Link
              to="/reports/financial-statements/profit-and-loss"
              style={{ textDecoration: 'none', color: '#111827' }}
            >
              <StyledIconButton size="large">
                <Box className="state-icon">
                  <Box className="hsIcon">
                    <Icon style={{ fontSize: '18px' }}>domain</Icon>
                  </Box>
                </Box>
              </StyledIconButton>
            </Link>
          </Tooltip>
        </Box>
      }
    >
      <SalesChart />
    </AppCard>
  );
};

export default SalesReport;
