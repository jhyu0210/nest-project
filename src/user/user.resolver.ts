import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserDto } from "../dto/user.dto";
import { UserInput } from "../inputs/user.input";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
  constructor(private readonly userService:UserService){}

  @Mutation(()=>UserDto)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.createUser(input);
  }
}