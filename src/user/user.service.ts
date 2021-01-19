import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { UserInput } from '../inputs/user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async createUser(createDto: UserInput): Promise<User>{
    const createdUser = new this.userModel(createDto);
    return await createdUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
