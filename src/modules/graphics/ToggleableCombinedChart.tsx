import React, { useState } from 'react';
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

// Типы
interface ChartData {
  month: string;
  salesA: number;
  salesB: number;
  temp: number;
  humidity: number;
}

// Данные
const data: ChartData[] = [
  { month: 'Jan', salesA: 120, salesB: 85, temp: -10, humidity: 85 },
  { month: 'Feb', salesA: 135, salesB: 92, temp: -8, humidity: 82 },
  { month: 'Mar', salesA: 150, salesB: 105, temp: -2, humidity: 75 },
  { month: 'Apr', salesA: 142, salesB: 110, temp: 5, humidity: 70 },
  { month: 'May', salesA: 160, salesB: 98, temp: 12, humidity: 65 },
];

// Конфиг графиков
const chartConfig = [
  { id: 'salesA', name: 'Product A', color: '#8884d8', type: 'area' },
  { id: 'salesB', name: 'Product B', color: '#82ca9d', type: 'bar' },
  { id: 'temp', name: 'Temperature', color: '#ff7300', type: 'scatter' },
  { id: 'humidity', name: 'Humidity', color: '#387908', type: 'scatter' },
];

export const InteractiveChart = () => {
  const [activeCharts, setActiveCharts] = useState<Record<string, boolean>>(
    chartConfig.reduce((acc, curr) => ({ ...acc, [curr.id]: true }), {})
  );

  const handleLegendClick = (chartId: string) => {
    setActiveCharts((prev) => ({
      ...prev,
      [chartId]: !prev[chartId],
    }));
  };

  // Фикс: Легенда всегда показывает все элементы
  const renderLegend = () => {
    return (
      <div
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '10px',
        }}
      >
        {chartConfig.map((item) => (
          <div
            key={item.id}
            onClick={() => handleLegendClick(item.id)}
            style={{
              cursor: 'pointer',
              color: activeCharts[item.id] ? item.color : '#aaa',
              fontWeight: activeCharts[item.id] ? 'bold' : 'normal',
              borderBottom: activeCharts[item.id]
                ? `2px solid ${item.color}`
                : 'none',
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <XAxis dataKey="month" orientation="top" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend content={renderLegend} />

          {/* Графики */}
          {activeCharts.salesA && (
            <Area
              yAxisId="left"
              dataKey="salesA"
              fill="#8884d8"
              stroke="#8884d8"
              name="Product A"
            />
          )}

          {activeCharts.salesB && (
            <Bar
              yAxisId="left"
              dataKey="salesB"
              fill="#82ca9d"
              name="Product B"
            />
          )}

          {activeCharts.temp && (
            <Scatter
              yAxisId="right"
              dataKey="temp"
              fill="#ff7300"
              name="Temperature"
            />
          )}

          {activeCharts.humidity && (
            <Scatter
              yAxisId="right"
              dataKey="humidity"
              fill="#387908"
              name="Humidity"
            />
          )}

          <Brush dataKey="month" height={20} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
