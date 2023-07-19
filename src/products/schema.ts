import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  imageUrl: string;

  @Prop()
  category: string;

  @Prop()
  tags: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now, update: Date.now })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
