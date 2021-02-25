import { Body, Controller, Post } from '@nestjs/common';
import { ResponseObject } from 'src/models/response.model';
import { AuthResponse, RegisterDTO } from 'src/models/user.model';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async retister(
    @Body() credentials: RegisterDTO,
  ): Promise<ResponseObject<'user', AuthResponse>> {
    const user = await this.authService.register(credentials);
    return { user };
  }
}
