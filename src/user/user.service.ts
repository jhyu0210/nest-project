import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { UserInput } from './inputs/user.input';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async createUser(createDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createDto);
    return await createdUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findUser(id) {
    return await this.userModel.findOne({_id: id});
  }

  async getUserByEmail(email): Promise<User> {
    return await this.userModel.findOne({email});
  }

  async createToken( {email}: User) {
    return await jwt.sign({email}, 'secret');
  }
  // deleteUser(){}
  // updateUser(){}
  // async create(createCatDto: CatInput): Promise<Cat> {
  //   const createdCat = new this.catModel(createCatDto);
  //   return await createdCat.save();
  // }
}
