import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  balance: number;
}
