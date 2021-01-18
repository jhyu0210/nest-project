import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType() //object type!!!!
export class UserDto {
  @Field(()=>ID)
    id: string;
  @Field()
    email: string;
}