import { Switch } from 'antd';
import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface SwitchControllerProps<T extends FieldValues> {
  control: Control<T>;
  size?: 'small' | 'default';
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  error?: string;
  defaultChecked?: boolean;
}

export const SwitchController = <T extends FieldValues>({
  control,
  name,
  error,
  label,
  ...props
}: SwitchControllerProps<T>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} {...props} />}
        />
        <label>{label}</label>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
};
