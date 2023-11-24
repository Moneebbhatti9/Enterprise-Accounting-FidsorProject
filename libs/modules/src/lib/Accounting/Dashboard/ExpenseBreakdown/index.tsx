import { Pie, PieChart, ResponsiveContainer } from 'recharts';
const data01 = [
  { name: 'Category A', value: Math.floor(Math.random() * 100) },
  { name: 'Category B', value: Math.floor(Math.random() * 100) },
  { name: 'Category C', value: Math.floor(Math.random() * 100) },
];

const data02 = [
  { name: 'Subcategory 1', value: Math.floor(Math.random() * 50) },
  { name: 'Subcategory 2', value: Math.floor(Math.random() * 50) },
  { name: 'Subcategory 3', value: Math.floor(Math.random() * 50) },
];
const Dashboard = () => {
  <>
    <h5>Expense </h5>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie dataKey="value" data={data01} outerRadius={60} fill="#4299E1" />
        <Pie
          dataKey="value"
          data={data02}
          innerRadius={70}
          outerRadius={90}
          fill="#F04F47"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  </>;
};

export default Dashboard;
