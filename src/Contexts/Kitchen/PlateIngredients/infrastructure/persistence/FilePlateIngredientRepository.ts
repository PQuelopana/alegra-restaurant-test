import { PlateId } from '../../../Shared/domain/Plates/PlateId';
import { Ingredient } from '../../../Ingredient/domain/Ingredient';
import { PlateIngredientRepository } from '../../domain/PlateIngredientRepository';
import { PlateIngredient } from '../../domain/PlateIngredient';
import { mockPlates } from '../../../Plate/infrastructure/persistence/FilePlateRepository';

export const mockIngredients = [
  Ingredient.fromPrimitives({
    id: 'fc7009df-6e60-479d-b353-f2fdd92c88ec',
    name: 'tomato',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: '63244f31-b6a5-493c-9a07-8a90a4180b1d',
    name: 'lemon',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: '5a4f7f88-5abb-42f7-915d-e9d37f7d378a',
    name: 'potato',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: '19bf1b4c-527c-4a7e-a5bb-bedd7cd23bf1',
    name: 'rice',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: 'c8927728-e674-4a63-bbb9-5f615acf8509',
    name: 'ketchup',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: 'd5bb122d-4525-4969-aa4d-ece482ebae68',
    name: 'lettuce',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: 'f887e2cc-7081-49f8-b174-0ac2b69e2e0d',
    name: 'onion',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: '1d561501-2994-4491-a56a-356a123927c9',
    name: 'cheese',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: '7bbc850f-d7b2-438c-a992-39f1e3a57d78',
    name: 'meat',
    stockPhysical: 5,
  }),
  Ingredient.fromPrimitives({
    id: 'fb72ec16-7442-4a0b-857f-1af719043510',
    name: 'chicken',
    stockPhysical: 5,
  })
]

const mockPlateIngredients = [
  PlateIngredient.fromPrimitives({
    id: 'afb319d2-b1f5-4322-ab40-0a1d4756b75c',
    plateId: mockPlates[0].id.value,
    ingredientId: mockIngredients[0].id.value,
    quantity: 2
  }),
  PlateIngredient.fromPrimitives({
    id: '13737381-72ff-479b-8f76-d4b3d967731a',
    plateId: mockPlates[0].id.value,
    ingredientId: mockIngredients[1].id.value,
    quantity: 1
  }),

  PlateIngredient.fromPrimitives({
    id: '9e042119-88d9-41dc-a9d9-a54b57ad4d7e',
    plateId: mockPlates[1].id.value,
    ingredientId: mockIngredients[2].id.value,
    quantity: 2
  }),
  PlateIngredient.fromPrimitives({
    id: 'a8c3c960-41f0-4365-a286-b97db2465637',
    plateId: mockPlates[1].id.value,
    ingredientId: mockIngredients[3].id.value,
    quantity: 1
  }),

  PlateIngredient.fromPrimitives({
    id: '142d76ca-f077-4b53-a44e-d75a67165f54',
    plateId: mockPlates[2].id.value,
    ingredientId: mockIngredients[4].id.value,
    quantity: 2
  }),
  PlateIngredient.fromPrimitives({
    id: 'a84f57f6-74a6-4689-a768-046ad8b882ea',
    plateId: mockPlates[2].id.value,
    ingredientId: mockIngredients[5].id.value,
    quantity: 1
  }),

  PlateIngredient.fromPrimitives({
    id: '34d38660-5a04-4fde-adef-14d85fd24926',
    plateId: mockPlates[3].id.value,
    ingredientId: mockIngredients[6].id.value,
    quantity: 2
  }),
  PlateIngredient.fromPrimitives({
    id: 'a5b9e686-3df0-41f8-beb5-cb0cc2746658',
    plateId: mockPlates[3].id.value,
    ingredientId: mockIngredients[7].id.value,
    quantity: 1
  }),

  PlateIngredient.fromPrimitives({
    id: '34f16d2b-a85b-4750-b567-1860a1753f88',
    plateId: mockPlates[4].id.value,
    ingredientId: mockIngredients[8].id.value,
    quantity: 2
  }),
  PlateIngredient.fromPrimitives({
    id: '7d2750f5-a26b-4564-94b2-ef9ba041a0e2',
    plateId: mockPlates[4].id.value,
    ingredientId: mockIngredients[9].id.value,
    quantity: 1
  }),

  PlateIngredient.fromPrimitives({
    id: 'a653b6e5-0d22-4dfd-aa8e-694bb4bf88ba',
    plateId: mockPlates[5].id.value,
    ingredientId: mockIngredients[0].id.value,
    quantity: 2
  }),
  PlateIngredient.fromPrimitives({
    id: '958cfad5-83fd-4137-9cb4-665dd21bc07e',
    plateId: mockPlates[5].id.value,
    ingredientId: mockIngredients[5].id.value,
    quantity: 1
  }),
]

export class FilePlateIngredientRepository implements PlateIngredientRepository {
  async getListByPlate(plateId: PlateId): Promise<PlateIngredient[]> {
    return mockPlateIngredients.filter((plateIngredient) => plateIngredient.plateId.value === plateId.value)
  }
}
