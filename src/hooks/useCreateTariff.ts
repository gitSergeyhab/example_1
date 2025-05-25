import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tariffsApi } from '../mocks/tariffs';
import { message } from 'antd';
import type { Tariff } from '../types/tariff';

export const useCreateTariff = (
  onSuccess?: () => void,
  onError?: (error: Error) => void
) => {
  const queryClient = useQueryClient();
  const prevData = queryClient.getQueryData(['tariffs']) as Tariff[];
  const { mutate, isPending, error } = useMutation({
    mutationFn: tariffsApi.createTariff,
    onSuccess: (response) => {
      queryClient.setQueryData(['tariffs'], [response, ...prevData]);
      onSuccess?.();
      message.success('Тариф успешно добавлен');
    },
    onError: (error) => {
      onError?.(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tariffs'] });
    },
  });

  return {
    createTariff: mutate,
    isTariffCreatePending: isPending,
    tariffCreareError: error,
  };
};
