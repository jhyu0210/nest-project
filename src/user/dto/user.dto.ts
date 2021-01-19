import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()

export class UserDto {
  @Field(() => ID,{nullable:true})
  id?: string;
  @Field()
  email: string;
  @Field(type => String, {nullable: true})
  username?: string;
}
