import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Arg } from "type-graphql";
import { UserDto } from "./dto/user.dto";
import { UserInput } from "./inputs/User.input";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";


@Resolver('User')
export class UserResolver {
  constructor(private userService:UserService){}
  @Query(()=>String)
    helloUser(){
      return 'Hello';
    }
  // @Query()
  // async me()  {
  //     const result= await this.userService.getUserByEmail();
  //     console.log(result)
  //     return result;
  //   }
  @Query()
  async users()  {
      const result= await this.userService.findAllUsers();
      console.log(result)
      return result;
    }
  @Mutation()
  async login(@Args('input') input: UserInput) {
    let user = await this.userService.findUser(input.email);
    if(!user){
      user = await this.userService.createUser(user);
    }
    return user;
  }
}