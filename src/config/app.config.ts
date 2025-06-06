import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export const AppConfigSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string().url(),

  MINIO_ENDPOINT: z.string(),
  MINIO_ACCESS_KEY: z.string(),
  MINIO_SECRET_KEY: z.string(),
  MINIO_PORT: z.coerce.number().default(9000),
  MINIO_USER: z.string(),
  MINIO_PASS: z.string(),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;

export default registerAs(
  'app',
  (): AppConfig => ({
    PORT: parseInt(process.env.PORT ?? '3302', 10),
    NODE_ENV: (process.env.NODE_ENV as any) ?? 'development',
    DATABASE_URL: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?schema=public`,

    MINIO_ENDPOINT: process.env.MINIO_ENDPOINT!,
    MINIO_ACCESS_KEY: process.env.MINIO_ACCESS_KEY!,
    MINIO_SECRET_KEY: process.env.MINIO_SECRET_KEY!,
    MINIO_PORT: parseInt(process.env.MINIO_PORT ?? '9000', 10),
    MINIO_USER: process.env.MINIO_USER!,
    MINIO_PASS: process.env.MINIO_PASS!,
  }),
);
