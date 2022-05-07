import { PlateId } from '../../Shared/domain/Plates/PlateId';
import { PlateName } from "./PlateName";

export class Plate {
  constructor(
    readonly id: PlateId,
    readonly name: PlateName,
  ) {}

  static random(): Plate {
    return {
      id: PlateId.random(),
      name: PlateName.random()
    }
  }

  static fromPrimitives(plainData: { id: string, name: string }): Plate {
    return new Plate(
      new PlateId(plainData.id),
      new PlateName(plainData.name)
    );
  }
}
