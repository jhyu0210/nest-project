import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;
}
console.log(`User.NAME::: ${User.name}`); // User
export const UserSchema = SchemaFactory.createForClass(User);