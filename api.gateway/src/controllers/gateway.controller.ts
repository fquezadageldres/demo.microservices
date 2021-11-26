import { Request, Response } from 'express';
import ApiServiceProvider from '../providers/gateway.provider';

class GatewayController {

    public async create(req:Request, res:Response) {
        try {
            console.log(req.body)
            const apiServiceProvider = new ApiServiceProvider
            const elem = await apiServiceProvider.create(req.body)
            res.status(200).send(elem)
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }
};

const gatewayController = new GatewayController;
export default gatewayController;
