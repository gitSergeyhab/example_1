import { Input } from 'antd';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';

export interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  error?: string;
  type?: string;
  label?: string;
}
export const FormInput = <T extends FieldValues>({
  control,
  name,
  error,
  type,
  label,
}: FormInputProps<T>) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input type={type} {...field} />}
      />
      <p>{error || 'nope'}</p>
    </>
  );
};
