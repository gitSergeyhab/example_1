import {
  ComposedChart,
  Area,
  Bar,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts';

const combinedData = [
  { month: 'Jan', salesA: 120, salesB: 85, temp: -10, humidity: 85 },
  { month: 'Feb', salesA: 135, salesB: 92, temp: -8, humidity: 82 },
  // ... остальные данные
];

export const CombinedChart = () => (
  <ResponsiveContainer width="100%" height={500}>
    <ComposedChart
      data={combinedData}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis
        yAxisId="sales"
        orientation="left"
        label={{ value: 'Sales', angle: -90 }}
      />
      <YAxis
        yAxisId="climate"
        orientation="right"
        label={{ value: 'Climate', angle: 90 }}
      />
      <Tooltip />
      <Legend />
      <Area
        yAxisId="sales"
        type="monotone"
        dataKey="salesA"
        fill="#8884d8"
        stroke="#8884d8"
        name="Sales A"
      />
      <Bar yAxisId="sales" dataKey="salesB" fill="#413ea0" name="Sales B" />
      <Scatter
        yAxisId="climate"
        dataKey="temp"
        fill="#ff7300"
        name="Temperature (°C)"
      />
      <Scatter
        yAxisId="climate"
        dataKey="humidity"
        fill="#387908"
        name="Humidity (%)"
      />
      <Brush dataKey="month" height={30} stroke="#8884d8" />
    </ComposedChart>
  </ResponsiveContainer>
);
