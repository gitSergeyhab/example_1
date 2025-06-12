import { wait } from '@/utils/wait';
import { useQuery } from '@tanstack/react-query';
import type { Point } from './type';

const points: Point[] = [
  {
    id: 1,
    name: 'Point 1',
    pointSubData: [
      { name: 'Sub Data 1', description: 'Sub Description 1', value: 10 },
    ],
  },
  {
    id: 2,
    name: 'Point 2',
    pointSubData: [
      { name: 'Sub Data 1', description: 'Sub Description 1', value: 10 },
      { name: 'Sub Data 2', description: 'Sub Description 2', value: 20 },
    ],
  },
  {
    id: 3,
    name: 'Point 3',
    pointSubData: [
      { name: 'Sub Data 1', description: 'Sub Description 1', value: 10 },
      { name: 'Sub Data 2', description: 'Sub Description 2', value: 20 },
      { name: 'Sub Data 3', description: 'Sub Description 3', value: 30 },
    ],
  },
];
const requestPoints = async () => {
  await wait(1000);
  return points;
};

export const useQueryPoints = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['points'],
    queryFn: requestPoints,
  });

  return { data, isLoading };
};
