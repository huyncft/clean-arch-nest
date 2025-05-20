import { Order } from '../entities/order.entity';

export interface IOrderRepository {
  findById(id: string): Promise<Order | null>;
  create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order>;
  update(id: string, orderData: Partial<Order>): Promise<Order>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Order[]>;
}
