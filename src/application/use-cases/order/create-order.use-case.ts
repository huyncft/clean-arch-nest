import { Injectable } from '@nestjs/common';
import { Order } from '@domain/entities/order.entity';
import { OrderRepository } from '@infrastructure/repositories/order.repository';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    return this.orderRepository.create(orderData);
  }
}
