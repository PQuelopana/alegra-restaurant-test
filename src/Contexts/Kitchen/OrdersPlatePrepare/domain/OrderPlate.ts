import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { OrderId } from "../../../Shared/domain/Orders/OrderId";
import { PlateId } from "../../Shared/domain/Plates/PlateId";
import { OrderPlateId } from "../../../Shared/domain/OrderPlates/OrderPlateId";

export class OrderPlate extends AggregateRoot {
  readonly id: OrderPlateId

  constructor(
    readonly orderId: OrderId,
    readonly plateId: PlateId,
  ) {
    super()

    this.id = OrderPlateId.random()
  }

  static create(orderId: OrderId, plateId: PlateId): OrderPlate {
    const orderPlate = new OrderPlate(orderId, plateId);

    return orderPlate;
  }

  static fromPrimitives(plainData: { orderId: string, plateId: string }): OrderPlate {
    return new OrderPlate(
      new OrderId(plainData.orderId),
      new PlateId(plainData.plateId)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      orderId: this.orderId.value,
      plateId: this.plateId.value
    };
  }
}
