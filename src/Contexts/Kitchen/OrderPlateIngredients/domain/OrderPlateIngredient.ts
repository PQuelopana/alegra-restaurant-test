import { IngredientId } from "../../../Shared/domain/Ingredient/IngredientId";
import { OrderPlateIngredientId } from "../../../Shared/domain/OrderPlateIngredients/OrderPlateIngredientId";
import { OrderPlateId } from "../../../Shared/domain/OrderPlates/OrderPlateId";
import { PlateIngredient } from '../../PlateIngredients/domain/PlateIngredient';
import { OrderPlateIngredientQuantity } from "./OrderPlateIngredientQuantity";

export class OrderPlateIngredient {
  constructor(
    readonly id: OrderPlateIngredientId,
    readonly orderPlateId: OrderPlateId,
    readonly ingredientId: IngredientId,
    readonly quantity: OrderPlateIngredientQuantity
  ) {}

  static createList(orderPlateId: OrderPlateId, plateIngredients: PlateIngredient[]): OrderPlateIngredient[] {
    return plateIngredients.map((plateIngredient) => new OrderPlateIngredient(
      OrderPlateIngredientId.random(),
      orderPlateId,
      plateIngredient.ingredientId,
      plateIngredient.quantity
    ))
  }
}
