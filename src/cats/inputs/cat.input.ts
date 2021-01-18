// import { Field, ObjectType,Int } from "@nestjs/graphql";

// @ObjectType()
// export class CatInput {
//   @Field()
//   readonly name: string;
//   @Field(() => Int)
//   readonly age: number;
//   @Field()
//   readonly breed: string;
// }

import { InputType,Field, Int} from '@nestjs/graphql';

@InputType() //input type!!!!
export class CatInput {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}