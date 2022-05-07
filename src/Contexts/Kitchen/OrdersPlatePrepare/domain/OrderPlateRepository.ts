import { OrderPlate } from './OrderPlate';

export interface OrderPlateRepository {
  save(orderPlate: OrderPlate): Promise<void>;
}
