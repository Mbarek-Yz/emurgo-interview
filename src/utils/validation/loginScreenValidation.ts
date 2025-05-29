import {z} from 'zod';
import {translate} from '_i18n';

export const loginSchema = z.object({
  email: z
    .string({required_error: translate('error.required_field')})
    .min(1, translate('error.username_required')),
  password: z
    .string({required_error: translate('error.required_field')})
    .min(1, translate('error.password_required')),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
