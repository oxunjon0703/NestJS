import { Injectable } from '@nestjs/common';
import { Postgres } from '../lib/pg';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductRepository extends Postgres {
  async findAll(): Promise<Array<ProductEntity>> {
    return await this.fetchAll<ProductEntity>(`select * from products`);
  }

  async findOne(id: number): Promise<ProductEntity> {
    return await this.fetch(`select * from products where id = $1`, id);
  }

  async findName(name: string): Promise<ProductEntity> {
    return await this.fetch(`select * from products where name = $1`, name);
  }

  async insert(entity: ProductEntity): Promise<ProductEntity> {
    return await this.fetch<ProductEntity>(
      'insert into products(name, price, count) values ($1, $2, $3) returning *',
      entity.name,
      entity.price,
      entity.count,
    );
  }

  async update(id: number, entity: ProductEntity): Promise<ProductEntity> {
    return await this.fetch(
      'update products set name = $2, price = $3, count = $4 where id = $1 returning *',
      id,
      entity.name,
      entity.price,
      entity.count,
    );
  }

  async delete(id: number): Promise<ProductEntity> {
    return await this.fetch(`delete from products where id = $1`, id);
  }
}
