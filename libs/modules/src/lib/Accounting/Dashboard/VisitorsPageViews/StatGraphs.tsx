import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis, // Added YAxis import
} from 'recharts';
import { useTheme } from '@mui/material';

type Props = {
  data: VisitorPageViewType[];
};
type VisitorPageViewType = {
  name: string;
  Visitor: number;
  PageView: number;
  amount: string;
};
const StatGraphs = ({ data }: Props) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart
        data={data}
        margin={{ top: 50, right: 20, left: 0, bottom: 0 }} // Adjusted margin
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis dataKey="amount" tickLine={false} axisLine={false} />
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
          dataKey="Visitor"
          stroke={theme.palette.primary.main}
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dot={false}
          strokeWidth={2}
          dataKey="PageView"
          stroke={theme.palette.secondary.main}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatGraphs;
