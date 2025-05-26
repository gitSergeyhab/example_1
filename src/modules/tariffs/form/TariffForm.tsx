import { Button } from 'antd';
import { InputController } from '@/components/formControls/InputController';
import { useAppForm } from '@/hooks/useAppForm';
import { tariffSchema, type TariffSchemaType } from '../form/tariffSchema';
import type { FC } from 'react';
import { SelectController } from '@/components/formControls/SelectController';
import { SwitchController } from '@/components/formControls/SwitchController';

export interface TariffFormProps {
  isNew?: boolean;
  defaultValues?: TariffSchemaType;
  onSubmit: (data: TariffSchemaType) => void;
  isPending?: boolean;
}

export const TariffForm: FC<TariffFormProps> = ({
  isNew,
  defaultValues,
  onSubmit,
  isPending,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useAppForm({ schema: tariffSchema, defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputController
        control={control}
        name="name"
        error={errors.name?.message}
        label="Название"
      />
      <InputController
        control={control}
        name="description"
        error={errors.description?.message}
        label="Описание"
      />
      <InputController
        control={control}
        name="price"
        error={errors.price?.message}
        type="number"
        label="Цена"
      />
      <SelectController
        control={control}
        name="currency"
        label="Валюта"
        error={errors.currency?.message}
        options={[
          { label: 'RUB', value: 'RUB' },
          { label: 'USD', value: 'USD' },
        ]}
      />
      <SwitchController
        control={control}
        name="isActive"
        error={errors.isActive?.message}
        label="Активен"
      />
      <Button
        htmlType="submit"
        type="primary"
        loading={isPending}
        style={{ marginTop: 20 }}

        // onClick={() => console.log({ errors })}
      >
        {isNew ? 'Создать' : 'Обновить'}
      </Button>
    </form>
  );
};
