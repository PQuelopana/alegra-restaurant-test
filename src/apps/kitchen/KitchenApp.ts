import { Definition } from "node-dependency-injection";
import { DomainEvent } from "../../Contexts/Shared/domain/DomainEvent";
import { DomainEventSubscriber } from "../../Contexts/Shared/domain/DomainEventSubscriber";
import { EventBus } from "../../Contexts/Shared/domain/EventBus";
import { DomainEventMapping } from "../../Contexts/Shared/infrastructure/EventBus/DomainEventMapping";
import container from "./dependency-injection";

export class KitchenApp {
  async start() {
    await this.registerSubscribers()
  }

  private async registerSubscribers() {
    const eventBus = container.get('Shared.EventBus') as EventBus;
    const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Map<String, Definition>;
    const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

    subscriberDefinitions.forEach((value: any, key: any) => {
      try {
        const subscriber = container.get(key)
        subscribers.push(subscriber)
      } catch (error) {
        console.log(error)
      }
    }); //TODO: change for map
    const domainEventMapping = new DomainEventMapping(subscribers);

    eventBus.setDomainEventMapping(domainEventMapping);
    eventBus.addSubscribers(subscribers);

    await eventBus.start();
    console.log('Kitchen App is running')
  }
}
