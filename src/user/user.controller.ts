import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const checkLogin = await this.userService.findLogin(createUserDto.login);

      if (checkLogin) {
        throw new Error('Such a user exists');
      }
      return await this.userService.create(createUserDto);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    try {
      return await this.userService.login(loginUserDto);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.userService.findOne(+id);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const checkLogin = await this.userService.findLogin(updateUserDto.login);

      if (checkLogin) {
        throw new Error('Such a user exists');
      }
      return await this.userService.update(+id, updateUserDto);
    } catch (error) {
      return `${error.message}`;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.userService.delete(+id);
    } catch (error) {
      return `${error.message}`;
    }
  }
}
