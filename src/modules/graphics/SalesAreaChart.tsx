import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';
import { salesData } from './data';

export const SalesAreaChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      data={salesData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="productA"
        stroke="#8884d8"
        fill="#8884d8"
        name="Product A"
      />
      <Area
        type="monotone"
        dataKey="productB"
        stroke="#82ca9d"
        fill="#82ca9d"
        name="Product B"
      />
      <Brush dataKey="month" height={30} stroke="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);
