import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { UpdateUserDTO } from 'src/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard())
  findCurrentUser(@User() { username }: UserEntity) {
    // findCurrentUser(@User() username: string) {
    return this.userService.findByUsername(username);
  }

  @Put()
  @UseGuards(AuthGuard())
  async updateUser(
    @User() { username }: UserEntity,
    @Body(ValidationPipe) data: UpdateUserDTO,
  ) {
    const user = await this.userService.updateUser(username, data);
    if (!user) {
      throw new NotFoundException();
    }
    return { profile: user };
  }
}
