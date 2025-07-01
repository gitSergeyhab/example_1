import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

interface BarChartProps {
  data: {
    name: string;
    value: number;
  }[];
  title?: string;
  color?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  title = 'График',
  color = '#5470C6',
}) => {
  const option: EChartsOption = {
    title: {
      text: title,
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item.name),
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
      scale: true,
      min: 0,
      max: 400,
      axisLabel: {
        formatter: (value: number) => {
          // Форматирование подписей оси Y
          //   return value.toFixed(0);
          return `${value} у.е.`;
        },
      },
    },
    series: [
      {
        name: 'Значение',
        type: 'bar',
        barWidth: '60%',
        data: data.map((item) => item.value),
        itemStyle: {
          color: color,
        },
        label: {
          show: true,
          position: 'top',
        },
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100,
      },
      {
        type: 'inside',
        xAxisIndex: [0],
        start: 0,
        end: 100,
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
  );
};
