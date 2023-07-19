import { Resolver, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';

@Resolver('Products')
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query('allProducts')
  async allProducts() {
    return this.productsService.findAll();
  }
}
