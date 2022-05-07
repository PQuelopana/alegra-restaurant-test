import { EventBus } from '../../../Shared/domain/EventBus';
import { Order } from '../domain/Order';
import { OrderId } from '../../../Shared/domain/Orders/OrderId';
import { OrderRepository } from '../domain/OrderRepository';
import { CreateOrderRequest } from './CreateOrderRequest';
import { OrderCreatedEmitter } from './OrderCreatedEmitter';

export class OrderCreator {
  constructor(
    private readonly repository: OrderRepository,
    private readonly eventBus: EventBus,
    private readonly emitter: OrderCreatedEmitter
  ) {}

  async run(request: CreateOrderRequest): Promise<void> {
    const order = Order.create(
      new OrderId(request.id)
    );

    await this.repository.save(order)
    await this.eventBus.publish(order.pullDomainEvents())
    await this.emitter.emit(order)
  }
}
