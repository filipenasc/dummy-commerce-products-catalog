export interface CreateProductDTO {
  sku: string;
  price: number;
  description: string;
  title: string;
  imageUrl: string;
  category: string;
  tags: string[];
}
