import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
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
