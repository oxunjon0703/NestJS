import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
