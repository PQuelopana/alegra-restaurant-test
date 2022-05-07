import { DomainEvent } from './DomainEvent';

export abstract class AggregateRoot {
  private domainEvents: Array<DomainEvent>;

  constructor() {
    this.domainEvents = [];
  }

  updateRecord(index: number, event: DomainEvent): void {
    this.domainEvents[index] = event
  }

  pullDomainEvents(): Array<DomainEvent> {
    const domainEvents = this.domainEvents.slice();
    this.domainEvents = [];

    return domainEvents;
  }

  record(event: DomainEvent): number {
    return this.domainEvents.push(event);
  }

  abstract toPrimitives(): any;
}
