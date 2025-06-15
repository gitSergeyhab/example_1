import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';
import { temperatureData } from './data';

export const TempBarChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart
      data={temperatureData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="city" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar
        yAxisId="left"
        dataKey="temp"
        fill="#8884d8"
        name="Temperature (°C)"
      />
      <Bar
        yAxisId="right"
        dataKey="humidity"
        fill="#82ca9d"
        name="Humidity (%)"
      />
      <Brush dataKey="month" height={30} stroke="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);
