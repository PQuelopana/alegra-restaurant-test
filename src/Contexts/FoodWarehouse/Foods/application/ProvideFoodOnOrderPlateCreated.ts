import { DomainEventClass } from "../../../Shared/domain/DomainEvent";
import { DomainEventSubscriber } from "../../../Shared/domain/DomainEventSubscriber";
import { OrderPlateCreatedDomainEvent } from "../../../Shared/domain/OrderPlates/OrderPlateCreatedDomainEvent";
import { PlateIngredient } from '../../../Kitchen/PlateIngredients/domain/PlateIngredient';
import { FoodProvider } from "./FoodProvider";

export class ProvideFoodOnOrderPlateCreated implements DomainEventSubscriber<OrderPlateCreatedDomainEvent> {
  constructor(private preparer: FoodProvider) {}

  subscribedTo(): DomainEventClass[] {
    return [OrderPlateCreatedDomainEvent];
  }

  async on(domainEvent: OrderPlateCreatedDomainEvent) {
    const plateIngredients: PlateIngredient[] = JSON.parse(domainEvent.plateIngredients).map((plateIngrdientPrimitive: any) => PlateIngredient.fromPrimitives(plateIngrdientPrimitive))

    await this.preparer.run(plateIngredients);
  }
}
