import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Resolver('Products')
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Mutation()
  async createProduct(@Args('input') input: CreateProductDTO) {
    return this.productsService.create(input);
  }

  @Query('allProducts')
  async allProducts() {
    return this.productsService.findAll();
  }
}
