import { Request, Response } from 'express';
import UserFacade from '../facade/user.facade';

class UserController {

    public async getUsers(req:Request, res:Response) {
        try {
            const userFacade = new UserFacade;
            const users = await userFacade.getUsers()
            res.status(200).send({users:users})
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }
};

const usersController = new UserController;
export default usersController;
