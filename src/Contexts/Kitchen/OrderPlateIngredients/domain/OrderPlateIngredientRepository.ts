import { OrderPlateIngredient } from "./OrderPlateIngredient";

export interface OrderPlateIngredientRepository {
  save(orderPlateIngredient: OrderPlateIngredient): Promise<void>
}
