import { Order } from '../entities/order.entity';

export abstract class OrderRepository {
  abstract findById(id: string): Promise<Order | null>;
  abstract create(
    order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order>;
  abstract update(id: string, order: Partial<Order>): Promise<Order>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<Order[]>;
}
