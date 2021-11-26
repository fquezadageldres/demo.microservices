import { Product } from '@prisma/client';
import { ProductDto } from '../dto/product.dto'
import { IConnection } from './connection';
 

export default class ProductProvider {
    constructor(private connection: IConnection) {}

    public async getProducts() {
        return this.connection.prisma.product.findMany()
    }

    public async createProduct(data:ProductDto | any): Promise<Product> {
        return this.connection.prisma.product.create({
            data
        })
    }
}