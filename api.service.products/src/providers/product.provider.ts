import { Product, PrismaClient } from '@prisma/client';
import { ProductDto } from '../dto/product.dto'
 

export default class ProductProvider {
    constructor(private prisma = new PrismaClient()) {}

    public async getProducts() {
        return this.prisma.product.findMany()
    }

    public async createProduct(data:ProductDto): Promise<Product> {
        return this.prisma.product.create({
            data
        })
    }
}