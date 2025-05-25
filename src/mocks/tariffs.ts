import type { Tariff } from '../types/tariff';

let mockTariffs: Tariff[] = [
  {
    id: '1',
    name: 'Базовый',
    description: 'Доступ к основным функциям сервиса',
    price: 500,
    currency: 'RUB',
    features: ['Функция 1', 'Функция 2', 'Поддержка'],
    isActive: true,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    name: 'Стандарт',
    description: 'Расширенный доступ с дополнительными возможностями',
    price: 1000,
    currency: 'RUB',
    features: ['Функция 1', 'Функция 2', 'Функция 3', 'Приоритетная поддержка'],
    isActive: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15'),
  },
  {
    id: '3',
    name: 'Премиум',
    description: 'Полный доступ ко всем функциям сервиса',
    price: 2000,
    currency: 'RUB',
    features: [
      'Все функции',
      'Персональный менеджер',
      'Круглосуточная поддержка',
    ],
    isActive: true,
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-02-01'),
  },
  {
    id: '4',
    name: 'Бизнес',
    description: 'Для корпоративных клиентов',
    price: 5000,
    currency: 'RUB',
    features: ['Все функции', 'Неограниченные пользователи', 'API доступ'],
    isActive: true,
    createdAt: new Date('2023-02-15'),
    updatedAt: new Date('2023-02-15'),
  },
  {
    id: '5',
    name: 'Эконом',
    description: 'Минимальный доступ для ознакомления',
    price: 200,
    currency: 'RUB',
    features: ['Ограниченная функциональность', 'Базовая поддержка'],
    isActive: true,
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-03-01'),
  },
  {
    id: '6',
    name: 'Пробный',
    description: 'Бесплатный тариф на 14 дней',
    price: 0,
    currency: 'RUB',
    features: ['Полный доступ на 14 дней', 'Техническая поддержка'],
    isActive: true,
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2023-03-15'),
  },
  {
    id: '7',
    name: 'Студенческий',
    description: 'Специальное предложение для студентов',
    price: 300,
    currency: 'RUB',
    features: ['Функция 1', 'Функция 2', 'Поддержка'],
    isActive: true,
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-04-01'),
  },
  {
    id: '8',
    name: 'Годовой',
    description: 'Годовая подписка со скидкой',
    price: 18000,
    currency: 'RUB',
    features: ['Все функции', 'Скидка 10%', 'Приоритетная поддержка'],
    isActive: true,
    createdAt: new Date('2023-04-15'),
    updatedAt: new Date('2023-04-15'),
  },
  {
    id: '9',
    name: 'Международный',
    description: 'Для использования за пределами РФ',
    price: 50,
    currency: 'USD',
    features: [
      'Все функции',
      'Поддержка на английском',
      'Международные платежи',
    ],
    isActive: true,
    createdAt: new Date('2023-05-01'),
    updatedAt: new Date('2023-05-01'),
  },
  {
    id: '10',
    name: 'Архивный',
    description: 'Старый тариф, больше не доступен для новых пользователей',
    price: 800,
    currency: 'RUB',
    features: ['Функция 1', 'Функция 2'],
    isActive: false,
    createdAt: new Date('2022-12-01'),
    updatedAt: new Date('2023-01-01'),
  },
];

// api.ts

// Имитация задержки API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const tariffsApi = {
  async getTariffs(): Promise<Tariff[]> {
    await delay(4500);
    return [...mockTariffs]; // Возвращаем копию массива
  },

  async getTariffById(id: string): Promise<Tariff | undefined> {
    await delay(300);
    const tariff = mockTariffs.find((t) => t.id === id);
    return tariff ? { ...tariff } : undefined; // Возвращаем копию объекта
  },

  async createTariff(
    newTariff: Omit<Tariff, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Tariff> {
    await delay(700);
    if (newTariff.price < 5) {
      throw new Error('Price must be greater than 4');
    }
    const tariff: Tariff = {
      ...newTariff,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockTariffs = [tariff, ...mockTariffs]; // Создаем новый массив
    return { ...tariff }; // Возвращаем копию объекта
  },

  async updateTariff(
    id: string,
    updateData: Partial<Omit<Tariff, 'id' | 'createdAt'>>
  ): Promise<Tariff> {
    await delay(600);
    const index = mockTariffs.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Tariff not found');
    }

    const updatedTariff = {
      ...mockTariffs[index],
      ...updateData,
      updatedAt: new Date(),
    };

    mockTariffs = [
      ...mockTariffs.slice(0, index),
      updatedTariff,
      ...mockTariffs.slice(index + 1),
    ]; // Создаем новый массив

    return { ...updatedTariff }; // Возвращаем копию объекта
  },

  async deleteTariff(id: string | number): Promise<void> {
    await delay(1000);
    const index = mockTariffs.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error('Tariff not found');
    }

    mockTariffs = [
      ...mockTariffs.slice(0, index),
      ...mockTariffs.slice(index + 1),
    ]; // Создаем новый массив
  },
};
