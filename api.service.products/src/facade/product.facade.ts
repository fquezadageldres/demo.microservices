import ProductProvider from '../providers/product.provider';
import connection from '../providers/connection';
import { ProductDto } from '../dto/product.dto'

export default class ProductFacade {
  protected productProvider?: ProductProvider;

  constructor(
    dataProductProvider: ProductProvider = null,
  ) {
    this.productProvider = dataProductProvider || new ProductProvider(connection);
  }

  public async getProducts() {
    return this.productProvider.getProducts();
  }

  public async createProduct(req:ProductDto) {
    return this.productProvider.createProduct(req);
  }
}