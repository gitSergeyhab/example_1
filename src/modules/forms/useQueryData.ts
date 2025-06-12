import { useQuery } from '@tanstack/react-query';
import type { ExampleData } from './type';
import { wait } from '@/utils/wait';

const data: ExampleData[] = [
  {
    id: 1,
    name: 'Example 1',
    description: 'Description 1',
    isActive: true,
    isFree: false,
    price: 100,
    pointId: 1,
    pointName: 'Point 1',
    subData: [
      { name: 'Sub Data 1', description: 'Sub Description 1', value: 10 },
      { name: 'Sub Data 2', description: 'Sub Description 2', value: 20 },
    ],
  },
  {
    id: 2,
    name: 'Example 2',
    description: 'Description 2',
    isActive: false,
    isFree: true,
    price: 0,
    subData: [],
    pointId: 1,
    pointName: 'Point 1',
  },
];

const requestData = async () => {
  await wait(1000);
  return data;
};

export const useQueryData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: requestData,
  });

  return { data, isLoading };
};
