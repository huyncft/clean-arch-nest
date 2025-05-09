import { Module } from '@nestjs/common';
import { CreateOrderUseCase } from '@application/use-cases/order/create-order.use-case';
import { OrderController } from '@interfaces/controllers/order.controller';

@Module({
  controllers: [OrderController],
  providers: [CreateOrderUseCase],
})
export class OrderModule {}
