import { Button } from 'antd';
import { FormInput } from '../../../components/formControls/FormInput';
import { useAppForm } from '../../../hooks/useAppForm';
import { tariffSchema, type TariffSchemaType } from '../form/tariffSchema';
import type { FC } from 'react';

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
      <FormInput
        control={control}
        name="name"
        error={errors.name?.message}
        label="Название"
      />
      <FormInput
        control={control}
        name="description"
        error={errors.description?.message}
        label="Описание"
      />
      <FormInput
        control={control}
        name="price"
        error={errors.price?.message}
        type="number"
        label="Цена"
      />
      {/* <FormInput control={control} name="currency" error={errors.currency?.message} /> */}
      {/* <FormInput control={control} name="features" error={errors.features?.message} /> */}
      {/* <FormInput control={control} name="isActive" error={errors.isActive?.message} /> */}
      <Button
        htmlType="submit"
        type="primary"
        loading={isPending}

        // onClick={() => console.log({ errors })}
      >
        {isNew ? 'Создать' : 'Обновить'}
      </Button>
    </form>
  );
};
