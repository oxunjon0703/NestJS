import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  count: number;
}
