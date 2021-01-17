// import { InputType, Field, Int } from 'type-graphql';

// @InputType()
// export class CatInput {
//   @Field()
//   readonly name: string;
//   @Field(() => Int)
//   readonly age: number;
//   @Field()
//   readonly breed: string;
// }

import { InputType, Field, Int } from 'type-graphql';

export class CatInput {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}