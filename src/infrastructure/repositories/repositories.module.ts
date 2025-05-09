import { Global, Module } from '@nestjs/common';
import { PrismaOrderRepository } from './order.repository';
import { OrderRepository } from '@domain/repositories/order.repository';
import { PrismaService } from '@infrastructure/database/prisma.service';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository,
    },
  ],
  exports: [OrderRepository],
})
export class RepositoryModule {}
