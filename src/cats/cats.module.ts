import { Module } from '@nestjs/common';
// import { CatsResolver } from './cats.resolver';

import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cat.schema';
import { CatsService } from './cats.service';
import { CatsController } from './cat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name:Cat.name, schema: CatSchema }])],
  controllers:[CatsController],
  providers: [CatsService],
})
export class CatsModule {}
