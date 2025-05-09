import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderUseCase } from '@application/use-cases/order/create-order.use-case';
import { Order } from '@domain/entities/order.entity';
import { CreateOrderDto } from '@interfaces/dtos/order/create-order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
    type: Order,
  })
  async createOrder(@Body() orderData: CreateOrderDto): Promise<Order> {
    return this.createOrderUseCase.execute(orderData as any);
  }
}
