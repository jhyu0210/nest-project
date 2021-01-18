import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Cat } from './interfaces/cat.interface';
import { User, UserDocument } from './user.schema';
import { UserInput } from './inputs/User.input';
// import { UserDto } from './dto/create-User.dto';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}
  
  async createUser(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    await createdUser.save();
    return createdUser;
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  
  
  async findUser(email: string): Promise<User> {
    return await this.userModel.findOne({email}).exec();
  }
}