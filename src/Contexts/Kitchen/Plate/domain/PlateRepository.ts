import { Plate } from './Plate';

export interface PlateRepository {
  getRandom(): Promise<Plate>
}
