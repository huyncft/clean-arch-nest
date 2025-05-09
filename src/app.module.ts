import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { LoggerModule } from 'nestjs-pino';
import { RepositoryModule } from '@infrastructure/repositories/repositories.module';
import { HealthController } from '@interfaces/controllers/health.controller';
import { OrderModule } from '@interfaces/modules/order.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    TerminusModule,
    RepositoryModule,
    OrderModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
