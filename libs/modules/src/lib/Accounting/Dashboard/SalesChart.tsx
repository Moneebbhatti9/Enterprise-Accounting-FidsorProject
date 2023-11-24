import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { useTheme } from '@mui/material';

const data = [
  {
    time: 'Sep 22',
    income: 14000,
    expense: 2400,
  },
  {
    time: 'Oct 22',
    income: 22000,
    expense: 14398,
  },
  {
    time: 'Nov 22',
    income: 9800,
    expense: 2000,
  },
  {
    time: 'Dec 22',
    income: 11000,
    expense: 12000,
  },
  {
    time: 'Jan 23',
    income: 10000,
    expense: 4000,
  },
  {
    time: 'Feb 23',
    income: 12780,
    expense: 10900,
  },
  {
    time: 'Mar 23',
    income: 12000,
    expense: 4300,
  },
  {
    time: 'Apr 23',
    income: 12000,
    expense: 14900,
  },
  {
    time: 'May 23',
    income: 18000,
    expense: 1398,
  },
  {
    time: 'Jun 23',
    income: 17000,
    expense: 9800,
  },
  {
    time: 'Jul 23',
    income: 12780,
    expense: 3908,
  },
  {
    time: 'Aug 23',
    income: 20900,
    expense: 12800,
  },
  {
    time: 'Sep 23',
    income: 17000,
    expense: 4900,
  },
  {
    time: 'Oct 23',
    income: 7000,
    expense: 4000,
  },
  {
    time: 'Nov 23',
    income: 17000,
    expense: 9800,
  },
];

const SalesChart = () => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        style={{ fontSize: '10px' }}
      >
        <CartesianGrid
          strokeDasharray="3 1"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="time" />
        {/*<YAxis />*/}
        <Tooltip
          labelStyle={{ color: 'black' }}
          contentStyle={{
            borderRadius: 12,
            borderColor: '#31354188',
            background: '#FFFFFFCA',
          }}
        />
        <Bar stackId="a" dataKey="expense" fill={'green'} barSize={8} />
        <Bar
          stackId="a"
          dataKey="income"
          fill={theme.palette.primary.main}
          // margin={{bottom: -15}}
          barSize={8}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
