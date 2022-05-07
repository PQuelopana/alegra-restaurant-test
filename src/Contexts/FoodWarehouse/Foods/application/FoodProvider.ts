import { EventBus } from "../../../Shared/domain/EventBus";
import { PlateIngredient } from '../../../Kitchen/PlateIngredients/domain/PlateIngredient'; // TODO: should move to shared?
import { FoodStock } from '../domain/FoodStock';
import { FoodStockOnHand } from '../domain/FoodStockOnHand';
import { FoodStockRepository } from "../domain/FoodStockRepository";

export class FoodProvider {
  constructor(
    private repository: FoodStockRepository,
    private bus: EventBus
  ) {}

  async run(plateIngredients: PlateIngredient[]) {
    console.log(this.bus)
    const ingredientsToPurchase = []

    for (const plateIngredient of plateIngredients) {
      const foodStock = await this.repository.getByIngredientId(plateIngredient.ingredientId)

      const stockFounded = foodStock.stockOnHand.isEqualsAndBiggerThan(plateIngredient.quantity) ? plateIngredient.quantity : foodStock.stockOnHand

      if (stockFounded.value > 0) await this.separateStock(foodStock, stockFounded)

      const stockMissing = plateIngredient.quantity.getSubtract(stockFounded)

      if (stockMissing.value > 0) {
        ingredientsToPurchase.push({
          ...plateIngredient,
          quantity: stockMissing,
        })
      }
    }
  }

  private async separateStock(foodStock: FoodStock, quantity: FoodStockOnHand) {
    foodStock.stockOnHand.subtract(quantity)

    await this.repository.save(foodStock)
  }
}
