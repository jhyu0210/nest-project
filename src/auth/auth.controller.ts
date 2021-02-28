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
  async register(
    @Body(ValidationPipe) credentials: RegisterDTO,
  ): Promise<ResponseObject<'user', AuthResponse>> {
    const user = await this.authService.register(credentials);
    return { user };
  }

  @Post('/login')
  login(@Body(ValidationPipe) credentials: LoginDTO) {
    return this.authService.login(credentials);
  }
}
