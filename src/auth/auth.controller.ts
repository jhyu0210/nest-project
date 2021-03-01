import {
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ResponseObject } from 'src/models/response.model';
import { AuthResponse, LoginDTO, RegisterDTO } from 'src/models/user.model';
import { AuthService } from './auth.service';
// import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from './local-auth-guard';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async register(@Body(ValidationPipe) credentials: { user: RegisterDTO }) {
    const user = await this.authService.register(credentials.user);
    return { user };
  }

  @Post('/login')
  async login(@Body(ValidationPipe) credentials: { user: LoginDTO }) {
    console.log('>>> Login User ::', credentials);
    const user = await this.authService.login(credentials.user);
    return { user };
  }
}
