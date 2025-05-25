import type { FC } from 'react';
import type { Tariff } from '../../../types/tariff';
import { useCreateTariff } from '../../../hooks/useCreateTariff';
import { TariffForm } from '../form/TariffForm';
import type { TariffSchemaType } from '../form/tariffSchema';

interface CreateModalContentTariffProps {
  closeModal: () => void;
  onError?: (error: Error) => void;
}
export const CreateModalContentTariff: FC<CreateModalContentTariffProps> = ({
  closeModal,
  onError,
}) => {
  const { createTariff, isTariffCreatePending } = useCreateTariff(
    closeModal,
    onError
  );

  const onSubmit = (data: TariffSchemaType) => createTariff(data as Tariff);

  return (
    <div>
      <h3> {'Создание тарифа'}</h3>
      <TariffForm
        isPending={isTariffCreatePending}
        onSubmit={onSubmit}
        isNew={true}
      />
    </div>
  );
};
