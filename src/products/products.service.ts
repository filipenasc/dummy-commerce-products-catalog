import { Product } from '../graphql';

export class ProductsService {
  public findAll(): Product[] {
    return [
      {
        id: '123',
        sku: 'SKU',
        title: 'Product Title',
      },
    ];
  }
}
