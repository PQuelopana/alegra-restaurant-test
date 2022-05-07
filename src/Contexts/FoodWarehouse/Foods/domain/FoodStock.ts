import { IngredientId } from '../../../Shared/domain/Ingredient/IngredientId';
import { FoodStockId } from './FoodStockId';
import { FoodStockOnHand } from './FoodStockOnHand';
import { FoodStockPhysical } from './FoodStockPhysical';

export class FoodStock {
  
  constructor(
    readonly id: FoodStockId,
    readonly ingredientId: IngredientId,
    readonly stockPhysical: FoodStockPhysical,
    readonly stockOnHand: FoodStockOnHand,
  ) {}

  static fromPrimitives(plainData: { id: string, ingredientId: string, stockPhysical: number }): FoodStock {
    return new FoodStock(
      new FoodStockId(plainData.id),
      new IngredientId(plainData.ingredientId),
      new FoodStockPhysical(plainData.stockPhysical),
      new FoodStockOnHand(plainData.stockPhysical)
    );
  }
}
