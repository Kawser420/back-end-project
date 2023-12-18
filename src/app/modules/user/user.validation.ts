import { z } from 'zod';

const orderValidationSchema = z.object({
  productName: z.string().min(1).max(50),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string().min(1).max(30).trim(),
  password: z.string().min(1).max(20).trim(),
  fullName: z.object({
    firstName: z.string().min(1).trim(),
    lastName: z.string().min(1).trim(),
  }),
  age: z.number().positive().int(),
  email: z.string().email().min(3).trim(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).min(1),
  address: z.object({
    street: z.string().min(1).trim(),
    city: z.string().min(1).trim(),
    country: z.string().min(1).trim(),
  }),
  orders: z.array(orderValidationSchema),
});

export default userValidationSchema;
