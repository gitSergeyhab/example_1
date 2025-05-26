import { Select } from 'antd';
import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path } from 'react-hook-form';
import type { SelectOption, SizeType } from '../../types/ui';

export interface SelectControllerProps<T extends FieldValues> {
  control: Control<T>;
  size?: SizeType;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
  placeholder?: string;
  width?: 'auto' | 'full';
  error?: string;
  showSearch?: boolean;
}

export const SelectController = <T extends FieldValues>({
  control,
  name,
  error,
  label,
  ...props
}: SelectControllerProps<T>) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label>{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} {...props} status={error ? 'error' : undefined} />
      )}
    />
    {error && <p>{error}</p>}
  </div>
);
