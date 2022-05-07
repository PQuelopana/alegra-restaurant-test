import { deserialize, serialize } from 'bson';
import fs from 'fs';
import { glob } from 'glob';
import { Order } from '../../domain/Order';
import { OrderRepository } from '../../domain/OrderRepository';

export class FileOrderRepository implements OrderRepository {
  private FILE_PATH = `${__dirname}/orders`;

  async save(order: Order): Promise<void> {
    fs.promises.writeFile(this.filePath(order.id.value), serialize(order.toPrimitives()));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }

  async getList(): Promise<Order[]> {
    const orderFiles = glob.sync(__dirname + '/orders.*.repo');

    const orders: Order[] = orderFiles.map((orderFile) => {
      const order = deserialize(fs.readFileSync(orderFile)) as Order

      return order
    })

    return orders
  }
}
