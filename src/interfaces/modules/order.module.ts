import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from '@application/use-cases/order/create-order.use-case';
import { RepositoryModule } from '@infrastructure/repositories/repositories.module';
import { OrderController } from '@interfaces/controllers/order.controller';

@Module({
  imports: [RepositoryModule],
  controllers: [OrderController],
  providers: [CreateOrderUseCase],
})
export class OrderModule {}
