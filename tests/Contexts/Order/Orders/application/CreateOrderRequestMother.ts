import { CreateOrderRequest } from "../../../../../src/Contexts/Order/Orders/application/CreateOrderRequest";
import { OrderId } from "../../../../../src/Contexts/Shared/domain/Orders/OrderId";
import { OrderIdMother } from "../domain/OrderIdMother";

export class CreateOrderRequestMother {
  static create(id: OrderId): CreateOrderRequest {
    return { id: id.value };
  }

  static random(): CreateOrderRequest {
    return this.create(OrderIdMother.random());
  }
}
