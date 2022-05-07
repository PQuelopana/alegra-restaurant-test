import { serialize } from 'bson';
import fs from 'fs';
import { OrderPlateRepository } from '../../domain/OrderPlateRepository';
import { OrderPlate } from '../../domain/OrderPlate';

export class FileOrderPlateRepository implements OrderPlateRepository { // TODO: should create a FileRepository and extend from it? 
  private FILE_PATH = `${__dirname}/order-plate`;

  async save(orderPlate: OrderPlate): Promise<void> {
    fs.promises.writeFile(this.filePath(orderPlate.id.value), serialize(orderPlate));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
