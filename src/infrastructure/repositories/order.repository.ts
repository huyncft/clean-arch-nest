import { Injectable } from '@nestjs/common';
import { Order } from '@domain/entities/order.entity';
import { OrderRepository } from '@domain/repositories/order.repository';
import { PrismaService } from '@infrastructure/database/prisma.service';

@Injectable()
export class PrismaOrderRepository extends OrderRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async findById(id: string): Promise<Order | null> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
    return order as Order;
  }

  async create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    const { items, ...order } = orderData;
    const createdOrder = await this.prisma.order.create({
      data: {
        ...order,
        items: {
          create: items,
        },
      },
      include: { items: true },
    });
    return createdOrder as Order;
  }

  async update(id: string, orderData: Partial<Order>): Promise<Order> {
    const { items, ...order } = orderData;
    const updatedOrder = await this.prisma.order.update({
      where: { id },
      data: {
        ...order,
        items: {
          deleteMany: {},
          create: items || [],
        },
      },
      include: { items: true },
    });
    return updatedOrder as Order;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.order.delete({
      where: { id },
    });
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      include: { items: true },
    });
    return orders as Order[];
  }
}
