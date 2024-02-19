import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
