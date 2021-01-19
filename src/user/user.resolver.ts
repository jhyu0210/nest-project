import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { AuthGuard } from './auth.guard';
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
  @Query(() => UserDto,{nullable:true})
  @UseGuards(new AuthGuard())
    me(@Context('user') user: UserDto) {
      console.log('>>>user::',user);
    return user;
  }
  @Query(() => UserDto)
  async findUser(@Args('id') id: string ) {
    return this.userService.findUser(id);
  }

  @Mutation(() => String)
  async login(@Args('input') input: UserInput) {
    let user = await this.userService.getUserByEmail(input.email);
    if ( !user ) {
      user = await this.userService.createUser(input);
    }
    return this.userService.createToken( user);
  }
}
