import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().default('5000'),
  DATABASE_URL: z.string().url(),
  BCRYPT_SALT_ROUNDS: z.string().transform(Number),
});

dotenv.config({ path: path.join(process.cwd(), '.env') });

const env = envSchema.parse(process.env);

export default {
  port: env.PORT,
  database_url: env.DATABASE_URL,
  bcrypt_salt_rounds: env.BCRYPT_SALT_ROUNDS,
};
