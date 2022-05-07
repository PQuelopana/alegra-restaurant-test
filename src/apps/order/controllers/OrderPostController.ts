import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { OrderCreator } from '../../../Contexts/Order/Orders/application/OrderCreator';
import { Controller } from './Controller';

export class OrderPostController implements Controller {
  constructor(private readonly creator: OrderCreator) {}

  async run(req: Request, res: Response) {
    await this.creator.run(req.body)

    res.status(httpStatus.CREATED).send();
  }
}
