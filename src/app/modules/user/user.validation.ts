import { z } from 'zod';

const orderValidationSchema = z.object({
  productName: z.string().min(1, 'Product name is required'),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().positive('Quantity must be a positive number'),
});

const fullNameValidationSchema = z.object({
  firstName: z.string().min(1, 'First name is required').trim(),
  lastName: z.string().min(1, 'Last name is required').trim(),
});

const addressValidationSchema = z.object({
  street: z.string().min(1, 'Street is required').trim(),
  city: z.string().min(1, 'City is required').trim(),
  country: z.string().min(1, 'Country is required').trim(),
});

const userValidationSchema = z.object({
  userId: z
    .number()
    .int('User ID must be an integer')
    .positive('User ID must be a positive number'),
  username: z.string().min(1, 'Username is required').trim(),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .trim(),
  fullName: fullNameValidationSchema,
  age: z
    .number()
    .int('Age must be an integer')
    .positive('Age must be a positive number'),
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required')
    .trim(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string().min(1, 'Hobby cannot be empty')),
  address: addressValidationSchema,
  orders: z.array(orderValidationSchema).default([]),
});

export default userValidationSchema;
