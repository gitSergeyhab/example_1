import { InputController } from '@/components/formControls/InputController';
import { type ExampleDataSchemaEdit } from './exampleDataSchema';
import type { Point } from './type';

import type { FC, PropsWithChildren } from 'react';
import { useFieldArray, type Control, type FieldErrors } from 'react-hook-form';

export interface FormExampleProps extends PropsWithChildren {
  defaultValues?: Partial<ExampleDataSchemaEdit>;
  onSubmit: (data: Partial<ExampleDataSchemaEdit>) => void;
  points: Point[];
}

export interface SubExampleFieldsProps {
  control: Control<Partial<ExampleDataSchemaEdit>>;
  errors: FieldErrors<Partial<ExampleDataSchemaEdit>>;
}
export const SubExampleFields: FC<SubExampleFieldsProps> = ({
  control,
  errors,
}) => {
  const { fields } = useFieldArray({
    control,
    name: 'subData',
  });

  return (
    <div>
      <h3>Sub Data</h3>
      {fields.map((field, index) => (
        <div
          key={field.id}
          style={{
            marginBottom: 16,
            padding: 16,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
          }}
        >
          <InputController
            label="Название"
            control={control}
            name={`subData.${index}.name`}
            disabled
            error={errors.subData?.[index]?.name?.message}
          />
          <InputController
            label="Описание"
            control={control}
            name={`subData.${index}.description`}
            disabled
            error={errors.subData?.[index]?.description?.message}
          />
          <InputController
            label="Значение"
            control={control}
            name={`subData.${index}.value`}
            error={errors.subData?.[index]?.value?.message}
          />
        </div>
      ))}
    </div>
  );
};
