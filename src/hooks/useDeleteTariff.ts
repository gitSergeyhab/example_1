import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tariffsApi } from '../mocks/tariffs';
import { message } from 'antd';
import type { Tariff } from '../types/tariff';

export const useDeleteTariff = (
  onSuccess?: () => void,
  onError?: (error: Error) => void
) => {
  const queryClient = useQueryClient();
  const prevData = queryClient.getQueryData(['tariffs']) as Tariff[];

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: tariffsApi.deleteTariff,
    onSuccess: (_, vars) => {
      onSuccess?.();
      message.success('Тариф успешно удален');
      queryClient.setQueryData(
        ['tariffs'],
        prevData.filter((t) => t.id !== vars.toString())
      );
    },
    onError: (error) => {
      onError?.(error);
      // message.error(`Произошла ошибка при удалении тарифа: ${error.message}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tariffs'] });
    },
  });

  return {
    deleteTariff: mutateAsync,
    isTariffDeletingPending: isPending,
    tariffDeletingError: error,
  };
};
