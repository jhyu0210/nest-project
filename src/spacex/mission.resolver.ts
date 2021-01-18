import { Resolver,Args, ResolveField, Parent } from "@nestjs/graphql";
import {PatchSize} from '../graphql';


@Resolver('Mission') // name of type in launch.graphql
export class MissionResolver{
  @ResolveField()
  missionPatch(
    @Parent() mission,
    @Args('size') size: PatchSize){
      switch(size) {
        case PatchSize.SMALL:
          return mission.missionPatchSmall;
        case PatchSize.LARGE:
          return mission.missionPatchLarge;
        default:
          return null;
      }
    }
}