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
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { UpdateUserDTO } from 'src/models/user.model';
// import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    // private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  async findCurrentUser(@User() { username }: UserEntity) {
    // findCurrentUser(@User() username: string) {
    const user = await this.authService.findCurrentUser(username);
    return { user };
  }

  @Put()
  @UseGuards(AuthGuard())
  async update(
    @User() { username }: UserEntity,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    data: UpdateUserDTO,
  ) {
    const user = await this.authService.updateUser(username, data);
    if (!user) {
      throw new NotFoundException();
    }
    return { user };
  }
}
