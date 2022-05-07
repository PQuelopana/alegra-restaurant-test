import { EventBus } from "../../../Shared/domain/EventBus";
import { OrderId } from "../../../Shared/domain/Orders/OrderId";
import { OrderPlate } from "../domain/OrderPlate";
import { OrderPlateRepository } from "../domain/OrderPlateRepository";
import { PlateIngredientRepository } from '../../PlateIngredients/domain/PlateIngredientRepository';
import { PlateRepository } from '../../Plate/domain/PlateRepository';
import { OrderPlateIngredientRepository } from "../../OrderPlateIngredients/domain/OrderPlateIngredientRepository";
import { ListOrderPlateIngredient } from "../../OrderPlateIngredients/domain/ListOrderPlateIngredient";

export class OrdersPlatePreparer {
  constructor(
    private repository: OrderPlateRepository,
    private plateRepository: PlateRepository,
    private plateIngredientRepository: PlateIngredientRepository,
    private orderPlateIngredientRepository: OrderPlateIngredientRepository,
    private bus: EventBus
  ) {}

  async run(orderId: OrderId) {
    const plateRandom = await this.plateRepository.getRandom()

    const orderPlate = OrderPlate.create(
      orderId,
      plateRandom.id
    )

    await this.repository.save(orderPlate);

    await this.orderPlateIngredientsCreator(orderPlate)
  }

  private async orderPlateIngredientsCreator(orderPlate: OrderPlate) {
    const plateIngredients = await this.plateIngredientRepository.getListByPlate(orderPlate.plateId)
    
    const orderPlateIngredients = ListOrderPlateIngredient.create(orderPlate, plateIngredients)

    for (const orderPlateIngredient of orderPlateIngredients.elements) {
      await this.orderPlateIngredientRepository.save(orderPlateIngredient)
    }

    await this.bus.publish(orderPlateIngredients.pullDomainEvents())
  }
}
