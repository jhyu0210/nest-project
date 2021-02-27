import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import {
  RegisterDTO,
  UpdateUserDTO,
  UserResponse,
} from 'src/models/user.model';
import { Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async findByUsername(username: string): Promise<UserEntity> {
    console.log('>>>usersService Email: ', username);

    const user = await this.userRepo.findOne({ where: { username } });
    console.log('>>> usersService: user', user);
    return user;
  }

  async updateUser(username: string, data: UpdateUserDTO) {
    await this.userRepo.update({ username }, data);
    console.log('>>> updateUser data :', data);
    return await this.findByUsername(username);
  }
}
