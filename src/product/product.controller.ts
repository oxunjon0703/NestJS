import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    try {
      return await this.productService.findAll();
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.productService.findOne(+id);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const checkName = await this.productService.findName(
        createProductDto.name,
      );

      if (checkName) {
        throw new Error('There is such a product');
      }
      return await this.productService.create(createProductDto);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const checkName = await this.productService.findName(
        updateProductDto.name,
      );

      if (checkName) {
        throw new Error('There is such a product');
      }
      return await this.productService.update(+id, updateProductDto);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.productService.remove(+id);
    } catch (error) {
      return `${error.message}`;
    }
  }
}
