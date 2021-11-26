import { Request, Response } from 'express';
import ProductFacade from '../facade/product.facade';

class ProductController {

    public async getProducts(req:Request, res:Response) {
        try {
            const productFacade = new ProductFacade
            const products = await productFacade.getProducts()
            res.status(200).send({products:products})
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }

};

const productController = new ProductController;
export default productController;
