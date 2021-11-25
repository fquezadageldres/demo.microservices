import { Request, Response } from 'express';
declare class UserController {
    getUsers(req: Request, res: Response): Promise<void>;
}
declare const usersController: UserController;
export default usersController;
