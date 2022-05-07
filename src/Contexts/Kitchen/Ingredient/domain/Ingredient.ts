import { IngredientId } from "../../../Shared/domain/Ingredient/IngredientId";
import { IngredientName } from "./IngredientName";

export class Ingredient {
  constructor(
    readonly id: IngredientId,
    readonly name: IngredientName,
  ) {}

  static fromPrimitives(plainData: { id: string, name: string, stockPhysical: number }): Ingredient {
    return new Ingredient(
      new IngredientId(plainData.id),
      new IngredientName(plainData.name)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
    };
  }
}
