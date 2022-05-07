import { OrderRepository } from '../../../../../../src/Contexts/Order/Orders/domain/OrderRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { OrderMother } from '../../domain/OrderMother';
import container from '../../../../../../src/apps/order/dependency-injection/index';

const repository: OrderRepository = container.get('Order.Orders.domain.OrderRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Order.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('OrderRepository', () => {
  it('should save a order', async () => {
    const order = OrderMother.random();

    debugger
    await repository.save(order);
  })
})
