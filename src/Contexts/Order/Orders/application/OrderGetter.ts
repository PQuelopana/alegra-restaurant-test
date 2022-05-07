import { Order } from "../domain/Order";
import { OrderRepository } from "../domain/OrderRepository";

export class OrderGetter {
  constructor(
    private readonly repository: OrderRepository
  ) {}

  async run(): Promise<Order[]> {
    const orders = await this.repository.getList()
    
    return orders
  }
}
