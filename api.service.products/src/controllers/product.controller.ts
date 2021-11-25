import { Request, Response } from 'express';
import ProductProvider from '../providers/product.provider';

class ProductController {

    public async getProducts(req:Request, res:Response) {
        try {
            const productProvider = new ProductProvider
            const products = await productProvider.getProducts()
            res.status(200).send(products)
        } catch (error) {
            let err: Error = error as any
            res.status(400).send({ mesagge: err.message });
        }
    }

};

const productController = new ProductController;
export default productController;
