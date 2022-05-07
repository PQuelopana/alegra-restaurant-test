import { Order } from "../../../../../src/Contexts/Order/Orders/domain/Order";
import { CreateOrderRequest } from '../../../../../src/Contexts/Order/Orders/application/CreateOrderRequest';
import { OrderIdMother } from "./OrderIdMother";
import { OrderId } from "../../../../../src/Contexts/Shared/domain/Orders/OrderId";

export class OrderMother {
  static create(id: OrderId): Order {
    return new Order(id);
  }

  static fromRequest(request: CreateOrderRequest): Order {
    return this.create(
      OrderIdMother.create(request.id)
    );
  }

  static random(): Order {
    return this.create(OrderIdMother.random());
  }
}
