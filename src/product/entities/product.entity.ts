import { CreateProductDto } from '../dto/create-product.dto';

export class ProductEntity {
  name: string;
  price: number;
  count: number;
  constructor(dto: CreateProductDto) {
    this.name = dto.name;
    this.price = dto.price;
    this.count = dto.count;
  }
}
