import { Request, Response } from 'express';
import UserProvider from '../providers/user.provider';

class UserController {

    public async getUsers(req:Request, res:Response) {
        try {
            const userProvider = new UserProvider
            const users = await userProvider.getUsers()
            res.status(200).send(users)
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }

};

const usersController = new UserController;
export default usersController;
