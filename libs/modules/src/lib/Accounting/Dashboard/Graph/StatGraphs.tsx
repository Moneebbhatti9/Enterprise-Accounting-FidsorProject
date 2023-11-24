import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useTheme } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import { IconButton, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import { Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
interface AtcStaticType {
  name: string;
  Inflow: number;
  Outflow: number;
}

type Props = {
  data: AtcStaticType[];
};
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
const StatGraphs = ({ data = [] }: Props) => {
  const theme = useTheme();
  const { messages } = useIntl();
  const handleSelectionType = () => {};
  const defaultMenuValueType = messages['dashboard.thisMonth'];
  return (
    <AppCard
      sxStyle={{ position: 'relative', fontSize: '12px' }}
      title={messages['reports.financialstatements.cashflow'] as string}
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
              {messages['dashboard.inflow'] as string}
            </DotActionItem>
            <DotActionItem>
              <span style={{ backgroundColor: 'red' }} className="dot-icon" />
              {messages['dashboard.outflow'] as string}
            </DotActionItem>
          </Box>
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
          {/* <Tooltip title="Reports"> */}
          <Link
            to="/reports/financial-statements/cash-flow"
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
          {/* </Tooltip> */}
        </Box>
      }
    >
      <ResponsiveContainer width="100%" height={366}>
        <LineChart
          data={data}
          margin={{ top: 50, right: 0, left: -5, bottom: 0 }}
          style={{ fontSize: '10px' }}
        >
          <XAxis
            dataKey="name"
            tickLine={false}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            labelStyle={{ color: 'black' }}
            contentStyle={{
              borderRadius: 12,
              borderColor: '#31354188',
              background: '#FFFFFFCA',
            }}
          />
          <CartesianGrid stroke="#eee" horizontal={true} vertical={false} />
          <Line
            type="monotone"
            dataKey="Inflow" // Changed dataKey to 'Inflow'
            stroke="green"
            dot={false}
            strokeWidth={2}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dot={false}
            strokeWidth={2}
            dataKey="Outflow" // Changed dataKey to 'Outflow'
            stroke="red"
          />
        </LineChart>
      </ResponsiveContainer>
    </AppCard>
  );
};

export default StatGraphs;
