import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { hashed, compar } from 'src/lib/bcript';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async findLogin(login: string) {
    return await this.userRepository.findLogin(login);
  }

  async create(createUserDto: CreateUserDto) {
    const heshPassword = await hashed(createUserDto.password);

    createUserDto.password = heshPassword;

    const newuser: UserEntity = new UserEntity(createUserDto);

    return await this.userRepository.create(newuser);
  }

  async login(loginUserDto: LoginUserDto) {
    const login = await this.userRepository.findLogin(loginUserDto.login);

    if (!login) {
      throw new Error('login or password is incorrect');
    }

    const compare = await compar(loginUserDto.password, login.password);

    if (!compare) {
      throw new Error('login or password is incorrect');
    }

    return 'saccess';
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const heshPassword = await hashed(updateUserDto.password);

    updateUserDto.password = heshPassword;

    return await this.userRepository.update(id, updateUserDto);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }
}
