import { Plate } from "../../domain/Plate";
import { PlateRepository } from "../../domain/PlateRepository";

export const mockPlates = [
  Plate.fromPrimitives({
    id: '27028ee8-dbe5-4e60-abf6-00491e06a4d3',
    name: 'Plate 1',
  }),
  Plate.fromPrimitives({
    id: '34c26f8b-5ce9-4a10-824b-99f3f2eac98d',
    name: 'Plate 2',
  }),
  Plate.fromPrimitives({
    id: 'af7eb5c9-6add-4a0a-a018-905118be5270',
    name: 'Plate 3',
  }),
  Plate.fromPrimitives({
    id: '009492fb-1f46-41ff-963d-fa58ebcfcb2d',
    name: 'Plate 4',
  }),
  Plate.fromPrimitives({
    id: '90cb35ec-e066-437a-99cc-c1cef6a34f12',
    name: 'Plate 5',
  }),
  Plate.fromPrimitives({
    id: '96f374df-d6da-4f44-a343-3f0651932f02',
    name: 'Plate 6',
  }),
]

export class FilePlateRepository implements PlateRepository {
  async getRandom(): Promise<Plate> {
    return mockPlates[this.randomIntFromInterval(0, mockPlates.length - 1)]
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
