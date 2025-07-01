import React from 'react';
import { BarChart } from './BarChart';

const data = [
  { name: 'Январь', value: 120 },
  { name: 'Февраль', value: 200 },
  { name: 'Март', value: 150 },
  { name: 'Апрель', value: 80 },
  { name: 'Май', value: 70 },
  { name: 'Июнь', value: 110 },
  { name: 'Июль', value: 130 },
];

export const ExampleBarChart: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Пример столбчатой диаграммы</h1>
      <BarChart data={data} title="Продажи по месяцам" color="#91CC75" />
    </div>
  );
};
