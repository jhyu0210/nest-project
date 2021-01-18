import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './user.schema';

import { UserService } from './user.service';
// import { CatsController } from './cat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name:User.name, schema: UserSchema }])],
  controllers:[ ],
  providers: [UserService, UserResolver],
})
export class UserModule {}
