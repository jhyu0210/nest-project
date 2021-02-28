import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import {
  ProfileResponse,
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
  private;
  async findByUsername(
    username: string,
    user?: UserEntity,
  ): Promise<ProfileResponse> {
    console.log('>>>usersService Email: ', username);

    return await (
      await this.userRepo.findOne({
        where: { username },
        relations: ['followers'],
      })
    ).toProfile(user);
  }

  // async updateUser(username: string, data: UpdateUserDTO) {
  //   await this.userRepo.update({ username }, data);
  //   console.log('>>> updateUser data :', data);
  //   return await this.findByUsername(username);
  // } ===> move to authService
  async followUser(currentUser: UserEntity, username: string) {
    const user = await this.userRepo.findOne({
      where: { username },
      relations: ['followers'],
    });
    user.followers.push(currentUser);
    user.save();
    return user.toProfile(currentUser);
  }
  async unfollowUser(currentUser: UserEntity, username: string) {
    const user = await this.userRepo.findOne({
      where: { username },
      relations: ['followers'],
    });
    user.followers = user.followers.filter(
      (follower) => follower !== currentUser,
    );
    await user.save();
    return user.toProfile(currentUser);
  }
}
