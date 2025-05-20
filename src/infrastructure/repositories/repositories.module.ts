import { Global, Module } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { PrismaService } from '@infrastructure/database/prisma.service';

@Global()
@Module({
  providers: [PrismaService, OrderRepository],
  exports: [OrderRepository],
})
export class RepositoryModule {}
