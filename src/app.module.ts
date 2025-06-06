import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { KyselyModule } from 'nestjs-kysely';
import { LoggerModule } from 'nestjs-pino';
import { RepositoryModule } from '@infrastructure/repositories/repositories.module';
import { HealthController } from '@interfaces/controllers/health.controller';
import { ConfigsModule } from '@interfaces/modules/configs.module';
import { UsersModule } from '@interfaces/modules/users.module';
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

@Module({
  imports: [
    KyselyModule.forRoot({
      dialect: new PostgresDialect({
        pool: new Pool({
          database: process.env.DB_NAME,
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          port: Number(process.env.DB_PORT),
          max: 100,
        }),
      }),
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
            colorize: true,
            translateTime: 'HH:MM:ss.l',
            ignore: 'pid,hostname',
          },
        },
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      },
    }),
    TerminusModule,
    RepositoryModule,
    UsersModule,
    ConfigsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
