import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
type SalesChartDaumType = {
  name: string;
  CB: number;
  Rec: number;
  Paid: number;
};
type Props = {
  data: SalesChartDaumType[];
};

const MixBarChart = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart
        barSize={7}
        data={data}
        style={{ fontSize: '10px' }}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" dy={10} />
        <Tooltip />
        <Bar dataKey="CB" stackId="a" fill="#49BD65" radius={[10, 10, 0, 0]} />
        <Bar dataKey="Rec" stackId="b" fill="#0A8FDC" radius={[10, 10, 0, 0]} />
        <Bar dataKey="Paid" stackId="c" fill="red" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;
