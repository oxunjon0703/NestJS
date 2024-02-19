import { Postgres } from '../lib/pg';
import { UserEntity } from './entities/user.entity';

export class UserRepository extends Postgres {
  async findAll(): Promise<UserEntity[]> {
    return await this.fetchAll('select * from users');
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.fetch('select * from users where id = $1', id);
  }

  async findLogin(login: string): Promise<UserEntity> {
    return await this.fetch('select * from users where login = $1', login);
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    return await this.fetch<UserEntity>(
      'insert into users(login, password, balance) values ($1, $2, $3) returning *',
      entity.login,
      entity.password,
      entity.balance,
    );
  }

  async update(id: number, entity: UserEntity): Promise<UserEntity> {
    return await this.fetch<UserEntity>(
      `update users set login = $2, password = $3, balance = $4 where id = $1 returning *`,
      id,
      entity.login,
      entity.password,
      entity.balance,
    );
  }

  async delete(id: number): Promise<void> {
    return await this.fetch('delete from users where id = $1', id);
  }
}
