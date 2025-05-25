import type { FC } from 'react';
import type { Tariff } from '../../../types/tariff';
import { TariffForm } from '../form/TariffForm';
import type { TariffSchemaType } from '../form/tariffSchema';
import { useEditTariff } from '../../../hooks/useEditTariff';

interface EditModalContentTariffProps {
  closeModal: () => void;
  tariff: Tariff;
  onError?: (error: Error) => void;
}
export const EditModalContentTariff: FC<EditModalContentTariffProps> = ({
  closeModal,
  tariff,
  onError,
}) => {
  const { editTariff, isTariffEditPending } = useEditTariff(
    closeModal,
    onError
  );

  const onSubmit = (data: TariffSchemaType) =>
    editTariff({ id: tariff.id, updateData: data });

  return (
    <div>
      <h3> {'Редактирование тарифа'}</h3>
      <TariffForm
        defaultValues={tariff as TariffSchemaType}
        isPending={isTariffEditPending}
        onSubmit={onSubmit}
        isNew={false}
      />
    </div>
  );
};
