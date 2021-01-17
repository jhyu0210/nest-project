import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class CatDto {
  @Field(()=>ID)
    id: string;
  @Field()
    name: string;
  @Field(() => Int)
    age: number;
  @Field()
    breed: string;
}
// import { Min } from 'class-validator';
// import { CreateCatInput } from '../../graphql';

// export class CatDto implements CreateCatInput {
//   @Min(1)
//   age: number;
// }

  
// export class CatDto {
//   readonly name: string;
//   readonly age: number;
//   readonly breed: string;
// }