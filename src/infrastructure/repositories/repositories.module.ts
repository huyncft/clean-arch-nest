import { Global, Module } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { RepositoryTokens } from '@domain/constants/repository.tokens';
import { KyselyService } from '@infrastructure/database/kysely/kysely.service';

@Global()
@Module({
  providers: [
    KyselyService,
    {
      provide: RepositoryTokens.ORDER_REPOSITORY,
      useClass: OrderRepository,
    },
  ],
  exports: [RepositoryTokens.ORDER_REPOSITORY],
})
export class RepositoryModule {}
