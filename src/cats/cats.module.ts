import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from '../cats/cats.resolver';
import { Cat, CatSchema } from './cat.schema';
import { CatsService } from './cats.service';
// import { CatsController } from './cat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name:Cat.name, schema: CatSchema }])],
  controllers:[ ],
  providers: [CatsService,CatsResolver],
})
export class CatsModule {}
