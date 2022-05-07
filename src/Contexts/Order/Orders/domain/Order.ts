import { OrderId } from "../../../Shared/domain/Orders/OrderId";
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { OrderCreatedDomainEvent } from "../../../Shared/domain/Orders/OrderCreatedDomainEvent";

export class Order extends AggregateRoot {
  constructor(readonly id: OrderId) {
    super()
  }

  static create(id: OrderId): Order {
    const order = new Order(id);

    order.record(
      new OrderCreatedDomainEvent({
        id: order.id.value,
      })
    );

    return order;
  }

  static fromPrimitives(plainData: { id: string }): Order {
    return new Order( new OrderId(plainData.id) );
  }

  toPrimitives() {
    return {
      id: this.id.value,
    };
  }
}
