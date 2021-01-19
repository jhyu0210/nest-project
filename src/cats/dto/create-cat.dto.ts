import { ObjectType, Field, Int, ID, registerEnumType } from '@nestjs/graphql';

@ObjectType() // object type!!!!
export class CatDto {
  @Field(() => ID)
    id: string;
  @Field()
    name: string;
  @Field(() => Int)
    age: number;
  @Field()
    breed: string;

  @Field(type => CatColor, { nullable: true })
    mewColor: CatColor;
}

enum CatColor {
  RED,
  GREEN,
  BLUE,
}

registerEnumType(CatColor, {
  name: 'CatColor',
});

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
