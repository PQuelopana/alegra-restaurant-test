import { PlateId } from '../../Shared/domain/Plates/PlateId';
import { PlateIngredient } from './PlateIngredient';

export interface PlateIngredientRepository {
  getListByPlate(plateId: PlateId): Promise<PlateIngredient[]>
}
