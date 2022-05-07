import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { OrderGetter } from '../../../Contexts/Order/Orders/application/OrderGetter';
import { Controller } from './Controller';

export class OrderGetController implements Controller {
  constructor(private readonly getter: OrderGetter) {}

  async run(req: Request, res: Response) {
    const orders = await this.getter.run()

    res.status(httpStatus.OK).send(orders);
  }
}
