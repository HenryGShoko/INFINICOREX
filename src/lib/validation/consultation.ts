import { z } from 'zod';

export const consultationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),
  companyName: z
    .string()
    .trim()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be under 100 characters'),
  serviceInterest: z
    .string()
    .min(1, 'Please select a service'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
