import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/infrastructure/database/kysely/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?schema=public`,
  },
  migrations: {
    table: 'migrations',
    schema: 'public',
    prefix: 'timestamp',
  },
});
