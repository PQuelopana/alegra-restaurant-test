import { Order } from '../../../../../src/Contexts/Order/Orders/domain/Order';
import { OrderRepository } from '../../../../../src/Contexts/Order/Orders/domain/OrderRepository';

export class OrderRepositoryMock implements OrderRepository {
  private mockSave = jest.fn();

  async save(order: Order): Promise<void> {
    this.mockSave(order);
  }

  assertLastSavedOrderIs(expected: Order): void {
    const mock = this.mockSave.mock;
    const lastSavedOrder = mock.calls[mock.calls.length - 1][0] as Order;

    expect(lastSavedOrder).toBeInstanceOf(Order);
    expect(lastSavedOrder.id.value).toEqual(expected.id.value);
  }

  async getList(): Promise<Order[]> {
    return []
  }
}
