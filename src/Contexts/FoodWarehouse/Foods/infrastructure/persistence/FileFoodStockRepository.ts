import { IngredientId } from '../../../../Shared/domain/Ingredient/IngredientId';
import { FoodStock } from '../../domain/FoodStock';
import { FoodStockRepository } from '../../domain/FoodStockRepository';
import { mockIngredients } from '../../../../Kitchen/PlateIngredients/infrastructure/persistence/FilePlateIngredientRepository';

const mockFoodStock = mockIngredients.map((ingredient) => FoodStock.fromPrimitives({
  id: ingredient.id.value,
  ingredientId: ingredient.id.value,
  stockPhysical: 5,
}))

export class FileFoodStockRepository implements FoodStockRepository{
  async save(foodStock: FoodStock): Promise<void> {
    const index = mockFoodStock.findIndex((mockFoodStock) => mockFoodStock.id.isEqualTo(foodStock.id))

    mockFoodStock[index] = foodStock
  }

  async getByIngredientId(ingredientId: IngredientId): Promise<FoodStock> {
    return mockFoodStock.filter((foodStock) => foodStock.ingredientId.isEqualTo(ingredientId))[0] // use filter instead find because the last one return the class or undefined
  }
}
