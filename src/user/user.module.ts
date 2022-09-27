import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';

@Module({
  controllers: [UserController],
  providers: [userProvider]
})
export class UserModule {}
