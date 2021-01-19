import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()

export class UserDto {
  @Field(() => ID)
  id: string;
  @Field()
  email: string;
  @Field(type => String, {nullable: true})
  username?: string;
}
