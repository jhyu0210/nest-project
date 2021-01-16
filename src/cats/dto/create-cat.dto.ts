import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}

  
// export class CreateCatDto {
//   readonly name: string;
//   readonly age: number;
//   readonly breed: string;
// }