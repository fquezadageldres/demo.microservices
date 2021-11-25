import { Router } from 'express';
import userController from '../controllers/user.controller';

const routes:Router = Router();

routes.get('/users', userController.getUsers);

export default routes;
