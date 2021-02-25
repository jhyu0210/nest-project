import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { LoginDTO, RegisterDTO } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}
  async register(credentials: RegisterDTO) {
    try {
      const user = this.userRepo.create(credentials);
      await user.save();
      const payload = { username: user.username };
      const token = this.jwtService.sign(payload); //this returns jwt token???
      return { user: { ...user.toJSON(), token } };
    } catch (err) {
      if (err.code === '23535') {
        throw new ConflictException('Username has already been taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async Login({ email, passowrd }: LoginDTO) {
    try {
      const user = await this.userRepo.findOne({ where: { email } });
      const isValid = await user.comparePassword(passowrd); // userEntity function
      if (!isValid) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { username: user.username };
      const token = this.jwtService.sign(payload); //this returns jwt token???
      return { user: { ...user.toJSON(), token } };
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('invalid credentials');
      }
    }
  }
}