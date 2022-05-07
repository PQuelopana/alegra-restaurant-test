import { IngredientId } from '../../../Shared/domain/Ingredient/IngredientId';
import { FoodStock } from './FoodStock';

export interface FoodStockRepository {
  save(foodStock: FoodStock): Promise<void>
  getByIngredientId(ingredientId: IngredientId): Promise<FoodStock>
}
