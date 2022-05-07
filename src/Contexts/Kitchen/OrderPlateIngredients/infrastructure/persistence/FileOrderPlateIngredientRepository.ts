import fs from 'fs';
import { serialize } from 'bson';
import { OrderPlateIngredient } from '../../domain/OrderPlateIngredient';
import { OrderPlateIngredientRepository } from '../../domain/OrderPlateIngredientRepository';

export class FileOrderPlateIngredientRepository implements OrderPlateIngredientRepository {
  private FILE_PATH = `${__dirname}/orderPlateIngredients`;

  async save(orderPlateIngredient: OrderPlateIngredient): Promise<void> {
    fs.promises.writeFile(this.filePath(orderPlateIngredient.id.value), serialize(orderPlateIngredient));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
