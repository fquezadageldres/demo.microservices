import { Router } from 'express';
import productController from '../controllers/product.controller';

const routes:Router = Router();

routes.get('/products', productController.getProducts);

export default routes;
