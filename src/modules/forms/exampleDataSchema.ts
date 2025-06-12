import { z } from 'zod';

export interface ExampleSubData {
  name: string;
  description: string;
  value: number;
}

export interface ExampleData {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  isFree: boolean;
  price: number;
  subData: ExampleSubData[];
  pointId: number;
  pointName: string;
}

const exampleSubDataSchema = z.object({
  name: z
    .string({ required_error: 'Обязательное поле' })
    .min(3, 'Минимум 3 символа')
    .max(50, 'Максимум 50 символов'),
  description: z
    .string({ required_error: 'Обязательное поле' })
    .min(3, 'Минимум 3 символа')
    .max(200, 'Максимум 200 символов'),
  value: z.coerce
    .number({ required_error: 'Обязательное поле' })
    .refine((value) => !isNaN(value), 'Введите число')
    .refine((value) => value >= 0, 'Минимум 0'),
});

const exampleDataSchema = z.object({
  name: z
    .string({ required_error: 'Обязательное поле' })
    .min(3, 'Минимум 3 символа')
    .max(50, 'Максимум 50 символов'),
  description: z
    .string({ required_error: 'Обязательное поле' })
    .min(3, 'Минимум 3 символа')
    .max(200, 'Максимум 200 символов'),
  isActive: z.boolean({ required_error: 'Обязательное поле' }).optional(),
  isFree: z.boolean({ required_error: 'Обязательное поле' }).optional(),
  price: z.coerce
    .number({
      required_error: 'Обязательное поле',
      invalid_type_error: 'Введите число',
    })
    .refine((value) => !isNaN(value), 'Введите число')
    .refine((value) => value >= 0, 'Минимум 0'),
  subData: z
    .array(exampleSubDataSchema, { required_error: 'Обязательное поле' })
    .optional(),
  pointId: z
    .number({ required_error: 'Обязательное поле' })
    .refine((value) => !isNaN(value), 'Введите число')
    .refine((value) => value >= 0, 'Минимум 0'),
});

export default exampleDataSchema;

export type ExampleDataSchemaEdit = z.infer<typeof exampleDataSchema>;
