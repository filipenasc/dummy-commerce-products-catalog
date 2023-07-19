import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../graphql';
import { Product as ProductModel } from './schema';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create-product.dto';

export class ProductsService {
  constructor(
    @InjectModel(ProductModel.name) private productModel: Model<ProductModel>
  ) {}

  async create(createProductDTO: CreateProductDTO): Promise<ProductModel> {
    const createdProduct = new this.productModel(createProductDTO);
    return createdProduct.save();
  }

  public async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
