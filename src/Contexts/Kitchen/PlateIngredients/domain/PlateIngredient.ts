import { PlateId } from '../../Shared/domain/Plates/PlateId';
import { IngredientId } from '../../../Shared/domain/Ingredient/IngredientId';
import { PlateIngredientId } from '../../../Shared/domain/PlateIngredients/PlateIngredientId';
import { PlateIngredientQuantity } from './PlateIngredientQuantity';

export class PlateIngredient {

  constructor(
    readonly id: PlateIngredientId,
    readonly plateId: PlateId,
    readonly ingredientId: IngredientId,
    readonly quantity: PlateIngredientQuantity
  ) {}

  static fromPrimitives(plainData: { id: string, plateId: string, ingredientId: string, quantity: number }): PlateIngredient {
    return new PlateIngredient(
      new PlateIngredientId(plainData.id),
      new PlateId(plainData.plateId),
      new IngredientId(plainData.ingredientId),
      new PlateIngredientQuantity(plainData.quantity)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      plateId: this.plateId.value,
      ingredientId: this.ingredientId.value,
      quantity: this.quantity.value,
    };
  }
}
