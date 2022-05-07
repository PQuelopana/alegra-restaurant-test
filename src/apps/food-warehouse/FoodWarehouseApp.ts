import { Definition } from "node-dependency-injection";
import { DomainEvent } from "../../Contexts/Shared/domain/DomainEvent";
import { DomainEventSubscriber } from "../../Contexts/Shared/domain/DomainEventSubscriber";
import { EventBus } from "../../Contexts/Shared/domain/EventBus";
import { DomainEventMapping } from "../../Contexts/Shared/infrastructure/EventBus/DomainEventMapping";
import container from "./dependency-injection";

export class FoodWarehouseApp {
  async start() {
    await this.registerSubscribers()
  }

  private async registerSubscribers() { // TODO: should move to shared?
    const eventBus = container.get('Shared.EventBus') as EventBus;
    const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Map<String, Definition>;
    const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

    subscriberDefinitions.forEach((value: any, key: any) => subscribers.push(container.get(key))); //TODO: change for map
    const domainEventMapping = new DomainEventMapping(subscribers);

    eventBus.setDomainEventMapping(domainEventMapping);
    eventBus.addSubscribers(subscribers);

    await eventBus.start();
    console.log('Food Warehouse App is running')
  }
}
