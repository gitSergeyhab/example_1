import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tariffsApi } from '../mocks/tariffs';
import { message } from 'antd';
import type { Tariff } from '../types/tariff';

export const useEditTariff = (
  onSuccess?: () => void,
  onError?: (error: Error) => void
) => {
  const queryClient = useQueryClient();
  const prevData = queryClient.getQueryData(['tariffs']) as Tariff[];
  const { mutate, isPending, error } = useMutation({
    mutationFn: ({
      id,
      updateData,
    }: {
      id: string;
      updateData: Partial<Tariff>;
    }) => tariffsApi.updateTariff(id, updateData),
    onSuccess: (response) => {
      const index = prevData.findIndex((t) => t.id === response.id);
      const updatedTariffs = [
        ...prevData.slice(0, index),
        response,
        ...prevData.slice(index + 1),
      ];

      console.log({ prevData, updatedTariffs, index });
      queryClient.setQueryData(['tariffs'], updatedTariffs);
      onSuccess?.();
      message.success('Тариф успешно изменен');
    },
    onError: (error) => {
      onError?.(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tariffs'] });
    },
  });

  return {
    editTariff: mutate,
    isTariffEditPending: isPending,
    tariffEditError: error,
  };
};
