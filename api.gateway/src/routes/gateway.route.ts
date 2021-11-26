import { Router } from 'express';
import gatewayController from '../controllers/gateway.controller';

const routes:Router = Router();

routes.post('/create', gatewayController.create);

export default routes;
