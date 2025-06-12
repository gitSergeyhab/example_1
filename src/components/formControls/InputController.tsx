import { Input } from 'antd';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import type { SizeType } from '../../types/ui';

export interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  error?: string;
  type?: string;
  label?: string;
  size?: SizeType;
  disabled?: boolean;
  placeholder?: string;
  showSearch?: boolean;
}
export const InputController = <T extends FieldValues>({
  control,
  name,
  error,
  type,
  label,
  ...props
}: InputControllerProps<T>) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            type={type}
            {...field}
            {...props}
            status={error ? 'error' : undefined}
          />
        )}
      />
      {error && <p>{error}</p>}
    </>
  );
};
