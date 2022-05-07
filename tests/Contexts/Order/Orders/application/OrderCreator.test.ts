import { OrderRepositoryMock } from '../__mocks__/OrderRepositoryMock';
import { OrderCreator } from '../../../../../src/Contexts/Order/Orders/application/OrderCreator';
import { CreateOrderRequestMother } from './CreateOrderRequestMother';
import { OrderMother } from '../domain/OrderMother';
import { EventBusMock } from '../__mocks__/EventBusMock';
import { EmitterBusMockup } from '../__mocks__/EmitterBusMockup';
import { OrderCreatedEmitter } from '../../../../../src/Contexts/Order/Orders/application/OrderCreatedEmitter';

let repository: OrderRepositoryMock;
let creator: OrderCreator;
let eventBus: EventBusMock
let emitterBus: EmitterBusMockup
let orderCreatedEmitter: OrderCreatedEmitter

beforeEach(() => {
  repository = new OrderRepositoryMock();
  eventBus = new EventBusMock()
  emitterBus = new EmitterBusMockup()
  orderCreatedEmitter = new OrderCreatedEmitter(emitterBus)

  creator = new OrderCreator(repository, eventBus, orderCreatedEmitter);
});

describe('OrderCreator', () => {
  it('should create a valid order', async () => {
    const request = CreateOrderRequestMother.random();

    const order = OrderMother.fromRequest(request);

    await creator.run(request);

    repository.assertLastSavedOrderIs(order);
  });
});
