import { Query, Resolver,Args } from "@nestjs/graphql";
import { LaunchModel } from "./dto/launch.model";
import { LaunchService } from "./launch.service";


@Resolver('Launch') //name of type in launch.graphql 
export class LaunchResolver{
  constructor(
    private launchService: LaunchService,
  ){}
  @Query()
  launches(){
    return this.launchService.getAllLaunches();
  }

  @Query()
  launch(@Args('id') id: number){
    return this.launchService.getLaunchById(id)
  }
}