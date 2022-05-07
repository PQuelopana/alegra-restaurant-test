import { DomainEvent } from "../../../../../src/Contexts/Shared/domain/DomainEvent";
import { DomainEventSubscriber } from "../../../../../src/Contexts/Shared/domain/DomainEventSubscriber";
import { EventBus } from "../../../../../src/Contexts/Shared/domain/EventBus";
import { DomainEventMapping } from "../../../../../src/Contexts/Shared/infrastructure/EventBus/DomainEventMapping";

export class EventBusMock implements EventBus {
  setDomainEventMapping(domainEventMapping: DomainEventMapping): void {
    throw new Error("Method not implemented.");
  }

  async publish(events: DomainEvent[]): Promise<void> {
    
  }

  addSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void {
    throw new Error("Method not implemented.");
  }
  
  start(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
