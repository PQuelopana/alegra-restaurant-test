import { DomainEvent } from '../DomainEvent';

type CreateOrderDomainEventBody = {
  readonly eventName: string;
  readonly id: string;
};

export class OrderCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'order.created';

  constructor({
    id,
    eventId,
    occurredOn
  }: {
    id: string;
    eventId?: string;
    occurredOn?: Date;
  }) {
    super(OrderCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);
  }

  toPrimitive(): CreateOrderDomainEventBody {
    const { aggregateId } = this;
    return {
      eventName: OrderCreatedDomainEvent.EVENT_NAME,
      id: aggregateId
    };
  }

  static fromPrimitives(
    aggregateId: string,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new OrderCreatedDomainEvent({
      id: aggregateId,
      eventId,
      occurredOn
    });
  }
}
