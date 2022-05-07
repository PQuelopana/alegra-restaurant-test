import { EmitterBus } from "../../../Shared/domain/EmitterBus";
import { Order } from "../domain/Order";

export class OrderCreatedEmitter {
  constructor(private readonly emitterBus: EmitterBus) {}

  emit(order: Order) {
    this.emitterBus.emit('new-order-created', order.toPrimitives())
  }
}
