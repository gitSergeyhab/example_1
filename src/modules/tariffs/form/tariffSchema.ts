import { z } from 'zod';

export const tariffSchema = z.object({
  name: z
    .string({ required_error: 'Обязательное поле' })
    .min(3, 'Минимум 3 символа')
    .max(50, 'Максимум 50 символов'),
  description: z
    .string({ required_error: 'Обязательное поле' })
    .min(3, 'Минимум 3 символа')
    .max(200, 'Максимум 200 символов'),
  price: z.coerce
    .number({ required_error: 'Обязательное поле' })
    .refine((value) => !isNaN(value), 'Введите число')
    .refine((value) => value >= 0, 'Минимум 0'),
  currency: z
    .enum(['RUB', 'USD'], { required_error: 'Обязательное поле' })
    .optional(),
  features: z
    .array(z.string(), { required_error: 'Обязательное поле' })
    .optional(),
  isActive: z.boolean({ required_error: 'Обязательное поле' }).optional(),
});

export type TariffSchemaType = z.infer<typeof tariffSchema>;
