import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { OrderPlateIngredientId } from '../../../Shared/domain/OrderPlateIngredients/OrderPlateIngredientId';
import { OrderPlateCreatedDomainEvent } from '../../../Shared/domain/OrderPlates/OrderPlateCreatedDomainEvent';
import { OrderPlate } from '../../OrdersPlatePrepare/domain/OrderPlate';
import { PlateIngredient } from '../../PlateIngredients/domain/PlateIngredient';
import { OrderPlateIngredient } from './OrderPlateIngredient';

export class ListOrderPlateIngredient extends AggregateRoot {
  readonly elements: OrderPlateIngredient[]
  
  constructor(orderPlate: OrderPlate, plateIngredients: PlateIngredient[]) {
    super()

    this.elements = plateIngredients.map((plateIngredient) => new OrderPlateIngredient(
      OrderPlateIngredientId.random(),
      orderPlate.id,
      plateIngredient.ingredientId,
      plateIngredient.quantity
    ))
  }

  static create(orderPlate: OrderPlate, plateIngredients: PlateIngredient[]): ListOrderPlateIngredient {
    const orderPlateIngredientList = new ListOrderPlateIngredient(orderPlate, plateIngredients);

    orderPlateIngredientList.record(
      new OrderPlateCreatedDomainEvent({
        ...orderPlate.toPrimitives(),
        plateIngredients: JSON.stringify(plateIngredients.map((plateIngredient) => plateIngredient.toPrimitives())),
      })
    );

    return orderPlateIngredientList;
  }

  toPrimitives() {
    throw new Error('Method not implemented.');
  }
}