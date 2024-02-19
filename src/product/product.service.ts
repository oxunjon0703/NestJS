import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct: ProductEntity = new ProductEntity(createProductDto);

    return await this.productRepository.insert(newProduct);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: number) {
    const foundProduct = await this.productRepository.findOne(id);

    if (!foundProduct) {
      throw new Error(`Product ${id} not found`);
    }

    return foundProduct;
  }

  async findName(name: string) {
    return await this.productRepository.findName(name);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const newProduct: ProductEntity = new ProductEntity(updateProductDto);

    return await this.productRepository.update(id, newProduct);
  }

  async remove(id: number) {
    const foundProduct = await this.productRepository.findOne(id);

    if (!foundProduct) {
      throw new Error(`Product ${id} not found`);
    }

    return await this.productRepository.delete(id);
  }
}
