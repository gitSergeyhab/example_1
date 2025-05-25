import type { FC } from 'react';
import { DeleteModalContent } from '../../../components/modals/DeleteModalContent';
import { useDeleteTariff } from '../../../hooks/useDeleteTariff';
import type { Tariff } from '../../../types/tariff';

interface DeleteModalContentTariff {
  closeModal: () => void;
  tariff: Tariff;
  onError: (error: Error) => void;
}
export const DeleteModalContentTariff: FC<DeleteModalContentTariff> = ({
  closeModal,
  tariff,
  onError,
}) => {
  const { deleteTariff, isTariffDeletingPending } = useDeleteTariff(
    closeModal,
    onError
  );

  return (
    <DeleteModalContent
      text="Вы уверены, что хотите удалить тариф?"
      title="Удаление тарифа"
      closeModal={closeModal}
      onDelete={() => deleteTariff(tariff.id)}
      isLoading={isTariffDeletingPending}
    />
  );
};
