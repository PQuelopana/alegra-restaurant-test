import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const orderPostController = container.get('Apps.order.controllers.OrderPostController');
  const orderGetController = container.get('Apps.order.controllers.OrderGetController');

  router.post('/orders', (req: Request, res: Response) => orderPostController.run(req, res));
  router.get('/orders', (req: Request, res: Response) => orderGetController.run(req, res));
};
