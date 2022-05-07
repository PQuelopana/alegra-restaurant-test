import { DomainEvent } from '../DomainEvent';

type ToPurchaseFoodStockMissingDomainEventBody = {// TODO: should extend from type with eventName and id properties?
  readonly eventName: string;
  readonly id: string;
  readonly orderId: string
  readonly plateId: string
  readonly plateIngredients: string
};

export class FoodStockToPurchaseDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'foodStockMissing.toPurchase';

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
    super(FoodStockToPurchaseDomainEvent.EVENT_NAME, id, eventId, occurredOn);

    this.orderId = orderId
    this.plateId = plateId
    this.plateIngredients = plateIngredients
  }

  toPrimitive(): ToPurchaseFoodStockMissingDomainEventBody {
    const { aggregateId } = this;
    return {
      id: aggregateId,
      eventName: FoodStockToPurchaseDomainEvent.EVENT_NAME,
      orderId: this.orderId,
      plateId: this.plateId,
      plateIngredients: this.plateIngredients,
    };
  }

  static fromPrimitives(
    aggregateId: string,
    body: ToPurchaseFoodStockMissingDomainEventBody,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new FoodStockToPurchaseDomainEvent({
      id: aggregateId,
      eventId,
      occurredOn,
      orderId: body.orderId,
      plateId: body.plateId,
      plateIngredients: body.plateIngredients,
    });
  }
}
