import { Request, Response } from 'express';
import ApiServiceProvider from '../providers/gateway.provider';

class GatewayController {

    public async create(req:Request, res:Response) {
        try {
            const apiServiceProvider = new ApiServiceProvider
            const product = await apiServiceProvider.create(req.body)
            res.status(200).send(product)
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }
};

const gatewayController = new GatewayController;
export default gatewayController;
