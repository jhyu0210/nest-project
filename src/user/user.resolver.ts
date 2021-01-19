import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { UserInput } from './inputs/user.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.createUser(input);
  }
  @Query(() => [UserDto])
  async findUsers() {
    return this.userService.findAllUsers();
  }
}
