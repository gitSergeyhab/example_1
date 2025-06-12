import { useAppForm } from '@/hooks/useAppForm';
import exampleDataSchema, {
  type ExampleDataSchemaEdit,
} from './exampleDataSchema';
import type { Point } from './type';
import { InputController } from '@/components/formControls/InputController';
import { SelectController } from '@/components/formControls/SelectController';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { SwitchController } from '@/components/formControls/SwitchController';
import { SubExampleFields } from './SubExampleFields';
export interface FormExampleProps extends PropsWithChildren {
  defaultValues?: Partial<ExampleDataSchemaEdit>;
  onSubmit: (data: Partial<ExampleDataSchemaEdit>) => void;
  points: Point[];
}
export const FormExample: React.FC<FormExampleProps> = ({
  points,

  onSubmit,
  defaultValues,
  children,
}) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useAppForm({
    schema: exampleDataSchema,
    defaultValues,
  });

  const pointOptions = points.map((point) => ({
    value: point.id,
    label: point.name,
  }));

  const selectedPointId = watch('pointId');
  const isFree = watch('isFree');

  const [isPriceDisabled, setIsPriceDisabled] = useState(false);

  useEffect(() => {
    if (selectedPointId) {
      const selectedPoint = points.find((p) => p.id === selectedPointId);
      const newSubData = selectedPoint?.pointSubData || [];
      setValue('subData', newSubData);
    }
  }, [selectedPointId, points, setValue]);

  useEffect(() => {
    if (isFree) {
      setValue('price', 0);
    }
    setIsPriceDisabled(Boolean(isFree));
  }, [isFree, selectedPointId, points, setValue]);

  // const subData =

  return (
    <form style={{ height: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
        <InputController
          control={control}
          name="name"
          label="Name"
          error={errors.name?.message}
        />
        <InputController
          control={control}
          name="description"
          label="Description"
          error={errors.description?.message}
        />
        <InputController
          control={control}
          name="price"
          label="Price"
          type="number"
          disabled={isPriceDisabled}
          error={errors.price?.message}
        />

        <SelectController
          control={control}
          name="pointId"
          label="Point"
          options={pointOptions}
          error={errors.pointId?.message}
        />
        <SwitchController
          control={control}
          name="isActive"
          label="Active"
          error={errors.isActive?.message}
        />
        <SwitchController
          control={control}
          name="isFree"
          label="Free"
          error={errors.isFree?.message}
        />
        <SubExampleFields control={control} errors={errors} />
      </div>

      {children}
    </form>
  );
};
