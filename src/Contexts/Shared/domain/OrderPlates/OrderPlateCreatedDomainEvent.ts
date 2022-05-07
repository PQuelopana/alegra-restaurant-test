import { DomainEvent } from '../DomainEvent';

type CreateOrderPlateDomainEventBody = {// TODO: should extend from type with eventName and id properties?
  readonly eventName: string;
  readonly id: string;
  readonly orderId: string
  readonly plateId: string
  readonly plateIngredients: string
};

export class OrderPlateCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'orderPlate.created';

  readonly orderId: string
  readonly plateId: string
  readonly plateIngredients: string

  constructor({
    id,
    eventId,
    orderId,
    plateId,
    plateIngredients,
    occurredOn
  }: {
    id: string;
    eventId?: string;
    orderId: string
    plateId: string
    plateIngredients: string
    occurredOn?: Date;
  }) {
    super(OrderPlateCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);

    this.orderId = orderId
    this.plateId = plateId
    this.plateIngredients = plateIngredients
  }

  toPrimitive(): CreateOrderPlateDomainEventBody {
    const { aggregateId } = this;
    return {
      id: aggregateId,
      eventName: OrderPlateCreatedDomainEvent.EVENT_NAME,
      orderId: this.orderId,
      plateId: this.plateId,
      plateIngredients: this.plateIngredients,
    };
  }

  static fromPrimitives(
    aggregateId: string,
    body: CreateOrderPlateDomainEventBody,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new OrderPlateCreatedDomainEvent({
      id: aggregateId,
      eventId,
      occurredOn,
      orderId: body.orderId,
      plateId: body.plateId,
      plateIngredients: body.plateIngredients,
    });
  }
}
