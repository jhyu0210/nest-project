import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LaunchResolver } from './launch.resolver';

import { LaunchService } from './launch.service';
import { MissionResolver } from './mission.resolver';
// import { CatsController } from './cat.controller';

@Module({
  imports: [HttpModule],
  controllers:[],
  providers: [LaunchService, LaunchResolver, MissionResolver],
})
export class LaunchModule {}