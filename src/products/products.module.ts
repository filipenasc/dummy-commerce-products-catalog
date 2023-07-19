import { Module } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { ProductsResolver } from './products.resolver';
import { Product, ProductSchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
