export class Order {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  total: number;
  items: OrderItem[];
}

export class OrderItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
}
