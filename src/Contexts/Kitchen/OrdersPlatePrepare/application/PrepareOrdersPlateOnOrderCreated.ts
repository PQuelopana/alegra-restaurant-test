import { DomainEventClass } from '../../../Shared/domain/DomainEvent';
import { DomainEventSubscriber } from '../../../Shared/domain/DomainEventSubscriber';
import { OrderCreatedDomainEvent } from '../../../Shared/domain/Orders/OrderCreatedDomainEvent';
import { OrderId } from '../../../Shared/domain/Orders/OrderId';
import { OrdersPlatePreparer } from './OrdersPlatePreparer';

export class PrepareOrdersPlateOnOrderCreated implements DomainEventSubscriber<OrderCreatedDomainEvent> {
  constructor(private preparer: OrdersPlatePreparer) {}

  subscribedTo(): DomainEventClass[] {
    return [OrderCreatedDomainEvent];
  }

  async on(domainEvent: OrderCreatedDomainEvent) {
    await this.preparer.run(new OrderId(domainEvent.aggregateId));
  }
}
