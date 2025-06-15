export const salesData = [
  { month: 'Jan 2020', productA: 120, productB: 85 },
  { month: 'Feb 2020', productA: 135, productB: 92 },
  { month: 'Mar 2020', productA: 150, productB: 105 },
  { month: 'Apr 2020', productA: 142, productB: 110 },
  { month: 'May 2020', productA: 160, productB: 98 },
  { month: 'Jun 2020', productA: 155, productB: 105 },
  { month: 'Jul 2020', productA: 170, productB: 115 },
  { month: 'Aug 2020', productA: 165, productB: 120 },
  { month: 'Sep 2020', productA: 180, productB: 125 },
  { month: 'Oct 2020', productA: 175, productB: 130 },
  { month: 'Nov 2020', productA: 190, productB: 140 },
  { month: 'Dec 2020', productA: 200, productB: 150 },
  // ... и так далее до Dec 2024 (100+ записей)
];

// Генерация оставшихся данных (пример для 60 месяцев):
for (let year = 2021; year <= 2024; year++) {
  for (let month = 1; month <= 12; month++) {
    const monthName = new Date(year, month - 1).toLocaleString('en-US', {
      month: 'short',
    });
    const baseA = 200 + (year - 2020) * 30 + Math.sin(month) * 20;
    const baseB = 150 + (year - 2020) * 20 + Math.cos(month) * 15;
    salesData.push({
      month: `${monthName} ${year}`,
      productA: Math.round(baseA + Math.random() * 10),
      productB: Math.round(baseB + Math.random() * 8),
    });
  }
}

export const temperatureData = [
  { city: 'Moscow', month: 'Jan', temp: -10, humidity: 85 },
  { city: 'Moscow', month: 'Feb', temp: -8, humidity: 82 },
  { city: 'Moscow', month: 'Mar', temp: -2, humidity: 75 },
  // ... аналогично для других месяцев
  { city: 'Berlin', month: 'Jan', temp: 0, humidity: 88 },
  { city: 'Berlin', month: 'Feb', temp: 1, humidity: 85 },
  // ... ещё 100+ точек
];

// Автогенерация данных для двух городов (120 точек):
const cities = ['Moscow', 'Berlin'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

cities.forEach((city) => {
  months.forEach((month) => {
    const baseTemp =
      city === 'Moscow'
        ? -15 + months.indexOf(month) * 3
        : -2 + months.indexOf(month) * 2.5;
    temperatureData.push({
      city,
      month,
      temp: Math.round(baseTemp + (Math.random() * 6 - 3)),
      humidity: Math.round(70 + Math.random() * 20),
    });
  });
});
