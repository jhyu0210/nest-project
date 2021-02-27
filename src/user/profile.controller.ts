import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('profiles')
export class ProfileController {
  constructor(private userService: UserService) {}

  @Get('/:username')
  findProfile(@Param('username') username: string) {
    console.log('profile username', username);
    return this.userService.findByUsername(username);
  }
}
