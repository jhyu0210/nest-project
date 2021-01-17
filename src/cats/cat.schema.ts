import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}
console.log(`CAT.NAME::: ${Cat.name}`); // Cat
export const CatSchema = SchemaFactory.createForClass(Cat);